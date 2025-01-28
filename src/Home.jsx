import Navbar1 from "./Navbar1";
import goals from "/goals.png";
import logo1 from "/LOGO2.png";
import Button from "./components/Button";
import hati from "/hati.png";
import { Link } from "react-router";

function Home() {
  return (
    <>
      <Navbar1 />
      <div className="cross h-screen flex w-screen items-center justify-center gap-28">
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
              <Button />
            </button>
          </Link>
        </div>
        <div className="w-[600px] max-h-auto">
          <img className="object-fill" src={logo1} alt="" />
        </div>
      </div>

      <div className="flex flex-col justify-center items-center">
        <div className="w-screen flex justify-center">
          <h1 className="text-hero text-4xl font-bold drop-shadow-2xl mb-16">
            APA ITU HEALTHY TOGETHER
          </h1>
        </div>
        <div className="flex ijo w-5xl mx-24 rounded-3xl items-center">
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
            <h1 className="text-3xl font-bold text-center mb-16">17SDGs</h1>
          </div>
          <div className="h-[423px] w-[444px] rounded-2xl shadow-2xl flex flex-col menjaga-border justify-around items-center">
            <div>
              <img src={goals} alt="" />
            </div>
            <p className="text-center mx-10 text-hero">
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
        <div className="flex flex-col">
          <div className="text-hero">
            <h1 className="text-3xl font-bold mb-16 text-center">
              GOOD HEALTH AND WELL-BEING
            </h1>
          </div>
          <div className="h-[423px] w-[444px] rounded-2xl shadow-2xl flex flex-col menjaga-border justify-around items-center">
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
    </>
  );
}

export default Home;
