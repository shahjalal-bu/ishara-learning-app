import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import useApi from "../../../api/api";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

const AddContents = () => {
  const { register, handleSubmit, reset } = useForm();
  const { addContent } = useApi();
  const { courseId } = useParams();
  const queryClient = useQueryClient();
  const mutation = useMutation(addContent, {
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
              id="ClassName"
              type="text"
              placeholder="Enter course Class Name"
              {...register("ClassName", { required: true })}
            />
          </div>
        </div>

        <div className="flex gap-x-2">
          <div className="mb-4 flex-1">
            <label
              className=" block font-bold mb-2"
              htmlFor="classDescriptions"
            >
              Class Descriptions
            </label>
            <input
              className="input input-bordered w-full max-w-xs"
              id="classDescriptions"
              type="text"
              placeholder="Enter class descriptions"
              {...register("classDescriptions", { required: true })}
            />
          </div>
          <div className="mb-4 flex-1">
            <label className=" block font-bold mb-2" htmlFor="videoDuration">
              Video Duration
            </label>
            <input
              className="input input-bordered w-full max-w-xs"
              id="videoDuration"
              type="text"
              placeholder="Enter Video Duration"
              {...register("videoDuration", { required: true })}
            />
          </div>
        </div>
        <div className="mb-4 flex-1">
          <label className=" block font-bold mb-2" htmlFor="videoDuration">
            Video Url
          </label>
          <input
            className="input input-bordered w-full max-w-xs"
            id="videoUrl"
            type="text"
            placeholder="Enter video Url"
            {...register("videoUrl", { required: true })}
          />
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

export default AddContents;
