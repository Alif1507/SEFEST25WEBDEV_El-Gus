import { useState } from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

function Gcard({ head, subhead, satu, dua, tiga, empat, lima, enam, kiri }) {
  const [card, setCard] = useState(false);

  function clickHandler() {
    setCard(!card);
  }
  return (
    <>
      <div data-aos={`${kiri? 'fade-left' : 'fade-right'}`}
        className={`flex ${
          kiri ? "flex-row-reverse" : "flex-row"
        } items-center justify-between ${kiri ? "ml-10" : "mr-10"}`}
      >
        <div
          className={`h-[235px] w-[752px] ijo ${
            kiri ? "rounded-bl-2xl" : "rounded-br-2xl"
          } ${
            kiri ? "rounded-tl-2xl" : "rounded-tr-2xl"
          } text-white mt-32 p-8 drop-shadow-lg z-10`}
        >
          <h1 className="font-bold text-3xl mb-5">{head}</h1>
          <p className="text-sm pr-10">{subhead}</p>
          <button>
            <div className="rounded-full bg-white p-1 ml-[649px] flex items-center justify-center">
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
          className={`bg-gangguan p-12 mt-32 text-white poppins rounded-2xl flex transition-all duration-500 ease-in-out transform  ${
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
          <button className="-mr-5 cursor-pointer">
            {!card}
            {kiri ? <FaChevronRight onClick={clickHandler} size={30} /> : <FaChevronLeft onClick={clickHandler} size={30} />}
          </button>
        </div>
      </div>


    </>
  );
} 

export default Gcard;
