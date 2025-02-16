"use client";
import React, { useState, useRef } from 'react';
import ProductCard from './productCard';
import { IconButton } from '@mui/material';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import { StaticImageData } from 'next/image';

const ITEM_WIDTH = 200;

interface Product {
    title: string;
    description: string;
    price: number;
    imageUrl: StaticImageData;
}

interface ProductCarouselProps {
    products: Product[];
}

const ProductsCarousel: React.FC<ProductCarouselProps> = ({ products }) => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const containerRef = useRef<HTMLDivElement | null>(null);

    const handleScroll = (scrollAmount: number) => {
        const newScrollPosition = scrollPosition + scrollAmount;
        setScrollPosition(newScrollPosition);
        if (containerRef.current) {
            containerRef.current.scrollLeft = newScrollPosition;
        }
    }

    return (
        // <div className="container">
        <div className="w-[100%] flex items-center justify-between">
            <div className="bg-terciary rounded-full ms-[63px]">
                {/* <IconButton onClick={handlePrev} disabled={currentIndex === 0}> */}
                <IconButton onClick={() => { handleScroll(-ITEM_WIDTH) }}>
                    <ArrowBackIos className="text-primary" />
                </IconButton>
            </div>
            <div
                ref={containerRef}
                style={{
                    width: "100%",
                    overflowX: "hidden",
                    scrollBehavior: "smooth",
                    marginInline: "34px",
                }}
            >
                {/* <div className="content-box"> */}
                <div className="w-[1800px] flex align-middle gap-[34px]">
                    {products.map((product, index) => (
                        <div
                            key={index}
                            className="min-w-[191px] flex flex-shrink-0 align-center justify-center"
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

            <div className="bg-terciary rounded-full me-[63px]">
                {/* <IconButton onClick={handleNext} disabled={currentIndex >= products.length - visibleItems}> */}
                <IconButton onClick={() => { handleScroll(ITEM_WIDTH) }}>
                    <ArrowForwardIos className="text-primary" />
                </IconButton>
            </div>
        </div>
    );
};

export default ProductsCarousel;