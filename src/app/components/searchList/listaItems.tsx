import React from 'react'
import { TarjetaItem } from './tarjetaItem';
import { productImage } from "@/assets/images";
import { Box, Grid2 } from '@mui/material';

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

export const ListaItems = () => {
    return (
        <div>
            <div className='bg-terciary-20 rounded-b15 px-e63 py-e55 w-full'>
                {/* <Grid2 container columns={{ xs: 4, sm: 8, md: 12 }}> */}
                <Grid2 container columnSpacing={{ xs: "55px", md: "55px" }}>
                    {products.map((product, index) => (
                        <Grid2 key={index} size={{ xs: 12, sm: 6, md: 4, lg: 3 }} sx={{ marginBottom: "34px" }}>
                            <TarjetaItem
                                title={product.title}
                                description={product.description}
                                price={product.price}
                                imageUrl={product.imageUrl}
                            />
                        </Grid2>
                    ))}
                </Grid2>
            </div>
        </div>
    )
}
