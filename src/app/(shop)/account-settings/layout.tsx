import { TopMenu } from "@/components/ui/top-menu/TopMenu";

const items = [
    { name: 'Información general', url: '/general-info' },
    { name: 'Mis mascotas', url: '/account-settings/misMascotas' },
    { name: 'Información de entregas', url: '/account-settings/informacionEntrega' },
    { name: 'Historial de compras', url: '/account-settings/historialCompras' },
    { name: 'Ir a comprar', url: '/' },
]

export default function ConfiguracionCuentaLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <main>
            <TopMenu listaItems={items} />
            {children}
        </main>
    );
}