import BarraDeBusqueda from "@/components/gestionContenido/BarraBusqueda";
import PieDePagina from "@/components/ui/footer/PieDePagina";
import { TopMenu } from "@/components/ui/top-menu/TopMenu";
import CompartirContenido from "./Compartir";

export default function EnlacesDeInteres() {
    return (
        <div>
            {/* Header */}
            <TopMenu />
            <BarraDeBusqueda />
            <p>Categorias</p>
            <CompartirContenido />
            <PieDePagina />
        </div>
    );
}  