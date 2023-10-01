import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import useApi from "../../../api/api";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

const AddSyllabus = () => {
  const { register, handleSubmit, reset } = useForm();
  const { addSyllabus } = useApi();
  const { courseId } = useParams();
  const queryClient = useQueryClient();
  const mutation = useMutation(addSyllabus, {
    onSuccess: () => {
      Swal.fire({
        position: "top-center",
        icon: "success",
        title: "Item added successfully",
        showConfirmButton: false,
        timer: 1500,
      });
      queryClient.invalidateQueries(["courses"]);
    },
  });
  const onSubmit = (data) => {
    data.courseId = courseId;
    mutation.mutate(data);
    reset();
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex gap-x-2">
          <div className="mb-4 flex-1">
            <label className=" block font-bold mb-2" htmlFor="classNo">
              Class No
            </label>
            <input
              className="input input-bordered w-full max-w-xs"
              id="classNo"
              type="text"
              placeholder="Enter Class No"
              {...register("classNo", { required: true })}
            />
          </div>
          <div className="mb-4 flex-1">
            <label className=" block  font-bold mb-2" htmlFor="category">
              Class Name
            </label>
            <input
              className=" input input-bordered w-full max-w-xs"
              id="className"
              type="text"
              placeholder="Enter course Class Name"
              {...register("ClassName", { required: true })}
            />
          </div>
        </div>

        <div className="flex gap-x-2">
          <div className="mb-4 flex-1">
            <label className=" block font-bold mb-2" htmlFor="classTopics">
              Class Topics
            </label>
            <input
              className="input input-bordered w-full max-w-xs"
              id="classTopics"
              type="text"
              placeholder="Enter Class Topics"
              {...register("classTopics", { required: true })}
            />
          </div>
          <div className="mb-4 flex-1">
            <label className=" block font-bold mb-2" htmlFor="assignmentNo">
              Assignment No
            </label>
            <input
              className="input input-bordered w-full max-w-xs"
              id="assignmentNo"
              type="text"
              placeholder="Enter Assignment No"
              {...register("assignmentNo", { required: true })}
            />
          </div>
        </div>
        <div className="flex gap-x-2">
          <div className="mb-4 flex-1">
            <div className="mb-4 flex-1">
              <label className=" block  font-bold mb-2" htmlFor="quizNo">
                Quiz No
              </label>
              <input
                className=" input input-bordered w-full max-w-xs"
                id="quizNo"
                type="text"
                placeholder="Enter Quiz No"
                {...register("quizNo", { required: true })}
              />
            </div>
          </div>
        </div>
        <div className="flex">
          <button
            className="bg-amber-500 hover:bg-amber-700  font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex-1"
            type="submit"
            disabled={mutation.isLoading}
          >
            {mutation.isLoading ? "Processing..." : "Add Syllabus"}
          </button>
        </div>
      </form>
    </>
  );
};

export default AddSyllabus;
