"use client";
import React from "react";
import { MenuItem, FormControl, Select, InputLabel, SelectChangeEvent } from "@mui/material";

export const ZoneAndShipping = () => {
    const [delivery, setDelivery] = React.useState<string>("");
    const [sector, setSector] = React.useState<string>("");
    const [address, setAddress] = React.useState<string>("");

    const handleDeliveryChange = (event: SelectChangeEvent<string>) => {
        setDelivery(event.target.value);
    };

    const handleSectorChange = (event: SelectChangeEvent<string>) => {
        setSector(event.target.value);
    };

    const handleAddressChange = (event: SelectChangeEvent<string>) => {
        setAddress(event.target.value);
    };

    return (
        <div className="overflow-x-auto whitespace-nowrap mx-e21 my-e13">
            <div className="inline-flex gap-3 pt-e5">
                {/* Opciones de Entrega */}
                <FormControl
                    variant="outlined"
                    size="small"
                    sx={{
                        minWidth: 200,
                        maxWidth: 280,
                        borderRadius: "16px",
                        flexShrink: 0, // Evita que se reduzca el ancho en el scroll
                    }}
                >
                    <InputLabel>Opciones entrega</InputLabel>
                    <Select
                        value={delivery}
                        onChange={handleDeliveryChange}
                        label="Opciones entrega"
                    >
                        <MenuItem value="Entrega">Entrega a domicilio</MenuItem>
                        <MenuItem value="Recoger">Recoger en tiendas</MenuItem>
                    </Select>
                </FormControl>

                {/* Sector */}
                <FormControl
                    variant="outlined"
                    size="small"
                    sx={{
                        minWidth: 200,
                        maxWidth: 280,
                        borderRadius: "16px",
                        flexShrink: 0,
                    }}
                >
                    <InputLabel>Sector</InputLabel>
                    <Select
                        value={sector}
                        onChange={handleSectorChange}
                        label="Sector"
                    >
                        <MenuItem value="Norte">Norte de Quito</MenuItem>
                        <MenuItem value="Centro">Centro de Quito</MenuItem>
                        <MenuItem value="Sur">Sur de Quito</MenuItem>
                        <MenuItem value="ValleTumbaco">Valle de Tumbaco</MenuItem>
                        <MenuItem value="ValleChillos">Valle de los Chillos</MenuItem>
                    </Select>
                </FormControl>

                {/* Dirección */}
                <FormControl
                    variant="outlined"
                    size="small"
                    sx={{
                        minWidth: 200,
                        maxWidth: 280,
                        borderRadius: "16px",
                        flexShrink: 0,
                    }}
                >
                    <InputLabel>Dirección</InputLabel>
                    <Select
                        value={address}
                        onChange={handleAddressChange}
                        label="Dirección"
                    >
                        <MenuItem value="Casa">Casa</MenuItem>
                        <MenuItem value="Oficina">Oficina</MenuItem>
                    </Select>
                </FormControl>
            </div>
        </div>
    );
};
