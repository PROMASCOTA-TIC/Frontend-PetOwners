import React from 'react'
import { productImage } from '@/assets/images'
import { DeleteOutline } from '@mui/icons-material'
import { Box, Grid2, Typography, Button, IconButton } from '@mui/material'
import Image from 'next/image'
import ArtTrackIcon from '@mui/icons-material/ArtTrack';

interface RoundedPetsCardProps {
    setShowForm: (show: boolean) => void;
    data: {
        id: string;
        name: string;
        lastVaccine: string;
        birthday: string;
    };
}

export const RoundedPetsCard: React.FC<RoundedPetsCardProps> = ({ setShowForm, data }) => {
    const handleViewPetInfo = (id: string) => {
        // TODO: Hacer la consulta de toda la data de la mascota seleccionada para mostrar en el form
        console.log("Info de la mascota con id: ", id);
        setShowForm(true);
    };

    return (
        <div>
            <Box
                className="flex flex-row gap-e5"
            >
                <Grid2
                    className="bg-terciary-20 flex items-center rounded-tl-b20 rounded-bl-b20"
                    sx={{
                        width: { xs: "340px", sm: "640px" },
                        height: { xs: "113px", sm: "173px" },
                        gap: { xs: "8px", sm: "21px" },
                        background: "linear-gradient(to right, #46DA6933, #F6CBD9)"
                    }}
                >
                    <Box
                        sx={{
                            marginLeft: { xs: "13px", sm: "21px" },
                        }}
                    >
                        <Image src={productImage} alt={"Producto"}
                            style={{
                                height: "75%",
                            }}
                        />
                    </Box>
                    <Box className="flex flex-col"
                        sx={{
                            gap: { xs: "3px", sm: "8px" },
                        }}
                    >
                        <Typography className="text-secondary font-bold"
                            sx={{
                                fontSize: { xs: "12px", sm: "18px" },
                            }}
                        >
                            {data.name}
                        </Typography>
                        <Typography className="text-primary font-bold"
                            sx={{
                                fontSize: { xs: "12px", sm: "18px" },
                                display: "block",
                                overflow: "visible",
                                whiteSpace: "normal",
                                overflowWrap: "break-word",
                            }}
                        >
                            Ultima vacuna: {data.lastVaccine}
                        </Typography>
                        <Typography className="text-primary"
                            sx={{
                                fontSize: { xs: "10px", sm: "14px" }
                            }}
                        >
                            Cumpleaños: {data.birthday}
                        </Typography>
                    </Box>
                </Grid2>
                <IconButton
                    className="bg-primary  flex flex-col justify-center items-center rounded-none 
                                rounded-tr-b20 rounded-br-b20 text-white hover:bg-white hover:text-primary 
                                hover:shadow hover:shadow-primary"
                    sx={{
                        width: { xs: "66px", sm: "99px" },
                        height: { xs: "113px", sm: "173px" },
                        gap: { xs: "5px", sm: "13px" },
                    }}
                    onClick={() => { handleViewPetInfo(data.id) }}
                >
                    <Typography className=" text-center font-bold"
                        sx={{
                            fontSize: { xs: "12px", sm: "18px" },
                        }}
                    >
                        Ver mascota
                    </Typography>
                    <ArtTrackIcon
                        sx={{
                            width: { xs: "25px", sm: "40px" },
                            height: { xs: "25px", sm: "40px" },
                        }}
                    />
                </IconButton>
            </Box>
        </div>
    )
}
