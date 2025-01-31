import { useState } from "react";
import Hcard1 from "./components/Hcard1.jsx";
import poto1 from "/mental/group/poto1.png"
import poto2 from "/mental/group/poto2.png"
import poto3 from "/mental/group/poto3.png"
import poto4 from "/mental/group/poto4.png"
import poto5 from "/mental/group/poto5.png"
import poto6 from "/mental/group/poto6.png"
import poto7 from "/mental/group/poto7.png"
import poto8 from "/mental/group/poto8.png"
import poto9 from "/mental/group/poto9.png"


function Menjaga() {
  const [buka, setBuka] = useState(false);
  const [buka1, setBuka1] = useState(false);
  const [buka2, setBuka2] = useState(false);
  const [buka3, setBuka3] = useState(false);
  const [buka4, setBuka4] = useState(false);
  const [buka5, setBuka5] = useState(false);
  const [buka6, setBuka6] = useState(false);
  const [buka7, setBuka7] = useState(false);
  const [buka8, setBuka8] = useState(false);

  function clickHandler() {
    setBuka(!buka);
  }

  function clickHandler1() {
    setBuka1(!buka1);
  }

  function clickHandler2() {
    setBuka2(!buka2);
  }

  function clickHandler3() {
    setBuka3(!buka3);
  }

  function clickHandler4() {
    setBuka4(!buka4);
  }

  function clickHandler5() {
    setBuka5(!buka5);
  }

  function clickHandler6() {
    setBuka6(!buka6);
  }

  function clickHandler7() {
    setBuka7(!buka7);
  }

  function clickHandler8() {
    setBuka8(!buka8);
  }


  return (
    <>
      <div className="grid grid-cols-3 content-around justify-items-center mt-64 gap-16">
        <div data-aos="fade-up" onClick={clickHandler}>
          <Hcard1
            poto={poto1}
            head="TERAPI"
            subhead="Terapi psikologis merupakan langkah efektif untuk mengatasi masalah kesehatan mental. Dalam terapi psikologis, Anda bisa berbicara tentang perasaan, pikiran, dan pengalaman kepada terapis profesional. Terapis akan membantu mengidentifikasi dan mengatasi penyebab masalah mental serta strategi untuk menghadapinya lebih baik."
          />
        </div>

        <div data-aos="fade-up" onClick={clickHandler1}>
          <Hcard1
            poto={poto2}
            head="MEDITASI"
            subhead="Meditasi bisa membantu mengurangi stres, kecemasan, dan depresi yang merupakan bagian dari masalah kesehatan mental. Melalui meditasi, Anda akan lebih fokus pada pernapasan, mengurangi pikiran yang mengganggu, dan meningkatkan kesadaran diri. Lakukan meditasi secara rutin sebagai bagian dari kebiasaan untuk membantu mengelola emosi dan meningkatkan kesejahteraan mental."
          />
        </div>

        <div data-aos="fade-up" onClick={clickHandler2}>
          <Hcard1
            poto={poto3}
            head="OLAHRAGA"
            subhead="erapi psikologis merupakan langkah efektif untuk mengatasi masalah kesehatan mental. Dalam terapi psikologis, Anda bisa berbicara tentang perasaan, pikiran, dan pengalaman kepada terapis profesional. Terapis akan membantu mengidentifikasi dan mengatasi penyebab masalah mental serta strategi untuk menghadapinya lebih baik."
          />
        </div>

        <div data-aos="fade-up" onClick={clickHandler3}>
          <Hcard1
            poto={poto4}
            head="POLA MAKAN"
            subhead="Mengonsumsi makanan bergizi, seperti buah, sayuran, ikan, dan biji-bijian akan memberikan nutrisi yang diperlukan untuk fungsi otak yang optimal. Hindari mengonsumsi makanan olahan dan mengandung gula yang berlebihan. Kurangi mengonsumsi alkohol agar emosi tetap stabil dan risiko gangguan mental bisa diatasi."
          />
        </div>

        <div data-aos="fade-up" onClick={clickHandler4}>
          <Hcard1
            poto={poto5}
            head="MENGHINDARI KEBIASAAN BURUK"
            subhead="Kebiasaan buruk seperti mengonsumsi alkohol berlebihan, penggunaan obat-obatan terlarang, atau merokok dapat memperburuk dan memengaruhi keseimbangan kimia otak yang bisa memperburuk gejala masalah mental. Hindari kebiasaan buruk sebagai bentuk dukungan terbaik bagi kesehatan mental Anda."
          />
        </div>

        <div data-aos="fade-up" onClick={clickHandler5}>
          <Hcard1
            poto={poto6}
            head="MEMPERKUAT DUKUNGAN SOSIAL"
            subhead="Dukungan sosial yang kuat dapat mengatasi masalah kesehatan mental. Rajinlah bersosialisasi dan berbicara bersama teman, keluarga, atau terapis untuk membantu Anda dalam menghadapi tantangan mental. Jaga hubungan yang sehat dan perkuat jaringan dukungan sosial, supaya isolasi sosial bisa dikurangi sehingga bisa meningkatkan kesejahteraan mental."
          />
        </div>

        <div data-aos="fade-up" onClick={clickHandler6}>
          <Hcard1
            poto={poto7}
            head="MENJAGA KESEHATAN TUBUH"
            subhead="Kesehatan fisik yang optimal berdampak positif pada kesehatan mental. Rawatlah tubuh dengan tidur cukup, menjaga pola makan yang sehat, dan menghindari kebiasaan yang merugikan. Ketika tubuh berada dalam kondisi baik, otak akan berfungsi lebih baik sehingga  bisa mengurangi risiko gangguan mental dan menjaga kesehatan mental yang optimal."
          />
        </div>

        <div data-aos="fade-up" onClick={clickHandler7}>
          <Hcard1
            poto={poto8}
            head="TIDUR YANG CUKUP"
            subhead="Beristirahat yang cukup sangatlah penting bagi kesehatan mental. Kurang tidur dapat memengaruhi suasana hati, kemampuan konsentrasi, dan daya tahan tubuh. Tubuh akan lebih mudah pulih dan mampu mengatur kembali keseimbangan kimia pada otak, sehingga membantu menjaga kesehatan mental yang baik. Usahakan untuk tidur cukup setiap malam sekitar 7-8 jam untuk menjaga kualitas tidur yang optimal."
          />
        </div>

        <div data-aos="fade-up" onClick={clickHandler8}>
          <Hcard1
            poto={poto9}
            head="MENGEMBANGKAN KETERAMPILAN KOPING"
            subhead="Keterampilan koping atau cara menghadapi stres adalah langkah penting dalam mengatasi masalah kesehatan mental. Strategi mengembangkan keterampilan koping terdiri dari mengelola emosi, mengatur waktu, berbicara dengan orang terdekat, atau mengubah pola pikir negatif menjadi positif. Anda akan mampu menghadapi tantangan dan tekanan hidup lebih baik serta mengurangi dampak negatif pada kesehatan mental."
          />
        </div>
      </div>
    </>
  );
}

export default Menjaga;
