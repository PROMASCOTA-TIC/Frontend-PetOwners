"use client";

import { Box, Button, Typography } from "@mui/material"
import { Icon } from '@iconify/react/dist/iconify.js'
import { v4 as uuidv4 } from "uuid";
import { useShoppingCartStore } from "@/store/shoppingCartStore";
import HttpService from "@/config/services/httpsService";
import { useEffect, useState } from "react";

export const Tarjeta = () => {
  const [loaded, setLoaded] = useState(false);
  const buyType = useShoppingCartStore((state) => state.buyType);
  const { getSummaryInformation } = useShoppingCartStore();
  const { total } = getSummaryInformation();

  const handleStartOrder = async () => {

    const createOrderData = {
      userId: "beb225c6-8b07-4324-8539-32d43d75bb79",
      homeDelivery: buyType === 'delivery' ? true : false,
      paymentMethod: "Debit Card",
      items: useShoppingCartStore.getState().cart.map((item) => {
        return {
          itemId: item.id,
          quantity: item.quantity
        }
      })
    }

    const resp = await HttpService.post('/orders', createOrderData);

  };

  useEffect(() => {
    setLoaded(true);
    // handleStartOrder();
  }, [])


  if (!loaded) {
    return <p>Cargando...</p>
  }

  const handlePay = async () => {
    // handleStartOrder();

    const parametros = {
      amount: (total * 100).toFixed(0),
      amountWithoutTax: (total * 100).toFixed(0),
      clientTransactionId: uuidv4(),
      responseUrl: "http://localhost:3000/pay/response",
      cancellationUrl: "http://localhost:3000/pay/cancellation",
      // responseUrl: "http://localhost:3000/",
      // cancellationUrl: "http://localhost:3000/",
    };

    try {
      const response = await fetch("https://pay.payphonetodoesposible.com/api/button/Prepare", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_PAYPHONE_TOKEN}`,
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
    <Box className=" bg-black10 rounded-b20 p-e21 mb-e21"
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        width: { xs: "80%", md: "60%" },
        gap: { xs: "34px", sm: "144px" }
      }}
    >
      <Box
        sx={{
          width: { xs: "100%", sm: "70%" },
        }}
      >
        <Typography className="text-secondary font-bold">
          ¡Importante!
        </Typography>
        <Typography className="text-pretty text-primary font-bold"
          sx={{ textAlign: 'justify' }}
        >
          ProMascota usa el servicio externo de PayPhone para el procesamiento de pagos mediante tarjetas de crédito o débito.
          <br />
          El pago mediante este método es completamente seguro y cuenta con monitoreo en tiempo real de todas las transacciones.
          <br />
          Para mayor información visita el sitio oficial de <a href="https://www.payphone.app/" className="text-secondary underline">Payphone</a>.
        </Typography>
      </Box>
      <Box className="flex flex-col justify-center items-center gap-e8 hover:cursor-pointer"
        sx={{
          width: { xs: "100%", sm: "30%" },
          "&:active": {
            backgroundColor: "rgba(0, 0, 0, 0.1)",
          }
        }}
        onClick={() => {
          handlePay()
        }}
      >
        <Icon icon="fluent:share-24-filled" className="size-e55 text-primary" />
        <Button className="text-white bg-primary rounded-b20 pt-1 pb-1"
          sx={{
            width: { xs: "140px", sm: "180px" },
            textTransform: "none",
          }}
        >
          Ir a pagar
        </Button>
      </Box>
    </Box>
  )
}
