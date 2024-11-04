"use client";
import React, { useState } from 'react';

type ItemsLista = {
    id: number;
    name: string;
    icon: JSX.Element;
};

interface ListaPreferenciasProps {
    opciones: ItemsLista[];
}

export const ListaPreferencias: React.FC<ListaPreferenciasProps> = ({ opciones }) => {

    return (
        <div className='border border-primary rounded-[15px] px-e5'>
            <div className='w-full grid grid-cols-1 sm:grid-cols-2 gap-x-[55px] gap-y-[34px] my-[34px]'>
                {opciones.map((item) => (
                    <div key={item.id} 
                        className="border border-terciary-20 rounded-b15 bg-white flex justify-between p-e13 gap-e13"
                    >
                        {item.icon}
                        <span 
                            className='text-primary text-fs18 sm:text-fs14 md:text-fs14 lg:text-fs18'
                        >
                            {item.name}
                        </span>
                        <input 
                            type="checkbox" 
                            className='w-4 rounded border-secondary text-secondary' 
                            value={item.name}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};
