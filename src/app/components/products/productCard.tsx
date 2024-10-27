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

const ProductCard: React.FC<ProductCardProps> = ({ title, description, price, imageUrl }) => {
    return (
        <Card className="border border-primary rounded-lg flex flex-col items-center text-center space-y-2 w-[191px] h-[309]">
            <Typography variant="h6" className="font-bold mt-[13px] text-primary">
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
        </Card>
    );
};

export default ProductCard;