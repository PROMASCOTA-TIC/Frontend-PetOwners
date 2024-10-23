import NavbarEm from "@/components/ui/top-navbar/TopNavbar";
import { themePalette } from "@/config/theme.config";

export default function ShopLayout({ children }: {
    children: React.ReactNode;
}) {
    return (
        <main style={{ fontFamily: themePalette.FONT_GLOBAL }}>
            <NavbarEm />
            { children }
        </main>
    );
}