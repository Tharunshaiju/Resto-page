import React from 'react'
import chefImg1 from '../assets/img/pexels-вадим-маркин-2102934 1.png'
import chefImg2 from '../assets/img/pexels-ketut-subiyanto-4353583 1.png'
import chefImg3 from '../assets/img/pexels-miquel-ferran-gomez-figueroa-3814446 1.png'
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Support = () => {
  return (
    <section id='Support'>
        <div>
        <h1 className='flex justify-center text-2xl mt-20 text-orange-400'>Expertos</h1>
        <p className='flex justify-center text-7xl pt-5'>Nuestra Cocina</p>
        </div>
        <div className='flex justify-evenly mt-10'>
            <div className='relative'>
                <img src={chefImg1} />
                <div className='absolute bg-white flex flex-col w-auto height-auto top-80 left-12 p-10 items-center space-y-3 rounded-xl'>
                <p className='text-black text-4xl'>Rodrigo Russo</p>
                <p className='text-2xl'>chef</p>
                <ul className='flex flex-row space-x-7'>
                  <li className='logo'><FaTwitter size={30}/></li>
                  <li><FaInstagram size={30}/></li>
                  <li><FaFacebook size={30}/></li>
                </ul>
                </div>
            </div>
            <div className='relative'>
            <img src={chefImg2} />
            <div className='absolute bg-white flex flex-col w-auto height-auto top-80 left-12 p-10 items-center space-y-3 rounded-xl'>
                <p className='text-black text-4xl'>Maria Olivos</p>
                <p className='text-2xl'>chef</p>
                <ul className='flex flex-row space-x-7'>
                  <li><FaTwitter size={30}/></li>
                  <li><FaInstagram size={30}/></li>
                  <li><FaFacebook size={30}/></li>
                </ul>
                </div>
            </div>
            <div className='relative'>
            <img src={chefImg3} />
            <div className='absolute bg-white flex flex-col w-auto height-auto top-80 left-12 p-10 items-center space-y-3 rounded-xl'>
                <p className='text-black text-4xl'>Fabiano Caruana</p>
                <p className='text-2xl'>chef</p>
                <ul className='flex flex-row space-x-7'>
                  <li><FaTwitter size={30}/></li>
                  <li><FaInstagram size={30}/></li>
                  <li><FaFacebook size={30}/></li>
                </ul>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Support
