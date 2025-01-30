import Hcard from "./components/Hcard.jsx";
import Navbar from "./Navbar";
import goals from "/goals.png";
import logo1 from "/LOGO2.png";
import Button from "./components/Button";
import hati from "/hati.png";
import { Link } from "react-router";
import hati1 from "/home/mdi_heart.png";
import sehat from "/home/healthicons_health-outline.png";
import akses from "/home/mdi_location.png";
import vector from "/home/Vector.png";
import vector2 from "/home/Vector (1).png";
import vector3 from "/home/Vector (2).png";
import vector4 from "/home/Vector (3).png";
import vector5 from "/home/Vector (4).png";
import vector6 from "/home/Vector (6).png";
import vector7 from "/home/Vector (7).png";
import vector8 from "/home/Vector (8).png";
import Footer from "./components/Footer.jsx"
import { useEffect } from "react";
import AOS from "aos";

function Home() {
  useEffect(() => {
          AOS.init({
            duration: 500,
            easing: 'ease-in-out',
            once: false
          })
        })
  return (
    <>
      <Navbar />
      <img className="absolute top-0 left-0" src={vector} alt="" />
      <img className="absolute top-0 left-[1340px]" src={vector2} alt="" />
      <img
        className="absolute top-[500px] left-[1340px]"
        src={vector3}
        alt=""
      />
      <div data-aos="zoom-in" className="cross h-screen flex w-screen items-center justify-center gap-28">
        <div className="text-hero">
          <h1 className="text-6xl font-bold abu p-2 rounded-br-2xl rounded-tr-2xl">
            Healthy Together{" "}
          </h1>
          <p className="abu p-2 rounded-br-2xl rounded-tr-2xl">
            Ensure healthy lives and promote well-being for all at all ages{" "}
            <br />
            Towards Health and Well-Being for All!
          </p>
          <Link to="/mental">
            <button className="abu p-2 rounded-br-2xl rounded-tr-2xl cursor-pointer mt-3">
              <Button Children="Ayo Mulai Hidup Sehat!" />
            </button>
          </Link>
        </div>
        <div className="w-[600px] max-h-auto">
          <img className="object-fill" src={logo1} alt="" />
        </div>
      </div>

      <div data-aos="fade-up" className="flex flex-col justify-center items-center">
        <div className="w-screen flex justify-center">
          <h1 className="text-hero text-4xl font-bold drop-shadow-2xl mb-16">
            APA ITU HEALTHY TOGETHER
          </h1>
        </div>
        <div className="flex ijo-tua w-5xl mx-24 rounded-3xl items-center">
          <div className="w-[2500px] h-auto">
            <img className="object-fill w-full max-h-auto" src={logo1} alt="" />
          </div>
          <div>
            <p className="text-end text-lg  text-white mx-16">
              Healthy Together adalah merupakan website yang memberikan
              informasi tentang kesehatan, Web ini memberikan informasi seputar
              kesehatan baik itu dari dampak, penyebab, akibat, ataupun solusi,
              kami mengambil tema kesehatan yang dimana mengikuti salah satu
              tema 17 SDGs yang dikelola United Nations yaitu no 3 Good Health
              And Well-Being
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-around mt-32  items-center">
        <div className="flex flex-col">
          <div className="text-hero">
            <img
              className="absolute top-[1100px] left-0"
              src={vector4}
              alt=""
            />
            <img
              className="absolute top-[1100px] left-[1340px]"
              src={vector5}
              alt=""
            />

            <h1 data-aos="fade-right" className="text-3xl font-bold text-center mb-16">17SDGs</h1>
          </div>
          <div data-aos="fade-right" className="abu h-[423px] w-[444px] rounded-2xl shadow-2xl flex flex-col menjaga-border justify-around items-center">
            <div>
              <img src={goals} alt="" />
            </div>
            <p  className="text-center mx-10 text-hero">
              17 SDGs (Sustainable Development Goals) atau Tujuan Pembangunan
              Berkelanjutan adalah agenda global yang terdiri dari 17 tujuan
              utama yang diadopsi oleh Perserikatan Bangsa-Bangsa (PBB) pada
              tahun 2015. Tujuan ini dirancang untuk menjadi panduan bagi
              negara-negara di dunia dalam mencapai pembangunan yang
              berkelanjutan secara sosial, ekonomi, dan lingkungan hingga tahun
              2030.
            </p>
          </div>
        </div>
        <img src={vector6} className="absolute left-0 top-[1600px] -z-10" alt="" />
        <img src={vector7} className="absolute left-[500px] top-[1600px] -z-10" alt="" />
        <img src={vector8} className="absolute left-[1200px] top-[1600px] -z-10" alt="" />
        <div className="flex flex-col">
          <div data-aos="fade-left" className="text-hero">
            <h1 className="text-3xl font-bold mb-16 text-center">
              GOOD HEALTH AND WELL-BEING
            </h1>
          </div>
          <div data-aos="fade-left" className="abu h-[423px] w-[444px] rounded-2xl shadow-2xl flex flex-col menjaga-border justify-around items-center">
            <div>
              <img src={hati} alt="" />
            </div>
            <p className="text-center mx-10 text-hero">
              Good Health and Well-Being atau Kesehatan yang Baik dan
              Kesejahteraan adalah tujuan ketiga dari 17 Sustainable Development
              Goals (SDGs) yang bertujuan untuk memastikan kehidupan yang sehat
              dan mempromosikan kesejahteraan untuk semua orang di semua umur.
              Tujuan ini berfokus pada peningkatan akses terhadap layanan
              kesehatan, pengurangan penyakit menular dan tidak menular, serta
              mendorong gaya hidup sehat.
            </p>
          </div>
        </div>
      </div>

      <div data-aos="fade-up">
        <div className="text-hero text-4xl font-bold drop-shadow-2xl mt-64 mb-24 text-center">
          <h1 className="text-8xlxl">Content</h1>
        </div>

        
        <div className="flex justify-around py-10">
          <Hcard
          
            link="/mental"
            head="Kesehatan Mental"
            subhead="Halaman ini menginformasikan tempat akses kesehatan dari berbagai daerah dan juga resep bahan obat obatan murah dari sumber daya alam"
            poto={hati1}
          />
          <Hcard
          link="/gaya"
            head="Gaya Hidup Seheat"
            subhead="Halaman ini berisi beberapa tips untuk nutrisi dan rancangan makanan sehat yang tentunya berisi resep resep berbahan lokal dan berisi panduan aktivitas yang baik untuk sesuai usia"
            poto={sehat}
          />
          <Hcard
          link="/akses"
            head="Akses Kesehatan"
            subhead="Halaman ini berisi informasi penyebab kesehatan mental, dampak dari kesehatan mental yang tak terjaga , dan cara mengatasi kesehatan mental yang tidak baik "
            poto={akses}
          />
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Home;
