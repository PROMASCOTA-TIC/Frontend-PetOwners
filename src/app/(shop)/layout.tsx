import { TopMenu } from "@/components/ui/top-menu/TopMenu";
import NavbarEm from "@/components/ui/top-navbar/TopNavbar";

const items = [
    { name: 'Inicio', url: '/cart' },
    { name: 'Enlaces de Interés', url: '/enlaces' },
    { name: 'Publi-Reportajes', url: '/publi-reportajes' },
    { name: 'Preguntas Frecuentes', url: '/preguntas-frecuentes' }
]

export default function ShopLayout({ children }: {
    children: React.ReactNode;
}) {
    return (
        <main>
            <NavbarEm />
            {/* <TopMenu listaItems={items} /> */}
            {children}
        </main>
    );
}