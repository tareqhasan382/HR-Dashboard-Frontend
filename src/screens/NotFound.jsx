import { Link } from "react-router-dom"


const NotFound = () => {
  return (
    <div className=" text-black px-5 max-w-[1280px] h-full mx-auto py-10 ">
      <div className=" flex flex-col h-screen items-center justify-center gap-3 ">
      <h2 className=" lg:text-4xl text-2xl font-semibold ">Not Found</h2>
      <p className=" text-xl font-semibold ">
        Could not find requested resource
      </p>
      <Link to="/">
        <button className=" px-4 py-2 text-xl font-semibold bg-green-700 text-white rounded ">
          Return Home
        </button>
      </Link>
    </div>
    </div>
  )
}

export default NotFound