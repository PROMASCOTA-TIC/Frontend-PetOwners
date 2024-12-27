import { TopMenu } from "@/components/ui/top-menu/TopMenu";
import { ProductsCarousel, ProductOffers } from "../components";
import { productImage } from "@/assets/images";
import { ZoneAndShipping } from "../components/landing/zoneAndShipping";
import TipoMascota from "../components/landing/tipoMascota";
import PieDePagina from "@/components/ui/footer/pieDePagina";

const products = [
  {
    title: 'Pro-Can Cachorro',
    description: 'Alimento pro crecimiento para mascotas 2 Kg',
    price: 5.00,
    imageUrl: productImage,
  },
  {
    title: 'Pro-Can Cachorro',
    description: 'Alimento pro crecimiento para mascotas 2 Kg',
    price: 5.00,
    imageUrl: productImage,
  },
  {
    title: 'Pro-Can Cachorro',
    description: 'Alimento pro crecimiento para mascotas 2 Kg',
    price: 5.00,
    imageUrl: productImage,
  },
  {
    title: 'Pro-Can Cachorro',
    description: 'Alimento pro crecimiento para mascotas 2 Kg',
    price: 5.00,
    imageUrl: productImage,
  },
  {
    title: 'Pro-Can Cachorro',
    description: 'Alimento pro crecimiento para mascotas 2 Kg',
    price: 10.00,
    imageUrl: productImage,
  },
  {
    title: 'Pro-Can Cachorro',
    description: 'Alimento pro crecimiento para mascotas 2 Kg',
    price: 15.00,
    imageUrl: productImage,
  },
];

const productsOffers= [
  {
      id: 1,
      price: '0.99',
      label: 'COMIDA DE PERRO',
      imageSrc: productImage,
  },
  {
      id: 2,
      price: '0.99',
      label: 'COMIDA DE PERRO',
      imageSrc: productImage,
  },
  {
      id: 3,
      price: '0.99',
      label: 'COMIDA DE PERRO',
      imageSrc: productImage,
  },
  {
      id: 4,
      price: '0.99',
      label: 'COMIDA DE PERRO',
      imageSrc: productImage,
  },
  {
      id: 5,
      price: '0.99',
      label: 'COMIDA DE PERRO',
      imageSrc: productImage,
  },
  {
      id: 6,
      price: '0.99',
      label: 'COMIDA DE PERRO',
      imageSrc: productImage,
  },
  {
      id: 7,
      price: '0.99',
      label: 'COMIDA DE PERRO',
      imageSrc: productImage,
  },
  {
      id: 8,
      price: '0.99',
      label: 'COMIDA DE PERRO',
      imageSrc: productImage,
  },
  // Agrega más productos según sea necesario
];

const items = [
  { name: 'Inicio', url: '/cart' },
  { name: 'Enlaces de Interés', url: '/enlaces' },
  { name: 'Publi-Reportajes', url: '/publi-reportajes' },
  { name: 'Preguntas Frecuentes', url: '/preguntas-frecuentes' }
]

export default function Home() {
  return (
    <div>
      <TopMenu listaItems={items} />
      <ZoneAndShipping />
      <h2 className="text-primary font-semibold text-fs24 sm:text-fs24 md:text-fs36 lg:text-fs36 ms-e63 mb-e21">Nuevos productos</h2>
      <ProductsCarousel products={products} />
      <h2 className="text-primary font-semibold text-fs24 sm:text-fs24 md:text-fs36 lg:text-fs36 ms-e63 mb-e21 mt-e34">Top de ventas</h2>
      <ProductsCarousel products={products} />
      <TipoMascota />
      <ProductOffers ofertsList={productsOffers} />
      <PieDePagina />
    </div>
  );
}
