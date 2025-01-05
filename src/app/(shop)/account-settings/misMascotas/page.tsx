"use client";
import React, { ChangeEvent, use, useEffect, useState } from "react";
import { Box, Button, TextField, MenuItem, InputAdornment, Grow, Slide, FormLabel, Avatar, Stack, Typography, Grid2, OutlinedInput } from "@mui/material";
import DocumentosMascotas from "./documentosMascotas";
import { RoundedPetsCard } from "@/app/components/common/roundedPetsCard";
import AddIcon from '@mui/icons-material/Add';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import { petAvatar } from "@/assets/images";
import PetsIcon from '@mui/icons-material/Pets';
import MedicalInformationIcon from '@mui/icons-material/MedicalInformation';
import dayjs, { Dayjs } from "dayjs";
import { useForm, Controller } from "react-hook-form";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { zodResolver } from "@hookform/resolvers/zod";
import { petFormSchema } from "@/validations/petFormSchema";
import { SnackbarNotifications } from "@/app/components";

type PetFormValues = {
    name: string;
    specie: string;
    breed: string;
    birthday: Dayjs | null;
    gender: string;
    weight: string;
    petPreferences: string;
}

export default function Mascotas() {
    const [openDialog, setOpenDialog] = useState(false);
    const [showForm, setShowForm] = useState(false);
    const [selectedImage, setSelectedImage] = useState<File | undefined>(undefined);
    const [avatar, setAvatar] = useState<string | undefined>(petAvatar.src);
    const [isMobile, setIsMobile] = useState(false)
    const [triggerKey, setTriggerKey] = useState(0);
    const [pets, setPets] = useState([
        {
            id: "UUID1",
            name: "Mascota 1",
            lastVaccine: "dd/mm/yyyy",
            birthday: "dd/mm/yyyy",
        },
        {
            id: "UUID2",
            name: "Mascota 2",
            lastVaccine: "dd/mm/yyyy",
            birthday: "dd/mm/yyyy",
        },
    ]);
    const { 
        register,
        handleSubmit,
        formState: { errors },
        setValue,
        control,
        reset,
    } = useForm<PetFormValues>({
        resolver: zodResolver(petFormSchema),
        mode: 'onChange',
        defaultValues: {
            name: '',
            specie: '',
            breed: '',
            // birthday: dayjs(),
            birthday: null,
            gender: '',
            weight: '',
            petPreferences: '',
        },
    });

    useEffect(() => {
        if (selectedImage) {
            setAvatar(URL.createObjectURL(selectedImage));
        }
    }, [selectedImage]);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 720);
        window.addEventListener("resize", handleResize);
        handleResize(); // Ejecutar en la primera carga
        return () => window.removeEventListener("resize", handleResize); // Limpiar
    })

    function handleAddPet() {
        const newPet = {
            id: `UUID ${pets.length + 1}`,
            name: "",
            lastVaccine: "",
            birthday: "",
        };
        setPets([...pets, newPet]);

        setShowForm(true);
    }

    const handleOpenDocumentsDialog = () => {
        setOpenDialog(true);
    };

    const handleClosePetForm = () => {
        setShowForm(false);
    };

    const isImageFile = (file: File): boolean => {
        const validImageTypes = ['image/jpeg', 'image/png'];
        return validImageTypes.includes(file.type);
    };

    const handleNewPhoto = (event: ChangeEvent<HTMLInputElement>) => {
        // setRemovePhoto(false);
        const file = event.target.files?.[0];
        if (file) {
            if (!isImageFile(file)) {
                setTriggerKey((prevKey) => prevKey + 1);
            } else {
                setSelectedImage(file);
            }
        }
    };

    const onSubmit = (data: PetFormValues) => {
        // TODO: Enviar datos al backend
        console.log(data);
        reset();
    };

    return (
        <>
            {
                openDialog && (
                    <DocumentosMascotas openDialog={openDialog} setOpenDialog={setOpenDialog} />
                )
            }

            <SnackbarNotifications
                type="error"
                message="Solo se permiten archivos de imagen en formato JPEG o PNG."
                triggerKey={triggerKey}
            />

            <div className={`${!showForm ? "flex flex-col justify-center" : "flex-row"} flex flex-col md:flex-row gap-4 p-4`}>
                {/* Sección de mascotas registradas */}
                <Slide
                    in={showForm || true}
                    direction="right"
                // mountOnEnter
                // unmountOnExit
                >
                    <Box
                        className={`w-full md:w-2/4 bg-white rounded shadow p-e13 ${isMobile && showForm ? "hidden" : ""}`}>
                        <div className="mb-e21 flex justify-items-center items-center justify-between">
                            <h2 className="font-semibold text-fs24 sm:text-fs24 md:text-fs36 lg:text-fs36">Mascotas registradas</h2>
                            <Button variant="contained" startIcon={<AddIcon />}
                                className="bg-secondary text-white h-full lg:h-[50%] rounded-b20 normal-case text-fs18 sm:text-fs14 md:text-fs18 lg:text-fs18"
                                onClick={handleAddPet}
                            >
                                Nueva
                            </Button>
                        </div>
                        <div className="grid grid-cols-1 gap-e13">
                            {
                                pets.map((pet) => (
                                    <RoundedPetsCard key={pet.id} setShowForm={setShowForm} data={pet} />
                                ))
                            }
                        </div>
                    </Box>
                </Slide>

                {/* Formulario de registro de mascotas */}
                {
                    showForm && (
                        <Grow
                            in={showForm}
                            style={{ transformOrigin: "0 0 0" }}
                            {...(showForm ? { timeout: 1000 } : {})}
                            unmountOnExit
                        >
                            <Box component="form" onSubmit={handleSubmit(onSubmit)}
                                className="w-full md:w-2/4 bg-white rounded-lg shadow p-e13"
                            >
                                <h2 className="font-semibold text-fs24 sm:text-fs24 md:text-fs36 lg:text-fs36 mb-e21">Registro de mascotas</h2>
                                <div className="flex items-center justify-center mb-e21">
                                    <FormLabel
                                        htmlFor="change-avatar"
                                        sx={{
                                            position: 'relative',
                                            borderRadius: '50%',
                                            overflow: 'hidden',
                                            '&:hover .MuiBox-root': { opacity: 1 },
                                            cursor: 'pointer'
                                        }}
                                    >
                                        <Avatar
                                            alt="Avatar foto perfil mascota"
                                            src={avatar}
                                            sx={{
                                                width: { xs: 124, sm: 124, md: 160, lg: 160 },
                                                height: { xs: 124, sm: 124, md: 160, lg: 160 },
                                            }}
                                            className="border-dashed border-secondary border-2"
                                        />
                                        <Box
                                            sx={{
                                                position: 'absolute',
                                                top: 0,
                                                left: 0,
                                                background: 'rgba(0,0,0,.65)',
                                                width: '100%',
                                                height: '100%',
                                                opacity: 0,
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center'
                                            }}
                                        >
                                            <Stack spacing={0.5} alignItems="center">
                                                <AddAPhotoIcon className="size-8 text-white" />
                                                <Typography className="text-white">Cargar foto</Typography>
                                            </Stack>
                                        </Box>
                                    </FormLabel>
                                    <TextField
                                        type="file"
                                        id="change-avatar"
                                        placeholder="Outlined"
                                        variant="outlined"
                                        sx={{ display: 'none' }}
                                        // onChange={(e: ChangeEvent<HTMLInputElement>) => setSelectedImage(e.target.files?.[0])}
                                        onChange={handleNewPhoto}
                                    />
                                </div>
                                <h3 className="font-bold text-black text-fs18 sm:text-fs18 md:text-fs24 lg:text-fs24 mb-e13">Información básica</h3>

                                <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="es">
                                    <Grid2 container columnSpacing="13px" rowSpacing="13px">
                                        <Grid2 size={{ xs: 12, sm: 12, md: 6, lg: 6 }} sx={{ width: "100%" }}>
                                            <div className='flex flex-col'>
                                                <FormLabel htmlFor="name"
                                                    className='mb-e8 font-semibold text-black text-fs18 sm:text-fs18 md:text-fs24 lg:text-fs24'
                                                >
                                                    Nombre
                                                </FormLabel>
                                                <TextField
                                                    id="name"
                                                    error={!!errors.name}
                                                    placeholder="Ingrese el nombre de su mascota"
                                                    fullWidth
                                                    {...register('name')}
                                                />
                                                {errors.name?.message &&
                                                    <p className="text-red-500">{errors.name.message.toString()}</p>
                                                }
                                            </div>
                                        </Grid2>
                                        <Grid2 size={{ xs: 12, sm: 12, md: 6, lg: 6 }} sx={{ width: "100%" }}>
                                            <div className='flex flex-col'>
                                                <FormLabel htmlFor="specie"
                                                    className='mb-e8 font-semibold text-black text-fs18 sm:text-fs18 md:text-fs24 lg:text-fs24'
                                                >
                                                    Especie
                                                </FormLabel>
                                                <TextField
                                                    id="specie"
                                                    select
                                                    error={!!errors.specie}
                                                    placeholder="Seleccionar"
                                                    fullWidth
                                                    // value={}
                                                    {...register('specie', { required: 'Seleccione una especie' })}
                                                >
                                                    <MenuItem value="Perro">Perro</MenuItem>
                                                    <MenuItem value="Gato">Gato</MenuItem>
                                                </TextField>
                                                {errors.specie?.message &&
                                                    <p className="text-red-500">{errors.specie.message.toString()}</p>
                                                }
                                            </div>
                                        </Grid2>

                                        <Grid2 size={{ xs: 12, sm: 12, md: 6, lg: 6 }} sx={{ width: "100%" }}>
                                            <div className='flex flex-col'>
                                                <FormLabel htmlFor="breed"
                                                    className='mb-e8 font-semibold text-black text-fs18 sm:text-fs18 md:text-fs24 lg:text-fs24'
                                                >
                                                    Raza
                                                </FormLabel>
                                                <TextField
                                                    id="breed"
                                                    select
                                                    error={!!errors.breed}
                                                    placeholder="Seleccionar"
                                                    fullWidth
                                                    {...register('breed')}
                                                >
                                                    <MenuItem value="Raza 1">Raza 1</MenuItem>
                                                    <MenuItem value="Raza 2">Raza 2</MenuItem>
                                                </TextField>
                                                {errors.breed?.message &&
                                                    <p className="text-red-500">{errors.breed.message.toString()}</p>
                                                }
                                            </div>
                                        </Grid2>
                                        <Grid2 size={{ xs: 12, sm: 12, md: 6, lg: 6 }} sx={{ width: "100%" }}>
                                            <div className='flex flex-col'>
                                                <FormLabel htmlFor="birthday"
                                                    className='mb-e8 font-semibold text-black text-fs18 sm:text-fs18 md:text-fs24 lg:text-fs24'
                                                >
                                                    Fecha de nacimiento
                                                </FormLabel>
                                                <Controller
                                                    name="birthday"
                                                    control={control}
                                                    render={({ field }) => (
                                                        <DatePicker
                                                            {...field}
                                                            value={field.value}
                                                            onChange={(date: Dayjs | null) => {
                                                                if (date) {
                                                                    setValue('birthday', date, { shouldValidate: true });
                                                                }
                                                            }}
                                                            slotProps={{
                                                                textField: {
                                                                    error: !!errors.birthday,
                                                                    helperText: errors.birthday?.message,
                                                                    fullWidth: true,
                                                                },
                                                            }}
                                                        />
                                                    )}
                                                />
                                            </div>
                                        </Grid2>

                                        <Grid2 size={{ xs: 12, sm: 12, md: 6, lg: 6 }} sx={{ width: "100%" }}>
                                            <div className='flex flex-col'>
                                                <FormLabel htmlFor="gender"
                                                    className='mb-e8 font-semibold text-black text-fs18 sm:text-fs18 md:text-fs24 lg:text-fs24'
                                                >
                                                    Género
                                                </FormLabel>
                                                <TextField
                                                    id="gender"
                                                    select
                                                    error={!!errors.gender}
                                                    placeholder="Seleccionar"
                                                    fullWidth
                                                    {...register('gender')}
                                                >
                                                    <MenuItem value="Macho">Macho</MenuItem>
                                                    <MenuItem value="Hembra">Hembra</MenuItem>
                                                </TextField>
                                                {errors.gender?.message &&
                                                    <p className="text-red-500">{errors.gender.message.toString()}</p>}
                                            </div>
                                        </Grid2>
                                        <Grid2 size={{ xs: 12, sm: 12, md: 6, lg: 6 }} sx={{ width: "100%" }}>
                                            <div className='flex flex-col'>
                                                <FormLabel htmlFor="weigth"
                                                    className='mb-e8 font-semibold text-black text-fs18 sm:text-fs18 md:text-fs24 lg:text-fs24'
                                                >
                                                    Peso
                                                </FormLabel>
                                                <OutlinedInput
                                                    id="weigth"
                                                    error={!!errors.weight}
                                                    placeholder="Ingrese el peso en KG"
                                                    fullWidth
                                                    endAdornment={<InputAdornment position="end">KG</InputAdornment>}
                                                    aria-describedby="outlined-weight-helper-text"
                                                    inputProps={{
                                                        'aria-label': 'peso',
                                                    }}
                                                    {...register('weight')}
                                                />
                                                {errors.weight?.message &&
                                                    <p className="text-red-500">{errors.weight.message.toString()}</p>}
                                            </div>
                                        </Grid2>

                                        <Grid2 size={{ xs: 12, sm: 12, md: 6, lg: 6 }} sx={{ width: "100%" }}>
                                            <div className='flex flex-col'>
                                                <FormLabel htmlFor="petPreferences"
                                                    className='mb-e8 font-semibold text-black text-fs18 sm:text-fs18 md:text-fs24 lg:text-fs24'
                                                >
                                                    Preferencias
                                                </FormLabel>
                                                <TextField
                                                    id="petPreferences"
                                                    error={!!errors.petPreferences}
                                                    placeholder="Ingrese las preferencias de su mascota"
                                                    fullWidth
                                                    multiline
                                                    rows={2}
                                                    {...register('petPreferences')}
                                                />
                                                {errors.petPreferences?.message &&
                                                    <p className="text-red-500">{errors.petPreferences.message.toString()}</p>}
                                            </div>
                                        </Grid2>
                                        <Grid2 size={{ xs: 12, sm: 12, md: 6, lg: 6 }} sx={{ width: "100%" }}>
                                            <div className='flex flex-col h-full'>
                                                <FormLabel htmlFor="medicalInformation"
                                                    className='mb-e8 font-semibold text-black text-fs18 sm:text-fs18 md:text-fs24 lg:text-fs24'
                                                >
                                                    Informacion médica
                                                </FormLabel>
                                                <Button
                                                    id="medicalInformation"
                                                    variant="outlined"
                                                    startIcon={<MedicalInformationIcon />}
                                                    endIcon={<PetsIcon />}
                                                    fullWidth
                                                    className="text-primary hover:bg-secondary hover:text-white font-bold text-fs18 h-full border-solid border-[#c4c4c4]"
                                                    sx={{ background: "linear-gradient(to right, #46DA6933, #F6CBD9)" }}
                                                    onClick={handleOpenDocumentsDialog}
                                                >
                                                    Gestionar
                                                </Button>
                                            </div>
                                        </Grid2>
                                    </Grid2>
                                </LocalizationProvider>

                                <Box className="w-full mt-e21 mb-e13 flex justify-between gap-e13">
                                    <Button
                                        variant="contained"
                                        className="w-1/3 bg-primary text-white h-full lg:h-[50%] rounded-b20 normal-case text-fs18 sm:text-fs18 md:text-fs24 lg:text-fs24"
                                        onClick={handleClosePetForm}
                                    >
                                        Cancelar
                                    </Button>
                                    <Button
                                        type="submit"
                                        variant="contained"
                                        className="w-1/3 bg-secondary text-white h-full lg:h-[50%] rounded-b20 normal-case text-fs18 sm:text-fs18 md:text-fs24 lg:text-fs24"
                                    >
                                        Guardar
                                    </Button>
                                    <Button
                                        variant="contained"
                                        color="error"
                                        className="w-1/3 bg-red text-white h-full lg:h-[50%] rounded-b20 normal-case text-fs18 sm:text-fs18 md:text-fs24 lg:text-fs24"
                                    >
                                        Eliminar
                                    </Button>
                                </Box>
                            </Box>
                        </Grow>
                    )
                }
            </div>
        </>
    )
}