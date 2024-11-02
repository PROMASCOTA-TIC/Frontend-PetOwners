"use client";

import { useState } from "react";
import { Resumen } from "@/app/components/cart/Resumen";
import { ArrowBack } from "@mui/icons-material";
import { Box, Button, Grid2, IconButton, Step, Stepper } from "@mui/material";

const steps = ["Resumen", "Pago"]

export default function () {
    const [activeStep, setActiveStep] = useState(0);


    const handlePay = async () => {
        const parametros = {
            amount: 840,
            amountWithoutTax: 840,
            clientTransactionId: "Pago-test-008",
            responseUrl: "http://localhost:3000/pay/response",
            cancellationUrl: "http://localhost:3000/pay/response",
        };

        try {
            const response = await fetch("https://pay.payphonetodoesposible.com/api/button/Prepare", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer PAYPHONE_TOKEN",
                },
                body: JSON.stringify(parametros),
            });

            const data = await response.json();
            console.log(data);
            window.location.href = data.payWithCard
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <Grid2 container columnSpacing={3} rowSpacing={2}>
            <Grid2 size={12}
                className="flex mt-e13 justify-center"
            >
                {activeStep === 1 && (
                    <IconButton>
                        <ArrowBack />
                    </IconButton>
                )}
                <Stepper activeStep={activeStep} alternativeLabel connector={null}
                    className="w-fit gap-e21"
                >
                    {steps.map((label, index) => (
                        <Step key={label} className="p-0 w-fit" >
                            <Box className="flex flex-col items-center w-fit" >
                                <Box className={`text-[14px] mb-e5 ${activeStep === index ? 'text-red-500 font-bold' : 'text-primary'}`}>
                                    {label}
                                </Box>
                                <Box className={`w-[140px] h-[13px] ${activeStep === index ? 'bg-terciary' : 'bg-terciary-20'}  rounded-b10`}></Box>
                            </Box>
                        </Step>
                    ))}
                </Stepper>
            </Grid2>
            {activeStep === 0 && (
                    <Resumen setActiveStep={setActiveStep} />
            )}
            <Grid2 size={12}>

            </Grid2>
            <Button variant="contained" color="primary" onClick={handlePay} >
                Pagar
            </Button>

        </Grid2>
    );
}
