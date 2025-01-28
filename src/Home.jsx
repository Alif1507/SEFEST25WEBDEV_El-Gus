import Navbar1 from "./Navbar1";
import logo from "/logo.png";
import Button from "./components/Button";
import { Link } from "react-router";

function Home() {
  return (
    <>
      <Navbar1 />
      <body className="overflow-hidden">
      <div className="cross h-screen flex w-screen items-center justify-around">
        <div className="text-hero">
          <h1 className="text-6xl font-bold abu p-2 rounded-br-2xl rounded-tr-2xl">Healthy Together </h1>
          <p className="abu p-2 rounded-br-2xl rounded-tr-2xl">Menuju Kesehatan dan Kesejahteraan untuk Semua!</p>
          <Link to="/mental"><button className="abu p-2 rounded-br-2xl rounded-tr-2xl cursor-pointer mt-3"><Button /></button></Link>
        </div>
        <div className="w-96">
          <img className="object-fill" src={logo} alt="" />
        </div>
      </div>
      </body>
    </>
  );
}

export default Home;
