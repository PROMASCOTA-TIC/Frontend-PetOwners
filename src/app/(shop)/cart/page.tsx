"use client";

import { useState } from "react";
import { Resumen } from "@/app/components/cart/Resumen";
import { ArrowBack, } from "@mui/icons-material";
import { Box, Grid2, IconButton, Step, Stepper } from "@mui/material";
import { Pago } from "@/app/components/cart/Pago";


const steps = ["Resumen", "Pago"]

export default function () {
    const [activeStep, setActiveStep] = useState(0);

    const handleReturnStep = () => {
        setActiveStep(activeStep - 1)
    }

    return (
        <Grid2 container columnSpacing={3} rowSpacing={2}>
            <Grid2 size={12} className="flex mt-e13 justify-center">
                {activeStep === 1 && (
                    <IconButton onClick={handleReturnStep} className="absolute"
                        sx={{
                            left: {xs: "21px", md:"55px"},
                        }}
                    >
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
            {activeStep === 1 && (
                <Pago />
            )}
        </Grid2>
    );
}
