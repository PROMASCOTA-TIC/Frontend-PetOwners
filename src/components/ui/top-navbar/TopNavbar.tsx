"use client";

import * as React from 'react';
import Link from 'next/link';
import { Box, AppBar, Toolbar, Typography, IconButton, Menu, MenuItem, Tooltip, Divider, FormControl, OutlinedInput, Grid2, Badge } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Image from 'next/image';
import { iconWhite } from '@/assets/images';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import { useShoppingCartStore } from '@/store/shoppingCartStore';
import HttpService from '@/config/services/httpsService';
import { set } from 'zod';

const settings = [
    { path: '/account-settings', text: 'Configurar cuenta' },
    { path: '/logout', text: 'Cerrar sesión' },
];

const NavbarEm: React.FC = () => {
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
    const carItems = useShoppingCartStore((state) => state.getTotalItems());
    const [searchValue, setSearchValue] = React.useState('')
    const [marketItems, setMarketItems] = React.useState([])
    const [results, setResults] = React.useState([])
    const [loaded, setLoaded] = React.useState(false);

    React.useLayoutEffect(() => {
        setLoaded(true);
    }, [])

    React.useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            handleSearch(searchValue);
        }, 300);

        return () => clearTimeout(delayDebounceFn);
    }, [searchValue]);

    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const handleClickSearchBar = async () => {
        const resp = await HttpService.get('products');
        const items = resp.data;
        setMarketItems(items);
    }

    const handleSearch = (value: string) => {
        const items = marketItems.filter((item: any) => item.name.toLowerCase().includes(value.toLowerCase()));
        setResults(items);
    }

    return (
        <AppBar position="static"
            sx={{ width: '100%', height: { xs: '60px', md: '70px' } }}
            className='bg-primary'
        >
            <Grid2 container columnSpacing="13px" sx={{ width: "100%" }}>
                <Toolbar disableGutters sx={{ height: '100%', justifyContent: 'space-between', width: "100%" }}>
                    <Grid2 size={{ xs: 1, sm: 1, md: 4, lg: 3 }} sx={{ width: "100%" }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', ml: "13px" }}>
                            <Typography
                                variant="h6"
                                noWrap
                                component="a"
                                href="/"
                                sx={{
                                    mr: 2,
                                    fontFamily: 'Work Sans, sans-serif',
                                    fontWeight: 700,
                                    letterSpacing: '.1rem',
                                    textDecoration: 'none',
                                    fontSize: { xs: '1rem', md: '1.5rem' },
                                    display: { xs: 'none', md: 'block' },
                                }}
                            >
                                PROMASKOTA
                            </Typography>
                            <Image src={iconWhite} alt="Logo" width={40} height={40} />
                        </Box>
                    </Grid2>

                    <Grid2 size={{ xs: 9, sm: 8, md: 5, lg: 6 }} sx={{ width: "100%" }}>
                        <FormControl variant="outlined" fullWidth>
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
                                size="small"
                                value={searchValue}
                                onClick={handleClickSearchBar}
                                onChange={(e) => setSearchValue(e.target.value)}
                            />
                        </FormControl>

                        {searchValue && (
                            <Box
                                sx={{
                                    position: 'absolute',
                                    top: '60px',
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    bgcolor: 'background.paper',
                                    boxShadow: 3,
                                    zIndex: 10,
                                    maxHeight: '300px',
                                    overflowY: 'auto',
                                    width: '50%',
                                    borderRadius: '8px',
                                }}
                            >
                                {results.length > 0 ? (
                                    results.map((item: any) => (
                                        <MenuItem key={item.id}>
                                            <Link href={`/items-detail/${item.id}`} className='w-full text-primary'>
                                                {item.name}
                                            </Link>
                                        </MenuItem>
                                    ))
                                ) : (
                                    <Typography sx={{ p: 2 }} className='w-full text-primary'>No results found</Typography>
                                )}
                            </Box>
                        )}
                    </Grid2>

                    {/* Menú de cuenta visible en todas las pantallas */}
                    <Grid2 size={{ xs: 2, sm: 2, md: 2, lg: 3 }} sx={{ width: "100%" }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: "end", mr: "13px" }}>
                            <Tooltip title="Gestionar la cuenta">
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
                                    />
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
                                <IconButton sx={{ p: 0, display: 'flex', alignItems: 'center' }} href='/cart'>
                                    <Badge badgeContent={loaded ? carItems : null} color="success">
                                        <ShoppingCartIcon sx={{ color: 'white', fontSize: { xs: 28, md: 40 } }} />
                                    </Badge>
                                </IconButton>
                            </Box>
                        </Box>
                    </Grid2>
                </Toolbar>
            </Grid2>
        </AppBar>
    );
};

export default NavbarEm;