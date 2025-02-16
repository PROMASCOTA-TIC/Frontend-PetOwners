import PieDePagina from "@/components/ui/footer/pieDePagina";
import NavbarEm from "@/components/ui/top-navbar/TopNavbar";

export default function Layout ({ children }: {
    children: React.ReactNode;
}) {
    return (
        <>
            <NavbarEm />
            <main>
                {children}
            </main>
            <PieDePagina />
        </>
    );
}