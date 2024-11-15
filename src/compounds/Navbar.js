import React from 'react'
import Nicon from '../assets/img/eva_bar-chart-fill.png'


const Header = () => {
  return (
    <header>
        <div className='m-7'>
        <ul className='flex px-8 justify-between items-center'>
        <li><a className='text-3xl effect' href='#Footer'>Contacto</a></li>
        <li><a className='text-3xl effect' href='#About'>Nosotros</a></li>
        <li><a className='text-6xl text-bold font-header-text header-text effect' href='#'>Resto</a></li>
        <li><a className='text-3xl effect' href='#Menu'>Menu</a></li>
        <li><a className='text-3xl effect' href='#Support'>Reservation</a></li>
        </ul>
        </div>
    </header>
  )
}

export default Header