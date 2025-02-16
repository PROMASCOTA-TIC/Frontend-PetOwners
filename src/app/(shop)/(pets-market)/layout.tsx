import { TopMenu } from "@/components/ui/top-menu/TopMenu";

const marketNavMenu = {
    type: 'market',
    options: [
        { name: 'Inicio', url: '/' },
        { name: 'Enlaces de Interés', url: '/enlaces' },
        { name: 'Publi-Reportajes', url: '/publi-reportajes' },
        { name: 'Preguntas Frecuentes', url: '/preguntas-frecuentes' }
    ]
}

export default function Layout({ children }: {
    children: React.ReactNode;
}) {
    return (
        <>
            <TopMenu navigationMenu={marketNavMenu} />
            <main>
                {children}
            </main>
        </>
    );
}