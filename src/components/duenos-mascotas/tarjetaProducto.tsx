import React from 'react';
import { Card, CardContent, CardMedia, Button, Typography, Box } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

interface ProductCardProps {
    title: string;
    description: string;
    price: number;
    imageUrl?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ title, description, price, imageUrl }) => {
    return (
        <Card className="border border-gray-300 rounded-lg shadow-md p-2" style={{ width: "15%" }}>
            <CardMedia
                component="img"
                height="140"
                image={imageUrl}
                alt={title}
                className="object-contain mx-auto"
            />
            <CardContent>
                <Typography variant="h6" component="div" className="text-center text-green-800 font-semibold">
                    {title}
                </Typography>
                <Typography variant="body2" color="textSecondary" className="text-center mt-2">
                    {description}
                </Typography>
                <Typography variant="h6" component="div" className="text-center mt-2 font-bold">
                    ${price.toFixed(2)}
                </Typography>
            </CardContent>
            <Box className="flex justify-center mb-2">
                <Button
                    variant="contained"
                    color="success"
                    startIcon={<AddShoppingCartIcon />}
                    className="mt-2 bg-green-600 hover:bg-green-700 text-white"
                >
                    Agregar al carrito
                </Button>
            </Box>
        </Card>
    );
};

export default ProductCard;
