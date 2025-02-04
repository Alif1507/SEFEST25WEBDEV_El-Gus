import { useEffect } from "react";
import Navbar from "./Navbar.jsx";
import mainImg from "/akses/main.png";
import darurat from "/akses/darurat.png";
import AOS from "aos";
import Darurat from "./components/Darurat.jsx";
import Edukasi from "./components/Edukasi.jsx";
import edukasi1 from "/akses/edukasi1.png";
import edukasi2 from "/akses/edukasi2.png";
import edukasi3 from "/akses/edukasi3.png";
import edukasi4 from "/akses/edukasi4.png";
import edukasi5 from "/akses/edukasi5.png";

function Akses() {
  useEffect(() => {
    AOS.init({
      duration: 500,
      easing: "ease-in-out",
      once: false,
    });
  });
  return (
    <>
      <Navbar />

      <div>
        <div
          data-aos="zoom-in-left"
          className="w-screen flex flex-col items-center poppins justify-center "
        >
          <div className="w-[300px] h-auto mt-40">
            <img className="object-cover" src={mainImg} alt="" />
          </div>
          <div>
            <h1 className="font-bold text-5xl text-center text-hero drop-shadow-lg">
              Akses Kesehatan Mudah dan <br /> Terjangkau untuk Semua
            </h1>
          </div>
          <div>
            <h1 className="text-hero text-3xl drop-shadow-lg mt-5">
              Langkah kecil menuju kesehatan yang lebih baik dimulai dari sini.
            </h1>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center mt-42 poppins">
        <div>
          <h1 className="text-hero text-4xl font-bold drop-shadow-2xl mb-16">
            Cari Fasilitas Terdekat
          </h1>
        </div>
        <div className="flex flex-col items-center mt-24">
          <h1 className="text-hero text-xl mb-16">
            Fasilitas Terdekat Yang Bisa Anda Temukan
          </h1>
          <div className="ijo w-[869px] h-[491px] rounded-2xl">.</div>
        </div>
      </div>

      <div className="flex flex-col items-center mt-42">
        <div className="">
          <h1 className="text-hero text-4xl font-bold drop-shadow-2xl mb-16">
            Keadaan Darurat
          </h1>
        </div>
        <div className="w-[1256px] h-max-[784px] bg-[#02564C] rounded-2xl flex p-6 gap-10">
          <div className="text-center flex items-center w-[563px] h-auto mx-12">
            <h1 className="text-white text-3xl poppins">
              Memahami dan mempersiapkan diri untuk menghadapi darurat medis
              adalah langkah penting untuk menjaga keselamatan diri dan orang
              lain. Mengetahui nomor darurat yang tepat, teknik pertolongan
              pertama yang dasar, dan cara menggunakan teknologi untuk menemukan
              layanan medis dapat membuat perbedaan besar dalam situasi krisis.
            </h1>
          </div>
          <div className="flex flex-col">
            <img src={darurat} alt="DARURAT" />
            <Darurat />
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center mt-64">
        <h1 className="text-hero text-4xl font-bold drop-shadow-2xl mb-16">
          Edukasi Kesehatan
        </h1>
      </div>

      <div
        className="flex scroll-smooth snap-x snap-mandatory gap-32 overflow-x-scroll mx-[510px] [&::-webkit-scrollbar]:w-2
  [&::-webkit-scrollbar-track]:bg-gray-100
  [&::-webkit-scrollbar-thumb]:bg-gray-300"
      >
        <div className="snap-center">
          <Edukasi
            poto={edukasi1}
            head="Pencegahan Penyakit"
            subhead="Mencegah lebih baik daripada mengobati. Berikut beberapa cara untuk menghindari penyakit:"
            satu="Imunisasi: Vaksinasi adalah cara efektif untuk melindungi diri dari penyakit berbahaya seperti hepatitis, campak, dan COVID-19."
            dua="Pola Hidup Higienis: Rajin mencuci tangan, menjaga kebersihan lingkungan, dan menghindari kontak langsung dengan orang yang sakit."
            tiga="Pemeriksaan Kesehatan Berkala: Melakukan medical check-up secara rutin dapat mendeteksi penyakit lebih awal dan meningkatkan peluang penyembuhan."
          />
        </div>
        <div className="snap-center">
          <Edukasi
            poto={edukasi2}
            head="Pertolongan Pertama dan Keadaan Darurat"
            subhead="Mengetahui tindakan pertolongan pertama dapat menyelamatkan nyawa seseorang dalam kondisi darurat. Beberapa langkah dasar yang perlu diketahui:"
            satu="CPR (Resusitasi Jantung-Paru): Teknik kompresi dada dan pernapasan buatan untuk membantu korban henti jantung."
            dua="Penanganan Luka: Bersihkan luka dengan antiseptik dan balut dengan perban untuk mencegah infeksi."
            tiga="Serangan Jantung dan Stroke: Kenali tanda-tandanya seperti nyeri dada, kesulitan bicara, dan kelemahan di satu sisi tubuh. Segera hubungi layanan darurat"
          />
        </div>
        <div className="snap-center">
          <Edukasi
            poto={edukasi3}
            head="Kesehatan Reproduksi dan Seksual"
            subhead="Pendidikan kesehatan reproduksi penting untuk semua kalangan:"
            satu="Kesehatan Organ Reproduksi: Menjaga kebersihan dan melakukan pemeriksaan rutin untuk mencegah penyakit menular seksual (PMS)."
            dua="Kehamilan Sehat: Konsumsi makanan bergizi, hindari alkohol dan rokok, serta lakukan pemeriksaan kehamilan secara rutin."
            tiga="Pencegahan PMS: Gunakan pengaman saat berhubungan seksual dan lakukan tes kesehatan secara berkala."
          />
        </div>
        <div className="snap-center">
          <Edukasi
            poto={edukasi4}
            head="Kesehatan Anak dan Lansia"
            subhead="Setiap tahap kehidupan memiliki kebutuhan kesehatan yang berbeda:"
            satu="Perkembangan Anak: Pastikan anak mendapatkan nutrisi yang cukup, vaksinasi tepat waktu, dan stimulasi mental yang baik."
            dua="Perawatan Lansia: Lansia membutuhkan pola makan sehat, aktivitas fisik ringan, serta pemeriksaan kesehatan rutin untuk mencegah penyakit degeneratif."
            tiga="Kesehatan Mental Lansia: Menjaga kesehatan mental dengan aktivitas sosial, hobi, dan lingkungan yang suportif dapat membantu mengurangi risiko depresi dan demensia."
          />
        </div>
        <div className="snap-center">
          <Edukasi
            poto={edukasi5}
            head="Teknologi dan Inovasi Kesehatan"
            subhead="Perkembangan teknologi membawa dampak positif dalam dunia medis:"
            satu="Telemedicine: Konsultasi kesehatan secara online memungkinkan akses yang lebih mudah dan cepat ke layanan medis."
            dua="Wearable Devices: Jam tangan pintar dan alat kesehatan digital membantu memantau tekanan darah, detak jantung, serta kualitas tidur."
            tiga="Obat dan Vaksin Baru: Inovasi di bidang farmasi terus berkembang untuk menyediakan pengobatan yang lebih efektif dan minim efek samping."
          />
        </div>
      </div>
    </>
  );
}

export default Akses;
