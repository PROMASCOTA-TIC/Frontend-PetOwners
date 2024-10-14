import { themePalette } from '@/config/theme.config';
import { Box, Button } from '@mui/material';
import React from 'react';

const CompartirContenido = () => {
    return (
        <Box
            sx={{
                backgroundColor: themePalette.terciary20,
                padding: '21px',
                textAlign: 'center',
                color: themePalette.primary,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '21px'
            }}
        >
            <h1>¡Comparte contenido con la comunidad!</h1>
            
            <h2>
                ¡Ayuda a otros dueños de mascotas a descubrir contenido útil y emocionante!<br />
                Comparte tus fotos, videos y consejos sobre el cuidado de mascotas.<br />
                ¡Tu experiencia puede hacer una gran diferencia!
            </h2>
            
            <Button variant="contained" sx={{ backgroundColor: themePalette.primary }}>
                Compartir
            </Button>
        </Box>
    );
}

export default CompartirContenido;
