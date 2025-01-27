import Scard from "./components/Scard.jsx"

function Statistic () {
 return (<>
    <div className="flex justify-center w-screen mt-27">
      <h1 className="poppins font-bold drop-shadow-md text-xl text-center">GLOBAL STATISTICS</h1>
    </div>

    <div className="flex flex-row mx-20 justify-around mt-10">
      <Scard head="Life Expectancy Level" sub="72.6 Years" />
      <Scard head="Access to Health Facilities" sub="80% of Global Population" />
      <Scard head="Vaccination Rate" sub="85% of Children in the World" />
    </div>
 </>)
}

export default Statistic