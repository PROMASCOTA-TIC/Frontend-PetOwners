import { FeedbackNoRecords } from '@/assets/images'
import Image from 'next/image'
import React from 'react'

export const NoRecordsFeedback = () => {
    return (
        <div className='flex flex-col justify-center items-center'>
            <Image src={FeedbackNoRecords.src} alt='No records found' width={250} height={250} />
            <p className='mb-e8 font-semibold text-aux1 text-fs18 sm:text-fs18 md:text-fs24 lg:text-fs24'>
                No se lograron obtener resultados :c Intentelo mas tarde.
            </p>
        </div>
    )
}
