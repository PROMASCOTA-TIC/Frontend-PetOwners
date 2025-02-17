"use client";

import { useShoppingCartStore } from '@/store/shoppingCartStore';
import { Box, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

export const DetallePago = () => {
    const [loaded, setLoaded] = useState(false);
    const { getSummaryInformation } = useShoppingCartStore();
    const { subtotal, tax, total } = getSummaryInformation();

    useEffect(() => {
        setLoaded(true);
    }, [])


    if (!loaded) {
        return <p>Cargando...</p>
    }

    return (
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
                    ${subtotal}
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
                    ${tax}
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
                    ${total}
                </Typography>
            </Box>
        </Box>
    )
}
