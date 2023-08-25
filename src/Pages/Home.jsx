import { Outlet } from 'react-router-dom'
import Navbar from '../component/Navbar'
import Footer from '../component/footer'
function Home() {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Home