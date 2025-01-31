import { useEffect } from 'react'
import mainImg from '/mental/mainimg.png'
import AOS from 'aos'


function Hero () {
  useEffect(() => {
        AOS.init({
          duration: 500,
          easing: 'ease-in-out',
          once: false
        })
      })
  return (<>
    <div className='w-screen flex flex-col items-center poppins justify-center'>
      <div className='w-[300px] h-auto mt-40'>
        <img className='object-cover' src={mainImg} alt="" />
      </div>
      <div>
        <h1 className='font-bold text-5xl text-hero drop-shadow-lg'>GOOD HEALTH AND WELL-BEING</h1>
      </div>
      <div>
        <h1 className='text-hero text-3xl drop-shadow-lg mt-5'>Ensure healthy lives and promote well-being for all at all ages</h1>
      </div>
      <div>
        <h1 className='text-hero text-2xl drop-shadow-lg mt-5'>Towards Health and Well-Being for All!</h1>
      </div>
    </div>
  </>)
}

export default Hero