"use client";

import { useEffect, useState } from 'react';
import { TopMenu } from '@/components/ui/top-menu/TopMenu';
import PieDePagina from '@/components/ui/footer/PieDePagina';

import '/src/assets/styles/gestionContenido/general.css';
import ArticulosConFoto from '@/components/gestionContenido/ArticulosConFoto';
import BasicSelect from './PR_Filtro';
import PR_Filtro from './PR_Filtro';

const articulos = [
    {
        id: 1,
        titulo: 'Título del Artículo 1',
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipiscing elit nulla, lectus feugiat tristique per dui erat nullam posuere conubia, interdum parturient tempor quam aliquet dictumst cubilia. Iaculis risus quisque duis fusce sem vestibulum odio, penatibus nibh euismod dictum sodales porta laoreet, class orci venenatis porttitor tortor curae. Aliquet faucibus volutpat laoreet parturient erat feugiat blandit habitant penatibus quisque lacus augue nascetur proin primis, pretium nam accumsan gravida rhoncus ligula ac vivamus arcu quis eu praesent massa risus.',
        link: '/articulo/1',
        imagen: 'https://via.placeholder.com/100', // Usa una imagen de prueba
    },
    {
        id: 2,
        titulo: 'Título del Artículo 2',
        descripcion: 'Descripción del Artículo 2Lorem ipsum dolor sit amet consectetur adipiscing elit nulla, lectus feugiat tristique per dui erat nullam posuere conubia, interdum parturient tempor quam aliquet dictumst cubilia. Iaculis risus quisque duis fusce sem vestibulum odio, penatibus nibh euismod dictum sodales porta laoreet, class orci venenatis porttitor tortor curae. Aliquet faucibus volutpat laoreet parturient erat feugiat blandit habitant penatibus quisque lacus augue nascetur proin primis, pretium nam accumsan gravida rhoncus ligula ac vivamus arcu quis eu praesent massa risus.',
        link: '/articulo/2',
        imagen: 'https://via.placeholder.com/100',
    },
    {
        id: 3,
        titulo: 'Título del Artículo 3',
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipiscing elit nulla, lectus feugiat tristique per dui erat nullam posuere conubia, interdum parturient tempor quam aliquet dictumst cubilia. Iaculis risus quisque duis fusce sem vestibulum odio, penatibus nibh euismod dictum sodales porta laoreet, class orci venenatis porttitor tortor curae. Aliquet faucibus volutpat laoreet parturient erat feugiat blandit habitant penatibus quisque lacus augue nascetur proin primis, pretium nam accumsan gravida rhoncus ligula ac vivamus arcu quis eu praesent massa risus.',
        link: '/articulo/3',
        imagen: 'https://via.placeholder.com/100',
    },
];

const PR_Categorias = () => {
    // const [categoria, setCategoria] = useState('');
    // const [articulos, setArticulos] = useState([]);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         // Aquí obtendrás los datos de la base de datos
    //         // Reemplaza la URL con tu API real
    //         const response = await fetch('/api/articulos'); // API ficticia para el ejemplo
    //         const data = await response.json();

    //         setCategoria(data.categoria);
    //         setArticulos(data.articulos);
    //     };

    //     fetchData();
    // }, []);

    return (
        <div>
            <TopMenu />
            <PR_Filtro />
            <ArticulosConFoto articulos={articulos} />
            <PieDePagina />
        </div>
    );
};

export default PR_Categorias;