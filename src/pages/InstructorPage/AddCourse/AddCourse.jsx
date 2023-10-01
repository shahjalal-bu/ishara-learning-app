import { useForm } from "react-hook-form";
import { useAuth } from "../../../contexts/AuthContext";
// import SectionHead from "../../Shared/SectionHead/SectionHead";
// import { addClass, uploadImg } from "../../../api/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import Swal from "sweetalert2";
import useApi from "../../../api/api";

const AddCourse = () => {
  const { currentUser } = useAuth();
  const { register, handleSubmit, reset } = useForm();
  const { addCourse } = useApi();
  const queryClient = useQueryClient();
  const mutation = useMutation(addCourse, {
    onSuccess: () => {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Item added successfully",
        showConfirmButton: false,
        timer: 1500,
      });
      reset();
      queryClient.invalidateQueries(["courses", "user", currentUser?.email]);
    },
  });

  const onSubmit = async (data) => {
    data.instructorName = currentUser?.displayName;
    data.instructorEmail = currentUser?.email;
    data.instructorPhotoUrl = currentUser?.photoURL;
    const currentDate = new Date();
    data.publishDate = currentDate.toDateString();
    data.totalEnrolled = 0;
    mutation.mutate(data);
  };

  return (
    <div className="p-10 min-h-[95vh] bg-slate-950 rounded-md mx-auto">
      {/* <SectionHead title="ADD A CLASS" /> */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex gap-x-2">
          <div className="mb-4 flex-1">
            <label
              className="text-white block font-bold mb-2"
              htmlFor="className"
            >
              Course name
            </label>
            <input
              className="text-white appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
              id="className"
              type="text"
              placeholder="Enter course name"
              {...register("courseName", { required: true })}
            />
          </div>
          <div className="mb-4 flex-1">
            <label
              className="text-white block  font-bold mb-2"
              htmlFor="category"
            >
              Course Category
            </label>
            <input
              className=" text-white appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
              id="category"
              type="text"
              placeholder="Enter course category"
              {...register("category", { required: true })}
            />
          </div>
        </div>

        <div className="flex gap-x-2">
          <div className="mb-4 flex-1">
            <label
              className="text-white block font-bold mb-2"
              htmlFor="courseShortDescription"
            >
              Course short description
            </label>
            <textarea
              className="text-white appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
              id="courseShortDescriptions"
              type="text"
              placeholder="Enter Course short description"
              {...register("courseShortDescription", { required: true })}
            />
          </div>
          <div className="mb-4 flex-1">
            <label
              className="text-white block font-bold mb-2"
              htmlFor="courseShortDescription"
            >
              About Course
            </label>
            <textarea
              className="text-white appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
              id="aboutCourse"
              type="text"
              placeholder="Enter About Course"
              {...register("aboutCourse", { required: true })}
            />
          </div>
        </div>
        <div className="flex gap-x-2">
          <div className="mb-4 flex-1">
            <div className="mb-4 flex-1">
              <label
                className="text-white block  font-bold mb-2"
                htmlFor="instructorTitle"
              >
                Instructor Title
              </label>
              <input
                className=" text-white appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                id="price"
                type="text"
                placeholder="Enter instructor title"
                {...register("instructorTitle", { required: true })}
              />
            </div>
            <label
              className="text-white block  font-bold mb-2"
              htmlFor="whatYouGet"
            >
              What You Get in This Course
            </label>
            <textarea
              className=" text-white appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
              id="whatYouGet"
              type="text"
              placeholder="Enter What You Get"
              {...register("whatYouGet", { required: true })}
            />
          </div>
          <div className="mb-4 flex-1">
            <div className="mb-4 flex-1">
              <label
                className="text-white block  font-bold mb-2"
                htmlFor="className"
              >
                Course Price
              </label>
              <input
                className=" text-white appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                id="price"
                type="text"
                placeholder="Enter course price"
                {...register("price", { required: true })}
              />
            </div>
            <label
              className="text-white block  font-bold mb-2"
              htmlFor="whatYouGet"
            >
              What You Get in This Course
            </label>
            <textarea
              className=" text-white appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
              id="whatYouGet"
              type="text"
              placeholder="Enter What You Get"
              {...register("whatYouGet", { required: true })}
            />
          </div>
        </div>

        <div className="flex">
          <button
            className="bg-amber-500 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex-1"
            type="submit"
            disabled={mutation.isLoading}
          >
            {mutation.isLoading ? "Processing..." : "Add"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddCourse;
