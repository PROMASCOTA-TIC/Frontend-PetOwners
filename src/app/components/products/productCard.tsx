"use client";
import React from 'react';
import Image, { StaticImageData } from 'next/image';
import { Button, Card, CardContent, Typography } from '@mui/material';
import { themePalette } from '@/config/theme.config';

interface ProductCardProps {
    title: string;
    description: string;
    price: number;
    imageUrl: StaticImageData;
}

const ProductCard: React.FC<ProductCardProps> = ({ title, description, price, imageUrl }) => {
    return (
        <Card className="border rounded-lg flex flex-col items-center text-center space-y-2 w-[191px] h-[309]">
            {/* <Typography variant="h6" className={`font-bold mt-[13px] text-[${themePalette.primary}]`} style={{ text: themePalette.primary }}> */}
            <Typography variant="h6" className={`font-bold mt-[13px]`} style={{ color: themePalette.primary }}>
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
                {/* <Typography variant="body2" className={`mt-[8px] text-[${themePalette.primary}]`}> */}
                <Typography variant="body2" className={`mt-[8px]`} style={{ color: themePalette.primary }}>
                    {description}
                </Typography>
                {/* <Typography variant="h6" className={`text-[${themePalette.primary}] mt-[8px] font-semibold`}> */}
                <Typography variant="h6" className={`text-[${themePalette.primary}] mt-[8px] font-semibold`} style={{ color: themePalette.primary }}>
                    ${price.toFixed(2)}
                </Typography>
                {/* <Button variant="contained" className={`mt-[8px] normal-case rounded-[20px] bg-[${themePalette.secondary}]`}> */}
                <Button variant="contained" className={`mt-[8px] normal-case rounded-[20px]`} style={{ background: themePalette.secondary }}>
                    Agregar al carrito
                </Button>
            </CardContent>
        </Card>
    );
};

export default ProductCard;