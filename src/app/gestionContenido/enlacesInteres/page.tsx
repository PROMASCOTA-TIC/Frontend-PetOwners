import BarraDeBusqueda from "@/components/gestionContenido/BarraBusqueda";
import PieDePagina from "@/components/ui/footer/PieDePagina";
import { TopMenu } from "@/components/ui/top-menu/TopMenu";
import CompartirContenido from "./Compartir";
import Categorias from "./Categorias";

export default function EnlacesDeInteres() {
    return (
        <div>
            {/* Header */}
            <TopMenu />
            <BarraDeBusqueda />
            <Categorias />
            <CompartirContenido />
            <PieDePagina />
        </div>
    );
}  