import { PaidFailed } from '@/assets/images'
import { useShoppingCartStore } from '@/store/shoppingCartStore';
import Image from 'next/image'
import React from 'react'

export default function () {

    return (
        <div className='flex justify-center flex-col items-center my-e55'>
            <h1
                className='mb-e13 text-center font-semibold text-fs24 sm:text-fs24 md:text-fs36 lg:text-fs36 text-primary'
            >
                NO SE LOGRO PROCESAR EL PAGO
            </h1>
            <Image src={PaidFailed.src} alt="Pago exitoso" width={300} height={300} />

            <h3
                className='mb-e13 text-center font-semibold text-fs14 sm:text-fs14 md:text-fs18 lg:text-fs18 text-secondary'
            >
                Lo sentimos, no se logro procesar el pago, por favor intentalo mas tarde.
            </h3>
        </div>
    )
}