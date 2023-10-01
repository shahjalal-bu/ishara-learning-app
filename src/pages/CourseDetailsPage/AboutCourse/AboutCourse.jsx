/* eslint-disable react/prop-types */
const AboutCourse = ({ course }) => {
  return (
    <section className="bg-gray-100 p-4">
      <div className="container mx-auto">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold mb-4">About the Course</h1>
          <p className="text-gray-700">{course.aboutCourse}</p>
        </div>
      </div>
    </section>
  );
};

export default AboutCourse;
