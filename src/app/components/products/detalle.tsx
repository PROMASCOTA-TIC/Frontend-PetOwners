"use client";

import React, { useEffect, useState } from 'react'
import { Icon } from '@iconify/react/dist/iconify.js'
import { Button, Grid2, Skeleton, Stack, Typography } from '@mui/material'
import { CarruselDetalle } from './carruselDetalle';
import HttpService from '@/config/services/httpsService';

interface ItemDetalleProps {
    item: {
        // Define the properties of the item object here
        name: string;
        description: string;
        category: { id: string, name: string };
        weight: string;
        finalPrice: number;
        multimediaFiles: string;
        entrepreneurId: string;
    };
}

export const ItemDetalle: React.FC<ItemDetalleProps> = ({ item }) => {
    const [selected, setSelected] = React.useState<string>('');
    const [itemImages, setItemImages] = useState<string[]>([]);
    const [loading, setLoading] = useState(true);
    const [entrepreneur, setEntrepreneur] = useState<any>();

    useEffect(() => {
        if (item) {
            const imageList = item.multimediaFiles ? item.multimediaFiles.split(',').map(image => image.trim()) : [];
            setItemImages(imageList);
            getEntrepreneurInfo();
        }
    }, [item]);

    const handleSelect = (option: string) => {
        setSelected(option);
    };

    const getEntrepreneurInfo = async () => {
        try {
            const resp = await HttpService.get(`users/entrepreneurs/${item.entrepreneurId}`);
            if (resp.status === 200) {
                console.log(resp.data);
                setEntrepreneur(resp.data);
                setLoading(false);
            } else {
                console.log('Error al obtener la información del emprendedor');
            }
        } catch (error) {
            console.error('Error al obtener la información del emprendedor', error);
            setLoading(false);
        }
    };

    return (
        <div>
            {
                !loading ? (
                    <Grid2 container columnSpacing={{ xs: "55px", md: "55px" }}>
                        <Grid2 size={{ xs: 12, sm: 6, md: 6, lg: 6 }} sx={{ marginY: "13px" }}>
                            <CarruselDetalle images={itemImages} />
                        </Grid2>

                        <Grid2 size={{ xs: 12, sm: 6, md: 6, lg: 6 }} sx={{ marginBottom: "34px" }}>
                            <Typography
                                sx={{
                                    fontSize: { md: '36px' },
                                    fontWeight: 'bold',
                                }}
                                className='text-primary mt-e21'
                            >
                                {item.name}
                            </Typography>
                            <hr className='my-e34' />
                            <Typography
                                sx={{
                                    fontSize: { md: '24px' },
                                    fontWeight: 'semi-bold',
                                }}
                                className='text-secondary'
                            >
                                Vendido por: {entrepreneur?.nombreEmprendimiento}
                            </Typography>
                            <Typography
                                sx={{
                                    fontSize: { md: '24px' },
                                    fontWeight: 'semi-bold',
                                }}
                                className='text-primary mt-e21'
                            >
                                {item.description}
                            </Typography>

                            <div className='mt-e21'>
                                <Grid2 container>
                                    <Grid2 size={{ xs: 12, sm: 6, md: 6, lg: 6 }}>
                                        <Typography
                                            sx={{
                                                fontSize: { md: '24px' },
                                                fontWeight: 'semi-bold',
                                            }}
                                            className='text-secondary'
                                        >
                                            Categoría: {item.category?.name}
                                        </Typography>
                                    </Grid2>
                                    <Grid2 size={{ xs: 12, sm: 6, md: 6, lg: 6 }}>
                                        <Typography
                                            sx={{
                                                fontSize: { md: '24px' },
                                                fontWeight: 'semi-bold',
                                            }}
                                            className='text-secondary'
                                        >
                                            Peso:
                                        </Typography>
                                    </Grid2>
                                </Grid2>
                            </div>

                            <Typography
                                sx={{
                                    fontSize: { md: '36px' },
                                    fontWeight: 'semi-bold',
                                }}
                                className='text-secondary mt-e21'
                            >
                                $ {item.finalPrice}
                            </Typography>

                            <Grid2 container alignItems="center">
                                {/* Botón Producto con icono arriba */}
                                <Grid2
                                    size={{ xs: 12, sm: 12, md: 12 }}
                                    display="flex"
                                    flexDirection="column"
                                    alignItems="center"
                                    justifyContent="center"
                                >
                                    {/* <Icon icon="material-symbols-light:pet-supplies-outline" className='size-[60px] text-primary' /> */}
                                    <Icon icon="material-symbols-light:add-shopping-cart" className='size-[60px] text-primary' />
                                    <Button
                                        onClick={() => handleSelect('Producto')}
                                        sx={{
                                            textTransform: 'none',
                                            width: '213px',
                                            height: '34px',
                                            borderRadius: '20px',
                                            fontSize: '18px',
                                            marginTop: '10px'
                                        }}
                                        className={`${selected === 'Producto' ? 'bg-primary text-white' : 'bg-black10 text-primary'}`}
                                    >
                                        Añadir al carro
                                    </Button>
                                </Grid2>
                            </Grid2>

                        </Grid2>
                    </Grid2>
                ) : (
                    <div className='flex justify-center gap-e55 ms-e63'>
                        <Grid2 container spacing={2}>
                            <Grid2 size={{ xs: 12, sm: 6 }}>
                                <Skeleton variant="rectangular" width="100%" height={250} />
                            </Grid2>
                            <Grid2 size={{ xs: 12, sm: 6 }}>
                                <Stack spacing={1}>
                                    <Skeleton variant="rectangular" width="100%" height={40} />
                                    <Skeleton variant="rectangular" width="100%" height={40} />
                                    <Skeleton variant="rectangular" width="100%" height={40} />
                                    <Skeleton variant="rectangular" width="100%" height={40} />
                                </Stack>
                            </Grid2>
                        </Grid2>
                    </div>
                )
            }
        </div>
    )
}
