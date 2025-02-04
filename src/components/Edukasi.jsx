

function Edukasi({head, subhead, satu,dua,tiga, poto}) {
  return (
    <>
      
      
      <div className="flex justify-center ">
      <div className="bg-[#119586] w-[497px] h-[660px] py-5 px-3 mt-16 flex flex-col items-center rounded-2xl drop-shadow-2xl">
        <h1 className="text-white text-3xl font-bold mb-10">
          {head}
        </h1>
        <img src={poto} alt="" />
        <p className="text-white font-medium mx-10 mt-10">
          {subhead}
        </p> <br />
        <ul className="text-white mx-10 list-disc">
          <li>
            {satu}
          </li> <br />
          <li>
            {dua}
          </li> <br />
          <li>
            {tiga}
          </li>
        </ul>
      </div>
      </div>
    </>
  );
}

export default Edukasi;
