import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

function Darurat() {
  const [openIndex, setOpenIndex] = useState(null);

  const clickHandler = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const sections = [
    {
      title: "Nomor Darurat Medis",
      content: [
        "Ambulans: Hubungi 112 atau nomor darurat setempat.",
        "COVID-19: 119 ext 9 untuk layanan di Indonesia.",
        "Kesehatan Mental: Hotline untuk dukungan psikologis.",
        "RS Rujukan: Simpan kontak rumah sakit terdekat.",
      ],
    },
    {
      title: "Pertolongan Pertama (First Aid)",
      content: [
        "CPR: 30 kompresi dada, 2 napas buatan.",
        "Luka: Bersihkan, tekan, dan balut luka.",
        "Patah Tulang: Stabilkan, jangan digerakkan.",
      ],
    },
    {
      title: "Penanganan Darurat Medis",
      content: [
        "Serangan Jantung: Segera cari bantuan, berikan aspirin jika memungkinkan.",
        "Stroke: Kenali tanda FAST (Face, Arm, Speech, Time).",
        "Sulit Bernapas: Gunakan inhaler atau epinefrin jika ada.",
        "Keracunan: Hubungi darurat, jangan buat muntah kecuali disarankan dokter.",
      ],
    },
    {
      title: "Peta Rumah Sakit & Fasilitas Darurat",
      content: [
        "Peta Interaktif: Menampilkan rumah sakit, klinik, apotek terdekat.",
        "Rumah Sakit Spesialis: Daftar RS jantung, trauma, ibu & anak, dll.",
      ],
    },
    {
      title: "Tips Menghadapi Darurat",
      content: [
        "Tetap Tenang: Fokus dan lakukan langkah yang benar.",
        "Berikan Info Jelas: Lokasi, kondisi korban, dan jenis cedera.",
        "Kotak P3K: Selalu sediakan di rumah/kendaraan.",
      ],
    },
  ];

  return (
    <>
      {sections.map((section, index) => (
        <div
          key={index}
          className="w-[523px] transition-all ease-in-out duration-500 ijo drop-shadow-2xl justify-between items-center p-4 mt-4 cursor-pointer overflow-hidden"
        >
          <div onClick={() => clickHandler(index)} className="flex justify-between items-center cursor-pointer">
            <h1 className="text-2xl text-white font-bold">{section.title}</h1>
            <FaChevronDown
              className={`cursor-pointer transition-transform duration-500 ${
                openIndex === index ? "rotate-180" : "rotate-0"
              }`}
              color="#ffffff"
              size={30}
            />
          </div>
          <div
            className={`transition-all duration-500 ease-in-out overflow-hidden ${
              openIndex === index ? "max-h-[500px]" : "max-h-0"
            }`}
          >
            <div className="mx-5 mt-5">
              <ul className="list-disc text-white text-xl">
                {section.content.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Darurat;
