import logo from '/HS (1) 1.png'
import './App.css'
import { Link } from 'react-router'

function Navbar () {
return (<>
  <nav className='h-24 w-screen ijo flex flex-row justify-between items-center text-white shadow-xl fixed z-50'>
    <div className='flex items-center ml-32 space-x-4'>
      <div className='w-12 h-auto'>
      <img className='object-cover' src={logo} alt="LOGO" />
      </div>
      <Link to='/'><h1 className='text-center'>Healty Together</h1></Link>
    </div>
    <div className="flex items-center mr-36 space-x-8">
      <Link to='/mental'><h1 className="text-center font-bold">KESEHATAN MENTAL</h1></Link>
      <Link to='/gaya'><h1 className="text-center font-bold">GAYA HIDUP SEHAT</h1></Link>
      <Link to='/akses'><h1 className="text-center font-bold">AKSES KESEHATAN</h1></Link>
          
        </div>
  </nav>
</>)
}

export default Navbar 