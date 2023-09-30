/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const SingleCourse = ({ course }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={course.image}
        alt={course.title}
        className="w-full h-32 object-cover object-center"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          {course.title}
        </h3>
        <p className="text-gray-600">{course.description}</p>
        <div className="mt-4">
          <span className="text-green-500 font-semibold">${course.price}</span>
          <Link
            to="course-details"
            className="ml-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition duration-300 ease-in-out"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleCourse;
