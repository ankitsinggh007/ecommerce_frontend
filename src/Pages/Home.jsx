import { Outlet } from 'react-router-dom'
import Navbar from '../component/Navbar'
function Home() {
  return (
    <>
    <Navbar/>
    <Outlet/>
    </>
  )
}

export default Home