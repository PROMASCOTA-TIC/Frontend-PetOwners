import { CreditCard, LocalAtm } from '@mui/icons-material'
import { Box, Button, Grid2, Typography } from '@mui/material'
import { useState } from 'react'
import { Tarjeta } from './Tarjeta'
import { Transferencia } from './Transferencia'

export const Pago = () => {
    const [payMethod, setPayMethod] = useState('')

    const handleCardMethod = async () => {
        setPayMethod('Card')
    }

    const handleTransferMethod = async () => {
        setPayMethod('Transfer')
    }

    return (
        <>
            <Grid2 size={12}>
                <Typography className="text-primary font-bold text=[24px]"
                    sx={{
                        marginLeft: { xs: "21px", sm: "55px" }
                    }}
                >
                    Seleccione un método para realizar el pago
                </Typography>
            </Grid2>
            <Grid2 size={12} justifyItems="center" className="mb-e21">
                <Box className="flex justify-center items-center bg-terciary-20 rounded-b10"
                    sx={{
                        width: { xs: "80%", md: "60%" },
                        height: { xs: "144px", sm: "164px" },
                        gap: { xs: "63px", sm: "144px" }
                    }}
                >
                    <Box className="flex flex-col justify-center items-center hover:cursor-pointer"
                        onClick={() => {
                            handleCardMethod()
                        }}
                        sx={{
                            width: { xs: "25%", sm: "25%" },
                            pointerEvents: payMethod === "Card" ? "none" : "auto",
                            opacity: payMethod === "Card" ? 0.5 : 1,
                        }}
                    >
                        <CreditCard
                            sx={{
                                width: { xs: "50px", sm: "70px" },
                                height: { xs: "50px", sm: "70px" },
                                color: payMethod === "Card" ? "#00AA28" : "#004040"
                            }}
                        />
                        <Button className="text-white rounded-b20 pt-1 pb-1"
                            sx={{
                                textTransform: "none",
                                width: { xs: "140px", sm: "180px" },
                                backgroundColor: payMethod === "Card" ? "#00AA28" : "#004040"
                            }}
                        >
                            Tarjeta
                        </Button>
                    </Box>
                    <Box className="flex flex-col justify-center items-center  hover:cursor-pointer"
                        onClick={() => {
                            handleTransferMethod()
                        }}
                        sx={{
                            width: { xs: "25%", sm: "25%" },
                            pointerEvents: payMethod === "Transfer" ? "none" : "auto",
                            opacity: payMethod === "Transfer" ? 0.5 : 1
                        }}
                    >
                        <LocalAtm
                            sx={{
                                width: { xs: "50px", sm: "70px" },
                                height: { xs: "50px", sm: "70px" },
                                color: payMethod === "Transfer" ? "#00AA28" : "#004040"
                            }}
                        />
                        <Button className="text-white rounded-b20 pt-1 pb-1"
                            sx={{
                                textTransform: "none",
                                width: { xs: "140px", sm: "180px" },
                                backgroundColor: payMethod === "Transfer" ? "#00AA28" : "#004040"
                            }}
                        >
                            Transferencia
                        </Button>
                    </Box>
                </Box>
            </Grid2>
            <Grid2 size={12} justifyItems={"center"}>
                {payMethod === 'Card' && (
                    <Tarjeta />
                )}
                {payMethod === 'Transfer' && (
                    <Transferencia />
                )}
            </Grid2>
        </>
    )
}
