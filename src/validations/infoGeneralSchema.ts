import { z } from 'zod';

export const infoGeneralSchema = z.object({
    name: z
        .string()
        .min(8, { message: 'Ingresa tu nombre y apellido', })
        .max(200, { message: 'Tu nombre es muy largo', }),
    email: z
        .string()
        .email({ message: 'Ingresa un correo válido', }),
    password: z
        .string()
        .min(8, { message: 'Es necesario que se ingrese la contraseña actual', }),
    newPassword: z
        .string()
        .min(8, { message: 'La contraseña debe tener al menos 8 caracteres', })
        .regex(/[a-z]/, { message: "La contraseña debe contener al menos una letra minúscula" })
        .regex(/[A-Z]/, { message: "La contraseña debe contener al menos una letra mayúscula" })
        .regex(/[0-9]/, { message: "La contraseña debe contener al menos un número" })
        .regex(/[^a-zA-Z0-9]/, { message: "La contraseña debe contener al menos un carácter especial" }),
})