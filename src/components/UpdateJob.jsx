import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import { useUpdateJobMutation } from "../redux/jobs/jobsApi";
import { toast } from "react-toastify";

const UpdateJob = ({jobData}) => {
  const {
    register,
    handleSubmit,
    
  } = useForm({ defaultValues: jobData });
  const [updateJob,{isLoading}]=useUpdateJobMutation();

  const onSubmit = async(data) => {
   
    const result = await updateJob({ id: jobData?._id, data })
    if(result?.data?.status ==="true"){
     
      toast.success("updated successfully")
    }else{
      toast.error("failed to update")
    }
    
    }

  return (
    <div className=" w-full flex flex-col items-center justify-center ">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className=" w-full rounded-lg  flex flex-col  "
      >
        <div className=" flex flex-col ">
          <label className=" mb-2 text-left ">Enter Job Title</label>
          <input
            type="texr"
            id="title"
            placeholder="Enter job title"
            {...register("title")}
            className=" p-2 border-gray-300 border-[1px] rounded-lg w-[300px] mb-4 outline-none focus:border-gray-600 text-black "
          />
        </div>
        <div className=" flex flex-col ">
          <label className=" mb-2 text-left ">Enter Job description</label>
          <input
            type="text"
            id="description"
            placeholder="Enter job description"
            {...register("description")}
            className=" p-2 border-gray-300 border-[1px] rounded-lg w-[300px] mb-4 outline-none focus:border-gray-600 text-black "
          />
          
        </div>

        <div className=" flex flex-col ">
          <label className=" mb-2 text-left ">Enter Job Location</label>
          <input
            type="text"
            id="location"
            placeholder="Enter job location"
            {...register("location")}
            className=" p-2 border-gray-300 border-[1px] rounded-lg w-[300px] mb-4 outline-none focus:border-gray-600 text-black "
          />
          
        </div>
        <div className=" flex flex-col ">
          <label className=" mb-2 text-left ">Enter Job Salary</label>
          <input
            type="number"
            id="salary"
            placeholder="Enter job salary"
            {...register("salary")}
            className=" p-2 border-gray-300 border-[1px] rounded-lg w-[300px] mb-4 outline-none focus:border-gray-600 text-black "
          />
          
        </div>
        <button
         disabled={isLoading}
          type="submit"
          className=" p-2 border rounded-lg bg-blue-500 text-white border-gray-300 mt-2 mb-4 focus:border-gray-600"
        >
          {isLoading? "Loading...":"Submit"}
        </button>
      </form>
    </div>
  );
}
UpdateJob.propTypes = {
  jobData: PropTypes.object.isRequired,
};
export default UpdateJob;
