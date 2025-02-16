"use client";
import React from 'react'
import { Button, FormControl, FormLabel, Grid2, InputLabel, MenuItem, Select, SelectChangeEvent, TextField } from '@mui/material'
import ClearIcon from '@mui/icons-material/Clear';
import SaveIcon from '@mui/icons-material/Save';

export default function InformacionEntrega() {
    const [zona, setZona] = React.useState<string>("");

    const handleZonaChange = (event: SelectChangeEvent<string>) => {
        setZona(event.target.value);
    };

    return (
        <div className='my-e34 flex justify-center w-full'>
            <div className='w-[80%] sm:w-[60%]'>
                <h1
                    className='mb-e13 text-center font-semibold text-fs24 sm:text-fs24 md:text-fs36 lg:text-fs36'
                >
                    Número de contacto
                </h1>
                <div>
                    <Grid2 container columnSpacing="13px">
                        <Grid2 size={{ xs: 12, sm: 12, md: 6, lg: 6 }} sx={{ width: "100%" }}>
                            <FormLabel htmlFor="numeroContacto"
                                className='mb-e8 font-semibold text-black text-fs18 sm:text-fs18 md:text-fs24 lg:text-fs24'
                            >
                                Celular / Whatsapp
                            </FormLabel>
                            <TextField
                                id="numeroContacto"
                                placeholder="0999999999"
                                fullWidth
                            />
                        </Grid2>
                        <Grid2 size={{ xs: 12, sm: 12, md: 6, lg: 6 }}
                            sx={{ width: "100%", display: 'flex', justifyContent: { sm: "center", md: "end" }, gap: "21px" }}
                        >
                            <Button size='large' variant="outlined" startIcon={<ClearIcon />}
                                className="mt-e34 bg-primary text-white rounded-b20 normal-case text-fs18 sm:text-fs18 md:text-fs24 lg:text-fs24"
                            >
                                Cancelar
                            </Button>
                            <Button size='large' variant="contained" startIcon={<SaveIcon />}
                                className="mt-e34 bg-primary text-white rounded-b20 normal-case text-fs18 sm:text-fs18 md:text-fs24 lg:text-fs24"
                            >
                                Guardar
                            </Button>
                        </Grid2>
                    </Grid2>
                </div>
                <div className='mt-e21'>
                    <h1
                        className='mb-e13 text-center font-semibold text-fs24 sm:text-fs24 md:text-fs36 lg:text-fs36'
                    >
                        Direcciones para entregas
                    </h1>
                    <div className='w-full'>
                        <Grid2 container columnSpacing="13px">
                            <Grid2 size={{ xs: 12, sm: 12, md: 6, lg: 6 }} sx={{ width: "100%" }}>
                                <FormControl
                                    variant="outlined"
                                    sx={{
                                        minWidth: 200,
                                        maxWidth: "100%",
                                        borderRadius: "16px",
                                    }}
                                    fullWidth
                                >
                                    <InputLabel>Zona</InputLabel>
                                    <Select
                                        value={zona}
                                        onChange={handleZonaChange}
                                        label="Zona"
                                        size='medium'
                                        // fullWidth
                                    >
                                        <MenuItem value="Norte">Norte de Quito</MenuItem>
                                        <MenuItem value="Centro">Centro de Quito</MenuItem>
                                        <MenuItem value="Sur">Sur de Quito</MenuItem>
                                        <MenuItem value="ValleTumbaco">Valle de Tumbaco</MenuItem>
                                        <MenuItem value="ValleChillos">Valle de los Chillos</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid2>
                            <Grid2 size={{ xs: 12, sm: 12, md: 6, lg: 6 }}>
                                <Button size='large' variant="contained" startIcon={<SaveIcon />}
                                    className="bg-secondary text-white rounded-b20 normal-case text-fs18 sm:text-fs18 md:text-fs24 lg:text-fs24"
                                >
                                    Nueva
                                </Button>
                            </Grid2>
                        </Grid2>
                    </div>
                </div>
            </div>
        </div>
    )
}
