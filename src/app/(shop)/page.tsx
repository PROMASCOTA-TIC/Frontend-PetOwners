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

export default function Home() {
  return (
    <div>
      <TopMenu />
      <ZoneAndShipping />
      {/* <ProductCarousel products={products} /> */}
      <ProductsCarousel products={products} />
      <TipoMascota />
      <ProductOffers ofertsList={productsOffers} />
      <PieDePagina />
    </div>
  );
}
