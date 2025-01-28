import { useEffect } from "react"
import Scard from "./components/Scard.jsx"
import AOS from "aos"

function Statistic () {
  useEffect(() => {
      AOS.init({
        duration: 500,
        easing: 'ease-in-out',
        once: false
      })
    })

 return (<>
    <div className="ijo h-[352px] flex flex-col justify-center items-center gap-10 mt-32">
    <div data-aos="zoom-in-up" className="flex justify-center w-screen">
      <h1 className="poppins font-bold drop-shadow-md text-xl text-center text-white">GLOBAL STATISTICS</h1>
    </div>

    <div className="flex flex-row mx-20 abu p-7 h-64 w-auto rounded-3xl">
      <Scard />
    </div>
    </div>
 </>)
}

export default Statistic