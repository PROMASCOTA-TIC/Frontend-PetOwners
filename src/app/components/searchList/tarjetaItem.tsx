"use client";
import React from 'react';
import Image, { StaticImageData } from 'next/image';
import { Button, Card, CardContent, Typography } from '@mui/material';

interface ProductCardProps {
    title: string;
    description: string;
    price: number;
    imageUrl: StaticImageData;
}

export const TarjetaItem: React.FC<ProductCardProps> = ({ title, description, price, imageUrl }) => {
    return (
        <Card className="border border-primary rounded-lg">
            <div className='flex justify-end text-center'>
                <Typography className="font-bold mt-e13 mx-e13 w-[30%] text-white border rounded-b10 bg-terciary">
                    Estado
                </Typography>
            </div>
            <div className='flex flex-col items-center text-center space-y-e5 w-full h-[309]'>
                <Typography variant="h6" className="font-bold mt-e8 text-primary">
                    {title}
                </Typography>
                <CardContent 
                    className="flex flex-col items-center" 
                    style={{ 
                        padding: "13px",
                        marginTop: "0px",                    
                    }}
                >
                    <div className="relative">
                        <Image src={imageUrl} alt={title} />
                    </div>
                    <Typography variant="body2" className="mt-[8px] text-primary">
                        {description}
                    </Typography>
                    <Typography variant="h6" className="text-primary mt-[8px] font-semibold">
                        ${price.toFixed(2)}
                    </Typography>
                    <Button variant="contained" className="mt-[8px] normal-case rounded-[20px] bg-secondary">
                        Agregar al carrito
                    </Button>
                </CardContent>
            </div>
        </Card>
    )
}
