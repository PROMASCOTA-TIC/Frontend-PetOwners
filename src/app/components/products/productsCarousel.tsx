"use client";
import React, { useEffect, useState } from 'react';
import ProductCard from './productCard';
import Image, { StaticImageData } from 'next/image';
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
import { NoRecordsFeedback } from '../feedback/noRecordsFeedback';

interface Product {
    id: string;
    name: string;
    description: string;
    finalPrice: number;
    multimediaFiles: string;
    categoryId?: string;
}

interface ProductCarouselProps {
    type: 'nuevos' | 'mas vendidos' | 'related';
    id?: string;
    categoryId?: string;
}

export default function ProductsCarousel({ type, id, categoryId }: ProductCarouselProps) {
    const [productsList, setProductsList] = useState<Product[]>([]);
    const [noRecords, setNoRecords] = useState(false);

    useEffect(() => {
        getProductsList();
    }, []);

    const getProductsList = async () => {
        if (type === 'nuevos') {
            try {
                const resp = await HttpService.get('products/inventory/recent-products')

                if (resp.status === 200) {
                    console.log(resp.data)
                    setProductsList(resp.data)
                } else {
                    console.log('Error al obtener los productos')
                }
            } catch (error) {
                console.log('Error al obtener los productos')
                setNoRecords(true);
            }
        } else if (type === 'mas vendidos') {
            try {
                const resp = await HttpService.get('products/inventory/top-selling-products')

                if (resp.status === 200) {
                    console.log(resp.data)
                    setProductsList(resp.data)
                } else {
                    console.log('Error al obtener los productos')
                }
            } catch (error) {
                console.log('Error al obtener los productos')
                setNoRecords(true);
            }
        } else if (type === 'related') {
            try {
                const resp = await HttpService.get(`products/recomendations/${categoryId}`)
                console.log('resp de recomendaciones', resp.data)

                if (resp.status === 200) {
                    setProductsList(resp.data)

                } else {
                    console.log('Error al obtener los productos')
                }
            } catch (error) {
                console.log('Error al obtener los productos')
                setNoRecords(true);
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
                                                    id={product.id}
                                                    title={product.name}
                                                    description={product.description}
                                                    price={product.finalPrice}
                                                    imageUrl={
                                                        Array.isArray(product.multimediaFiles) 
                                                            ? product.multimediaFiles[0] || "" 
                                                            : typeof product.multimediaFiles === "string" 
                                                                ? product.multimediaFiles.split(',')[0] 
                                                                : ""
                                                    }
                                                    data={product}
                                                />
                                            </CardContent>
                                        </Card>
                                    </div>
                                </CarouselItem>
                            ))
                        ) : (
                            !noRecords &&
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
                {
                    noRecords && (
                        <NoRecordsFeedback />
                    )
                }
            </Carousel>
        </div>
    );
};