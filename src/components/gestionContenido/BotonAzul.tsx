import { Button } from '@mui/material'
import React from 'react'
import Link from 'next/link';

import '/src/assets/styles/gestionContenido/general.css';

interface ButtonAzulProps {
    name: string; 
    link: string; 
  }

const BotonAzul: React.FC<ButtonAzulProps> = ({ name, link }) => {
    return (
        <Link href={link} passHref>
            <Button variant="contained" className='bg-primary n-regular'>
                Compartir
            </Button>
        </Link>
    )
}

export default BotonAzul
