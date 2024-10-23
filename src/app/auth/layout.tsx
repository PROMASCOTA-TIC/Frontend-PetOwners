import { themePalette } from "@/config/theme.config";

export default function ShopLayout({ children }: {
    children: React.ReactNode;
}) {
    return (
        <main style={{ fontFamily: themePalette.FONT_GLOBAL }}>
            { children }
        </main>
    );
}