import { TopMenu } from "@/components/ui/top-menu/TopMenu";

const configNavMenu = {
    type: 'market',
    options: [
        { name: 'Información general', url: '/account-settings' },
        { name: 'Mis mascotas', url: '/account-settings/misMascotas' },
        { name: 'Información de entregas', url: '/account-settings/informacionEntrega' },
        { name: 'Historial de compras', url: '/account-settings/historialCompras' },
        { name: 'Ir a comprar', url: '/' },
    ]
}

export default function Layout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <TopMenu navigationMenu={configNavMenu} />
            <main>
                {children}
            </main>
        </>
    );
}