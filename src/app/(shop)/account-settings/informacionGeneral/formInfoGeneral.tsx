"use client";
import React, { useState } from 'react'
import { infoGeneralSchema } from '@/validations/infoGeneralSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Box, FormLabel, Grid2, IconButton, InputAdornment, OutlinedInput, TextField } from '@mui/material';
import { useForm } from 'react-hook-form';

type Inputs = {
    name: string;
    email: string;
    password: string;
    passwordConfirm: string;
};

type FormInfoGeneralProps = {
    register: ReturnType<typeof useForm>['register'];
    errors: ReturnType<typeof useForm>['formState']['errors'];
};

export const FormInfoGeneral = ({ register, errors }: FormInfoGeneralProps) => {
    // const { register, handleSubmit, formState: { errors }, watch } = useForm<Inputs>({
    //     resolver: zodResolver(infoGeneralSchema),
    //     mode: 'onChange', // Cambia el modo para validar en tiempo real
    // });

    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const handleMouseUpPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    // const onSubmit = (data: Inputs) => {
    //     console.log(data);
    //     // setPreferences(true);
    // };

    return (
        // <Box component="form" onSubmit={handleSubmit(onSubmit)}>
        // <Box>
        <Grid2 container columnSpacing="13px" rowSpacing="13px">
            <Grid2 size={{ xs: 12, sm: 12, md: 6, lg: 6 }} sx={{ width: "100%" }}>
                <div className='flex flex-col'>
                    <FormLabel htmlFor="name"
                        className='mb-e8 font-semibold text-black text-fs18 sm:text-fs18 md:text-fs24 lg:text-fs24'
                    >
                        Nombre
                    </FormLabel>
                    <TextField
                        id="name"
                        error={!!errors.name}
                        placeholder="Ingrese su nombre"
                        fullWidth
                        {...register('name')}
                    />
                    {errors.name?.message && <p className="text-red-500">{errors.name.message.toString()}</p>}
                </div>
            </Grid2>
            <Grid2 size={{ xs: 12, sm: 12, md: 6, lg: 6 }} sx={{ width: "100%" }}>
                <div className='flex flex-col'>
                    <FormLabel htmlFor="email"
                        className='mb-e8 font-semibold text-black text-fs18 sm:text-fs18 md:text-fs24 lg:text-fs24'
                    >
                        Correo electrónico
                    </FormLabel>
                    <TextField
                        id="email"
                        error={!!errors.email}
                        placeholder="Ingrese su correo electrónico"
                        fullWidth
                        {...register('email')}
                    />
                    {errors.email?.message && <p className="text-red-500">{errors.email.message.toString()}</p>}
                </div>
            </Grid2>
            <Grid2 size={{ xs: 12, sm: 12, md: 6, lg: 6 }} sx={{ width: "100%" }}>
                <div className='flex flex-col'>
                    <FormLabel htmlFor="password"
                        className='mb-e8 font-semibold text-black text-fs18 sm:text-fs18 md:text-fs24 lg:text-fs24'
                    >
                        Contraseña
                    </FormLabel>
                    <OutlinedInput
                        id="password"
                        error={!!errors.password}
                        type={showPassword ? 'text' : 'password'}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    onMouseUp={handleMouseUpPassword}
                                    edge="end"
                                >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                        fullWidth
                        {...register('password')}
                    />
                    {errors.password?.message && <p className="text-red-500">{errors.password.message.toString()}</p>}
                </div>
            </Grid2>

            <Grid2 size={{ xs: 12, sm: 12, md: 6, lg: 6 }} sx={{ width: "100%" }}>
                <div className='flex flex-col'>
                    <FormLabel htmlFor="newPassword"
                        className='mb-e8 font-semibold text-black text-fs18 sm:text-fs18 md:text-fs24 lg:text-fs24'
                    >
                        Nueva contraseña
                    </FormLabel>
                    <OutlinedInput
                        id="newPassword"
                        error={!!errors.newPassword}
                        type={showPassword ? 'text' : 'password'}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    onMouseUp={handleMouseUpPassword}
                                    edge="end"
                                >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                        fullWidth
                        {...register('newPassword')}
                    />
                    {errors.newPassword?.message && <p className="text-red-500">{errors.newPassword.message.toString()}</p>}
                </div>
            </Grid2>
        </Grid2>

        // </Box>
    )
}