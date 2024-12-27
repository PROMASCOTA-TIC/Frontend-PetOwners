"use client";
import React, { useState } from 'react'
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
    Typography,
    IconButton,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    TextField,
    Select,
    MenuItem
} from '@mui/material';
import ReceiptIcon from '@mui/icons-material/Receipt';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

interface ProductoData {
    id: number;
    producto: string;
    cantidad: string;
    emprendimiento: string;
    precio: string;
    imagen: string;
    fechaCompra: string;
    opcionEntrega: string;
    direccion: string;
    total: string;
    metodoPago: string;
    estado: string;
}

const data: ProductoData[] = [
    {
        id: 1,
        producto: 'Nombre del producto',
        cantidad: '3,5 x 2',
        emprendimiento: 'Emprendimiento 1',
        precio: '$7,00',
        imagen: 'url_del_producto_1', // Reemplaza con la URL de la imagen del producto
        fechaCompra: '01/01/2023',
        opcionEntrega: 'domicilio',
        direccion: 'Dirección 1',
        total: '$21,00',
        metodoPago: 'Tarjeta de crédito',
        estado: 'Entregado'
    },
    {
        id: 2,
        producto: 'Nombre del producto',
        cantidad: '5,00 x 1',
        emprendimiento: 'Emprendimiento 2',
        precio: '$5,00',
        imagen: 'url_del_producto_2', // Reemplaza con la URL de la imagen del producto
        fechaCompra: '02/01/2023',
        opcionEntrega: 'tienda',
        direccion: 'Dirección 2',
        total: '$5,00',
        metodoPago: 'Efectivo',
        estado: 'Pendiente'
    }
];

interface DetallesCompraDialogProps {
    open: boolean;
    onClose: () => void;
}

const DetallesCompraDialog: React.FC<DetallesCompraDialogProps> = ({ open, onClose }) => {
    return (
        <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
            <DialogTitle className="bg-primary text-white text-center">
                Detalles de la compra
            </DialogTitle>
            <DialogContent>
                <div className="p-5 space-y-5">
                    <div className="flex justify-between items-center p-4 border rounded-lg border-secondary">
                        <div>
                            <Typography variant="body1">
                                <strong>Opción de entrega:</strong> Entrega a domicilio
                            </Typography>
                            <Typography variant="body1">
                                <strong>Fecha de compra:</strong> dd / mm / yyyy
                            </Typography>
                        </div>
                        <Button
                            variant="contained"
                            color="success"
                            startIcon={<ReceiptIcon />}
                            className="bg-secondary-40 hover:bg-secondary text-white"
                        >
                            Comprobante
                        </Button>
                    </div>

                    <TableContainer component={Paper}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Producto / Servicio</TableCell>
                                    <TableCell>Nombre</TableCell>
                                    <TableCell>Emprendimiento</TableCell>
                                    <TableCell>Precio</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {data.map((row) => (
                                    <TableRow key={row.id}>
                                        <TableCell>
                                            <img src={row.imagen} alt="Producto" className="w-16 h-16 object-cover" />
                                        </TableCell>
                                        <TableCell>
                                            <Typography variant="body1" className="font-semibold">
                                                {row.producto}
                                            </Typography>
                                            <Typography variant="body2">{row.cantidad}</Typography>
                                        </TableCell>
                                        <TableCell>{row.emprendimiento}</TableCell>
                                        <TableCell>{row.precio}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>

                    <div className="text-right space-y-1">
                        <Typography variant="body1">Subtotal: $10,2</Typography>
                        <Typography variant="body1">Impuestos: $1,8</Typography>
                        <Typography variant="body1" className="font-bold">Total: $12,00</Typography>
                    </div>

                    <div className="text-center">
                        <Typography variant="body2">
                            ¿Ya recibiste tu compra? Presiona el siguiente botón para confirmarlo
                        </Typography>
                        <Button
                            variant="contained"
                            color="success"
                            startIcon={<CheckCircleIcon />}
                            className="bg-secondary-40 hover:bg-secondary text-white mt-2"
                        >
                            Confirmar
                        </Button>
                    </div>
                </div>
            </DialogContent>
            <DialogActions>
                <Button
                    onClick={onClose}
                    variant="contained"
                    className="bg-primary hover:bg-primary-40 text-white"
                >
                    Regresar
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default function HistorialCompras() {
    const [openDialog, setOpenDialog] = useState(false);

    const handleOpenDialog = () => {
        setOpenDialog(true);
    };

    const handleCloseDialog = () => {
        setOpenDialog(false);
    };

    return (
        <div className="mx-e55 my-e21">
            <div className="flex gap-4 mb-5">
                <TextField                    label="Fecha"
                    variant="outlined"
                    size="small"
                    className="w-48"
                />
                <Select
                    label="Opción de entrega"
                    variant="outlined"
                    size="small"
                    className="w-48"
                    defaultValue=""
                >
                    <MenuItem value="">Opción de entrega:</MenuItem>
                    <MenuItem value="domicilio">Entrega a domicilio</MenuItem>
                    <MenuItem value="tienda">Recoger en tiendas</MenuItem>
                </Select>
            </div>

            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>No.</TableCell>
                            <TableCell>Fecha de compra</TableCell>
                            <TableCell>Opción de entrega</TableCell>
                            <TableCell>Dirección</TableCell>
                            <TableCell>Total</TableCell>
                            <TableCell>Método de pago</TableCell>
                            <TableCell>Estado</TableCell>
                            <TableCell>Ver detalles</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((row) => (
                            <TableRow key={row.id}>
                                <TableCell>{row.id}</TableCell>
                                <TableCell>{row.fechaCompra}</TableCell>
                                <TableCell>{row.opcionEntrega}</TableCell>
                                <TableCell>{row.direccion}</TableCell>
                                <TableCell>{row.total}</TableCell>
                                <TableCell>{row.metodoPago}</TableCell>
                                <TableCell>{row.estado}</TableCell>
                                <TableCell>
                                    <Button
                                        variant="contained"
                                        color="success"
                                        onClick={handleOpenDialog}
                                        className="bg-secondary-40 hover:bg-secondary text-white"
                                    >
                                        Ver detalles
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            <DetallesCompraDialog open={openDialog} onClose={handleCloseDialog} />
        </div>
    )
}
