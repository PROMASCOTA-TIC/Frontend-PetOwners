"use client";
import { Button } from "@mui/material";

export default function() {
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
    <div>
      <h1>Cart Page</h1>
      <Button variant="contained" color="primary" onClick={handlePay} >
        Pagar
      </Button>
    </div>
  );
}
