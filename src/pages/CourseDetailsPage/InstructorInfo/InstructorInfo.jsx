const InstructorInfo = () => {
  return (
    <div className="bg-orange-200 border-l-4 border-orange-300 p-4 rounded-lg shadow-md my-2">
      <h2 className="text-2xl font-bold mb-4">Instructor</h2>
    <div className="bg-white rounded-lg shadow-md p-4 flex items-center">
      <div className="flex-shrink-0 mr-4">
        <img
          src="https://res.cloudinary.com/practicaldev/image/fetch/s--nZkiUiDE--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/yfwwqenae7gx9u8bavtj.png"
          alt="Hasin Hyder"
          className="w-16 h-16 rounded-full"
        />
      </div>
      <div>
        <h3 className="text-xl font-semibold">Hasin Hyder</h3>
        <p className="text-gray-600">Founder at Learn with Hasin Hayder</p>
      </div>
    </div>
    </div>
  );
};

export default InstructorInfo;
