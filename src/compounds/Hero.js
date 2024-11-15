import React from 'react'
import HeroImg from'../assets/img/korean-dish-gc0e898cb5_1280 1.png'
import leafIcon from '../assets/img/bx_leaf.png'
import rocketIcon from '../assets/img/bx_rocket.png'
import supportIcon from '../assets/img/bx_support.png'

const Hero = () => {
  return (
    <section>
      <div className='flex justify-evenly'>
        <div className='space-y-9 flex flex-col items-center justify-center'>
        <p className='text-6xl '>Comida casera,<br/> saludable y <span className='text-bold text-green-600'>vegana</span></p>
        <button className='btn'>Ver menu</button>
        <div>
        <ul className='flex flex-row space-x-16'>
          <li><img src={leafIcon}/> Fresco</li>
          <li><img src={rocketIcon}/> Rapido</li>
          <li><img src={supportIcon}/> soporte</li>
        </ul>
        </div>
        </div>
        <div className='flex'>
        <img src={HeroImg}/>
        </div>
      </div>
    </section>
  )
}

export default Hero
