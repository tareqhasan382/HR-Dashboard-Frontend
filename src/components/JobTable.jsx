import { useDeleteJobMutation, useJobsQuery } from "../redux/jobs/jobsApi";
import FeatchLoading from "./FeatchLoading";
import { FaEye } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { AiTwotoneDelete } from "react-icons/ai";
import { useState } from "react";
import JobModel from "./JobModel";
import JobDetails from "./JobDetails";
import UpdateJob from "./UpdateJob";
import { toast } from "react-toastify";

const JobTable = () => {
  const [deleteJob]=useDeleteJobMutation();
  const [isOpenUpdateJob, setIsOpenUpdateJob] = useState(false);
  const [isOpenJobDetails, setIsOpenJobDetails] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [selectedData, setSelectedData] = useState(null);
  const toggleModalUpdateJob = (job) => {
    setSelectedData(job)
    setIsOpenUpdateJob(!isOpenUpdateJob);
  };

  const toggleModalJobDetails = (id) => {
    setSelectedId(id);
    setIsOpenJobDetails(!isOpenJobDetails);
  };
  const handledeleteJob = async(id) => {
    const result= await deleteJob(id);
    if(result?.data?.status==="true"){
      toast.success("deleted successfylly.")
    }
  };
  const { data, isLoading, isError } = useJobsQuery();
  if (isLoading) {
    return <FeatchLoading />;
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full table-auto border-collapse whitespace-no-wrap bg-white table-striped relative">
        <thead className=" bg-red-500 ">
          <tr className=" bg-yellow-500 w-screen">
            <th className="sticky top-0 px-6 py-3 text-gray-600  ">Title</th>
            <th className="sticky top-0 px-6 py-3 text-gray-600 lg:w-auto min-w-[350px]  ">
              Description
            </th>
            <th className="sticky top-0 px-6 py-3 text-gray-600  ">Salary</th>
            <th className="sticky top-0 px-6 py-3 text-gray-600 ">Location</th>
            <th className="sticky top-0 px-6 py-3 text-gray-600 ">ACTION</th>
          </tr>
        </thead>
        <tbody>
          {!isError &&
            !isLoading &&
            data?.data.map((job) => (
              <tr key={job._id} className=" hover:bg-orange-100  ">
                <td className="border-t-0  text-center px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                  {job?.title}
                </td>
                <td className=" border-t-0 px-6 text-center align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                  {job?.description}
                </td>
                <td className="border-t-0 px-6 text-center align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                  {job?.salary}
                </td>
                <td className="border-t-0 px-6 text-center align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                  {job?.location}
                </td>
                <td className="border-t-0 px-6 text-center align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                  <div className=" flex flex-row items-center justify-center w-full ">
                    <span onClick={()=>handledeleteJob(job?._id)} className="inline-block p-2 rounded transition duration-200 transform hover:bg-white hover:scale-110">
                      <AiTwotoneDelete size={25} color="Red" />
                    </span>

                    <span  onClick={()=>toggleModalUpdateJob(job)} className="inline-block p-2 rounded transition duration-200 transform hover:bg-white hover:scale-110">
                      <FiEdit size={20} />
                    </span>
                    <JobModel isOpen={isOpenUpdateJob} onClose={toggleModalUpdateJob} title="Job Update" >
                      {isOpenUpdateJob&&<UpdateJob jobData={selectedData} />}
                    </JobModel>

                    <span
                     onClick={()=>toggleModalJobDetails(job._id)}
                      className="inline-block p-2 rounded transition duration-200 transform hover:bg-white hover:scale-110"
                    >
                      <FaEye size={20} />
                    </span>
                    <JobModel isOpen={isOpenJobDetails} onClose={toggleModalJobDetails} title="Job Details" >
                     {isOpenJobDetails &&  <JobDetails id={selectedId} />}
                    </JobModel>
                  </div>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default JobTable;
