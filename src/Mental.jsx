import Navbar from "./Navbar.jsx"
import Hero from "./Hero.jsx"
import Subhero from "./Subhero.jsx"
import Penyebab from "./Penyebab.jsx";
import Menjaga from "./Menjaga.jsx";
import Statistic from "./Statistic.jsx";
import Footer from "./components/Footer.jsx";
import bg1 from "/mental/bg/bg1.png"
import bg2 from "/mental/bg/bg2.png"
import bg3 from "/mental/bg/bg3.png"
import bg4 from "/mental/bg/bg4.png"
import bg5 from "/mental/bg/bg5.png"
import bg6 from "/mental/bg/bg6.png"
import bg7 from "/mental/bg/bg7.png"
import bg8 from "/mental/bg/bg8.png"
import { useEffect } from "react";
import AOS from "aos";

function Mental () {
  useEffect(() => {
    AOS.init({
      duration: 500,
      easing: 'ease-in-out',
      once: false
    })
  })
  return(<>
  <img className="absolute top-0 left-0" src={bg1} alt="" />
  <img className="absolute top-[450px] left-0" src={bg4} alt="" />
  <img className="absolute top-0 left-[1320px]" src={bg2} alt="" />
  <img className="absolute top-[180px] left-[560px] -z-10" src={bg3} alt="" />
  <img className="absolute top-[600px] left-[1320px] -z-10" src={bg5} alt="" />
  <img className="absolute top-[1372px] left-0 -z-10" data-aos="fade-right" src={bg6} alt="" />
  <img className="absolute top-[1822px] left-[1090px] -z-10" data-aos="fade-left" src={bg7} alt="" />
  <img className="absolute top-[1822px] left-[1090px] -z-10" data-aos="fade-left" src={bg8} alt="" />
  <Navbar />
    <Hero />
    <Subhero />
    <Penyebab />
    <Statistic />
    <Menjaga />
    <Footer />
  </>)
}

export default Mental