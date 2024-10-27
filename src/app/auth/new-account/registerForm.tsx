"use client";
import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Box, Button, FormControl, FormLabel, styled, TextField } from '@mui/material';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { registerSchema } from '@/validations/registerSchema';
import "./Login.css";

type Inputs = {
    name: string;
    email: string;
    password: string;
    passwordConfirm: string;
};

interface RegisterFormProps {
    preferences: boolean;
    setPreferences: React.Dispatch<React.SetStateAction<boolean>>;
}

export const RegisterForm: React.FC<RegisterFormProps> = ({ preferences, setPreferences }) => {
    const { register, handleSubmit, formState: { errors }, watch } = useForm<Inputs>({
        resolver: zodResolver(registerSchema),
        mode: 'onChange', // Cambia el modo para validar en tiempo real
    });

    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const handleMouseUpPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const onSubmit = (data: Inputs) => {
        console.log(data);
        setPreferences(true);
    };

    return (
        <FormControl className="form-group" component="form" onSubmit={handleSubmit(onSubmit)}>
            <FormLabel htmlFor="name">Nombre</FormLabel>
            <TextField
                id="name"
                error={!!errors.name}
                placeholder="Ingrese su nombre"
                {...register('name')}
            />
            {errors.name && <p className="text-red-500">{errors.name.message}</p>}

            <FormLabel htmlFor="email">Correo electrónico</FormLabel>
            <TextField
                id="email"
                error={!!errors.email}
                placeholder="Ingrese su correo electrónico"
                {...register('email')}
            />
            {errors.email && <p className="text-red-500">{errors.email.message}</p>}

            <FormLabel htmlFor="password">Contraseña</FormLabel>
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
                {...register('password')}
            />
            {errors.password && <p className="text-red-500">{errors.password.message}</p>}

            <FormLabel htmlFor="passwordConfirm">Confirmar Contraseña</FormLabel>
            <OutlinedInput
                id="passwordConfirm"
                error={!!errors.passwordConfirm}
                type={showPassword ? 'text' : 'password'}
                {...register('passwordConfirm')}
            />
            {errors.passwordConfirm?.message && <p className="text-red-500">{errors.passwordConfirm.message}</p>}

            <Box style={{ margin: '20px 0' }} className="button-is space-x-4">
                <Button
                    variant="contained"
                    color="primary"
                // type="submit"
                >
                    Cancelar
                </Button>

                <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                >
                    Continuar
                </Button>
            </Box>
        </FormControl>
    );
}