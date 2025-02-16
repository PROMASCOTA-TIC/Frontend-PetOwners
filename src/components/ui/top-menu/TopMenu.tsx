"use client";
import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import Link from 'next/link';
import { ZoneAndShipping } from '@/app/components/landing/zoneAndShipping';

interface NavOption {
    name: string;
    url: string;
}

interface NavMenu {
    type: string;
    options: NavOption[];
}

interface TopMenuProps {
    navigationMenu: NavMenu;
}

export const TopMenu = ({ navigationMenu }: TopMenuProps) => {
    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
    const [itemSelected, setItemSelected] = useState('');

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleOptionSelected = (itemSelected: string) => {
        setItemSelected(itemSelected);
    }

    return (
        <AppBar position="static" className='bg-white'>
            <Container maxWidth="xl">
                <Toolbar disableGutters style={{ minHeight: '48px', maxHeight: '48px' }}>
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }} style={{ height: 'inherit' }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            style={{ color: '#004040', background: '#0000001a' }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={() => setAnchorElNav(null)}
                            sx={{ display: { xs: 'block', md: 'none' } }}
                        >
                            {navigationMenu.options.map((page) => (
                                <MenuItem key={page.name}>
                                    <Link
                                        href={page.url}
                                        key={page.name}
                                        className='text-fs14 sm:text-fs18 md:text-fs18 text-primary'
                                    >
                                        {page.name}
                                    </Link>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }} style={{ gap: '55px', height: 'inherit' }}>
                        {navigationMenu.options.map((page) => (
                            <Link
                                href={page.url}
                                key={page.name}
                                onClick={() => handleOptionSelected(page.name)}
                                className={`text-fs14 sm:text-fs18 md:text-fs18 text-[#EC825B] hover:text-[#B74015] ${itemSelected === page.name ? 'text-secondary' : 'text-[#EC825B]'}`}
                            >
                                {page.name}
                            </Link>
                        ))}
                    </Box>
                    
                    <div className='lg:hidden overflow-x-auto whitespace-nowrap'>
                        <ZoneAndShipping />
                    </div>
                </Toolbar>
            </Container>
        </AppBar>
    )
}
