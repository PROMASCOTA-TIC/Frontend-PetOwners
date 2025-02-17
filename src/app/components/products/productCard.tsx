"use client";
import React, { useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import { Button, Card, CardActions, CardContent, Typography } from '@mui/material';
import { useShoppingCartStore } from '@/store/shoppingCartStore';
import { SnackbarNotifications } from '../feedback/snackbarNotifications';
import { useRouter } from 'next/navigation';

interface ProductCardProps {
    id: string;
    title: string;
    description: string;
    price: number;
    imageUrl: string;
    data: any;
}

enum NotificationType {
    Info = "info",
    Success = "success",
    Error = "error",
    Warning = "warning",
}

const ProductCard: React.FC<ProductCardProps> = ({ id, title, description, price, imageUrl, data }) => {
    const addItemToCart = useShoppingCartStore((state) => state.addItemToCart);
    const [notificationType, setNotificationType] = useState<NotificationType>(NotificationType.Info);
    const [notificationMessage, setNotificationMessage] = useState("");
    const [triggerKey, setTriggerKey] = useState(0);
    const router = useRouter();

    const handleAddItem = () => {
        // addItemToCart({...data, quantity: 1, addedAt: new Date().toISOString(), checked: true},);
        addItemToCart({...data, quantity: 1, addedAt: new Date().toISOString()},);
        setNotificationType(NotificationType.Success);
        setNotificationMessage("Producto agregado al carrito");
        setTriggerKey((prev) => prev + 1);
    }

    const handleViewItemDetails = () => {
        router.push(`/items-detail/${id}`);
    }

    return (
        <>
            <SnackbarNotifications
                type={notificationType}
                message={notificationMessage}
                triggerKey={triggerKey}
            />

            <Card className="border border-primary rounded-lg flex flex-col items-center text-center w-full h-[350px]">
                <Typography variant="h6" className="font-bold mt-[13px] text-primary px-e5 line-clamp-2">
                    {title}
                </Typography>
                <CardContent
                    className="flex flex-col items-center w-full"
                    style={{
                        padding: "13px",
                        marginTop: "0px",
                        cursor: "pointer",
                    }}
                    onClick={handleViewItemDetails}
                >
                    <div className="relative h-[150px] w-full">
                        <Image src={imageUrl} alt={title} fill={true} />
                    </div>
                    {/* <Typography variant="body2" className="mt-[8px] text-primary">
                        {description}
                    </Typography> */}
                    <Typography variant="h6" className="text-primary mt-[8px] font-semibold">
                        ${price}
                    </Typography>
                </CardContent>
                <CardActions className='mt-auto p-0 mb-e13'>
                    <Button variant="contained"
                        className="mt-[8px] normal-case rounded-[20px] bg-secondary"
                        onClick={handleAddItem}
                    >
                        Agregar al carro
                    </Button>
                </CardActions>
            </Card>
        </>
    );
};

export default ProductCard;