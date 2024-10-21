import { TopMenu } from "@/components/ui/top-menu/TopMenu";
import { ProductCarousel, ProductOffers } from "../components";
import { productImage } from "@/assets/images";

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
      <h1>Hola Mundo</h1>
      <TopMenu />
      <ProductCarousel products={products} />
      <ProductOffers ofertsList={productsOffers} />
    </div>
  );
}
