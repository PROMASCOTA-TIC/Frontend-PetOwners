"use client";
import React, { useEffect, useState } from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Button, Typography } from '@mui/material';
import { ItemDetalle, ProductsCarousel } from '@/app/components';
import { useParams } from 'next/navigation';
import HttpService from '@/config/services/httpsService';

export default function ItemsDetailPage() {
    const { id } = useParams() as { id: string };
    const [itemData, setItemData] = useState(Object);

    useEffect(() => {
        getItemData();
    }, [id]);

    const getItemData = async () => {
        const item = await HttpService.get(`products/${id}`);
        console.log('data del item seleccionado', item.data.category.id);
        setItemData(item.data);
    }

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
                    <ItemDetalle item={itemData} />
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
                <ProductsCarousel type='related' id={id} categoryId={itemData.category?.id} />
            </div>
        </div>
    )
}
