import React from 'react'
import Background from '../assets/background.jpg' 
import Foto from '../assets/foto rectangular (1).png' 
import Mobile from '../assets/fotoMobile.png'

const Hero = () => {

  return (
    <div>
      <div className=''>
      <img className='md:hidden z-2 '    src={Mobile} alt="foto" />
      <img className='hidden md:block fill-teal-500'   src={Foto} alt="foto" />
      </div>
    </div>
  )
}

export default Hero
