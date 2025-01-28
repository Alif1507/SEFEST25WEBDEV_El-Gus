import { useEffect } from "react";
import Paragraf1, { AcccordianItem } from "./components/Paragraf1.jsx";
import AOS from "aos";
import mental from "/mental.png"


function Subhero() {
useEffect(() => {
      AOS.init({
        duration: 500,
        easing: 'ease-in-out',
        once: false
      })
    })
  return (
    <>
      <div className="w-screen flex flex-col justify-center items-center mt-28 drop-shadow-lg" data-aos="fade-up">
        <div>
          <h1 className="text-hero text-4xl font-bold drop-shadow-2xl mb-16">
            Kesehatan Mental
          </h1>
        </div>
        <div className="ijo py-10 w-5xl mx-24 rounded-3xl">
          <h1 className="text-4xl text-white font-bold ml-16 text-center">
            Apa Itu Kesehatan Mental?
          </h1>
          <div className="flex justify-around">
          <div className="text-white ml-14 mt-10">
            <Paragraf1 className="max-w-lg">
              <AcccordianItem
                value="1"
                trigger="Apa yang dimaksud dengan kesehatan mental yang baik?"
              >
                Kesehatan mental yang baik adalah kondisi di mana kejiwaan dan
                pikiran berada dalam keadaan tenang dan damai. Hal ini
                memungkinkan seseorang untuk berpikir jernih dan fokus saat
                beraktivitas.
              </AcccordianItem>
              <AcccordianItem
                value="2"
                trigger="Apa dampak dari gangguan kesehatan mental yang tidak ditangani dengan baik?
"
              >
                Gangguan kesehatan mental yang tidak ditangani dapat menyebabkan
                berbagai masalah, seperti menurunnya produktivitas di tempat
                kerja, prestasi di sekolah, serta rusaknya hubungan sosial. Hal
                ini pada akhirnya memengaruhi kualitas hidup penderitanya.
              </AcccordianItem>
              <AcccordianItem
                value="3"
                trigger="Mengapa penting untuk mengenali tanda-tanda gangguan mental sejak dini?"
              >
                Mengenali tanda-tanda gangguan mental sejak dini penting agar
                kesehatan mental dapat segera dipelihara dan ditangani dengan
                tepat. Selain itu, hal ini juga membantu menghilangkan stigma
                bahwa gangguan mental adalah sesuatu yang tabu atau memalukan
                untuk diperbincangkan.
              </AcccordianItem>
            </Paragraf1>
          </div>
          <div className="w-[400px] h-auto">
            <img className="object-cover" src={mental} alt="" />
          </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Subhero;
