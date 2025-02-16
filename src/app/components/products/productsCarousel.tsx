"use client";
import React, { useEffect, useState } from 'react';
import ProductCard from './productCard';
import { StaticImageData } from 'next/image';
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { Skeleton, Stack } from '@mui/material';
import HttpService from '@/config/services/httpsService';

interface Product {
    name: string;
    description: string;
    finalPrice: number;
    imageUrl: StaticImageData;
}

interface ProductCarouselProps {
    type: 'nuevos' | 'mas vendidos';
}

export default function ProductsCarousel({ type }: ProductCarouselProps) {
    const [productsList, setProductsList] = useState<Product[]>([]);

    useEffect(() => {
        getProductsList();
    }, []);

    const getProductsList = async () => {
        if (type === 'nuevos') {
            const resp = await HttpService.get('/products')

            if (resp.status === 200) {
                console.log(resp.data)
                setProductsList(resp.data)
            } else {
                console.log('Error al obtener los productos')
            }
        } else if (type === 'mas vendidos') {
            const resp = await HttpService.get('/products')

            if (resp.status === 200) {
                console.log(resp.data)
                setProductsList(resp.data)
            } else {
                console.log('Error al obtener los productos')
            }
        }
    }

    return (
        <div className='flex justify-center items-center mx-e21 sm:mx-e34 md:mx-e63 lg:mx-e144'>
            <Carousel className="w-full max-w-8xl">
                <CarouselContent className="-ml-e63">
                    {
                        productsList.length !== 0 ? (
                            productsList.map((product: Product, index: number) => (
                                <CarouselItem key={index} className="pl-e63 sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                                    <div>
                                        <Card>
                                            <CardContent className="flex aspect-square items-center justify-center p-6">
                                                <ProductCard
                                                    title={product.name}
                                                    description={product.description}
                                                    price={product.finalPrice}
                                                    imageUrl={product.imageUrl || ""}
                                                />
                                            </CardContent>
                                        </Card>
                                    </div>
                                </CarouselItem>
                            ))
                        ) : (
                            <div className='flex justify-center gap-e55 ms-e63'>
                                {
                                    Array.from({ length: 4 }).map((_, index) => (
                                        <Stack spacing={1} key={index} className='flex flex-col items-center'>
                                            <Skeleton variant="text" sx={{ fontSize: '1rem', width: '100%' }} />
                                            <Skeleton variant="circular" width={80} height={80} />
                                            <Skeleton key={index} variant="rectangular" width={270} height={250} />
                                            <Skeleton variant="rounded" width={150} height={20} />
                                        </Stack>
                                    ))
                                }
                            </div>
                        )
                    }
                </CarouselContent>
                <CarouselPrevious className='text-primary bg-terciary hidden md:flex' />
                <CarouselNext className='text-primary bg-terciary hidden md:flex' />
            </Carousel>
        </div>
    );
};