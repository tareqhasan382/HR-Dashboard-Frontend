import { Link } from "react-router-dom";


const CandidateNav = () => {
  return (
    <div>
      <ul className="flex items-center space-x-2  font-semibold text-[15px]">
       
       <li>
         <Link to="/candidates" className={` hover:bg-[#eef2f6f0] hover:text-blue-500 rounded-full py-2 px-3 inline-block w-full`}>
        All Candidates
         </Link>
       </li>
       {/* <li>
         <Link to="/candidates" className={` hover:bg-[#eef2f6f0] hover:text-blue-500 rounded-full py-2 px-3 inline-block w-full`}>
         Shortlisted Candidates
         </Link>
       </li> */}
       <li>
         <Link to="/job" className={` hover:bg-[#eef2f6f0] hover:text-blue-500 rounded-full py-2 px-3 inline-block w-full`}>
        All Job
         </Link>
       </li>
     </ul>
    </div>
  );
}

export default CandidateNav;
