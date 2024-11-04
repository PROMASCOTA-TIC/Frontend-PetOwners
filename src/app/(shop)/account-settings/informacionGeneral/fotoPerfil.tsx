import React, { useState, ChangeEvent } from 'react';
import Image from 'next/image';
import { userImg } from '@/assets/images';
import { Box, Button, Snackbar, styled } from '@mui/material';

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});

export const FotoPerfil: React.FC = () => {
    const [userPhoto, setUserPhoto] = useState<string | null>(null);
    const [removePhoto, setRemovePhoto] = useState<boolean>(false);
    const [state, setState] = useState<{
        open: boolean;
        vertical: 'top' | 'bottom';
        horizontal: 'left' | 'center' | 'right';
    }>({
        open: false,
        vertical: 'top',
        horizontal: 'center',
    });
    const { vertical, horizontal, open } = state;

    const handleClose = () => {
        setState({ ...state, open: false });
    };

    const isImageFile = (file: File): boolean => {
        const validImageTypes = ['image/jpeg', 'image/png'];
        return validImageTypes.includes(file.type);
    };

    const handleRemovePhoto = () => {
        setRemovePhoto(true);
        setUserPhoto(null); // Limpia la imagen seleccionada
    };

    const handleNewPhoto = (event: ChangeEvent<HTMLInputElement>) => {
        setRemovePhoto(false);
        const file = event.target.files?.[0];
        if (file) {
            if (!isImageFile(file)) {
                // Abre el Snackbar si el archivo no es válido
                setState({ ...state, open: true, vertical: 'top', horizontal: 'right' });
                return;
            }
            const photoURL = URL.createObjectURL(file);
            setUserPhoto(photoURL);
        }
    };

    return (
        <>
            <div className="flex flex-col items-center mt-e8">
                <Image
                    src={removePhoto || !userPhoto ? userImg : userPhoto}
                    alt="Foto de perfil del dueño de la mascota"
                    style={{ width: "60%", height: "60%" }}
                    className="rounded-full border-2 border-primary-40"
                    width={100}
                    height={100}
                />
                <div className="flex sm:flex-col">
                    <Button
                        variant="text"
                        component="label"
                        className="text-secondary normal-case mt-e8 font-semibold text-fs18 sm:text-fs18 md:text-fs24 lg:text-fs24"
                    >
                        Actualizar foto
                        <VisuallyHiddenInput
                            type="file"
                            accept=".jpg, .jpeg, .png"
                            onChange={handleNewPhoto}
                        />
                    </Button>
                    <Button
                        variant="text"
                        className="text-secondary normal-case mt-e8 font-semibold text-fs18 sm:text-fs18 md:text-fs24 lg:text-fs24"
                        onClick={handleRemovePhoto}
                    >
                        Quitar foto
                    </Button>
                </div>
            </div>
            <Box sx={{ width: 500 }}>
                <Snackbar
                    anchorOrigin={{ vertical, horizontal }}
                    open={open}
                    onClose={handleClose}
                    message="El archivo seleccionado no es una imagen válida."
                    key={vertical + horizontal}
                    autoHideDuration={4000} // Opcional: Especifica la duración
                />
            </Box>
        </>
    );
};