import React, { useRef, useState } from 'react'
import { Box, Button, Dialog, DialogContent, DialogTitle, FormControl, FormLabel, Grid2, InputLabel, MenuItem, Select, SelectChangeEvent, TextField } from '@mui/material'
import { GoogleMap, LoadScript, Marker, Autocomplete } from '@react-google-maps/api';

interface RegistroDireccionProps {
    open: boolean;
    setOpen: (open: boolean) => void;
}

export const RegistroDireccion: React.FC<RegistroDireccionProps> = ({ open, setOpen }) => {
    const [map, setMap] = useState<google.maps.Map | null>(null);
    const [markerPosition, setMarkerPosition] = useState<google.maps.LatLngLiteral | null>(null);
    const [address, setAddress] = useState<string>('');
    const autocompleteRef = useRef<google.maps.places.Autocomplete | null>(null);
    const [zona, setZona] = useState<string>("");
    // const [center, setCenter] = useState({ lat: -0.1807, lng: -78.4678 });

    const API_KEY = 'AIzaSyDjhLU-SnEhN6VVhtCaZ68eToKmF1S5bAY'; // Reemplaza con tu API Key

    // Configuración del mapa
    const mapContainerStyle = { width: '100%', height: '500px' };

    const center = { lat: -0.1807, lng: -78.4678 }; // Coordenadas iniciales (Quito, Ecuador)

    // Maneja el evento de selección de una opción en Autocomplete
    const onPlaceChanged = () => {
        if (autocompleteRef.current) {
            const place = autocompleteRef.current.getPlace();
            if (place.geometry && place.geometry.location) {
                const location = place.geometry.location;
                const newPosition = { lat: location.lat(), lng: location.lng() };
                setMarkerPosition(newPosition);
                setAddress(place.formatted_address || 'Dirección no disponible');
                // setCenter(newPosition);
                if (map) {
                    map.panTo(newPosition);
                }
            }
        }
    };

    // Maneja el evento de arrastrar el marcador
    const onMarkerDragEnd = async (e: google.maps.MapMouseEvent) => {
        if (e.latLng) {
            const lat = e.latLng.lat();
            const lng = e.latLng.lng();
            const geocoder = new google.maps.Geocoder();

            geocoder.geocode({ location: { lat, lng } }, (results, status) => {
                if (status === 'OK' && results[0]) {
                    setAddress(results[0].formatted_address || 'Dirección no disponible');
                } else {
                    setAddress('No se pudo obtener la dirección');
                }
            });

            setMarkerPosition({ lat, lng });
        }
    };
    const handleClose = () => {
        setOpen(false);
    };

    const handleZonaChange = (event: SelectChangeEvent<string>) => {
        setZona(event.target.value);
    };

    return (
        <>
            <h1
                className='mb-e13 text-center font-semibold text-fs24 sm:text-fs24 md:text-fs36 lg:text-fs36'
            >
                Direcciones para entregas
            </h1>
            <div className='w-full'>
                {/* <Box component="form" onSubmit={handleSubmit(onSubmit)}> */}
                <Box component="form">
                    <Grid2 container columnSpacing="13px" rowSpacing="13px">
                        <Grid2 size={{ xs: 12, sm: 12, md: 6, lg: 6 }} sx={{ width: "100%" }}>
                            <FormLabel htmlFor="nombreDireccion"
                                className='mb-e8 font-semibold text-black text-fs18 sm:text-fs18 md:text-fs24 lg:text-fs24'
                            >
                                Zona
                            </FormLabel>
                            <FormControl
                                variant="outlined"
                                size='small'
                                sx={{
                                    minWidth: 200,
                                    maxWidth: "100%",
                                    borderRadius: "16px",
                                }}
                                fullWidth
                            >
                                <InputLabel>Selecione ...</InputLabel>
                                <Select
                                    value={zona}
                                    onChange={handleZonaChange}
                                    label="Zona"
                                    size='small'
                                >
                                    <MenuItem value="Norte">Norte de Quito</MenuItem>
                                    <MenuItem value="Centro">Centro de Quito</MenuItem>
                                    <MenuItem value="Sur">Sur de Quito</MenuItem>
                                    <MenuItem value="ValleTumbaco">Valle de Tumbaco</MenuItem>
                                    <MenuItem value="ValleChillos">Valle de los Chillos</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid2>
                        <Grid2 size={{ xs: 12, sm: 12, md: 6, lg: 6 }} sx={{ width: "100%" }}>
                            <FormLabel htmlFor="nombreDireccion"
                                className='mb-e8 font-semibold text-black text-fs18 sm:text-fs18 md:text-fs24 lg:text-fs24'
                            >
                                Nombre
                            </FormLabel>
                            <TextField
                                size='small'
                                id="nombreDireccion"
                                placeholder="Trabajo, casa, etc."
                                fullWidth
                            />
                        </Grid2>
                    </Grid2>
                </Box>

                <Box className="mt-e55 button-is md:space-x-e144 space-y-e21 md:space-y-0 flex flex-col md:flex-row justify-center">
                    <Button
                        variant="contained"
                        color="primary"
                        className="h-e34 bg-primary text-white rounded-[20px] normal-case text-fs18 sm:text-fs18 md:text-fs24 lg:text-fs24"
                        onClick={handleClose}
                    >
                        Cancelar
                    </Button>

                    <Button
                        variant="contained"
                        color="primary"
                        type="submit"
                        className="h-e34 bg-primary text-white rounded-[20px] normal-case text-fs18 sm:text-fs18 md:text-fs24 lg:text-fs24"
                    >
                        Continuar
                    </Button>
                </Box>

                <LoadScript googleMapsApiKey={API_KEY} libraries={['places']}>
                    {/* <div style={{ marginBottom: '10px', zIndex: 1000, position: 'absolute', left: '50%', transform: 'translateX(-50%)', alignItems: 'center', justifyItems: 'center' }}> */}
                    <div className="mt-e13 mb-2.5 z-50 absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center w-[90%] md:w-[30%]">
                        <Autocomplete
                            onLoad={(autocomplete) => (autocompleteRef.current = autocomplete)}
                            onPlaceChanged={onPlaceChanged}
                            className='w-full'
                        >
                            <input
                                type="text"
                                placeholder="Buscar ubicación"
                                className="w-full h-10 px-e13 border border-primary rounded-b15"
                            />
                        </Autocomplete>
                    </div>
                    <GoogleMap
                        mapContainerStyle={mapContainerStyle}
                        center={center}
                        zoom={14}
                        onLoad={(mapInstance) => setMap(mapInstance)}
                        options={{ disableDefaultUI: true }}

                    >
                        {markerPosition && (
                            <Marker
                                position={markerPosition}
                                draggable={true}
                                onDragEnd={onMarkerDragEnd}
                            />
                        )}
                    </GoogleMap>
                    <p>Dirección seleccionada: {address}</p>
                </LoadScript>
            </div>
        </>
    )
}
