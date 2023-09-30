const CourseSyllabus = () => {
  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-md my-2">
      <h2 className="text-2xl font-bold mb-4">Syllabus</h2>
      <div className="flex flex-col gap-2">
        {/* Module 1 */}
        <div className="p-4 border border-gray-300 rounded-lg">
          <h3 className="text-xl font-semibold">Module 1: Introduction</h3>
          <div className="flex justify-between items-center">
            <p>2 Live Classes</p>
            <p>1 Assignment</p>
            <p>2 Tests</p>
          </div>
        </div>

        {/* Module 2 */}
        <div className="p-4 border border-gray-300 rounded-lg">
          <h3 className="text-xl font-semibold">
            Module 2: Understanding Rest API & GraphQL
          </h3>
          <div className="flex justify-between items-center">
            <p>2 Live Classes</p>
            <p>1 Assignment</p>
            <p>2 Tests</p>
          </div>
        </div>

        {/* Module 3 */}
        <div className="p-4 border border-gray-300 rounded-lg">
          <h3 className="text-xl font-semibold">
            Module 3: Development Environment & Your first Shopify App
          </h3>
          <div className="flex justify-between items-center">
            <p>2 Live Classes</p>
            <p>1 Assignment</p>
            <p>2 Tests</p>
          </div>
        </div>

        {/* Module 4 */}
        <div className="p-4 border border-gray-300 rounded-lg">
          <h3 className="text-xl font-semibold">
            Module 4: Introduction to Shopify API
          </h3>
          <div className="flex justify-between items-center">
            <p>2 Live Classes</p>
            <p>1 Assignment</p>
            <p>2 Tests</p>
          </div>
        </div>

        {/* Module 5 */}
        <div className="p-4 border border-gray-300 rounded-lg">
          <h3 className="text-xl font-semibold">
            Module 5: Laravel API Development
          </h3>
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
export default CourseSyllabus;
