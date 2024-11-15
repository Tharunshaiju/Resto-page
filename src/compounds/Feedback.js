import React from 'react'
import FbImg from '../assets/img/pexels-ella-olsson-1640770 1.png'
import logo from '../assets/img/Vector.png'

const Feedback = () => {
  return (
    <section >
        <div className='pt-10'>
            <div >
                <h1 className='flex justify-center text-7xl mt-20 text-orange-400'>Testimonio</h1>
                <p className='flex justify-center text-2xl pt-5'>Cosumidor Feliz</p>
            </div>
            <div className='flex justify-center relative'>
            <img className='w-full m-20 h-1/2' src={FbImg} />
            <div className='flex flex-col absolute top-80 space-y-8 items-center'>
            <img src={logo}/>
            <p className='text-white text-8xl w-2/3 '>Este es un simple texto de relleno solo esta para rellenar, y mostrar el lugar donde iria un texto real de la pagina cuando este hecha en su totalidad</p>
            </div>
            </div>
        </div>
    </section>
  )
}

export default Feedback
