import { PagoExitoso } from '@/assets/images'
import { useShoppingCartStore } from '@/store/shoppingCartStore';
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function () {
    const buyType = useShoppingCartStore((state) => state.buyType);

    return (
        <div className='flex justify-center flex-col items-center my-e55'>
            <h1
                className='mb-e13 text-center font-semibold text-fs24 sm:text-fs24 md:text-fs36 lg:text-fs36 text-primary'
            >
                PAGO EXITOSO!
            </h1>
            <Image src={PagoExitoso.src} alt="Pago exitoso" width={300} height={300} />

            {
                buyType === 'delivery' ? (
                    <h2
                        className='my-e13 text-center font-semibold text-fs18 sm:text-fs18 md:text-fs24 lg:text-fs24 text-primary'
                    >
                        Tu pedido ha sido procesado y será entregado en la dirección que proporcionaste.
                    </h2>
                ) : (
                    <h2
                        className='my-e13 text-center font-semibold text-fs18 sm:text-fs18 md:text-fs24 lg:text-fs24 text-primary'
                    >
                        Tu pedido ha sido procesado y estará listo para ser retirado en el local del emprendedor.
                    </h2>
                )
            }

            <h3
                className='mb-e13 text-center font-semibold text-fs14 sm:text-fs14 md:text-fs18 lg:text-fs18 text-secondary'
            >
                
            </h3>

            <Link href={'/account-settings/historialCompras'} passHref className='hover:underline cursor-pointer mb-e13 text-center font-semibold text-fs14 sm:text-fs14 md:text-fs18 lg:text-fs18 text-secondary'>
                El comprobante de tu compra ha sido generado, revísalo en tu Historial de compras.
            </Link>
        </div>
    )
}