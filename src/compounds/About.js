import React from 'react'
import Hero1Img from '../assets/img/granola-gd58857f68_1280 1.png'
import Hero2Img from '../assets/img/vegan-g07dc68689_1280 1.png'

const About = () => {
  return (
    <section id='About' className=' bg-primary p-8'>  
        <p className='flex justify-center text-black text-7xl'>Especialidades</p>
        <p className='flex justify-center text-orange-400 text-2xl'>de la casa</p>
      
    <div className='flex justify-center gap-20 space-x-20 '>
      <div className='flex flex-col space-y-9 justify-center items-start w-1/4'>
      <p className='border-b-2 text-2xl border-black text-orange-400'>Postres</p>
        <p className=' flex text-5xl  border-b-2  text-bold  border-black text-black'>Yogurt Griego con Semillas y Fresas</p>
        <p className='flex text-xl '>Este es un simple texto de relleno solo esta para rellenar, y mostrar el lugar donde iria un texto real de la pagina cuando este hecha en su totalidad</p>
        <p className='text-4xl  '>$150</p>
        <button className='btn2 p-5 text-2xl text-white mt-5'>Encargar</button>
      </div>
      <img src={Hero1Img}/>
    </div>

  
    <div className='flex justify-center space-x-11 gap-6 ml-20 pl-20'>
    <img  src={Hero2Img}/>
      <div className='flex'>
      <div className='flex flex-col justify-center items-start space-y-9  w-2/3'>
      <p className='border-b-2 text-2xl border-black text-orange-400'>Postres</p>
        <p className=' flex text-5xl border-b-2 text-bold  border-black text-black'>Sopa de Mani con garbanzo</p>
        <p className='flex text-xl'>Este es un simple texto de relleno solo esta para rellenar, y mostrar el lugar donde iria un texto real de la pagina cuando este hecha en su totalidad</p>
        <p className='text-4xl'>$150</p>
        <button className='btn2 p-5 text-2xl text-white'>Encargar</button>
      </div>
      </div>
    

    </div>
    
    

    </section>
  )
}

export default About
