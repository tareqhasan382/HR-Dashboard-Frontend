import { useForm } from "react-hook-form";
import { useCreateCandidiateMutation } from "../redux/candidates/candidatesApi";
import { toast } from "react-toastify";

const AddCandidate = () => {
  const [CreateCandidiate, { isLoading }] = useCreateCandidiateMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const result = await CreateCandidiate(data);
    //console.log("result:",result)
    if (result?.data?.status === "true") {
      toast.success("Job created Successfully.");
    } else {
      toast.error(`${result?.data.message}`);
    }
  };

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
            {...register("name", {
              required: true,
            })}
            className=" p-2 border-gray-300 border-[1px] rounded-lg w-[300px] mb-4 outline-none focus:border-gray-600 text-black "
          />
          {errors.name && (
            <span className=" text-left text-sm text-red-500 ">
              This field is required
            </span>
          )}
        </div>
        <div className=" flex flex-col ">
          <label className=" mb-2 text-left ">Enter Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            {...register("email", {
              required: true,
            })}
            className=" p-2 border-gray-300 border-[1px] rounded-lg w-[300px] mb-4 outline-none focus:border-gray-600 text-black "
          />
          {errors.email && (
            <span className=" text-left text-sm text-red-500 ">
              This field is required
            </span>
          )}
        </div>
        <div className="flex flex-col">
          <label className="mb-2 text-left">Select Gender</label>
          <select
            id="gender"
            {...register("gender", {
              required: true,
            })}
            className="p-2 border-gray-300 border-[1px] rounded-lg w-[300px] mb-4 outline-none focus:border-gray-600 text-black"
          >
            <option value="">Select...</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="other">Other</option>
          </select>
          {errors.gender && (
            <span className="text-left text-sm text-red-500">
              This field is required
            </span>
          )}
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
};

export default AddCandidate;
