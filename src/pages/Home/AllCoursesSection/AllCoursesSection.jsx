import useCourses from "../../../hooks/useCourses";
import GlobalSpinner from "../../Shared/GlobalSpinner/GlobalSpinner";
import SingleCourse from "./SingleCourse";

// const courses = [
//   {
//     id: 1,
//     title: "Web Development Fundamentals",
//     description:
//       "Learn the basics of web development with HTML, CSS, and JavaScript.",
//     price: 49.99,
//     image:
//       "https://res.cloudinary.com/practicaldev/image/fetch/s--nZkiUiDE--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/yfwwqenae7gx9u8bavtj.png",
//   },
//   {
//     id: 2,
//     title: "React.js for Beginners",
//     description: "Get started with React.js and build modern web applications.",
//     price: 79.99,
//     image:
//       "https://res.cloudinary.com/practicaldev/image/fetch/s--nZkiUiDE--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/yfwwqenae7gx9u8bavtj.png",
//   },
//   {
//     id: 3,
//     title: "Python Programming Masterclass",
//     description: "Master Python programming from scratch to advanced topics.",
//     price: 99.99,
//     image:
//       "https://res.cloudinary.com/practicaldev/image/fetch/s--nZkiUiDE--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/yfwwqenae7gx9u8bavtj.png",
//   },
//   {
//     id: 4,
//     title: "Machine Learning Essentials",
//     description: "Discover the world of machine learning and AI algorithms.",
//     price: 129.99,
//     image:
//       "https://res.cloudinary.com/practicaldev/image/fetch/s--nZkiUiDE--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/yfwwqenae7gx9u8bavtj.png",
//   },
// ];

const AllCoursesSection = () => {
  const [courses, loading, refetch] = useCourses();
  if (loading) return <GlobalSpinner />;
  if (courses && Array.isArray(courses) && courses.length > 0)
    return (
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">
            Our All Courses
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {courses.map((course, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <SingleCourse course={course} />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
};

export default AllCoursesSection;
