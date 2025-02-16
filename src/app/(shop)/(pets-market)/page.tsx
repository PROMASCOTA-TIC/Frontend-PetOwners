import { ProductsCarousel, ProductOffers, ImagesCarrousel, ProductsCarouselSkeleton } from "../../components";
import { productImage } from "@/assets/images";
import { ZoneAndShipping } from "../../components/landing/zoneAndShipping";
import TipoMascota from "../../components/landing/tipoMascota";

const productsOffers = [
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

export default function Page() {
  return (
    <div>
      <div className="hidden lg:block">
        <ZoneAndShipping />
      </div>
      <ImagesCarrousel />
      <h2 className="text-primary font-semibold text-fs24 sm:text-fs24 md:text-fs36 lg:text-fs36 ms-e63 mb-e21">Nuevos productos</h2>
      <ProductsCarousel type='nuevos' />
      <h2 className="text-primary font-semibold text-fs24 sm:text-fs24 md:text-fs36 lg:text-fs36 ms-e63 mb-e21 mt-e34">Top de ventas</h2>
      <ProductsCarousel type='mas vendidos' />
      <TipoMascota />
      <h2 className="text-primary font-semibold text-fs24 sm:text-fs24 md:text-fs36 lg:text-fs36 ms-e63 mb-e21 mt-e34">Ofertas</h2>
      <ProductOffers />
    </div>
  );
}
