/* eslint-disable react/prop-types */
const InstructorInfo = ({ course }) => {
  return (
    <div className="bg-orange-200 border-l-4 border-orange-300 p-4 rounded-lg shadow-md my-2">
      <h2 className="text-2xl font-bold mb-4">Instructor</h2>
      <div className="bg-white rounded-lg shadow-md p-4 flex items-center">
        <div className="flex-shrink-0 mr-4">
          <img
            src={course?.photoUrl}
            alt={course?.instructorName}
            className="w-16 h-16 rounded-full"
          />
        </div>
        <div>
          <h3 className="text-xl font-semibold">{course?.instructorName}</h3>
          <p className="text-gray-600">{course?.instructorTitle}</p>
        </div>
      </div>
    </div>
  );
};

export default InstructorInfo;
