"use cliente";

import { useState } from "react"
import { AccountBalance, DoDisturb, Image, PriceCheck } from "@mui/icons-material"
import { Box, Button, Card, CardContent, CardMedia, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, styled, Typography } from "@mui/material"

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

const isImageValid = (file: File): boolean => {
    const validImageTypes = ['image/jpeg', 'image/png'];
    const maxSizeInMB = 3;
    return validImageTypes.includes(file.type) && file.size <= maxSizeInMB * 1024 * 1024;
};

export const Transferencia = () => {
    const [verifyPayment, setVerifyPayment] = useState(false)
    const [accountName, setAccountName] = useState("")
    const [file, setFile] = useState<File | null>(null);
    const [error, setError] = useState<string>("");
    const [open, setOpen] = useState<boolean>(false);

    const handleClose = () => {
        setOpen(false);
    };

    const handleVerifyPayment = (isVerified: boolean) => {
        setVerifyPayment(isVerified);
    }

    const handleAcountName = (name: string) => {
        setAccountName(name);
    }

    return (
        <Box className="flex flex-col gap-e13 bg-black10 rounded-b20 p-e21 mb-e21"
            sx={{
                width: "80%",
            }}
        >
            {accountName === "" &&
                <>
                    <Box className="flex flex-row">
                        <Typography className="text-secondary font-bold"
                            sx={{
                                fontSize: { xs: "14px", md: "16px" },
                            }}
                        >
                            NOTA:&nbsp;
                        </Typography>
                        <Typography className="text-primary font-bold"
                            sx={{
                                fontSize: { xs: "14px", md: "16px" },
                            }}
                        >
                            Se recomienda no hacer transferencias interbancarias con la finalidad de agilizar la verificación de los pagos.
                        </Typography>
                    </Box>
                    <Typography className="text-primary font-bold"
                        sx={{
                            fontSize: { xs: "14px", md: "16px" },
                        }}
                    >
                        Realice la transferencia en alguna de las siguientes cuentas bancarias:
                    </Typography>
                </>
            }
            {(accountName === "Pichincha" || accountName === "Produbanco") &&
                <Typography className="text-primary font-bold">
                    Cuenta seleccionada:
                </Typography>
            }
            {(accountName === "" || accountName === "Pichincha") &&
                <Box className="flex flex-col items-center">
                    <Box className="bg-terciary-20 rounded-b20"
                        sx={{
                            width: "80%",
                            display: "flex",
                            flexDirection: { xs: "column", md: "row" },
                            justifyContent: { xs: "center" },
                            alignItems: { xs: "center" },
                            gap: { xs: "21px", md: "0" },
                            padding: { xs: "8px 13px", md: "21px 34px" },
                        }}
                    >
                        <Box>
                            <AccountBalance className="text-primary mr-e34"
                                sx={{
                                    width: { xs: "70px", md: "160px" },
                                    height: { xs: "70px", md: "160px" },
                                }}
                            />
                        </Box>
                        <Box className="flex flex-col gap-e5 items-start mr-e55">
                            <Typography className="text-secondary font-bold"
                                sx={{
                                    fontSize: { xs: "14px", md: "16px" },
                                }}
                            >
                                Nombre del banco
                            </Typography>
                            <Typography className="text-primary font-bold"
                                sx={{
                                    fontSize: { xs: "14px", md: "16px" },
                                }}
                            >
                                Tipo de cuenta: Ahorros
                            </Typography>
                            <Typography className="text-primary font-bold"
                                sx={{
                                    fontSize: { xs: "14px", md: "16px" },
                                }}
                            >
                                Número de cuenta: 9999999999
                            </Typography>
                            <Typography className="text-primary font-bold"
                                sx={{
                                    fontSize: { xs: "14px", md: "16px" },
                                }}
                            >
                                Nombre del propietario: Nombre Apellido
                            </Typography>
                            <Typography className="text-primary font-bold"
                                sx={{
                                    fontSize: { xs: "14px", md: "16px" },
                                }}
                            >
                                Identificación: 9999999999
                            </Typography>
                            <Typography className="text-primary font-bold"
                                sx={{
                                    fontSize: { xs: "14px", md: "16px" },
                                }}
                            >
                                Correo electrónico: correo@correo.com
                            </Typography>
                        </Box>
                        <Box className="flex flex-col items-center justify-center hover:cursor-pointer active:bg-black10"
                            sx={{
                                marginLeft: { xs: "0", md: "144px" },
                            }}
                        >
                            {verifyPayment === false &&
                                <Box className="flex flex-col items-center"
                                    onClick={() => {
                                        handleAcountName("Pichincha");
                                        handleVerifyPayment(true)
                                    }}
                                >
                                    <PriceCheck className="text-primary"
                                        sx={{
                                            width: { xs: "40px", sm: "70px" },
                                            height: { xs: "40px", sm: "70px" },
                                        }}
                                    />
                                    <Button className="bg-primary text-white rounded-b20 ps-e13 pe-e13"
                                        sx={{
                                            textTransform: "none"
                                        }}
                                    >
                                        Verificar Pago
                                    </Button>
                                </Box>
                            }
                            {verifyPayment === true &&
                                <Box className="flex flex-col items-center hover:cursor-pointer"
                                    onClick={() => { setOpen(true); }}
                                >
                                    <DoDisturb className="text-primary"
                                        sx={{
                                            width: { xs: "40px", sm: "70px" },
                                            height: { xs: "40px", sm: "70px" },
                                        }}
                                    />
                                    <Button className="bg-primary text-white rounded-b20 ps-e34 pe-e34"
                                        sx={{
                                            textTransform: "none",
                                            fontSize: { xs: "14px", md: "16px" }
                                        }}
                                    >
                                        Cancelar
                                    </Button>
                                </Box>
                            }
                            <Dialog
                                open={open}
                                onClose={handleClose}
                            >
                                <DialogTitle id="alert-dialog-title" className="bg-primary p-e13 text-white">ProMascota</DialogTitle>
                                <DialogContent>
                                    <DialogContentText id="alert-dialog-description" className="mt-e21 text-black font-bold">
                                        ¿Está seguro de realizar está acción?
                                    </DialogContentText>
                                </DialogContent>
                                <DialogActions>
                                    <Button className="bg-secondary text-white"
                                        onClick={() => { handleVerifyPayment(false); handleAcountName(""); setFile(null); handleClose() }}
                                        autoFocus
                                        sx={{
                                            textTransform: "none"
                                        }}
                                    >
                                        Si
                                    </Button>
                                    <Button className="bg-primary text-white"
                                        onClick={handleClose}
                                        sx={{
                                            textTransform: "none"
                                        }}
                                    >
                                        No
                                    </Button>
                                </DialogActions>
                            </Dialog>
                        </Box>
                    </Box>
                </Box>
            }
            {(accountName === "" || accountName === "Produbanco") &&
                <Box className="flex flex-col items-center">
                    <Box className="bg-terciary-20 rounded-b20"
                        sx={{
                            width: "80%",
                            display: "flex",
                            flexDirection: { xs: "column", md: "row" },
                            justifyContent: { xs: "center" },
                            alignItems: { xs: "center" },
                            gap: { xs: "21px", md: "0" },
                            padding: { xs: "8px 13px", md: "21px 34px" },
                        }}
                    >
                        <Box>
                            <AccountBalance className="text-primary mr-e34"
                                sx={{
                                    width: { xs: "70px", md: "160px" },
                                    height: { xs: "70px", md: "160px" },
                                }}
                            />
                        </Box>
                        <Box className="flex flex-col gap-e5 items-start mr-e55">
                            <Typography className="text-secondary font-bold"
                                sx={{
                                    fontSize: { xs: "14px", md: "16px" },
                                }}
                            >
                                Nombre del banco
                            </Typography>
                            <Typography className="text-primary font-bold"
                                sx={{
                                    fontSize: { xs: "14px", md: "16px" },
                                }}
                            >
                                Tipo de cuenta: Ahorros
                            </Typography>
                            <Typography className="text-primary font-bold"
                                sx={{
                                    fontSize: { xs: "14px", md: "16px" },
                                }}
                            >
                                Número de cuenta: 9999999999
                            </Typography>
                            <Typography className="text-primary font-bold"
                                sx={{
                                    fontSize: { xs: "14px", md: "16px" },
                                }}
                            >
                                Nombre del propietario: Nombre Apellido
                            </Typography>
                            <Typography className="text-primary font-bold"
                                sx={{
                                    fontSize: { xs: "14px", md: "16px" },
                                }}
                            >
                                Identificación: 9999999999
                            </Typography>
                            <Typography className="text-primary font-bold"
                                sx={{
                                    fontSize: { xs: "14px", md: "16px" },
                                }}
                            >
                                Correo electrónico: correo@correo.com
                            </Typography>
                        </Box>
                        <Box className="flex flex-col items-center justify-center hover:cursor-pointer active:bg-black10"
                            sx={{
                                marginLeft: { xs: "0", md: "144px" },
                            }}
                        >
                            {verifyPayment === false &&
                                <Box className="flex flex-col items-center"
                                    onClick={() => {
                                        handleAcountName("Pichincha");
                                        handleVerifyPayment(true)
                                    }}
                                >
                                    <PriceCheck className="text-primary"
                                        sx={{
                                            width: { xs: "40px", sm: "70px" },
                                            height: { xs: "40px", sm: "70px" },
                                        }}
                                    />
                                    <Button className="bg-primary text-white rounded-b20 ps-e13 pe-e13"
                                        sx={{
                                            textTransform: "none"
                                        }}
                                    >
                                        Verificar Pago
                                    </Button>
                                </Box>
                            }
                            {verifyPayment === true &&
                                <Box className="flex flex-col items-center hover:cursor-pointer"
                                    onClick={() => { handleVerifyPayment(false); handleAcountName(""); setFile(null) }}
                                >
                                    <DoDisturb className="text-primary"
                                        sx={{
                                            width: { xs: "40px", sm: "70px" },
                                            height: { xs: "40px", sm: "70px" },
                                        }}
                                    />
                                    <Button className="bg-primary text-white rounded-b20 ps-e34 pe-e34"
                                        sx={{
                                            textTransform: "none",
                                            fontSize: { xs: "14px", md: "16px" }
                                        }}
                                    >
                                        Cancelar
                                    </Button>
                                </Box>
                            }
                        </Box>
                    </Box>
                </Box>
            }
            {verifyPayment &&
                <Box component="form" onSubmit={() => ""}>
                    <Typography className="text-primary font-bold">
                        Cargar comprobante:
                    </Typography>
                    <Box className="flex flex-col items-center">
                        <Card
                            sx={{ mt: 2, maxWidth: 345 }}
                            className="rounded-b20 hover:cursor-pointer"
                            component="label"
                        >
                            {file ? (
                                <CardMedia
                                    className="bg-terciary-20 border-t-2 border-r-2 border-l-2 border-dashed rounded-tl-b20 rounded-tr-b20 border-primary-40 pt-e13 pe-e13 ps-e13"
                                    component="img"
                                    height="140"
                                    image={URL.createObjectURL(file)}
                                    alt={file.name}
                                />
                            ) : (
                                <Box
                                    className="bg-black10 border-t-2 border-r-2 border-l-2 border-dashed rounded-tl-b20 rounded-tr-b20 border-primary-40 pt-e13 pe-e13 ps-e13"
                                    sx={{ height: 140, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}
                                >
                                    <Image className="text-black10 w-[70px] h-[70px]" />
                                    <Typography variant="body2" className="text-gray-500">
                                        Imagen del comprobante
                                    </Typography>
                                </Box>
                            )}
                            <CardContent className="bg-secondary h-[50px]">
                                <Typography variant="body2" className="text-white">
                                    {file ? file.name : "Subir comprobante"}
                                </Typography>
                            </CardContent>
                            <VisuallyHiddenInput
                                type="file"
                                onChange={(event) => {
                                    isImageValid(event.target.files![0]) ? setFile(event.target.files![0]) : setError("El archivo debe ser una imagen en formato .jpeg o .png y no debe superar los 3MB")
                                }}
                                accept="image/*"
                            />
                        </Card>
                        {error && (
                            <Typography className="text-red-500 font-bold text-[14px] mt-e5">
                                *{error}
                            </Typography>
                        )}
                    </Box>
                    <Box className="flex justify-center items-center">
                        <Button className="bg-primary text-white rounded-b20 ps-e34 pe-e34 mt-e13"
                            sx={{
                                textTransform: "none"
                            }}
                        >
                            Enviar
                        </Button>
                    </Box>
                </Box>
            }
        </Box>
    )
}
