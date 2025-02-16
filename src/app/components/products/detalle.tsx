import React from 'react'
import { Icon } from '@iconify/react/dist/iconify.js'
import { Button, Grid2, Typography } from '@mui/material'
import { productImage } from "@/assets/images";
import { CarruselDetalle } from './carruselDetalle';

const imageList = [
    productImage,
    productImage,
    productImage,
    productImage,
];

export const ItemDetalle = () => {
    const [selected, setSelected] = React.useState<string>('');

    const handleSelect = (option: string) => {
        setSelected(option);
    };

    return (
        <div>
            <Grid2 container columnSpacing={{ xs: "55px", md: "55px" }}>
                <Grid2 size={{ xs: 12, sm: 6, md: 6, lg: 6 }} sx={{ marginY: "13px" }}>
                    <CarruselDetalle images={imageList} />
                </Grid2>

                <Grid2 size={{ xs: 12, sm: 6, md: 6, lg: 6 }} sx={{ marginBottom: "34px" }}>
                    <Typography
                        sx={{
                            fontSize: { md: '36px' },
                            fontWeight: 'bold',
                        }}
                        className='text-primary mt-e21'
                    >
                        Nombre del producto
                    </Typography>
                    <hr className='my-e34' />
                    <Typography
                        sx={{
                            fontSize: { md: '24px' },
                            fontWeight: 'semi-bold',
                        }}
                        className='text-secondary'
                    >
                        Nombre del emprendimiento
                    </Typography>
                    <Typography
                        sx={{
                            fontSize: { md: '24px' },
                            fontWeight: 'semi-bold',
                        }}
                        className='text-primary mt-e21'
                    >
                        Descripción del producto. Lorem, ipsum dolor sit amet consectetur
                        adipisicing elit. Sint quibusdam laborum aperiam fuga facilis vel maxime at,
                        incidunt quaerat quo officia sequi nostrum dolore. Velit aliquid consequatur
                        incidunt iure soluta.
                    </Typography>

                    <div className='mt-e21'>
                        <Grid2 container>
                            <Grid2 size={{ xs: 12, sm: 6, md: 6, lg: 6 }}>
                                <Typography
                                    sx={{
                                        fontSize: { md: '24px' },
                                        fontWeight: 'semi-bold',
                                    }}
                                    className='text-secondary'
                                >
                                    Categoría:
                                </Typography>
                            </Grid2>
                            <Grid2 size={{ xs: 12, sm: 6, md: 6, lg: 6 }}>
                                <Typography
                                    sx={{
                                        fontSize: { md: '24px' },
                                        fontWeight: 'semi-bold',
                                    }}
                                    className='text-secondary'
                                >
                                    Peso:
                                </Typography>
                            </Grid2>
                        </Grid2>
                    </div>

                    <Typography
                        sx={{
                            fontSize: { md: '36px' },
                            fontWeight: 'semi-bold',
                        }}
                        className='text-secondary mt-e21'
                    >
                        $ PRECIO
                    </Typography>

                    <Grid2 container alignItems="center">
                        {/* Botón Producto con icono arriba */}
                        <Grid2
                            size={{ xs: 12, sm: 12, md: 12 }}
                            display="flex"
                            flexDirection="column"
                            alignItems="center"
                            justifyContent="center"
                        >
                            {/* <Icon icon="material-symbols-light:pet-supplies-outline" className='size-[60px] text-primary' /> */}
                            <Icon icon="material-symbols-light:add-shopping-cart" className='size-[60px] text-primary' />
                            <Button
                                onClick={() => handleSelect('Producto')}
                                sx={{
                                    textTransform: 'none',
                                    width: '213px',
                                    height: '34px',
                                    borderRadius: '20px',
                                    fontSize: '18px',
                                    marginTop: '10px'
                                }}
                                className={`${selected === 'Producto' ? 'bg-primary text-white' : 'bg-black10 text-primary'}`}
                            >
                                Añadir al carro
                            </Button>
                        </Grid2>
                    </Grid2>

                </Grid2>
            </Grid2>
        </div>
    )
}
