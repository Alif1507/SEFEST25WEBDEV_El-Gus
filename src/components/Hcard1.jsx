import { useState } from "react";



function Hcard({ head,poto, subhead }) {
  const [buka, setBuka] = useState(false);

  function clickHandler() {
    setBuka(!buka);
  }

  

  return (
    <>
      <div 
        onClick={clickHandler}
        className={`${ buka ? "ijo" : "menjaga-border"} flex flex-col w-[320px] ${
          buka ? "h-[700px]" : "h-[279px]"
        } gap-5  p-10 justify-around items-center rounded-2xl drop-shadow-2xl cursor-pointer transition-all ease-in-out duration-500`}
      >
        {/* h-[219px] */}
        <div>
          <img className="fill-white" src={poto} alt="" />
        </div>
        <div>
            <h1 className={`font-bold ${buka ? "text-white" : "text-hero"} text-center`}>{head}</h1>
        </div>
        <p
          onClick={clickHandler}
          className={`text-center text-white ${
            buka
              ? "scale-100 opacity-100 translate-y-0"
              : "scale-0 opacity-0 -translate-y-48"
          } transition-all transform ease-in-out duration-300`}
        >
          {subhead}
        </p>
      </div>
    </>
  );
}

export default Hcard;
