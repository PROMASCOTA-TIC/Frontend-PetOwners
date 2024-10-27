"use client";

import * as React from 'react';
import Link from 'next/link';
import { Box, AppBar, Toolbar, Typography, IconButton, Menu, MenuItem, Tooltip, Divider, FormControl, OutlinedInput } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Container from '@mui/material/Container';
import Image from 'next/image';
import { iconWhite } from '@/assets/images';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';

const settings = [
    { path: '/settings', text: 'Configurar cuenta' },
    { path: '/logout', text: 'Cerrar sesión' },
];

const NavbarEm: React.FC = () => {
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar position="static" 
            sx={{ width: '100%', height: { xs: '60px', md: '80px' } }}
            className='bg-primary'
        >
            <Container maxWidth="xl" >
                <Toolbar disableGutters sx={{ height: '100%', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                    {/* Logo y título */}
                    <Box sx={{ display: 'flex', alignItems: 'center', ml: 2 }}>
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="#"
                            sx={{
                                mr: 2,
                                fontFamily: 'Work Sans, sans-serif',
                                fontWeight: 700,
                                letterSpacing: '.1rem',
                                textDecoration: 'none',
                                fontSize: { xs: '1rem', md: '1.5rem' },
                            }}
                        >
                            PROMASCOTA
                        </Typography>
                        <Image src={iconWhite} alt="Logo" width={40} height={40} />
                    </Box>

                    <FormControl sx={{ m: 1, width: '450px', minWidth: 100 }} variant="outlined">
                        <OutlinedInput
                            id="outlined-adornment-weight"
                            endAdornment={<SearchIcon />}
                            aria-describedby="outlined-weight-helper-text"
                            inputProps={{
                                'aria-label': 'weight',
                            }}
                            className="text-primary bg-white"
                            placeholder='Buscar'
                            sx={{
                                '& .MuiOutlinedInput-notchedOutline': {
                                    borderColor: 'white',
                                },
                                '&:hover .MuiOutlinedInput-notchedOutline': {
                                    borderColor: 'white',
                                },
                                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                    borderColor: 'white',
                                },
                            }}
                        />
                    </FormControl>

                    {/* Menú de cuenta visible en todas las pantallas */}
                    <Box sx={{ flexGrow: 0, display: 'flex', alignItems: 'center', ml: 'auto' }}>
                        <Tooltip title="Open settings">
                            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0, display: 'flex', alignItems: 'center' }}>
                                    <AccountCircleIcon sx={{ color: 'white', fontSize: { xs: 28, md: 40 } }} />
                                    <ArrowForwardIosIcon
                                        sx={{ color: 'white', fontSize: { xs: 10, md: 14 }, ml: 0.5, transform: 'rotate(90deg)' }}
                                    />
                                </IconButton>
                                <Typography
                                    sx={{
                                        color: 'white',
                                        fontSize: { xs: 12, md: 18 },
                                        fontWeight: 'regular',
                                        mt: 0.5,
                                    }}
                                >
                                    Cuenta
                                </Typography>
                            </Box>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((setting) => (
                                <MenuItem key={setting.text} onClick={handleCloseUserMenu}>
                                    <Link href={setting.path} style={{ textDecoration: 'none', color: 'inherit' }}>
                                        <Typography textAlign="center">{setting.text}</Typography>
                                    </Link>
                                </MenuItem>
                            ))}
                        </Menu>
                        <Divider orientation='vertical' flexItem className='mx-5 bg-white' />
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            {/* <IconButton onClick={handleOpenUserMenu} sx={{ p: 0, display: 'flex', alignItems: 'center' }}> */}
                            <IconButton sx={{ p: 0, display: 'flex', alignItems: 'center' }}>
                                <ShoppingCartIcon sx={{ color: 'white', fontSize: { xs: 28, md: 40 } }} />
                            </IconButton>
                        </Box>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default NavbarEm;