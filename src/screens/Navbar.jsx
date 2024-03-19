import { useState } from "react";
import { Link } from "react-router-dom";
import { CiMenuBurger } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";
import JobModel from "../components/JobModel";
import AddJob from "../components/AddJob";
import AddCandidate from "../components/AddCandidate";

const Navbar = () => {
  const [showProfile, setShowProfile] = useState(false);
  const [showNav, setShowNav] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isOpenAddJob, setIsOpenAddJob] = useState(false);
  const [isOpenAddCandidate, setIsOpenAddCandidate] = useState(false);

  const toggleModalAddJob = () => {
    setIsOpenAddJob(!isOpenAddJob);
  };
  const toggleModalAddCandidate = () => {
    setIsOpenAddCandidate(!isOpenAddCandidate);
  };

  return (
    <div className=" px-5 max-w-[1280px] mx-auto">
      <div className="flex items-center justify-between w-full py-4 relative">
        <div className="flex items-center justify-center md:space-x-10 lg:space-x-20 ">
          <div className="font-semibold text-2xl">
            <Link to="/" className=" text-blue-950 text-xl font-bold ">
              Dashboard
            </Link>
          </div>
          <nav className="max-md:hidden flex flex-row items-center  ">
            <ul className="flex items-center space-x-3  font-semibold text-[15px]">
              <li>
                <button
                  onClick={toggleModalAddCandidate}
                  className={` hover:bg-[#eef2f6f0] hover:text-blue-500 rounded-full py-2 px-3 inline-block w-full`}
                >
                  Add Candidate
                </button>
              </li>
              <JobModel
                isOpen={isOpenAddCandidate}
                onClose={toggleModalAddCandidate}
                title="Add Candidate"
              >
                <AddCandidate />
              </JobModel>
              <li>
                <button
                  onClick={toggleModalAddJob}
                  className={` hover:bg-[#eef2f6f0] hover:text-blue-500 rounded-full py-2 px-3 inline-block w-full`}
                >
                  Add Job
                </button>
              </li>
              <JobModel
                isOpen={isOpenAddJob}
                onClose={toggleModalAddJob}
                title="Add Job"
              >
                <AddJob />
              </JobModel>
              <li>
                <Link
                  to="/"
                  className={` hover:bg-[#eef2f6f0] hover:text-blue-500 rounded-full py-2 px-3 inline-block w-full`}
                >
                  About
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="flex items-center space-x-4">
          {/* <SearchBar /> */}
          <p className=" flex text-right items-end font-semibold cursor-pointer hover:text-[#5636f3] duration-300 max-md:hidden ">
            {" "}
            Contact Sales
          </p>
          <div
            onClick={() => setShowProfile(!showProfile)}
            className="relative cursor-pointer"
          ></div>

          <Link to="/">
            <div className=" lg:text-xl text-[16px] lg:py-3 py-2 bg-[#5636f3] hover:bg-[#7559ff] text-white rounded-md">
              <button className=" px-4 ">Get started</button>
            </div>
          </Link>

          <span
            onClick={() => setShowNav(!showNav)}
            className="p-[9px] bg-gray-100 rounded-md md:hidden"
          >
            {showNav ? (
              <AiOutlineClose
                size={30}
                className="transition ease-in duration-150"
              />
            ) : (
              <CiMenuBurger
                size={30}
                className="transition ease-in duration-150"
              />
            )}
          </span>
        </div>
      </div>
      <div
        className={`md:hidden ${
          showNav ? "pb-4  rounded-lg " : "h-0 invisible opacity-0"
        }`}
      >
        <ul className="flex flex-col text-[15px] opacity-100 ">
          <li onClick={() => setIsHovered(!isHovered)} className=" pt-3 ">
            <button onClick={toggleModalAddCandidate}
              className={`${
                isHovered && " text-blue-500  rounded-full"
              } flex flex-row gap-1 font-semibold `}
            >
              Add Candidate
            </button>
          </li>
          <JobModel
            isOpen={isOpenAddCandidate}
            onClose={toggleModalAddCandidate}
            title="Add Candidate"
          >
            <AddCandidate />
          </JobModel>
          <li onClick={() => setIsHovered2(!isHovered2)} className=" ">
          <button onClick={toggleModalAddJob} className={`${
                isHovered2 && " text-blue-500  rounded-full"
              } flex flex-row gap-1 font-semibold `}>
                Add Job
              </button>
          </li>
          <JobModel
                isOpen={isOpenAddJob}
                onClose={toggleModalAddJob}
                title="Add Job"
              >
                <AddJob />
              </JobModel>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
