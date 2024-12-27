"use client";
import React, { useState } from "react";
import {
    Box,
    Button,
    Dialog,
    DialogContent,
    DialogTitle,
    List,
    ListItem,
    ListItemText,
    LinearProgress,
} from "@mui/material";
import {
    getStorage,
    ref,
    uploadBytesResumable,
    getDownloadURL,
} from "firebase/storage";
import { v4 as uuidv4 } from "uuid";
import app from "@/config/firebase";

const storage = getStorage(app);

interface DocumentosMascotasProps {
    openDialog: boolean;
    setOpenDialog: (open: boolean) => void;
}

const DocumentosMascotas: React.FC<DocumentosMascotasProps> = ({ openDialog, setOpenDialog }) => {
    const [selectedFile, setSelectedFile] = useState<string | null>(null);
    const [files, setFiles] = useState<string[]>([]); // Lista de URLs de archivos
    const [uploadProgress, setUploadProgress] = useState<number | null>(null);

    const handleOpenDialog = () => {
        setOpenDialog(true);
    };

    const handleCloseDialog = () => {
        setOpenDialog(false);
    };

    const handleSelectFile = (file: string) => {
        setSelectedFile(file);
    };

    const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (!file) return;

        // Validar tipo de archivo (aceptar solo PDF)
        if (file.type !== "application/pdf") {
            alert("Solo se permiten archivos PDF.");
            return;
        }

        try {
            const fileRef = ref(storage, `pets/${uuidv4()}_${file.name}`);
            const uploadTask = uploadBytesResumable(fileRef, file);

            uploadTask.on(
                "state_changed",
                (snapshot) => {
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    setUploadProgress(progress);
                },
                (error) => {
                    console.error("Error al subir el archivo:", error);
                    alert("Hubo un error al subir el archivo. Por favor, intente de nuevo.");
                    setUploadProgress(null);
                },
                async () => {
                    const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);

                    console.log("URL Archivo subido:", downloadURL);

                    setFiles((prevFiles) => [...prevFiles, downloadURL]);
                    setSelectedFile(downloadURL); // Seleccionar automáticamente el archivo subido
                    setUploadProgress(null); // Restablecer progreso
                }
            );
        } catch (error) {
            console.error("Error al procesar el archivo:", error);
        }
    };

    return (
        <div className="flex flex-col md:flex-row gap-4 p-4 bg-[#f5f9f4]">
            <Button
                variant="contained"
                color="success"
                fullWidth
                className="bg-[#3cb371] mb-4"
                onClick={handleOpenDialog}
            >
                Gestionar
            </Button>

            <Dialog
                open={openDialog}
                onClose={handleCloseDialog}
                fullWidth
                maxWidth="lg"
                className="responsive-dialog"
            >
                <DialogTitle>Gestión de Información Médica</DialogTitle>
                <DialogContent>
                    <div className="flex flex-col md:flex-row gap-4">
                        {/* Lista de archivos */}
                        <Box
                            className="md:w-1/4 bg-gray-100 rounded p-2 overflow-auto"
                            style={{ maxHeight: "500px" }}
                        >
                            <List>
                                {files.map((file, index) => (
                                    <ListItem
                                        button
                                        key={index}
                                        selected={selectedFile === file}
                                        onClick={() => handleSelectFile(file)}
                                        className="hover:bg-gray-300"
                                    >
                                        <ListItemText primary={`Archivo ${index + 1}`} />
                                    </ListItem>
                                ))}
                            </List>
                            <Button
                                variant="contained"
                                component="label"
                                fullWidth
                                className="mt-4"
                            >
                                Subir Archivo
                                <input
                                    type="file"
                                    hidden
                                    accept=".pdf"
                                    onChange={handleFileUpload}
                                />
                            </Button>
                            {uploadProgress !== null && (
                                <Box sx={{ width: "100%", mt: 2 }}>
                                    <LinearProgress variant="determinate" value={uploadProgress} />
                                    <p>{`Progreso: ${Math.round(uploadProgress)}%`}</p>
                                </Box>
                            )}
                        </Box>

                        {/* Vista previa de archivo */}
                        <Box
                            className="flex-grow bg-gray-50 rounded shadow p-4"
                            style={{ height: "500px", overflow: "auto" }}
                        >
                            {selectedFile ? (
                                <iframe
                                    src={selectedFile}
                                    title="Vista previa de archivo"
                                    width="100%"
                                    height="100%"
                                />
                            ) : (
                                <p className="text-gray-500 text-center">
                                    Seleccione un archivo para previsualizarlo.
                                </p>
                            )}
                        </Box>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default DocumentosMascotas;