
function Hcard({head, poto}) {
  return (
    <>
      <div className="ijo flex flex-col drop-shadow-lg w-[320px] h-[219px] p-10 justify-around items-center rounded-2xl drop-shadow-2xl">
        <div>
          <img src={poto} alt="" />
        </div>
        <div>
        <h1 className="font-bold text-white">{head}</h1>
        </div>
      </div>
    </>
  );
}

export default Hcard;
