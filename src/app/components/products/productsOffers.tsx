import Image,  { StaticImageData } from 'next/image';
import "./p-styles.css";

interface ProductOffer {
    id: number;
    price: string;
    label: string;
    imageSrc: StaticImageData;
}

interface ProductOffersProps {
    ofertsList: ProductOffer[];
}

const ProductOffers: React.FC<ProductOffersProps> = ({ ofertsList }) => {

    return (
        <div className="w-full overflow-hidden relative mt-[34px]">
            <h2 className="text-xl font-bold mb-4 ms-[68px]">Ofertas De Productos</h2>
            <div className="flex justify-center overflow-x-auto space-x-4 scrollbar-hide mt-[21px]">
                {ofertsList.map((product) => (
                    <div
                        key={product.id}
                        className="min-w-[301px] flex-shrink-0 bg-green-50 rounded-lg shadow-lg p-4 transition-transform duration-300 hover:scale-105"
                    >
                        <div className="bg-green-800 text-white text-center rounded-t-lg p-2 font-semibold">
                            {product.label}
                        </div>
                        <div className="text-center mt-2">
                            <p className="text-lg font-semibold">Desde</p>
                            <p className="text-2xl font-bold">${product.price}</p>
                            <p className="text-sm text-gray-600">por libra</p>
                        </div>
                        <div className="flex justify-center mt-4">
                            <Image
                                src={product.imageSrc}
                                alt={product.label}
                                width={150}
                                height={150}
                                className="object-contain"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductOffers;