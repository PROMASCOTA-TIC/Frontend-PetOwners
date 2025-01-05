"use client";
import React, { useState } from "react";
import {
    Box,
    Button,
    Dialog,
    DialogContent,
    DialogTitle,
    DialogActions,
} from "@mui/material";
import {
    getStorage,
    ref,
    uploadBytesResumable,
    getDownloadURL,
} from "firebase/storage";
import { v4 as uuidv4 } from "uuid";
import app from "@/config/firebase";
import { FileCard, SnackbarNotifications } from "@/app/components";
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import LoadingButton from '@mui/lab/LoadingButton';
import SaveIcon from '@mui/icons-material/Save';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

const storage = getStorage(app);

interface DocumentosMascotasProps {
    openDialog: boolean;
    setOpenDialog: (open: boolean) => void;
}

type NewFileProps = {
    fileName: string;
    file: File;
};

enum NotificationType {
    Info = "info",
    Success = "success",
    Error = "error",
    Warning = "warning",
}

const petFiles = [
    {
        fileId: "1",
        fileName: "Archivo 1",
        fileUrl: "https://firebasestorage.googleapis.com/v0/b/mypet-d1ea5.appspot.com/o/PetOwners%2Fpets%2Fdocuments86d889e1-1a48-4799-bb6d-e1b9acffcca7_nest-cheatsheet.pdf?alt=media&token=2db3fde7-6bc7-4d31-8c6f-966f6c2cf057",
    },
    {
        fileId: "2",
        fileName: "Archivo 2",
        fileUrl: "https://firebasestorage.googleapis.com/v0/b/mypet-d1ea5.appspot.com/o/PetOwners%2Fpets%2Fdocuments23a5e9c0-5767-4819-a631-418eef50b290_ux-infographic-en.pdf?alt=media&token=f8c3d1a1-5967-4a09-bff4-559e9ab3229b",
    },
    {
        fileId: "3",
        fileName: "Archivo 3",
        fileUrl: "https://firebasestorage.googleapis.com/v0/b/mypet-d1ea5.appspot.com/o/PetOwners%2Fpets%2Fdocuments86d889e1-1a48-4799-bb6d-e1b9acffcca7_nest-cheatsheet.pdf?alt=media&token=2db3fde7-6bc7-4d31-8c6f-966f6c2cf057",
    },
];

