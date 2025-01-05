'use client';

import React, { useState, useEffect } from 'react';
import { Alert, Snackbar, SnackbarOrigin } from '@mui/material';

interface SnackbarNotificationsProps {
    type?: 'success' | 'error' | 'warning' | 'info';
    message: string;
    autoHideDuration?: number;
    anchorOrigin?: SnackbarOrigin;
    triggerKey: number; 
}

export const SnackbarNotifications: React.FC<SnackbarNotificationsProps> = ({
    type = 'info',
    message,
    autoHideDuration = 4000,
    anchorOrigin = { vertical: 'top', horizontal: 'right' },
    triggerKey,
}) => {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        if (triggerKey > 0) setOpen(true);
    }, [triggerKey]);

    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    return (
        <Snackbar
            open={open}
            anchorOrigin={anchorOrigin}
            autoHideDuration={autoHideDuration}
            onClose={handleClose}
            sx={{ marginTop: '10vh' }}
        >
            <Alert
                onClose={handleClose}
                severity={type}
                variant="filled"
                sx={{ width: '100%' }}
            >
                {message}
            </Alert>
        </Snackbar>
    );
};