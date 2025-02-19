'use client';

import HttpService from '@/config/services/httpsService';
import { loginSchema } from '@/validations/loginSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Box, Button, FormLabel, IconButton, InputAdornment, OutlinedInput, TextField, Typography } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';

type Inputs = {
    email: string;
    password: string;
}

export const LoginForm = () => {
    const [notification, setNotification] = useState<{
        open: boolean;
        message: string;
        type: 'success' | 'error' | 'info' | 'warning';
    }>({ open: false, message: '', type: 'info' });

    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>({
        resolver: zodResolver(loginSchema),
        mode: 'onChange',
    });

    const [showPassword, setShowPassword] = useState(false);
    const router = useRouter()

    const handleClickShowPassword: () => void = () => setShowPassword((show) => !show);

    const onSubmit = async (data: Inputs) => {
        try {
            const response = await HttpService.post(`auth/login-pet-owner`,
                data,
                {
                    headers: {
                        'Content-Type': 'application/json',
                    }
                }
            )

            if (response.status === 200 || response.status === 201) {
                setNotification({
                    open: true,
                    message: 'Inicio de sesión exitoso',  
                    type: 'success',
                });
            }

            const expirationTime = new Date(new Date().getTime() + 3600 * 1000);
            document.cookie = `auth_cookie=${response.data.token}; expires=${expirationTime.toUTCString()}; path=/`;
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('user_id', response.data.id);
            localStorage.setItem('petowner_id', response.data.idEntrepreneur);
            router.push('/');
        } catch (error: any) {
            if (error.response) {
                const errorMessage = error.response.data.message;
                setNotification({
                    open: true,
                    message: errorMessage.includes("Estado de la cuenta") ? errorMessage : "Credenciales incorrectas",
                    type: error.response.status === 403 ? 'warning' : 'error',
                });
            } else {
                setNotification({
                    open: true,
                    message: 'Error al conectar con el servidor',
                    type: 'error',
                });
            }
        }
    };

    return (
        <Box component="form" onSubmit={handleSubmit(onSubmit)}
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                width: '100%',
                marginBottom: '21px',
            }}
        >
            <FormLabel htmlFor="email"
                sx={{
                    color: 'black',
                    textAlign: 'left',
                    fontSize: '18px',
                    fontWeight: 'bold',
                    marginBottom: '10px',
                }}
            >
                Correo electrónico
            </FormLabel>
            <TextField
                id="email"
                error={!!errors.email}
                placeholder="Ingrese su correo electrónico"
                {...register('email')}
            />
            {errors.email &&
                <Typography className="text-red-500 text-fs12"
                    style={{ textAlign: 'left' }}>{errors.email.message}
                </Typography>
            }
            <FormLabel htmlFor="password"
                sx={{
                    color: 'black',
                    textAlign: 'left',
                    fontSize: '18px',
                    fontWeight: 'bold',
                    marginBottom: '10px',
                    marginTop: '20px',
                }}
            >
                Contraseña
            </FormLabel>
            <OutlinedInput
                id="password"
                error={!!errors.password}
                type={showPassword ? 'text' : 'password'}
                {...register('password')}
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            onClick={handleClickShowPassword}
                            edge="end"
                        >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                    </InputAdornment>
                }
                inputProps={{ placeholder: "Ingrese su contraseña" }}
            />
            {errors.password &&
                <Typography className="text-red-500 text-fs12"
                    style={{ textAlign: 'left' }}>{errors.password.message}
                </Typography>
            }
            <Link href="/auth/forgot-password"
                style={{
                    // color: themePalette.secondary,
                    textDecoration: 'underline',
                    fontSize: '14px',
                    textAlign: 'right',
                    marginTop: '5px',
                    marginBottom: '10px',
                }}
                className='text-secondary'
            >
                Recuperar contraseña
            </Link>
            <Box
                sx={{
                    margin: '10px 0',
                }}
            >
                <Button
                    variant="contained"
                    type="submit"
                    sx={
                        {
                            // backgroundColor: theme.palette.primary.main,
                            // color: themePalette.cwhite,
                            borderRadius: '20px',
                            padding: '5px 0',
                            fontSize: '18px',
                            fontWeight: 'bold',
                            textTransform: 'none',
                            width: { xs: '40%', md: '50%' },
                        }
                    }
                    className='bg-primary text-white'
                >
                    Iniciar Sesión
                </Button>
            </Box>
        </Box>
    )
}