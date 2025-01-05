'use client';

import React from 'react'
import { IconButton, Typography } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DeleteIcon from '@mui/icons-material/Delete';

interface FileCardProps {
    fileId?: string;
    fileName: string;
    fileUrl: string;
    onView?: (fileUrl: string) => void;
    onDelete: (fileId: string) => void;
}

export const FileCard = (data: FileCardProps) => {
// export const FileCard = () => {
    return (
        <div className='w-full rounded-b10 shadow shadow-secondary-40 grid grid-cols-4 gap-e5 max-h-[100px]'>
            <div className='col-span-3 content-center'>
                <Typography 
                    className='text-primary font-semibold text-fs12 sm:text-fs12 md:text-fs14 lg:text-fs14 ml-e8'
                    style={{ 
                        whiteSpace: 'normal',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        display: '-webkit-box',
                        WebkitLineClamp: '2',
                        WebkitBoxOrient: 'vertical'
                    }}
                >
                    {data.fileName}
                </Typography>
            </div>
            <div className='flex flex-col gap-e5 justify-between align-middle justify-items-center py-e5'>
                <IconButton 
                    className='p-0 text-secondary hover:text-[#DE541E]'
                    onClick={() => data.onView && data.onView(data.fileUrl)}
                >
                    <VisibilityIcon />
                </IconButton>
                {/* <IconButton className='p-0 text-secondary hover:text-[#DE541E]'>
                    <FileDownloadIcon />
                </IconButton> */}
                <IconButton 
                    className='p-0 text-secondary hover:text-[#DE541E]'
                    onClick={() => data.fileId ? data.onDelete(data.fileId) : data.onDelete(data.fileName)}
                >
                    <DeleteIcon />
                </IconButton>
            </div>
        </div>
    )
}