const DocumentosMascotas: React.FC<DocumentosMascotasProps> = ({ openDialog, setOpenDialog }) => {
    const [selectedFile, setSelectedFile] = useState<string | null>(null);
    const [files, setFiles] = useState<Object[]>([]); // Usar para guardar los archivos que devuelve el backend
    const [newFiles, setNewFiles] = useState<NewFileProps[]>([])
    const [notificationType, setNotificationType] = useState<NotificationType>(NotificationType.Info);
    const [notificationMessage, setNotificationMessage] = useState("");
    const [triggerKey, setTriggerKey] = useState(0);
    const [loading, setLoading] = useState(false);

    const handleCloseDialog = () => {
        setOpenDialog(false);
        setSelectedFile(null);
        setFiles([]);
        setNewFiles([]);
        setNotificationType(NotificationType.Info);
        setNotificationMessage("");
        setTriggerKey(0);
    };

    const handleAddFile = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const fileUploaded = event.target.files?.[0];

        if (!fileUploaded) return;

        // Validar tipo de archivo (aceptar solo PDF)
        if (fileUploaded.type !== "application/pdf") {
            setNotificationType(NotificationType.Error);
            setNotificationMessage("Formato de archivo no permitido. Solo cargar .PDF");
            setTriggerKey((prevKey) => prevKey + 1);
        } else {
            const newFile = {
                fileName: fileUploaded.name,
                file: fileUploaded,
            };

            setNewFiles((prevFiles) => [...prevFiles, newFile]);
            setSelectedFile(URL.createObjectURL(fileUploaded));
        }
    }

    const handleViewFile = (fileUrl: string) => {
        setSelectedFile(fileUrl);
    }

    const handleDeleteFile = (fileId: string) => {
        // TODO: Eliminar archivo del backend
        console.log("Eliminar archivo con ID:", fileId);
        setSelectedFile(null);
    }

    const handleDeleteFileLocal = (name: string) => {
        setNewFiles((prevFiles) => prevFiles.filter((file) => file.fileName !== name));
        setSelectedFile(null);
    }

    // TODO: Luego de esto enviar a guardar los archivos al backend
    const handleUploadFiles = async () => {
        if (newFiles.length === 0) return;

        setLoading(true);
        try {
            let uploadedFilesURL: { fileName: string; fileUrl: string }[] = [];

            for (let i = 0; i < newFiles.length; i++) {
                const file = newFiles[i].file;
                const fileRef = ref(storage, `PetOwners/pets/documents${uuidv4()}_${file.name}`);
                const uploadTask = uploadBytesResumable(fileRef, file);

                uploadTask.on(
                    "state_changed",
                    (snapshot) => {
                        // const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                        // setUploadProgress(progress);
                    },
                    (error) => {
                        setNotificationType(NotificationType.Error);
                        setNotificationMessage("Error al guardar los archivos, intente de nuevo");
                        setTriggerKey((prevKey) => prevKey + 1);
                    },
                    async () => {
                        const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);

                        const newFile = {
                            fileName: file.name,
                            fileUrl: downloadURL,
                        };

                        uploadedFilesURL.push(newFile);
                    });
            }

            console.log("Archivos subidos:", uploadedFilesURL);
            setLoading(false);
            setOpenDialog(false);
        } catch (error) {
            console.error("Error al subir los archivos:", error);

            setLoading(false);
            setNotificationType(NotificationType.Error);
            setNotificationMessage("No se pudo guardar los archivos");
            setTriggerKey((prevKey) => prevKey + 1);
        }
    };

    return (
        <>
            <SnackbarNotifications
                type={notificationType}
                message={notificationMessage}
                triggerKey={triggerKey}
            />

            <div className="flex flex-col md:flex-row gap-4 p-4 bg-[#f5f9f4]">
                <Dialog
                    open={openDialog}
                    // onClose={handleCloseDialog}
                    disableEscapeKeyDown
                    fullWidth
                    maxWidth="lg"
                    className="responsive-dialog"
                >
                    <DialogTitle className="bg-primary text-white font-semibold text-fs18 sm:text-fs18 md:text-fs24 lg:text-fs24">
                        Gestión de Información Médica
                    </DialogTitle>
                    <DialogContent className="mt-e8">
                        <div className="flex flex-col md:flex-row gap-4">
                            {/* Lista de archivos */}
                            <Box
                                className="md:w-1/4 bg-gray-100 rounded p-2 overflow-auto"
                                style={{ maxHeight: "500px" }}
                            >
                                <Button
                                    variant="outlined"
                                    component="label"
                                    startIcon={<NoteAddIcon />}
                                    fullWidth
                                    className="my-e5 text-primary border border-primary hover:bg-secondary hover:text-white 
                                        hover:border-white rounded-b20 normal-case text-fs14 sm:text-fs14 md:text-fs18 lg:text-fs18"
                                >
                                    Subir documento
                                    <input
                                        type="file"
                                        hidden
                                        accept=".pdf"
                                        onChange={handleAddFile}
                                    />
                                </Button>

                                <div className="flex flex-col gap-e8">
                                    {petFiles.map((file, index) => (
                                        <FileCard
                                            key={index}
                                            fileId={file.fileId}
                                            fileName={file.fileName}
                                            fileUrl={file.fileUrl}
                                            onView={handleViewFile}
                                            onDelete={handleDeleteFile}
                                        />
                                    ))
                                    }

                                    {newFiles.length > 0 && newFiles.map((file, index) => (
                                        <FileCard
                                            key={index}
                                            fileName={file.fileName}
                                            fileUrl={URL.createObjectURL(file.file)}
                                            onView={handleViewFile}
                                            onDelete={handleDeleteFileLocal}
                                        />
                                    ))}
                                </div>
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
                    <DialogActions className="pt-0 mr-e34">
                        <Button variant="contained" onClick={handleCloseDialog} startIcon={<HighlightOffIcon />}
                            className="bg-primary hover:bg-secondary text-white rounded-b20 normal-case 
                            text-fs14 sm:text-fs14 md:text-fs18 lg:text-fs18"
                        >
                            Cerrar
                        </Button>
                        <LoadingButton variant="contained" loading={loading} loadingPosition="start" startIcon={<SaveIcon />}
                            className="bg-primary hover:bg-secondary text-white rounded-b20 
                            normal-case text-fs14 sm:text-fs14 md:text-fs18 lg:text-fs18"
                            onClick={handleUploadFiles}
                        >
                            Guardar
                        </LoadingButton>
                    </DialogActions>
                </Dialog>
            </div>
        </>
    );
};

export default DocumentosMascotas;