import { Box, Button, Typography } from "@mui/material"
import { Icon } from '@iconify/react/dist/iconify.js'

export const Tarjeta = () => {

  const handlePay = async () => {
    const parametros = {
      amount: 840,
      amountWithoutTax: 840,
      clientTransactionId: "Pago-test-009",
      responseUrl: "http://localhost:3000/pay/response",
      cancellationUrl: "http://localhost:3000/pay/response",
    };

    try {
      const response = await fetch("https://pay.payphonetodoesposible.com/api/button/Prepare", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Authorization: "Bearer PAYPHONE_TOKEN",
          Authorization: "Bearer H4SGNk5GKAT9rgLaNuBIHJSvzG1FtJDzTQJ3gtGQ5D7qj2Iwe7RGmIN2WV2uL-8-JFslftvP2e7ZVKYEXHQXvTdiSFONzir_RQyKi1p6x0cKU-vtLl3ro01_ND6Smn-0x9RIPUFHlMAJ59iAP-Q53f9l5c4iijGMwgmVMcx1bAUL-kLGn-OVLaaRASzlEUWU5knN6uz1F1B3UYe_TaGq5zqFJpr5Q9kd8tJRntDZ24SHhCMNWdxKQRT2KfG7rJtDeqRVHSbF0m-hisW7aUGZXH-RQHYYfe8H1qPxVl-Ft1gkYbvw41YsCd7QmrylocaLySYj0A",
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
