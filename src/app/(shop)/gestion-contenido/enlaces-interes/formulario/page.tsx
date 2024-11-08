import React from 'react'
import { TopMenu } from '@/components/ui/top-menu/TopMenu'
import PieDePagina from '@/components/ui/footer/PieDePagina'
import Form_EnviarEnlace from './Form_EnviarEnlace'

const page = () => {
  return (
    <div>
      <TopMenu />
      <Form_EnviarEnlace />
      <PieDePagina />
    </div>
  )
}

export default page
