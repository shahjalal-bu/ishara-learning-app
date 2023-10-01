import { AiFillLock } from "react-icons/ai";

/* eslint-disable react/prop-types */
const CourseContents = ({ course }) => {
  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-md my-2">
      <div className="flex flex-col gap-2">
        {course?.contents.map((c) => (
          <div
            key={c.classNo}
            className="p-4 border border-gray-300 rounded-lg flex justify-between items-center"
          >
            <div>
              <h3 className="text-xl font-semibold">
                Class No-{c.classNo}: {c.ClassName}
              </h3>
              <div className="flex justify-between items-center">
                <p>Class Duration: {c.videoDuration}</p>
              </div>
            </div>
            <div className="btn btn-circle">
              <AiFillLock size={32} color="#D83F31" />
            </div>
          </div>
        ))}
        <div className="p-4 border border-gray-300 rounded-lg">
          <h3 className="text-xl font-semibold">Module 1: Introduction</h3>
          <div className="flex justify-between items-center">
            <p>2 Live Classes</p>
            <p>1 Assignment</p>
            <p>2 Tests</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CourseContents;
