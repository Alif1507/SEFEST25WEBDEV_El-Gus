import { useState } from "react";
import satu from "/1.png";
import dua from "/2.png";
import tiga from "/3.png";
import empat from "/4.png";
import lima from "/5.png";
import enam from "/6.png";
import tujuh from "/7.png";
import delapan from "/8.png";
import sembilan from "/9.png";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";

function Menjaga() {
  const [buka, setBuka] = useState(false);

  function clickHandler() {
    setBuka(!buka);
  }

  return (
    <>
      <div className="mt-32">
        <div className="flex justify-center items-center w-screen">
          <h1 className="text-hero text-4xl font-bold drop-shadow-2xl mb-16">
            Tips Menjaga Kesehatan Mental
          </h1>
        </div>

        <div className="flex flex-col items-center gap-32">
          <div className="flex">
            <div className="w-[312px] h-[239px] menjaga-border flex flex-col-reverse justify-center items-center py-20 rounded-2xl">
              <div className="mt-10">
                <FaChevronDown
                  className="cursor-pointer"
                  onClick={clickHandler}
                  color="#119586"
                  size={30}
                />
              </div>
              <h1 className="text-hero text-md font-bold">Terapi</h1>
              <div className="h-96 w-auto">
                <img className="object-fill" src={satu} alt="" />
              </div>
            </div>
            
            <div>
              <div className="w-[312px] h-[239px] menjaga-border flex flex-col justify-center items-center py-20 rounded-2xl mx-32">
                <img className="object-fill" src={dua} alt="" />
                <h1 className="text-hero text-md font-bold">Meditasi</h1>
                <div className="mt-10">
                <FaChevronDown
                  className="cursor-pointer"
                  onClick={clickHandler}
                  color="#119586"
                  size={30}
                />
              </div>
              </div>
            </div>
            <div className="w-[312px] h-[239px] menjaga-border flex flex-col justify-center items-center py-20 rounded-2xl">
              <div className="h-96 w-auto">
                <img className="object-fill" src={tiga} alt="" />
                <h1 className="text-hero text-md font-bold text-center items-center">
                  Olahraga
                </h1>
                <div className="ml-10 mt-10">
                <FaChevronDown
                  className="cursor-pointer"
                  onClick={clickHandler}
                  color="#119586"
                  size={30}
                />
              </div>
              </div>
            </div>
          </div>

          <div className="flex">
            <div className="w-[312px] h-[239px] menjaga-border flex flex-col-reverse justify-center items-center py-20 rounded-2xl">
            <div className="mt-10">
                <FaChevronDown
                  className="cursor-pointer"
                  onClick={clickHandler}
                  color="#119586"
                  size={30}
                />
              </div>
              <h1 className="text-hero text-md font-bold">Pola Makan</h1>
              <div className="h-96 w-auto">
                <img className="object-fill" src={empat} alt="" />
              </div>
            </div>
            <div>
              <div className="w-[312px] h-[239px] menjaga-border flex flex-col justify-center items-center py-20 rounded-2xl mx-32">
                <img className="object-fill" src={lima} alt="" />
                <h1 className="text-hero text-md font-bold text-center items-center">
                  MENGHINDARI KEBIASAAN BURUK
                </h1>
                <div className="mt-10">
                <FaChevronDown
                  className="cursor-pointer"
                  onClick={clickHandler}
                  color="#119586"
                  size={30}
                />
              </div>
              </div>
            </div>
            <div className="w-[312px] h-[239px] menjaga-border flex flex-col justify-center items-center gap-5 py-20 rounded-2xl">
              <div className="h-72 w-auto mt-5">
                <img className="object-cover" src={enam} alt="" />
              </div>
              <div>
                <h1 className="text-hero text-md font-bold text-center items-center">
                  MEMPERKUAT DUKUNGAN SOSIAL
                </h1>
                <div className="ml-30 mt-5">
                <FaChevronDown
                  className="cursor-pointer"
                  onClick={clickHandler}
                  color="#119586"
                  size={30}
                />
              </div>
              </div>
            </div>
          </div>

          <div className="flex">
            <div className="w-[312px] h-[239px] menjaga-border flex flex-col-reverse justify-center items-center gapy-20 py-20 rounded-2xl">
            <div className="mt-10">
                <FaChevronDown
                  className="cursor-pointer"
                  onClick={clickHandler}
                  color="#119586"
                  size={30}
                />
              </div>
              <h1 className="text-hero text-md font-bold text-center items-center">
                MENJAGA KESEHATAN TUBUH
              </h1>
              <div className="h-96 w-auto">
                <img className="object-fill" src={tujuh} alt="" />
              </div>
            </div>
            <div>
              <div className="w-[312px] h-[239px] menjaga-border flex flex-col justify-center items-center gapy-20 py-20 rounded-2xl mx-32">
                <img className="object-fill" src={delapan} alt="" />
                <h1 className="text-hero text-md font-bold text-center items-center">
                  TIDUR YANG CUKUP
                </h1>
                <div className="mt-10">
                <FaChevronDown
                  className="cursor-pointer"
                  onClick={clickHandler}
                  color="#119586"
                  size={30}
                />
              </div>
              </div>
            </div>
            <div className="w-[312px] h-[239px] menjaga-border flex flex-col justify-center items-center gap-5 py-20 rounded-2xl">
              <div className="h-96 w-auto ">
                <img className="object-fill" src={sembilan} alt="" />
              </div>
              <div>
                <h1 className="text-hero text-md font-bold text-center items-center">
                  MENGEMBANGKAN KETERAMPILAN KOPING{" "}
                </h1>
                <div className="ml-35 mt-4">
                <FaChevronDown
                  className="cursor-pointer"
                  onClick={clickHandler}
                  color="#119586"
                  size={30}
                />
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Menjaga;
