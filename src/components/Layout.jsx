
import Navbar from '../screens/Navbar'
import { Outlet } from 'react-router-dom'
// import Footer from '../screens/Footer'
// import coverImage from "../assets/bank-cover.png"; 
const Layout = () => {
  return (
    <div  className=" bg-[#f4f5f6] h-auto">
      <div className=" shadow sticky bg-[#e0e3e6] top-0 z-50 ">
        <Navbar />
      </div>

      <div className="">
        <Outlet></Outlet>
      </div>
      {/* <div className=" bg-slate-900 items-end ">
        <Footer />
      </div> */}
    </div>
  )
}

export default Layout
// px-5 max-w-[1280px] mx-auto

/*
style={{
      backgroundImage: `url(${coverImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: "auto", // Adjust height as needed
    }}
*/