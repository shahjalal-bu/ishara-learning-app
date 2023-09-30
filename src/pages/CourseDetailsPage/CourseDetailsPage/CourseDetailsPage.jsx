import AboutCourse from "../AboutCourse/AboutCourse";
// import CourseContent from "../CourseContent/CourseContent";
import CourseSyllabus from "../CourseSyllabus/CourseSyllabus";
import InstructorInfo from "../InstructorInfo/InstructorInfo";
import Reviews from "../Reviews/Reviews";
import { useParams } from "react-router-dom";

const CourseDetailsPage = () => {
  const { courseId } = useParams();
  console.log(courseId);
  return (
    <div className="container mx-auto mt-4 sm:px-20">
      <div className="flex">
        <div className="p-5">
          <h1 className="text-4xl font-semibold mb-2">
            Mastering Shopify: App Development
          </h1>
          <h2 className="text-gray-700 mb-3">By : Hasin Hyder</h2>
          <p className="text-gray-600 p-2 mb-3">
            The best journey to become a Shopify app developer in a very
            comprehensive curriculum is waiting for you in Bengali. Along with
            you, there are two excellent mentors, Hasin Haider and Nahid Bin
            Amin Bhai.
          </p>
          {/* Course Content */}
          <div className="flex justify-between items-center border-l-4 border-lime-600">
            <div className="text-2xl font-bold ml-2">Free demo class.</div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Watch Video
            </button>
          </div>
          <CourseSyllabus />
          <InstructorInfo />
          <Reviews />
          <AboutCourse />
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
                Published by : 12/06/2023
              </div>
              <div className="text-gray-600 text-lg mb-4">208 enrolled</div>
            </div>
            <div className="flex justify-between items-center">
              <div className="text-3xl font-bold text-red-600 py-2">
                10,000/-
              </div>
              <div className="text-blue-500 underline py-2 ">Promo Code</div>
              <div className="text-green-500 py-2">Share</div>
            </div>
            <div className="btn btn-warning w-full  mb-4">Join This Course</div>
            <div className="text-2xl font-bold mb-4">
              What You Get in This Course
            </div>
            <ul className="list-disc ml-6 mb-4">
              <li>Study Plan for 18 Weeks</li>
              <li>36 Main Live Classes</li>
              <li>Industry Standard Projects</li>
              <li>Weekly Assessments</li>
              <li>Progress Tracking</li>
              <li>Laravel API Development</li>
              <li>Career Guidance</li>
              <li>Certificate</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailsPage;
