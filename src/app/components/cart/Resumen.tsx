"use client";

import { useState } from 'react'
import { DeleteOutline } from '@mui/icons-material'
import { Box, Button, Grid2, IconButton, Typography } from '@mui/material'
import ProductImage from "@/assets/images/productImage.png";
import Image from 'next/image'

const initialProducts = [
    {
        id: 1,
        name: "Producto 1",
        description: "Descripción del producto",
        price: 3.5,
        daysLeft: 7,
        quantity: 2,
    },
    {
        id: 2,
        name: "Producto 2",
        description: "Descripción del producto",
        price: 5.5,
        daysLeft: 5,
        quantity: 1,
    },
]

export const Resumen = (props: { setActiveStep: (step: (prevActiveStep: number) => number) => void }) => {
    const [products, setProducts] = useState(initialProducts);

    const handleAddProduct = (index: number) => {
        const updatedProducts = products.map((product, i) =>
            i === index ? { ...product, quantity: product.quantity + 1 } : product
        );
        setProducts(updatedProducts);
    };

    const handleLessProduct = (index: number) => {
        const updatedProducts = products.map((product, i) =>
            i === index && product.quantity > 0
                ? { ...product, quantity: product.quantity - 1 }
                : product
        );
        setProducts(updatedProducts);
    };

    const handleDeleteProduct = (id: number) => {
        const updatedProducts = products.filter((product) => product.id !== id);
        setProducts(updatedProducts);
    };

    return (
        <>
            <Grid2 size={12}>
                <Typography className="text-primary text-[24px] font-bold"
                    sx={{
                        marginLeft: { xs: "21px", md: "55px" }
                    }}
                >
                    Carro de compras
                </Typography>
            </Grid2>
            <Grid2 size={{ xs: 12, md: 7 }}>
                {products.map((product, index) => (
                    <Box key={index} className="flex flex-col"
                        sx={{
                            marginLeft: { xs: "21px", sm: "55px" },
                            gap: { xs: "8px", sm: "13px" },
                        }}
                    >
                        <Box className="flex flex-row gap-e5">
                            <Grid2 className="bg-terciary-20 flex items-center rounded-tl-b20 rounded-bl-b20"
                                sx={{
                                    width: { xs: "340px", sm: "640px" },
                                    height: { xs: "113px", sm: "173px" },
                                    gap: { xs: "8px", sm: "21px" },
                                }}
                            >
                                <Box
                                    sx={{
                                        marginLeft: { xs: "13px", sm: "21px" },
                                    }}
                                >
                                    <Image src={ProductImage} alt={"Producto"}
                                        style={{
                                            height: "75%",
                                        }}
                                    />
                                </Box>
                                <Box className="flex flex-col"
                                    sx={{
                                        gap: { xs: "3px", sm: "8px" },
                                    }}
                                >
                                    <Typography className="text-secondary font-bold"
                                        sx={{
                                            fontSize: { xs: "12px", sm: "18px" },
                                        }}
                                    >
                                        {product.name}
                                    </Typography>
                                    <Typography className="text-primary font-bold"
                                        sx={{
                                            fontSize: { xs: "12px", sm: "18px" },
                                            display: "block",
                                            overflow: "visible",
                                            whiteSpace: "normal",
                                            overflowWrap: "break-word",
                                        }}
                                    >
                                        {product.description}
                                    </Typography>
                                    <Typography className="text-secondary font-bold"
                                        sx={{
                                            fontSize: { xs: "12px", sm: "18px" }
                                        }}
                                    >
                                        ${product.price}
                                    </Typography>
                                    <Typography className="text-primary"
                                        sx={{
                                            fontSize: { xs: "10px", sm: "14px" }
                                        }}
                                    >
                                        Días restantes en el carro: {product.daysLeft}
                                    </Typography>
                                </Box>
                                <Box className="flex flex-col items-center justify-center border-l border-quintenary"
                                    sx={{
                                        gap: { xs: "8px", sm: "16px" },
                                        minWidth: { xs: "83px", sm: "160px" },
                                        height: { xs: "93px", sm: "160px" },
                                        marginLeft: { xs: "13px", sm: "21px" },
                                    }}
                                >
                                    <Typography className="font-bold text-primary"
                                        sx={{
                                            fontSize: { xs: "16px", sm: "24px" }
                                        }}
                                    >
                                        {product.quantity}
                                    </Typography>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            flexDirection: "row",
                                            gap: { xs: "2px", sm: "8px" },
                                        }}
                                    >
                                        <Button
                                            className="bg-terciary rounded-s-b20 rounded-e-none border-none text-white"
                                            sx={{
                                                minWidth: { xs: "35px", sm: "50px" },
                                                height: { xs: "26px", sm: "36px" },
                                                fontSize: { xs: "12px", sm: "18px" },
                                                padding: { xs: "1px", sm: "8px" },
                                            }}
                                            onClick={() => handleAddProduct(index)}
                                        >
                                            +
                                        </Button>
                                        <Button
                                            className="bg-primary rounded-e-b20 rounded-s-none border-none text-white"
                                            sx={{
                                                minWidth: { xs: "35px", sm: "50px" },
                                                height: { xs: "26px", sm: "36px" },
                                                fontSize: { xs: "14px", sm: "18px" },
                                                padding: { xs: "1px", sm: "5px" },
                                            }}
                                            onClick={() => handleLessProduct(index)}
                                        >
                                            -
                                        </Button>
                                    </Box>
                                </Box>
                            </Grid2>
                            <IconButton
                                className="bg-primary  flex flex-col justify-center items-center rounded-none 
                                rounded-tr-b20 rounded-br-b20 text-white hover:bg-red-500"
                                sx={{
                                    width: { xs: "66px", sm: "99px" },
                                    height: { xs: "113px", sm: "173px" },
                                    gap: { xs: "5px", sm: "13px" },
                                }}
                                onClick={() => { handleDeleteProduct(product.id) }}
                            >
                                <Typography className=" text-center font-bold"
                                    sx={{
                                        fontSize: { xs: "12px", sm: "18px" },
                                    }}
                                >
                                    Eliminar item
                                </Typography>
                                <DeleteOutline
                                    sx={{
                                        width: { xs: "25px", sm: "40px" },
                                        height: { xs: "25px", sm: "40px" },
                                    }}
                                />
                            </IconButton>
                        </Box>
                        <Box className="flex flex-row gap-e13">
                            <Typography className="font-bold text-primary "
                                sx={{
                                    fontSize: { xs: "12px", sm: "14px" },
                                }}
                            >
                                ProMascota
                                <br />
                                recomienda:
                            </Typography>
                            <Box className="flex flex-col items-center border border-terciary rounded-b15"
                                sx={{
                                    gap: { xs: "5px", sm: "8px" },
                                    padding: { xs: "2px 3px", sm: "2px 5px" },
                                    height: { xs: "170px", sm: "190px" },
                                }}
                            >
                                <Typography className="font-bold text-primary mt-e8"
                                    sx={{
                                        fontSize: { xs: "10px", sm: "12px" },
                                    }}
                                >
                                    Pro-Can Cachorro
                                </Typography>
                                <Image src={ProductImage} alt={"producto"}
                                    style={{
                                        width: "55%",
                                        height: "45%"
                                    }}
                                />
                                <Typography className="font-bold text-primary"
                                    sx={{
                                        fontSize: { xs: "10px", sm: "12px" },
                                    }}
                                >
                                    $5
                                </Typography>
                                <Button className="bg-secondary text-white rounded w-5/6"
                                    sx={{
                                        textTransform: "none",
                                        fontSize: "10px",
                                        padding: { xs: "0px", sm: "2px" },
                                    }}
                                >
                                    Agregar al carrito
                                </Button>
                            </Box>
                        </Box>
                        {index < products.length - 1 && <hr className="my-e34 border-t border-quintenary" />}
                    </Box>
                ))}
            </Grid2>
            <Grid2 size={{ xs: 12, md: 5 }} className="flex flex-col items-center">
                <Box className="flex flex-col items-center bg-black10 pt-e21 pb-e21 rounded-b10"
                    sx={{
                        width: { xs: "80%", sm: "90%" },
                        gap: { xs: "8px", sm: "13px" },
                    }}
                >
                    <Typography className="font-bold text-primary"
                        sx={{
                            fontSize: { xs: "16px", sm: "24px" },
                        }}
                    >
                        Resumen del pedido
                    </Typography>
                    <Box className="flex flex-row border-b border-quintenary"
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            width: "80%",
                        }}
                    >
                        <Typography className="text-primary"
                            sx={{
                                fontSize: { xs: "14px", sm: "18px" },
                            }}
                        >
                            Subtotal
                        </Typography>
                        <Typography className="text-secondary"
                            sx={{
                                fontSize: { xs: "14px", sm: "18px" },
                            }}
                        >
                            $10.20
                        </Typography>
                    </Box>
                    <Box className="flex flex-row border-b border-quintenary"
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            width: "80%",
                        }}
                    >
                        <Typography className="text-primary"
                            sx={{
                                fontSize: { xs: "14px", sm: "18px" },
                            }}
                        >
                            Impuestos
                        </Typography>
                        <Typography
                            className="text-secondary"
                            sx={{
                                fontSize: { xs: "14px", sm: "18px" },
                            }}
                        >
                            $1.80
                        </Typography>
                    </Box>
                    <Box className="flex flex-row mt-e13 border-quintenary"
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            width: "80%",
                        }}
                    >
                        <Typography className="text-primary font-bold"
                            sx={{
                                fontSize: { xs: "14px", sm: "18px" },
                            }}
                        >
                            TOTAL
                        </Typography>
                        <Typography className="text-secondary font-bold"
                            sx={{
                                fontSize: { xs: "14px", sm: "18px" },
                            }}
                        >
                            $12.00
                        </Typography>
                    </Box>
                </Box>
                <Button className="bg-secondary text-white rounded-b20 mt-e21 p-e8"
                    sx={{
                        width: { xs: "80%", sm: "90%" },
                        fontSize: { xs: "14px", sm: "18px" },
                    }}
                    onClick={() => props.setActiveStep((prevActiveStep) => prevActiveStep + 1)}
                >
                    Proceder con el pago
                </Button>
            </Grid2>
        </>

    )
}
