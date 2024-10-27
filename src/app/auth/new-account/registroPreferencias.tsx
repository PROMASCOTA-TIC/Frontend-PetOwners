import { ListaPreferencias } from "@/app/components"
import BlindIcon from '@mui/icons-material/Blind';

const preferenciasDueños = [
    {
        id: 1,
        name: "Paseos",
        icon: <BlindIcon className='text-secondary' />
    },
    {
        id: 2,
        name: "Adopciones",
        icon: <BlindIcon className='text-secondary' />
    },
    {
        id: 3,
        name: "Adiestramiento",
        icon: <BlindIcon className='text-secondary' />
    },
    {
        id: 4,
        name: "Entrenamiento",
        icon: <BlindIcon className='text-secondary' />
    },
    {
        id: 5,
        name: "Tiendas Afiliadas",
        icon: <BlindIcon className='text-secondary' />
    },
    {
        id: 6,
        name: "Lugares Pet Friendly",
        icon: <BlindIcon className='text-secondary' />
    },
];

const preferenciasMascotas = [
    {
        id: 1,
        name: "Salud",
        icon: <BlindIcon className='text-secondary' />
    },
    {
        id: 2,
        name: "Peluquería",
        icon: <BlindIcon className='text-secondary' />
    },
    {
        id: 3,
        name: "Nutrición",
        icon: <BlindIcon className='text-secondary' />
    },
    {
        id: 4,
        name: "Vida Saludable",
        icon: <BlindIcon className='text-secondary' />
    },
    {
        id: 5,
        name: "Servicios de Transporte",
        icon: <BlindIcon className='text-secondary' />
    },
    {
        id: 6,
        name: "Guardería y Cuidado",
        icon: <BlindIcon className='text-secondary' />
    },
]; 

export const RegistroPreferencias = () => {
    return (
        <div>
            <h2 className="">Dueño de mascotas</h2>
            <ListaPreferencias opciones= {preferenciasDueños} />
        </div>

    )
}
