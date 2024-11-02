import { FiltroListaBusqueda, ListaItems } from "@/app/components";

export default function () {
    // const router = useRouter();

    // const handleClickProduct = () => {
    //     router.push('items-detail');
    // }

    return (
        <div>
            <div className="mx-e55 mt-e34">
                <h2 className="mb-e13 text-primary font-bold text-[24px]">Filtros</h2>
                <FiltroListaBusqueda />
                <div className="my-e55 w-full">
                    <ListaItems />
                </div>
            </div>
        </div>
    )
}
