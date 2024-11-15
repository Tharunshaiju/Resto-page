import React from 'react'
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import map from '../assets/img/Mapa.png'
const Footer = () => {
  return (
    <div id='Footer' className='bg-gray-700 flex mt-10 flex-row justify-evenly pt-20 pb-20'>
      <div className='text-white space-y-10 w-1/5'>
        <p className='text-7xl'>Resto</p>
        <p className='text-xl'>Este es un simple texto de relleno solo esta para rellenar, y mostrar el lugar donde iria un texto real de la pagina cuando este hecha en su totalidad</p>
        <p>2009-2025</p>
        <ul className='flex flex-row space-x-8'>
            <li><FaTwitter size={50} /></li>
            <li><FaInstagram  size={50}/></li>
            <li><FaFacebook  size={50}/></li>
        </ul>
      </div>

      <div className='flex flex-col justify-center items-center space-y-6'>
        <p className='text-4xl text-orange-400 border-b-2 w-40'>Horarios</p>
        <ul className='space-y-1 text-2xl text-white'>
            <li>Lunes <span >9:00 - 21:00</span></li>
            <li>Martes <span >9:00 - 21:00</span></li>
            <li>Miercoles <span >9:00 - 21:00</span></li>
            <li>Jueves <span >9:00 - 21:00</span></li>
            <li>Viernes <span >9:00 - 21:00</span></li>
            <li>Sabado <span >9:00 - 21:00</span></li>
            <li>Domingo <span >9:00 - 21:00</span></li>
        </ul>
        <p className='text-4xl text-orange-400 border-b-2 w-40'>Telefono</p>
        <p className='text-xl text-white'>+54 351 7608573</p>
      </div>

      <div className='space-y-5'>
        <p className='text-4xl text-orange-400 border-b-2 w-40'>Direccion</p>
        <p className='text-xl text-white'>Humberto Primo 771 Cordoba Capital, Bv Centro</p>
        <img src={map} />
      </div>
    </div>
  )
}

export default Footer
