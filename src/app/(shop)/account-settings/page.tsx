"use client";
import { Box, Button, Grid2, Typography } from '@mui/material';
import React, { useState } from 'react';
import { FormInfoGeneral } from './informacionGeneral/formInfoGeneral';
import BlindIcon from '@mui/icons-material/Blind';
import { ListaPreferencias } from '@/app/components';
import { useForm } from 'react-hook-form';
import { infoGeneralSchema } from '@/validations/infoGeneralSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { FotoPerfil } from './informacionGeneral/fotoPerfil';

type Inputs = {
    name: string;
    email: string;
    password: string;
    newPassword: string;
    preferenciasDueño: string[];
    preferenciasMascotas: string[];
};

const preferenciasDueños = [
    {
        id: 1,
        name: "Paseos",
        icon: <BlindIcon className='text-secondary' />
    },
    {
        id: 2,
        name: "Adopciones",
        icon: <BlindIcon className='text-secondary' />
    },
    {
        id: 3,
        name: "Adiestramiento",
        icon: <BlindIcon className='text-secondary' />
    },
    {
        id: 4,
        name: "Entrenamiento",
        icon: <BlindIcon className='text-secondary' />
    },
    {
        id: 5,
        name: "Tiendas Afiliadas",
        icon: <BlindIcon className='text-secondary' />
    },
    {
        id: 6,
        name: "Lugares Pet Friendly",
        icon: <BlindIcon className='text-secondary' />
    },
];

const preferenciasMascotas = [
    {
        id: 1,
        name: "Salud",
        icon: <BlindIcon className='text-secondary' />
    },
    {
        id: 2,
        name: "Peluquería",
        icon: <BlindIcon className='text-secondary' />
    },
    {
        id: 3,
        name: "Nutrición",
        icon: <BlindIcon className='text-secondary' />
    },
    {
        id: 4,
        name: "Vida Saludable",
        icon: <BlindIcon className='text-secondary' />
    },
    {
        id: 5,
        name: "Servicios de Transporte",
        icon: <BlindIcon className='text-secondary' />
    },
    {
        id: 6,
        name: "Guardería y Cuidado",
        icon: <BlindIcon className='text-secondary' />
    },
];

export default function ConfiguracionCuenta() {
    const { register, handleSubmit, setValue, getValues, formState: { errors } } = useForm<Inputs>({
        resolver: zodResolver(infoGeneralSchema),
        mode: 'onChange', // Cambia el modo para validar en tiempo real
    });

    const onSubmit = (data: Inputs) => {
        console.log(data);
        // setPreferences(true);
    };

    return (
        <Box component="form" onSubmit={handleSubmit(onSubmit)}>
            <div className='my-e34 flex justify-center w-full'>
                <Grid2 container columnSpacing="13px" sx={{ width: "95%" }}>
                    <Grid2 size={{ xs: 12, sm: 5, md: 4, lg: 4 }} sx={{ width: "100%" }}>
                        <FotoPerfil />
                    </Grid2>
                    <Grid2 size={{ xs: 12, sm: 7, md: 8, lg: 8 }} sx={{ width: "100%" }}>
                        <Typography
                            sx={{
                                fontSize: { xs: "24px", sm: "24px", md: '36px' },
                                fontWeight: 'semi-bold',
                            }}
                            className='text-primary font-semibold mb-e13 text-center sm:text-center md:text-left lg:text-left'
                        >
                            Gestionar la información de tu cuenta
                        </Typography>
                        <FormInfoGeneral register={register} errors={errors} />
                        <h2 className="font-semibold my-[21px] text-fs18 sm:text-fs18 md:text-fs24 lg:text-fs24">
                            Para ti como dueño de mascotas:
                        </h2>
                        <ListaPreferencias
                            opciones={preferenciasDueños}
                        />
                        <h2 className="font-semibold my-[21px] text-fs18 sm:text-fs18 md:text-fs24 lg:text-fs24">
                            Para tus mascotas:
                        </h2>
                        <ListaPreferencias
                            opciones={preferenciasMascotas}
                        />
                        <Box className="mt-e55 button-is md:space-x-e144 space-y-e21 md:space-y-0 flex flex-col md:flex-row justify-center">
                            <Button
                                variant="contained"
                                color="primary"
                                className="h-e34 bg-primary text-white rounded-[20px] normal-case text-fs18 sm:text-fs18 md:text-fs24 lg:text-fs24"
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
                    </Grid2>
                </Grid2>
            </div>
        </Box>
    )
}
