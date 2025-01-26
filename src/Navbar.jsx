import logo from '/HS (1) 1.png'
import './App.css'
import Switch from './components/Switch.jsx'

function Navbar () {
return (<>
  <nav className='h-24 w-screen ijo flex flex-row justify-between items-center text-white shadow-xl'>
    <div className='flex items-center ml-32 space-x-4'>
      <div className='w-12 h-auto'>
      <img className='object-cover' src={logo} alt="LOGO" />
      </div>
      <h1 className='text-center'>Healty Together</h1>
    </div>
    <div className="flex items-center mr-36 space-x-8">
      <a href="#"><h1 className="text-center font-bold">KESEHATAN MENTAL</h1></a>
      <a href="#"><h1 className="text-center">GAYA HIDUP SEHAT</h1></a>
      <a href="#"><h1 className="text-center">AKSES KESEHATAN</h1></a>
          
          <Switch />
        </div>
  </nav>
</>)
}

export default Navbar 