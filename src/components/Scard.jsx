import AOS from "aos"
import 'aos/dist/aos.css';
import { useEffect } from "react";

function Scard ({head, sub}) {
  useEffect(() => {
    AOS.init({
      duration: 500,
      easing: 'ease-in-out',
      once: false
    })
  })

  return (<>
    <div data-aos="fade-up" className="poppins w-[250px] h-[98px] bg-white py-[18px] px-[15px] rounded-2xl text-nowrap text-md drop-shadow-lg">
      <h1 className="font-bold">{head}</h1>
      <p className="mt-1.5">{sub}</p> 
      </div>  
  </>)
}

export default Scard