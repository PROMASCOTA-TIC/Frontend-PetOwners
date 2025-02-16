"use client";
import React, { useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import { Button, Card, CardActions, CardContent, Typography } from '@mui/material';
import { useShoppingCartStore } from '@/store/shoppingCartStore';
import { SnackbarNotifications } from '../feedback/snackbarNotifications';

interface ProductCardProps {
    title: string;
    description: string;
    price: number;
    imageUrl: StaticImageData;
}

enum NotificationType {
    Info = "info",
    Success = "success",
    Error = "error",
    Warning = "warning",
}

const ProductCard: React.FC<ProductCardProps> = ({ title, description, price, imageUrl }) => {
    const setItemToCart = useShoppingCartStore((state) => state.setCounter);
    const [notificationType, setNotificationType] = useState<NotificationType>(NotificationType.Info);
    const [notificationMessage, setNotificationMessage] = useState("");
    const [triggerKey, setTriggerKey] = useState(0);

    const handleAddItem = () => {
        setItemToCart();
        setNotificationType(NotificationType.Success);
        setNotificationMessage("Producto agregado al carrito");
        setTriggerKey((prev) => prev + 1);
    }

    return (
        <>
            <SnackbarNotifications
                type={notificationType}
                message={notificationMessage}
                triggerKey={triggerKey}
            />

            <Card className="border border-primary rounded-lg flex flex-col items-center text-center w-full h-[350px]">
                <Typography variant="h6" className="font-bold mt-[13px] text-primary px-e5">
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