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
import logo2 from "/home/logo2.png";
import vector from "/home/Vector.png";

function Home() {
  return (
    <>
      <Navbar />
      <img className="absolute top-0 left-0" src={vector} alt="" />
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

      <div>
        <div className="text-hero text-4xl font-bold drop-shadow-2xl mt-64 mb-24 text-center">
          <h1 className="text-8xlxl">Content</h1>
        </div>
        <div className="flex justify-around">
          <Hcard head="Kesehatan Mental" poto={hati1} />
          <Hcard head="Gaya Hidup Seheat" poto={sehat} />
          <Hcard head="Akses Kesehatan" poto={akses} />
        </div>
      </div>

      <footer className="w-screen ijo-tua h-[300px] mt-96">
        <div className="flex justify-around items-center">
          <div>
            <h1 className="font-bold text-white drop-shadow-2xl text-3xl">
              Let's live <span className="text-green-300">Healthy</span> from{" "}
              <br /> rigth now !
            </h1>
          </div>
          <div className="w-[9px] h-[212px] bg-slate-200 mt-10">.</div>
          <div>
            <div className="flex items-center  gap-5">
              <div className="w-[80px] h-auto">
                <img className="object-cover" src={logo2} alt="" />
              </div>
              <h1 className="font-bold text-white poppins text-3xl">Healty Together</h1>
            </div>
            <div className="flex justify-around fill-white mt-10">
              <div className="w-[50px] h-auto">
                <svg
                  className="object-cover w-full h-full"
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Facebook</title>
                  <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z" />
                </svg>
              </div>
              <div className="w-[50px] h-auto">
                <svg
                  className="object-cover w-full h-full"
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Instagram</title>
                  <path d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077" />
                </svg>
              </div>

              <div className="w-[50px] h-auto">
                <svg
                className="object-cover w-full h-full"
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>X</title>
                  <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Home;
