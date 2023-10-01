/* eslint-disable no-unused-vars */
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import Axios from "../../../utils/Axios";
import AboutCourse from "../AboutCourse/AboutCourse";
// import CourseContent from "../CourseContent/CourseContent";
import CourseSyllabus from "../CourseSyllabus/CourseSyllabus";
import InstructorInfo from "../InstructorInfo/InstructorInfo";
import Reviews from "../Reviews/Reviews";
import { useParams } from "react-router-dom";
import GlobalSpinner from "../../Shared/GlobalSpinner/GlobalSpinner";
import { useAuth } from "../../../contexts/AuthContext";
import useApi from "../../../api/api";
import Swal from "sweetalert2";
import { useState } from "react";
import CourseContents from "../CourseContents/CourseContents";
import AddSyllabus from "../AddSyllabus/AddSyllabus";
import AddContents from "../AddContents/AddContents";

const CourseDetailsPage = () => {
  const { currentUser } = useAuth();
  const { courseId } = useParams();
  const queryClient = useQueryClient();
  const { enrollCourse } = useApi();
  const mutation = useMutation(enrollCourse, {
    onSuccess: () => {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Item added successfully",
        showConfirmButton: false,
        timer: 1500,
      });
      queryClient.invalidateQueries(["courses", "user", currentUser?.email]);
    },
  });

  const getCourse = async () => {
    const response = await Axios.get(`/courses/${courseId}`);
    return response.data;
  };
  const {
    data: course = [],
    isLoading: loading,
    refetch,
  } = useQuery({
    queryKey: ["courses"],
    queryFn: getCourse,
  });
  const [isContentsOrSyllabus, setIsContentsOrSyllabus] = useState("syllabus");
  if (loading) return <GlobalSpinner />;
  if (!loading)
    return (
      <div className="container mx-auto mt-4 sm:px-20">
        <div className="flex">
          <div className="p-5">
            <h1 className="text-4xl font-semibold mb-2">
              {course[0].courseName}
            </h1>
            <h2 className="text-gray-700 mb-3">
              By : {course[0].instructorName}
            </h2>
            <p className="text-gray-600 p-2 mb-3">
              {course[0].courseShortDescription}
            </p>
            {/* Course Content */}
            <div className="flex justify-between items-center border-l-4 border-lime-600">
              <div className="text-2xl font-bold ml-2">Free demo class.</div>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Watch Video
              </button>
            </div>

            <div className="tabs tabs-boxed my-2">
              <a
                className={`tab ${
                  isContentsOrSyllabus === "contents" && "tab-active"
                }`}
                onClick={() => setIsContentsOrSyllabus("contents")}
              >
                Contents
              </a>
              <a
                className={`tab ${
                  isContentsOrSyllabus === "syllabus" && "tab-active"
                }`}
                onClick={() => setIsContentsOrSyllabus("syllabus")}
              >
                Syllabus
              </a>
            </div>
            <div className="border-l-4 border-teal-600 rounded-lg p-4">
              {isContentsOrSyllabus === "syllabus" ? (
                <>
                  <CourseSyllabus course={course[0]} />
                  <div className="text-2xl underline my-2 font-bold">
                    Add Syllabus
                  </div>
                  <AddSyllabus />
                </>
              ) : (
                <>
                  <CourseContents course={course[0]} />
                  <div className="text-2xl underline my-2 font-bold">
                    Add Contents
                  </div>
                  <AddContents />
                </>
              )}
            </div>

            <InstructorInfo course={course[0]} />
            <Reviews course={course[0]} />
            <AboutCourse course={course[0]} />
          </div>
          <div className="p-3">
            <img
              src="https://res.cloudinary.com/practicaldev/image/fetch/s--nZkiUiDE--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/yfwwqenae7gx9u8bavtj.png"
              alt="course-img"
              className="rounded-lg"
            />
            <div className="sticky top-16 bg-white shadow-md rounded-lg p-6 mt-3 mx-auto">
              <div className="flex justify-between items-center">
                <div className="text-2xl font-bold mb-4">
                  Published by : {course[0].publishDate}
                </div>
                <div className="text-gray-600 text-lg mb-4">
                  {course[0].totalEnrolled} enrolled
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="text-3xl font-bold text-red-600 py-2">
                  {course[0].price}/-
                </div>
                <div className="text-blue-500 underline py-2 ">Promo Code</div>
                <div className="text-green-500 py-2">Share</div>
              </div>
              <button
                onClick={() =>
                  mutation.mutate({ courseId, userEmail: currentUser?.email })
                }
                className="btn btn-warning w-full  mb-4"
              >
                Join This Course
              </button>
              <div className="text-2xl font-bold mb-4">
                What You Get in This Course
              </div>
              <ul className="list-disc ml-6 mb-4">{course[0].whatYouGet}</ul>
            </div>
          </div>
        </div>
      </div>
    );
};

export default CourseDetailsPage;
