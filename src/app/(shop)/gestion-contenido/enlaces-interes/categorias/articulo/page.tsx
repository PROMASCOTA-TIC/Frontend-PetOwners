import EntradaArticulo from "@/app/(shop)/gestion-contenido/enlaces-interes/categorias/articulo/EntradaArticulo";
import PieDePagina from "@/components/ui/footer/PieDePagina";
import { TopMenu } from "@/components/ui/top-menu/TopMenu";

import React from 'react'

const page = () => {
    return (
        <div>
            <h1 className='h1-bold txtcolor-primary' style={{ padding: '21px 0px 0px 55px' }}>Categoria</h1>
            <EntradaArticulo />
        </div>
    )
}

export default page