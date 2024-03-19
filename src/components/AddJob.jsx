import { useForm } from "react-hook-form";
import { useJobCreateMutation } from "../redux/jobs/jobsApi";
import { toast } from "react-toastify";


const AddJob = () => {
  const [JobCreate,{isLoading}]= useJobCreateMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const addData ={
      title:data?.title,
      description:data?.description ,
      location:data?.location,
      salary:Number(data?.salary) ,
    }
const result = await JobCreate(addData);
if(result?.data?.status === 'true'){
  toast.success("Job created Successfully.")
}else{
  toast.error(`${result?.data.message}`)
}
   
  };
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
            {...register("title", {
              required: true,
            })}
            className=" p-2 border-gray-300 border-[1px] rounded-lg w-[300px] mb-4 outline-none focus:border-gray-600 text-black "
          />
          {errors.title && (
            <span className=" text-left text-sm text-red-500 ">
              This field is required
            </span>
          )}
        </div>
        <div className=" flex flex-col ">
          <label className=" mb-2 text-left ">Enter Job description</label>
          <input
            type="text"
            id="description"
            placeholder="Enter job description"
            {...register("description", {
              required: true,
            })}
            className=" p-2 border-gray-300 border-[1px] rounded-lg w-[300px] mb-4 outline-none focus:border-gray-600 text-black "
          />
          {errors.description && (
            <span className=" text-left text-sm text-red-500 ">
              This field is required
            </span>
          )}
        </div>

        <div className=" flex flex-col ">
          <label className=" mb-2 text-left ">Enter Job Location</label>
          <input
            type="text"
            id="location"
            placeholder="Enter job location"
            {...register("location", {
              required: true,
            })}
            className=" p-2 border-gray-300 border-[1px] rounded-lg w-[300px] mb-4 outline-none focus:border-gray-600 text-black "
          />
          {errors.location && (
            <span className=" text-left text-sm text-red-500 ">
              This field is required
            </span>
          )}
        </div>
        <div className=" flex flex-col ">
          <label className=" mb-2 text-left ">Enter Job Salary</label>
          <input
            type="number"
            id="salary"
            placeholder="Enter job salary"
            {...register("salary", {
              required: true,
            })}
            className=" p-2 border-gray-300 border-[1px] rounded-lg w-[300px] mb-4 outline-none focus:border-gray-600 text-black "
          />
          {errors.salary && (
            <span className=" text-left text-sm text-red-500 ">
              This field is required
            </span>
          )}
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
};

export default AddJob;
