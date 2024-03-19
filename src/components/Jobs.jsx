import CandidateNav from "./CandidateNav";
import JobTable from "./JobTable";



const Jobs = () => {
  return (
    <div className=" text-black px-5 max-w-[1280px] h-full mx-auto py-10 ">
      <div className=" h-screen ">
     <div>
        <CandidateNav/>
     </div>
     <div>

        <JobTable/>
     </div>
      </div>
    </div>
  );
}

export default Jobs;
