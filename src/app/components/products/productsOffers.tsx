"use client";

import Image, { StaticImageData } from 'next/image';
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Skeleton, Stack } from '@mui/material';
import { useEffect, useState } from 'react';
import HttpService from '@/config/services/httpsService';

interface ProductOffer {
    id: number;
    labe: string;
    imageSrc: StaticImageData;
    productName: string;
    discountedPrice: string;
    endDate: string;
}

export default function ProductOffers () {
    const [offersList, setOffersList] = useState<ProductOffer[]>([])

    useEffect(() => {
        getOffersList();
    }, []);

    const getOffersList = async () => {
        const resp = await HttpService.get('/offers')

        if (resp.status === 200) {
            console.log(resp.data.data)
            setOffersList(resp.data.data)
        } else {
            console.log('Error al obtener los productos')
        }
    }

    return (
        <div className='flex justify-center items-center mx-e21 sm:mx-e34 md:mx-e63 lg:mx-e144'>
            <Carousel className="w-full max-w-8xl">
                <CarouselContent className="-ml-e63">
                    {
                        offersList.length !== 0 ? (
                            offersList.map((product) => (
                                <CarouselItem key={product.id} className="pl-[110px] sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                                    <div>
                                        <Card>
                                            <CardContent className="flex aspect-square items-center justify-center">
                                                <div className="min-w-[301px] h-[300px] flex-shrink-0 bg-green-50 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
                                                    <div className="bg-green-800 text-white text-center rounded-t-lg p-2 font-semibold">
                                                        {product.productName}
                                                    </div>
                                                    <div className="text-center mt-2">
                                                        <p className="text-lg font-semibold">Ahora en</p>
                                                        <p className="text-2xl font-bold">${product.discountedPrice}</p>
                                                        <p className="text-sm text-gray-600">Válido hasta el {new Date(product.endDate).toLocaleDateString('es-ES')}</p>
                                                    </div>
                                                    <div className="flex justify-center mt-4">
                                                        <Image
                                                            src={product.imageSrc}
                                                            alt={product.productName}
                                                            width={150}
                                                            height={150}
                                                            className="object-contain"
                                                        />
                                                    </div>
                                                </div>
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