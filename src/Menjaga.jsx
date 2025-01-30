import { useState } from "react";
import Hcard1 from "./components/Hcard1.jsx";
import poto from "/mental/Group.svg";
import poto1 from "/mental/Group (3).png";
function Menjaga() {
  const [buka, setBuka] = useState(false);

  function clickHandler() {
    setBuka(!buka);
  }
  return (
    <>
      <div className="grid grid-cols-3 content-around justify-items-center mt-64 gap-16">
        <div onClick={clickHandler}>
          <Hcard1
            poto={buka ? poto1 : poto}
            head="TERAPI"
            subhead="Terapi psikologis merupakan langkah efektif untuk mengatasi masalah kesehatan mental. Dalam terapi psikologis, Anda bisa berbicara tentang perasaan, pikiran, dan pengalaman kepada terapis profesional. Terapis akan membantu mengidentifikasi dan mengatasi penyebab masalah mental serta strategi untuk menghadapinya lebih baik."
          />
        </div>
        <Hcard1 />
        <Hcard1 />
        <Hcard1 />
        <Hcard1 />
        <Hcard1 />
        <Hcard1 />
        <Hcard1 />
        <Hcard1 />
      </div>
    </>
  );
}

export default Menjaga;
