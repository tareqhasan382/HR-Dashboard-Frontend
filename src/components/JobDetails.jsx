import { useJobQuery } from "../redux/jobs/jobsApi";
import PropTypes from "prop-types";
import FeatchLoading from "./FeatchLoading";

const JobDetails = ({id}) => {
  const {data,isLoading}=useJobQuery(id);
  if (isLoading) {
    return <FeatchLoading />;
  }
  return (
    <div >
      <div className=" text-black px-5 max-w-[1280px] h-full mx-auto flex flex-col gap-2 ">
      <h1 className=" font-bold  lg:text-xl text-lg ">{data?.data?.title}</h1>
      <p>{data?.data?.description}</p>
      <p className=" font-semibold ">Location: {data?.data?.location}</p>
      <p className=" font-semibold ">Salary: {data?.data?.salary}</p>
        
      </div>
    </div>
  );
}
JobDetails.propTypes = {
  id: PropTypes.node.isRequired,
};
export default JobDetails;
