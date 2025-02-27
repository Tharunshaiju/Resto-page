import React from 'react'
import HeroImg from'../assets/img/korean-dish-gc0e898cb5_1280 1.png'
import leafIcon from '../assets/img/bx_leaf.png'
import rocketIcon from '../assets/img/bx_rocket.png'
import supportIcon from '../assets/img/bx_support.png'
import Loctionsvg from '../assets/img/Vector.svg'

const Hero = () => {
  return (
    <section>
      <div className=' flex flex-col md:flex-row justify-evenly'>
        <div className='space-y-9 flex flex-col md:flex-col items-center justify-center'>
        <p className='text-5xl md:text-6xl sm:font-extralight'>Comida casera,<br/> saludable y <span className=' text-green-600'>vegana</span></p>
        <div className='flex gap-8'>  
        <button className='btn'>Ver menu</button>
        <button className='flex items-center gap-2 md:hidden'><img src={Loctionsvg} />Local Cerca</button>
        </div>
        <div>
        <ul className=' flex space-x-16 '>
          <li><img src={leafIcon}/> Fresco</li>
          <li><img src={rocketIcon}/> Rapido</li>
          <li><img src={supportIcon}/> soporte</li>
        </ul>
        </div>
        </div>
        <div className='relative flex mt-6 md:mt-0'>
          {/* <div className='md:hidden absolute bottom-0 left-[100px] px-10 py-5 bg-black'>tharun</div> */}
          <ul className='md:hidden w-full mx-auto gap-5  flex absolute bottom-2 left-[140px]'>
            <li className='px-3 py-3 rounded-full bg-white'></li>
            <li className='px-3 py-3 border border-6 border-solid border-white rounded-full '></li>
          </ul>
        <img className='px-5' src={HeroImg}/>
        </div>
      </div>
    </section>
  )
}

export default Hero
