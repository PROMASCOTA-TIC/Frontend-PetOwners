import { Box, IconButton, Link } from '@mui/material';
import React from 'react'
import { Facebook, Instagram, X } from '@mui/icons-material';

import '/src/assets/styles/gestionContenido/general.css';

const PieDePagina = () => {
    return (
        <Box
            component="footer"
            className='bg-primary p-21 txtcolor-white txt-center'
            sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                justifyContent: 'space-around',
                alignItems: 'center',
                gap: { xs: '20px', md: '0' },
            }}
        >
            <div>
                <p className='n-bold'>Información De Contacto</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', gap: '55px' }} className='minima-regular'>
                    <p>0999999999</p>
                    <p>0999999999</p>
                </div>
                <p className='minima-regular'>info@promascota.com</p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <p className='n-bold'>Soporte Técnico</p>
                <Link href="#" color="inherit" className='minima-regular'>Preguntas frecuentes</Link>
                <Link href="#" color="inherit" className='minima-regular'>Publi-Reportajes</Link>
            </div>

            <div>
                <p className='n-bold'>Redes Sociales</p>
                <div style={{ display: 'flex' }}>
                    <IconButton href="https://www.facebook.com" target="_blank" color='inherit'>
                        <Facebook />
                    </IconButton>
                    <IconButton href="https://www.instagram.com" target="_blank" color='inherit'>
                        <Instagram />
                    </IconButton>
                    <IconButton href="https://www.tiktok.com" target="_blank" color='inherit'>
                        <X />
                    </IconButton>
                </div>
            </div>
        </Box>
    );
}

export default PieDePagina
