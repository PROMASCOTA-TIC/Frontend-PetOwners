import BarraDeBusqueda from "@/components/gestionContenido/BarraBusqueda";
import PieDePagina from "@/components/ui/footer/PieDePagina";
import { TopMenu } from "@/components/ui/top-menu/TopMenu";
import PF_Categorias from "./PF_Categorias";

export default function EnlacesDeInteres() {
    return (
        <div>
            {/* Header */}
            <TopMenu />
            <BarraDeBusqueda />
            <h1 className="h1-bold txtcolor-primary flex-center" style={{ padding: '21px 0px 0px 0px' }}>Categorías</h1>
            <PF_Categorias />
            <PieDePagina />
        </div>
    );
}  