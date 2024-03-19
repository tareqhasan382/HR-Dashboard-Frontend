

import CandidateNav from "./components/CandidateNav";
import Table from "./components/Table";

const App = () => {
  return (
<main >
<div className=" text-black px-5 max-w-[1280px] h-full mx-auto py-10 ">
      <div className=" h-screen ">
     <div>
        <CandidateNav />
     </div>
     <div>
        <Table />
        
     </div>
      </div>
    </div>
</main>
  )
}

export default App