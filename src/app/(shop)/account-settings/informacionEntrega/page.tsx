"use client";
import React, { useRef, useState } from 'react'
import { Button, FormControl, FormLabel, Grid2, InputLabel, MenuItem, Select, SelectChangeEvent, TextField } from '@mui/material'
import ClearIcon from '@mui/icons-material/Clear';
import SaveIcon from '@mui/icons-material/Save';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import { TarjetaDireccion } from './tarjetaDireccion';
import { RegistroDireccion } from './registroDireccion';

export default function InformacionEntrega() {
    const [zona, setZona] = useState<string>("");
    const [open, setOpen] = useState(false);

    const handleZonaChange = (event: SelectChangeEvent<string>) => {
        setZona(event.target.value);
    };

    const handleAddressDialog = () => {
        setOpen(true);
    };

    return (
        <>
            <div className='my-e34 flex justify-center w-full'>
                <div className='w-[80%] sm:w-[60%]'>
                    <h1
                        className='mb-e13 text-center font-semibold text-fs24 sm:text-fs24 md:text-fs36 lg:text-fs36'
                    >
                        Número de contacto
                    </h1>
                    <div>
                        <Grid2 container columnSpacing="13px" rowSpacing="13px">
                            <Grid2 size={{ xs: 12, sm: 12, md: 6, lg: 6 }} sx={{ width: "100%" }}>
                                <FormLabel htmlFor="numeroContacto"
                                    className='mb-e8 font-semibold text-black text-fs18 sm:text-fs18 md:text-fs24 lg:text-fs24'
                                >
                                    Celular / Whatsapp
                                </FormLabel>
                                <TextField
                                    size='small'
                                    id="numeroContacto"
                                    placeholder="0999999999"
                                    fullWidth
                                />
                            </Grid2>
                            <Grid2 size={{ xs: 12, sm: 12, md: 6, lg: 6 }}
                                sx={{
                                    width: "100%",
                                    display: 'flex',
                                    justifyContent: { xs: "space-between", sm: "center", md: "end" },
                                    gap: "21px",
                                    alignItems: "end",
                                }}
                            >
                                <Button variant="outlined" startIcon={<ClearIcon />}
                                    className="bg-primary text-white h-full lg:h-[50%] rounded-b20 normal-case text-fs18 sm:text-fs18 md:text-fs24 lg:text-fs24"
                                >
                                    Cancelar
                                </Button>
                                <Button variant="contained" startIcon={<SaveIcon />}
                                    className="bg-primary text-white h-full lg:h-[50%] rounded-b20 normal-case text-fs18 sm:text-fs18 md:text-fs24 lg:text-fs24"
                                >
                                    Guardar
                                </Button>
                            </Grid2>
                        </Grid2>
                    </div>
                    <div className='mt-e21'>
                        {
                            open ?
                            (
                                <RegistroDireccion open={open} setOpen={setOpen} />
                            ) :
                            (
                            <>
                                <h1
                                    className='mb-e13 text-center font-semibold text-fs24 sm:text-fs24 md:text-fs36 lg:text-fs36'
                                >
                                    Direcciones para entregas
                                </h1>
                                <div className='w-full'>
                                    <Grid2 container columnSpacing="13px" rowSpacing="13px">
                                        <Grid2 size={{ xs: 12, sm: 12, md: 6, lg: 6 }} sx={{ width: "100%" }}>
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
                                                <InputLabel>Zona</InputLabel>
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
                                        <Grid2 size={{ xs: 12, sm: 12, md: 6, lg: 6 }}
                                            sx={{
                                                width: "100%",
                                                display: "flex",
                                                justifyContent: { xs: "center", sm: "center", md: "end" },
                                                margin: 0,
                                                padding: 0,
                                            }}
                                        >
                                            <Button variant="contained" startIcon={<AddLocationAltIcon />}
                                                className="bg-secondary text-white h-full sm:h-[74%] rounded-b20 normal-case text-fs18 sm:text-fs18 md:text-fs24 lg:text-fs24"
                                                onClick={handleAddressDialog}
                                            >
                                                Nueva
                                            </Button>
                                        </Grid2>
                                    </Grid2>
                                </div>
                                <div className='mt-e21'>
                                    <TarjetaDireccion />
                                </div>
                            </>
                            )
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
