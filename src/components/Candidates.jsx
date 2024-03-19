import CandidateNav from "./CandidateNav";

import Table from "./Table";


const Candidates = () => {
  
  return (
    <div className=" text-black px-5 max-w-[1280px] h-full mx-auto py-10 ">
      <div className=" h-screen ">
     <div>
        <CandidateNav/>
     </div>
     <div>
        <Table/>
        
     </div>
      </div>
    </div>
  );
}

export default Candidates;
