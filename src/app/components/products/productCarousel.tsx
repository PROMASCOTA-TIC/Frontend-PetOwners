"use client";
import React, { useState, useEffect } from 'react';
import ProductCard from './productCard';
import { IconButton, Typography } from '@mui/material';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import { StaticImageData } from 'next/image';

interface Product {
    title: string;
    description: string;
    price: number;
    imageUrl: StaticImageData;
}

interface ProductCarouselProps {
    products: Product[];
}

const ProductCarousel: React.FC<ProductCarouselProps> = ({ products }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [visibleItems, setVisibleItems] = useState(5);

    // Ajustar el número de elementos visibles según el tamaño de la pantalla
    useEffect(() => {
        const updateVisibleItems = () => {
            if (window.innerWidth < 640) {
                setVisibleItems(1); // Pantallas pequeñas (teléfonos)
            } else if (window.innerWidth < 1024) {
                setVisibleItems(3); // Pantallas medianas (tabletas)
            } else {
                setVisibleItems(4); // Pantallas grandes (computadoras)
            }
        };

        updateVisibleItems(); // Ejecutar al cargar el componente
        window.addEventListener('resize', updateVisibleItems); // Agregar el evento para cambios de tamaño de ventana

        return () => {
            window.removeEventListener('resize', updateVisibleItems); // Eliminar el evento al desmontar el componente
        };
    }, []);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, products.length - visibleItems));
    };

    return (
        <div className="w-full flex flex-col">
            <Typography variant="h5" className="mb-4 font-bold">
                Nuevos productos
            </Typography>
            <div className="mx-[63px] flex items-center justify-between">
                <div className="bg-[#46DA69] rounded-full">
                    <IconButton onClick={handlePrev} disabled={currentIndex === 0}>
                        <ArrowBackIos className="text-[#004040]" />
                    </IconButton>
                </div>
                <div className="relative overflow-hidden">
                    <div
                        className="flex transition-transform duration-300 ease-in-out"
                        style={{
                            transform: `translateX(-${currentIndex * (100 / visibleItems)}%)`,
                        }}
                    >
                        {products.map((product, index) => (
                            <div
                                key={index}
                                className="min-w-[191px] flex-shrink-0"
                                style={{ width: `${100 / visibleItems}%` }}
                            >
                                <ProductCard
                                    title={product.title}
                                    description={product.description}
                                    price={product.price}
                                    imageUrl={product.imageUrl}
                                />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="bg-[#46DA69] rounded-full">
                    <IconButton
                        onClick={handleNext}
                        disabled={currentIndex >= products.length - visibleItems}
                    >
                        <ArrowForwardIos className="text-[#004040]" />
                    </IconButton>
                </div>
            </div>
        </div>
    );
};

export default ProductCarousel;