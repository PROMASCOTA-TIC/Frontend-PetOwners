import NavbarEm from "@/components/ui/top-navbar/TopNavbar";

export default function ShopLayout({ children }: {
    children: React.ReactNode;
}) {
    return (
        <main>
            <NavbarEm />
            { children }
        </main>
    );
}