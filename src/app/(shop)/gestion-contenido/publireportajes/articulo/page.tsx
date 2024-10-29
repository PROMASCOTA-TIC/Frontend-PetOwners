import PieDePagina from "@/components/ui/footer/PieDePagina";
import { TopMenu } from "@/components/ui/top-menu/TopMenu";
import EntradaPubliReportaje from "./EntradaPubliReportaje";

export default function EI_Categorias_Articulo() {
    return (
        <div>
            {/* Header */}
            <TopMenu />
            <h1 className='h1-bold txtcolor-primary' style={{ padding: '21px 0px 0px 55px' }}>Categoria</h1>
            <EntradaPubliReportaje />
            <PieDePagina />
        </div>
    );
} 