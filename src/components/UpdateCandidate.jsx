import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useUpdateCandidateMutation } from "../redux/candidates/candidatesApi";

const UpdateCandidate = ({Data}) => {
    const [updateCandidate,{isLoading}]=useUpdateCandidateMutation();
    const {
        register,
        handleSubmit
      } = useForm({ defaultValues: Data });
      const onSubmit = async(data) => {
   
        const result = await updateCandidate({ id: Data?._id, data })
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
        <label className=" mb-2 text-left ">Enter Name</label>
        <input
          type="texr"
          id="name"
          placeholder="Enter your name"
          {...register("name")}
          className=" p-2 border-gray-300 border-[1px] rounded-lg w-[300px] mb-4 outline-none focus:border-gray-600 text-black "
        />
      
      </div>
      <div className=" flex flex-col ">
        <label className=" mb-2 text-left ">Enter Email</label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email"
          {...register("email")}
          className=" p-2 border-gray-300 border-[1px] rounded-lg w-[300px] mb-4 outline-none focus:border-gray-600 text-black "
        />

      </div>
      <div className="flex flex-col">
        <label className="mb-2 text-left">Select Gender</label>
        <select
          id="gender"
          {...register("gender")}
          className="p-2 border-gray-300 border-[1px] rounded-lg w-[300px] mb-4 outline-none focus:border-gray-600 text-black"
        >
          <option value="">Select...</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="other">Other</option>
        </select>
       
      </div>
      <div className="flex flex-col">
        <label className="mb-2 text-left">Select Status</label>
        <select
          id="status"
          {...register("status")}
          className="p-2 border-gray-300 border-[1px] rounded-lg w-[300px] mb-4 outline-none focus:border-gray-600 text-black"
        >
          <option value="">Select...</option>
          <option value="shortlisted">Shortlisted</option>
          <option value="rejected">Rejected</option>
        
        </select>
       
      </div>
      <button
        disabled={isLoading}
        type="submit"
        className=" p-2 border rounded-lg bg-blue-500 text-white border-gray-300 mt-2 mb-4 focus:border-gray-600"
      >
        {isLoading ? "Loading..." : "Submit"}
      </button>
    </form>
  </div>
  );
}
UpdateCandidate.propTypes = {
    Data:PropTypes.object.isRequired,
    
  };
export default UpdateCandidate;
