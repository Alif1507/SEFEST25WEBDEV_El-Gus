import AOS from "aos";
import { useEffect, useState } from "react";
import { FaChevronRight, FaChevronUp, FaChevronLeft  } from "react-icons/fa";

function Gcard({ head, subhead, satu, dua, tiga, empat, lima, enam, kiri }) {
  useEffect(() => {
          AOS.init({
            duration: 500,
            easing: 'ease-in-out',
            once: false
          })
        })
  const [card, setCard] = useState(false);

  function clickHandler() {
    setCard(!card);
  }
  return (
    <>
      <div data-aos={`${kiri? 'fade-left' : 'fade-right'}`}
        className={`flex  ${
          kiri ? "flex-row-reverse" : "flex-row"
        } items-center justify-between mt-20 ${kiri ? "ml-10" : "mr-10"}`}
      >
        <div
          className={`w-[752px] max-lg:w-[350px] ijo ${
            kiri ? "rounded-bl-2xl max-lg:rounded-2xl" : "rounded-br-2xl max-lg:rounded-2xl"
          } ${
            kiri ? "rounded-tl-2xl max-lg:rounded-2xl" : "rounded-tr-2xl max-lg:rounded-2xl"
          } text-white mt-32 p-8 drop-shadow-lg z-10`}
        >
          <h1 className="font-bold text-3xl mb-5">{head}</h1>
          <p className="text-sm pr-10">{subhead}</p>
          <button>
            <div className="rounded-full bg-white p-1 ml-[649px] max-lg:-translate-x-100 flex items-center justify-center transform max-lg:rotate-90">
              {kiri ? (
                <FaChevronLeft
                  className="cursor-pointer"
                  onClick={clickHandler}
                  color="#119586"
                  size={30}
                />
              ) : (
                <FaChevronRight
                  className="cursor-pointer"
                  onClick={clickHandler}
                  color="#119586"
                  size={30}
                />
              )}
            </div>
            {!card}
          </button>
        </div>
        <div
          className={`bg-gangguan p-12 mt-32 text-white poppins rounded-2xl max-lg:hidden flex transition-all duration-500 ease-in-out transform  ${
            !card
              ? `${kiri ? "translate-x-full" : "-translate-x-full"} scale-80`
              : "pointer-events"
          }`}
        >

          
          <ul className="list-disc">
            <li> {satu}</li>
            <li>{dua}</li>
            <li>{tiga}</li>
            <li>{empat}</li>
            <li>{lima}</li>
            <li>{enam}</li>
          </ul>
          <button className="-mr-5 cursor-pointer transform max-lg:rotate-90">
            {!card}
            {kiri ? <FaChevronRight onClick={clickHandler} size={30} /> : <FaChevronLeft onClick={clickHandler} size={30} />}
          </button>
        </div>

          {/* mobile */}
        <div
          className={`bg-gangguan p-12 mt-32 text-white poppins rounded-2xl hidden max-lg:block  transition-all duration-500 ease-in-out transform  ${
            !card
              ? `-translate-x-75 scale-49 ${kiri ? "translate-x-full" : ""}`
              : `pointer-events ${kiri ? "translate-y-170 translate-x-full" : "translate-y-170"} -translate-x-75`
          }`}
        >

          <ul className="list-disc">
            <li> {satu}</li>
            <li>{dua}</li>
            <li>{tiga}</li>
            <li>{empat}</li>
            <li>{lima}</li>
            <li>{enam}</li>
          </ul>
          <button className="-mr-5 cursor-pointer">
            {!card}
            <FaChevronUp onClick={clickHandler} size={30} />
          </button>
        </div>
      </div>


    </>
  );
} 

export default Gcard;
