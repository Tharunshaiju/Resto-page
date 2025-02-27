import React from 'react'
import MenuImg from '../assets/img/pexels-chevanon-photography-302900 1.png'

const Menu = () => {
  return (
    <section id='Menu'>
        <div>
            <div>
                <h1 className='text-7xl flex justify-center mt-20 '>Menu</h1>
                <p className='text-3xl flex text-orange-400 justify-center mt-1'>Veganisimo</p>
            </div>
            <div className='md:flex md:justify-evenly mt-10 font-light hidden md:block'>
                <p className='text-3xl font-semibold'>Desayuno</p>
                <p className='text-3xl font-semibold'>Almuerzo</p>
                <p className='text-3xl font-semibold'>Merienda</p>
            </div>
            
            <div className='flex flex-col md:flex-row space-y-5 md:space-y-0 justify-evenly m-12 '>
            <p className='text-3xl font-semibold flex justify-center items-center md:hidden'>Desayuno</p>
                <div className='flex '>
                   <img className='w-1/2' src={MenuImg} />
                    <p className='p-5 space-x-5'><span className='text-2xl'>Cafe con Leche  $150</span> <br />3 criollitos, Mermelada</p>
                </div>
                <div className='flex'>
                    <img className='w-1/2' src={MenuImg} />
                    <p className='p-5'><span className='text-2xl'>Cafe con Leche $150</span> <br />3 criollitos, Mermelada</p>
                </div>
                <div className='flex'>
                    <img className='w-1/2' src={MenuImg} />
                    <p className='p-5'><span className='text-2xl'>Cafe con Leche $150</span> <br />3 criollitos, Mermelada</p>
                </div>
            </div>
            <div className='flex flex-col md:flex-row space-y-5 md:space-y-0 justify-evenly m-12'>
            <p className='text-3xl font-semibold flex justify-center items-center md:hidden'>Almuerzo</p>
                <div className='flex'>
                    <img className='w-1/2' src={MenuImg} />
                    <p className='p-5'><span className='text-2xl'>Cafe con Leche $150</span> <br />3 criollitos, Mermelada</p>
                </div>
                <div className='flex'>
                    <img className='w-1/2' src={MenuImg} />
                    <p className='p-5'><span className='text-2xl'>Cafe con Leche $150</span> <br />3 criollitos, Mermelada</p>
                </div>
                <div className='flex'>
                    <img className='w-1/2' src={MenuImg} />
                    <p className='p-5'><span className='text-2xl'>Cafe con Leche $150</span> <br />3 criollitos, Mermelada</p>
                </div>
            </div>
            <div className='flex flex-col md:flex-row space-y-5 md:space-y-0 justify-evenly m-12'>
            <p className='text-3xl font-semibold flex justify-center items-center md:hidden'>Almuerzo</p>
                <div className='flex'>
                    <img className='w-1/2' src={MenuImg} />
                    <p className='p-5'><span className='text-2xl '>Cafe con Leche $150</span> <br />3 criollitos, Mermelada</p>
                </div>
                <div className='flex'>
                    <img className='w-1/2' src={MenuImg} />
                    <p className='p-5'><span className='text-2xl'>Cafe con Leche $150</span> <br />3 criollitos, Mermelada</p>
                </div>
                <div className='flex'>
                    <img className='w-1/2' src={MenuImg} />
                    <p className='p-5'><span className='text-2xl'>Cafe con Leche $150</span> <br />3 criollitos, Mermelada</p> 
                </div>
            </div>
        </div>
    </section>
  )
}

export default Menu
