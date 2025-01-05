import { z } from 'zod';
import dayjs from 'dayjs';

export const petFormSchema = z.object({
    name: z
        .string()
        .min(3, { message: 'El nombre debe tener al menos 3 caracteres' })
        .max(80, { message: 'El nombre es demasiado largo (máx. 80 caracteres)' }),

    specie: z
        .enum(['Perro', 'Gato'], { message: 'Selecciona una especie válida: Perro o Gato' }),

    breed: z
        .string()
        .min(1, { message: 'Selecciona una raza válida para tu mascota' }),

    birthday: z
        .preprocess((val) => (typeof val === 'string' || val instanceof Date ? dayjs(val) : val), z.custom((val) => dayjs.isDayjs(val) && val.isValid()))
        .refine((date) => dayjs(date as string | number | Date).isBefore(dayjs()), { message: 'La fecha debe ser anterior al día de hoy' }),

    gender: z
        .enum(['Macho', 'Hembra'], { message: 'Selecciona un género válido: Macho o Hembra' }),

    weight: z
        .preprocess((val) => (typeof val === 'string' ? parseFloat(val) : val), z.number({ invalid_type_error: 'Ingresa un peso válido como número' }))
        .refine((weight) => weight > 0, { message: 'El peso debe ser mayor a 0' })
        .refine((weight: number) => weight <= 200, { message: 'El peso no puede superar los 200 kg' })
        .refine((weight: number) => /^\d+(\.\d{1,2})?$/.test(weight.toString()), { message: 'El peso debe tener como máximo dos decimales' }),

    petPreferences: z
        .string()
        .min(5, { message: 'Ingresa al menos 5 caracteres para las preferencias' })
        .max(80, { message: 'Las preferencias no pueden superar los 80 caracteres' }),
});