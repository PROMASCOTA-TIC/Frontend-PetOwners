import React from 'react'
import { IconButton } from '@mui/material'
import EditLocationAltIcon from '@mui/icons-material/EditLocationAlt';
import DeleteIcon from '@mui/icons-material/Delete';

export const TarjetaDireccion = () => {
    return (
        <div className='w-full border border-primary rounded-b15'>
            <div className='flex justify-between px-e8 py-e13 sm:px-e55'>
                <div className='flex flex-col gap-e13'>
                    <h2 className='text-secondary font-semibold text-fs18 sm:text-fs18 md:text-fs24 lg:text-fs24'>
                        Nombre de la dirección
                    </h2>
                    <p className='text-quintenary font-semibold text-fs14 sm:text-fs14 md:text-fs18 lg:text-fs18'>
                        Dirección
                    </p>
                </div>
                <div className='flex flex-col sm:flex-row gap-e8 justify-end items-center'>
                    <IconButton className='text-secondary items-center text-center'>
                        <EditLocationAltIcon />
                    </IconButton>
                    <IconButton className='text-red-500 items-center text-center'>
                        <DeleteIcon />
                    </IconButton>
                </div>
            </div>
        </div>
    )
}
