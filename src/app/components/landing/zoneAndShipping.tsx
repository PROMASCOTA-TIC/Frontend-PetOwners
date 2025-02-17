"use client";
import React, { useState } from "react";
import { MenuItem, FormControl, Select, InputLabel, SelectChangeEvent, Tooltip } from "@mui/material";
import { useShoppingCartStore } from "@/store/shoppingCartStore";
import HttpService from "@/config/services/httpsService";
import Link from "next/link";
import NotListedLocationIcon from '@mui/icons-material/NotListedLocation';

export const ZoneAndShipping = () => {
    const [delivery, setDelivery] = React.useState<string>("");
    const [sector, setSector] = React.useState<string>("");
    const [address, setAddress] = React.useState<string>("");
    const setBuyType = useShoppingCartStore(state => state.setBuyType);
    const buyType = useShoppingCartStore(state => state.buyType);
    const [userAddress, setuserAddress] = useState([])

    const handleDeliveryChange = (event: SelectChangeEvent<string>) => {
        const value = event.target.value;
        setDelivery(event.target.value);
        // console.log(value);
        setBuyType(value);
    };

    const handleSectorChange = (event: SelectChangeEvent<string>) => {
        setSector(event.target.value);
        getDeliveryAddresses();
    };

    const handleAddressChange = (event: SelectChangeEvent<string>) => {
        setAddress(event.target.value);
    };

    const getDeliveryAddresses = async () => {
        // const userId = localStorage.getItem("petowner_id");
        const userId = "de6bcc0d-e07d-4121-aabc-3a2376eb3ee4";

        const resp = await HttpService.get("/addresses");
        const addresses = resp.data;
        console.log(addresses);

        if (addresses.length === 0) {
            return;
        } else {
            const petOwnerAddresses = addresses.filter((address: any) => address.userid === userId);
            setuserAddress(petOwnerAddresses);
        }
    };

    return (
        <div className="overflow-x-auto whitespace-nowrap mx-e21 lg:my-e13">
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
                        <MenuItem value="delivery">Entrega a domicilio</MenuItem>
                        <MenuItem value="pick-up">Recoger en tiendas</MenuItem>
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
                    disabled={buyType === "pick-up" || buyType === ""}
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
                    disabled={buyType === "pick-up" || sector === ""}
                >
                    <InputLabel>Dirección</InputLabel>
                    <Select
                        value={address}
                        onChange={handleAddressChange}
                        label="Dirección"
                    >
                        {
                            userAddress && userAddress.map((address: any) => (
                                <MenuItem key={address.id} value={address.id}>{address.addressName}</MenuItem>
                            ))
                        }
                    </Select>
                </FormControl>

                <Tooltip title="Crear una direccion" placement="right-start">
                    <Link href="/account-settings/informacionEntrega">
                        <NotListedLocationIcon className="text-aux1" fontSize="large" />
                    </Link>
                </Tooltip>
            </div>
        </div>
    );
};
