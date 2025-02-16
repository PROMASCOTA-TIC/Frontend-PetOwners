import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import Image from 'next/image'
import { productImage, productosCarousel } from '@/assets/images'

const landingImages = [
    { id: 1, src: productosCarousel, alt: 'Image 1' },
    { id: 2, src: productImage, alt: 'Image 2' },
]

export const ImagesCarrousel = () => {

    return (
        <div className='flex justify-center items-center mx-e21 sm:mx-e34 md:mx-e63 lg:mx-e144 mt-e13 lg:mt-0'>
            <Carousel className="w-full max-w-full">
            <CarouselContent>
                    {landingImages.map((image) => (
                        <CarouselItem key={image.id}>
                            <div className="p-2">
                                <Card className="h-[400px] w-full">
                                    {/* Configura el contenedor como relativo y define el tamaño */}
                                    <CardContent className="relative h-full w-full p-0">
                                        <Image
                                            src={image.src}
                                            alt={image.alt}
                                            fill={true}
                                            className="rounded-md"
                                        />
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className='text-primary bg-terciary hidden md:flex'/>
                <CarouselNext className='text-primary bg-terciary hidden md:flex'/>
            </Carousel>
        </div>
    )
}