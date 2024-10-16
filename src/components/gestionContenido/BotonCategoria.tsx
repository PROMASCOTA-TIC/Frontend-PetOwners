import { Button, Box } from '@mui/material'; // Asegúrate de tener la última versión
import React from 'react';
import Link from 'next/link';

interface BotonCategoriaProps {
    name: string;
    icon: React.ElementType;
    link: string;
}

const BotonCategoria: React.FC<BotonCategoriaProps> = ({ name, icon: Icon, link }) => {
    return (
        <Link href={link} passHref>
            <Button
                variant="contained"
                className='bg-tertiary20 txtcolor-primary flex-spaceBetween'
                sx={{
                    flexDirection: 'column',
                    padding: 0,
                    width: 400,
                    height: 200,
                    borderRadius: '15px',
                }}
            >
                <Box
                    className='bg-primary txtcolor-white h2-semiBold flex-center'
                    sx={{
                        width: '100%',
                        height: '52px',
                        borderBottom: '1px solid #ddd',
                        textTransform: 'none',
                        borderRadius: '15px 15px 0 0',
                    }}
                >
                    {name}
                </Box>
                <Box
                    className='flex-center'
                    sx={{
                        width: '100%',
                        height: '100%',
                    }}
                >
                    <Icon sx={{ fontSize: 80 }} />
                </Box>
            </Button>
        </Link>
    )
}

export default BotonCategoria