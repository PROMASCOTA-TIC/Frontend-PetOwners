"use client";
import React from 'react'
import BlindIcon from '@mui/icons-material/Blind';

type ItemsLista = {
    id: number;
    name: string;
    icon: JSX.Element;
}

interface ListaPreferenciasProps {
    opciones: ItemsLista[];
}

export const ListaPreferencias: React.FC<ListaPreferenciasProps> = ({ opciones }) => {
    return (
        <div className='border border-primary rounded-[15px]'>
            <div className='w-full grid grid-cols-2 gap-x-[55px] gap-y-[34px] my-[34px]'>
                {opciones.map((item) => (
                    <div key={item.id} className={`${item.id % 2 === 0 ? "me-2" : "ms-2"} border border-terciary-20 rounded-[15px] bg-white flex justify-between p-[13px] gap-[13px]`}>
                        {item.icon}
                        <span className='text-primary'>{item.name}</span>
                        <input type="checkbox" className='w-4 rounded border-secondary text-secondary' />
                    </div>
                ))}
                {/* <div className='border border-terciary-20 rounded-[15px] bg-white ms-2 flex justify-between p-[13px] gap-[13px]'>
                    <BlindIcon className='text-secondary' />
                    <span className='text-primary'>Paseos</span>
                    <input type="checkbox" className='w-4 rounded border-secondary text-secondary' />
                </div> */}
            </div>
        </div>
    )
}
