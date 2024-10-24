import EntradaArticulo from "@/app/gestionContenido/enlacesInteres/categorias/articulo/EntradaArticulo";
import PieDePagina from "@/components/ui/footer/PieDePagina";
import { TopMenu } from "@/components/ui/top-menu/TopMenu";

import React from 'react'

const page = () => {
    return (
        <div>
            {/* Header */}
            <TopMenu />
            <h1 className='h1-bold txtcolor-primary' style={{ padding: '21px 0px 0px 55px' }}>Categoria</h1>
            <EntradaArticulo />
            <PieDePagina />
        </div>
    )
}

export default page