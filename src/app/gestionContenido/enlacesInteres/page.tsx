import BarraDeBusqueda from "@/components/gestionContenido/BarraBusqueda";
import PieDePagina from "@/components/ui/footer/PieDePagina";
import { TopMenu } from "@/components/ui/top-menu/TopMenu";
import EI_Categorias from "./EI_Categorias";
import EI_CompartirContenido from "./EI_CompartirContenido";

export default function EnlacesDeInteres() {
    return (
        <div>
            {/* Header */}
            <TopMenu />
            <BarraDeBusqueda />
            <h1 className="h1-bold txtcolor-primary flex-center" style={{ padding: '21px 0px 0px 0px' }}>Categorías</h1>
            <EI_Categorias />
            <EI_CompartirContenido />
            <PieDePagina />
        </div>
    );
}  