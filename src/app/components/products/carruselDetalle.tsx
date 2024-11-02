import React, { useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import { IconButton } from '@mui/material';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';

type ImageCarouselProps = {
    images: StaticImageData[];
};

export const CarruselDetalle: React.FC<ImageCarouselProps> = ({ images }) => {
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const [direction, setDirection] = React.useState<'left' | 'right'>('right');

    const handleNext = () => {
        if (currentIndex < images.length - 1) {
            setDirection('right');
            setCurrentIndex(currentIndex + 1);
        }
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            setDirection('left');
            setCurrentIndex(currentIndex - 1);
        }
    };

    return (
        <div className="flex items-center w-full h-full" style={{ minHeight: "240px" }}>
            <div className="bg-terciary rounded-full">
                <IconButton onClick={handlePrev} disabled={currentIndex === 0}>
                    <ArrowBackIos className="text-primary" />
                </IconButton>
            </div>

            <div className="w-full h-full relative overflow-hidden">
                <div className="relative w-full h-full">
                    {images.map((image, index) => (
                        <Image
                            key={index}
                            src={image}
                            alt={`Imagen ${index + 1}`}
                            layout="fill"
                            objectFit="contain"
                            className={`absolute transition-transform duration-500 ease-in-out transform ${
                                index === currentIndex
                                    ? 'translate-x-0'
                                    : direction === 'right'
                                    ? 'translate-x-full'
                                    : '-translate-x-full'
                            }`}
                        />
                    ))}
                </div>
            </div>

            <div className="bg-terciary rounded-full">
                <IconButton onClick={handleNext} disabled={currentIndex === images.length - 1}>
                    <ArrowForwardIos className="text-primary" />
                </IconButton>
            </div>
        </div>
    );
};