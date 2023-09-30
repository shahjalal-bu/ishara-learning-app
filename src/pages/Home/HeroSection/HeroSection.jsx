const HeroSection = () => {
  return (
    <div className="bg-blue-500 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight">
          Welcome to{" "} <br />
          <span className="text-yellow-300">Ishara Learning School</span>
        </h1>
        <p className="mt-4 text-xl text-white">
          Learn, grow, and succeed with our courses.
        </p>
        <div className="mt-10">
          <a
            href="#"
            className="btn-primary px-6 py-3 text-base font-semibold text-white transition duration-300 ease-in-out bg-indigo-500 rounded-lg shadow-md hover:bg-indigo-600 focus:outline-none focus:ring focus:ring-indigo-300 focus:ring-opacity-50;"
          >
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
