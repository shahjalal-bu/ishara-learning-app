/* eslint-disable react/prop-types */
const CourseSyllabus = ({ course }) => {
  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-md my-2">
      <div className="flex flex-col gap-2">
        {course?.syllabus.map((s) => (
          <div
            key={s.classNo}
            className="p-4 border border-gray-300 rounded-lg"
          >
            <h3 className="text-xl font-semibold">
              Class No-{s.classNo}: {s.ClassName}
            </h3>
            <div className="flex justify-between items-center">
              <p>{s.classTopics}</p>
              <p>{s.assignmentNo} Assignment</p>
              <p>{s.quizNo} Quizs</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default CourseSyllabus;
