"use client";
import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Button, Typography } from '@mui/material';
import { ItemDetalle, ProductsCarousel } from '@/app/components';
import { productImage } from "@/assets/images";

const products = [
    {
        title: 'Pro-Can Cachorro',
        description: 'Alimento pro crecimiento para mascotas 2 Kg',
        price: 5.00,
        imageUrl: productImage,
    },
    {
        title: 'Pro-Can Cachorro',
        description: 'Alimento pro crecimiento para mascotas 2 Kg',
        price: 5.00,
        imageUrl: productImage,
    },
    {
        title: 'Pro-Can Cachorro',
        description: 'Alimento pro crecimiento para mascotas 2 Kg',
        price: 5.00,
        imageUrl: productImage,
    },
    {
        title: 'Pro-Can Cachorro',
        description: 'Alimento pro crecimiento para mascotas 2 Kg',
        price: 5.00,
        imageUrl: productImage,
    },
    {
        title: 'Pro-Can Cachorro',
        description: 'Alimento pro crecimiento para mascotas 2 Kg',
        price: 10.00,
        imageUrl: productImage,
    },
    {
        title: 'Pro-Can Cachorro',
        description: 'Alimento pro crecimiento para mascotas 2 Kg',
        price: 15.00,
        imageUrl: productImage,
    },
];

export default function ItemsDetailPage() {
    return (
        <div className='mx-e63 my-e34'>
            <Button variant='text'
                startIcon={<ArrowBackIcon className='text-primary' />}
                className='normal-case text-primary font-semibold p-0'
                onClick={() => window.history.back()}
            >
                Volver a los resultados
            </Button>
            <div className='mt-e13 border rounded-b15 border-secondary'>
                <div className='mx-e55'>
                    <ItemDetalle />
                </div>
            </div>
            <div className='mt-e34'>
                <Typography
                    sx={{
                        fontSize: { md: '36px' },
                        fontWeight: 'semi-bold',
                    }}
                    className='text-primary mb-e21'
                >
                    Productos relacionados
                </Typography>
                <ProductsCarousel products={products} />
            </div>
        </div>
    )
}
