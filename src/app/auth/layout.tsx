import { themePalette } from "@/config/theme.config";

export default function ShopLayout({ children }: {
    children: React.ReactNode;
}) {
    return (
        <body style={{ fontFamily: themePalette.FONT_GLOBAL }}>
            { children }
        </body>
    );
}