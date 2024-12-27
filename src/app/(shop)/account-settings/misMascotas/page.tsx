"use client";
import React, { useState } from "react";
import { Box, Button, TextField, MenuItem, InputAdornment, IconButton, Dialog, DialogTitle, DialogContent } from "@mui/material";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import DocumentosMascotas from "./documentosMascotas";

const storage = getStorage();

export default function Mascotas() {
    const [openDialog, setOpenDialog] = useState(false);
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [files, setFiles] = useState<string[]>([]);
    const [pets, setPets] = useState([
        {
            id: 1,
            name: "Mascota 1",
            lastVaccine: "dd/mm/yyyy",
            birthday: "dd/mm/yyyy",
        },
        {
            id: 2,
            name: "Mascota 2",
            lastVaccine: "dd/mm/yyyy",
            birthday: "dd/mm/yyyy",
        },
    ]);

    const handleOpenDialog = () => {
        setOpenDialog(true);
    };

    const handleCloseDialog = () => {
        setOpenDialog(false);
    };

    function handleAddPet() {
        const newPet = {
            id: pets.length + 1,
            name: "",
            lastVaccine: "",
            birthday: "",
        };
        setPets([...pets, newPet]);
        handleOpenDialog();
    }

    const handleOpenDocumentsDialog = () => {
        setOpenDialog(true);
    };

    return (
        <div className="flex flex-col md:flex-row gap-4 p-4 bg-[#f5f9f4]">
            {/* Sección de mascotas registradas */}
            <Box className="w-full md:w-1/3 bg-white rounded-lg shadow p-4">
                <h2 className="text-xl font-semibold mb-4">Mascotas registradas</h2>
                {pets.map((pet) => (
                    <Box
                        key={pet.id}
                        className="flex items-center justify-between p-4 mb-2 bg-[#eef6ec] rounded shadow-sm"
                    >
                        <Box>
                            <p className="font-semibold">{pet.name || "Nombre de la mascota"}</p>
                            <p>Última vacuna: {pet.lastVaccine || "dd/mm/yyyy"}</p>
                            <p>Cumpleaños: {pet.birthday || "dd/mm/yyyy"}</p>
                        </Box>
                        <Button variant="contained" color="primary" className="bg-primary">
                            Ver mascota
                        </Button>
                    </Box>
                ))}
                <Button
                    variant="contained"
                    color="success"
                    onClick={handleAddPet}
                    className="w-full bg-[#3cb371] mt-4"
                >
                    Nueva +
                </Button>
            </Box>

            {/* Sección de registro de mascotas */}
            <Box className="w-full md:w-2/3 bg-white rounded-lg shadow p-4">
                <h2 className="text-xl font-semibold mb-4">Registro de mascotas</h2>
                <div className="flex items-center justify-center mb-4">
                    <IconButton>
                        <AddPhotoAlternateIcon fontSize="large" />
                    </IconButton>
                    <IconButton>
                        <RemoveCircleOutlineIcon fontSize="large" />
                    </IconButton>
                    <Button variant="text" className="text-[#3cb371]">
                        Galería
                    </Button>
                </div>
                <h3 className="text-lg font-semibold mb-2">Información básica</h3>
                <TextField
                    label="Nombre"
                    placeholder="Ingrese el nombre de su mascota"
                    fullWidth
                    className="mb-4"
                />
                <TextField
                    select
                    label="Especie"
                    placeholder="Seleccionar"
                    fullWidth
                    className="mb-4"
                >
                    <MenuItem value="Perro">Perro</MenuItem>
                    <MenuItem value="Gato">Gato</MenuItem>
                </TextField>
                <TextField
                    select
                    label="Raza"
                    placeholder="Seleccionar"
                    fullWidth
                    className="mb-4"
                >
                    <MenuItem value="Raza 1">Raza 1</MenuItem>
                    <MenuItem value="Raza 2">Raza 2</MenuItem>
                </TextField>
                <TextField
                    label="Fecha de nacimiento"
                    placeholder="dd/mm/yyyy"
                    fullWidth
                    type="date"
                    InputLabelProps={{ shrink: true }}
                    className="mb-4"
                />
                <TextField
                    select
                    label="Género"
                    placeholder="Seleccionar"
                    fullWidth
                    className="mb-4"
                >
                    <MenuItem value="Macho">Macho</MenuItem>
                    <MenuItem value="Hembra">Hembra</MenuItem>
                </TextField>
                <TextField
                    label="Peso"
                    placeholder="Ingrese el peso en KG"
                    type="number"
                    fullWidth
                    InputProps={{
                        endAdornment: <InputAdornment position="end">KG</InputAdornment>,
                    }}
                    className="mb-4"
                />
                <TextField
                    label="Preferencias"
                    placeholder="Ingrese las preferencias de su mascota"
                    fullWidth
                    multiline
                    rows={2}
                    className="mb-4"
                />
                <h3 className="text-lg font-semibold mb-2">Información médica</h3>
                <Button
                    variant="contained"
                    color="success"
                    fullWidth
                    className="bg-[#3cb371] mb-4"
                    onClick={handleOpenDocumentsDialog}
                >
                    Gestionar
                </Button>
                <Box className="flex justify-between">
                    <Button
                        variant="outlined"
                        color="primary"
                        className="w-1/3 bg-white border-[#3cb371] text-[#3cb371]"
                    >
                        Cancelar
                    </Button>
                    <Button
                        variant="contained"
                        color="success"
                        className="w-1/3 bg-[#3cb371] text-white"
                    >
                        Guardar
                    </Button>
                    <Button
                        variant="contained"
                        color="error"
                        className="w-1/3 bg-[#e74c3c] text-white"
                    >
                        Eliminar
                    </Button>
                </Box>
            </Box>
            {
                openDialog && (
                    <DocumentosMascotas openDialog={openDialog} setOpenDialog={setOpenDialog} />
                )
            }
        </div>
    )
}