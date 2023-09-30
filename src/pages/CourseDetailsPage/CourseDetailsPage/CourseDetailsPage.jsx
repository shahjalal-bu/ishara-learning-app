import AboutCourse from "../AboutCourse/AboutCourse";
import CourseContent from "../CourseContent/CourseContent";
import CourseSyllabus from "../CourseSyllabus/CourseSyllabus";
import InstructorInfo from "../InstructorInfo/InstructorInfo";
import Reviews from "../Reviews/Reviews";

const CourseDetailsPage = () => {
  return (
    <div className="container mx-auto mt-4 sm:px-20">
      <div className="flex">
        <div className="p-5">
          <h1 className="text-4xl font-semibold mb-2">
            Mastering Shopify: App Development
          </h1>
          <h2 className="text-gray-700 mb-3">By : Hasin Hyder</h2>
          <p className="text-gray-600 p-2 mb-3">
            খুবই গোছানো কারিকুলামে বাংলা ভাষায় Shopify অ্যাপ ডেভেলপার হবার বেস্ট
            জার্নি অপেক্ষা করছে আপনার জন্য। সাথে আছেন বেস্ট দুইজন মেন্টর- হাসিন
            হায়দার ভাই ও নাহিদ বিন আজহার ভাই{" "}
          </p>
          {/* Course Content */}
          <div className="flex justify-between items-center border-l-4 border-lime-600">
            <div className="text-2xl font-bold ml-2">ফ্রি ডেমো ক্লাস</div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              ভিডিও দেখুন
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
            <div className="flex justify-between">
              <div className="text-2xl font-bold mb-4">৩০ দিন বাকি</div>
              <div className="text-gray-600 text-lg mb-4">২০৮ সিট বাকি</div>
            </div>
            <div className="flex justify-between">
              <div className="text-3xl font-bold text-red-600 mb-4">
                ১০,০০০/-
              </div>
              <div className="text-blue-500 underline mb-4">প্রোমো কোড</div>
              <div className="text-green-500 mb-4">শেয়ার</div>
            </div>
            <div className="btn btn-warning w-full  mb-4">জয়েন লাইভ ব্যাচ</div>
            <div className="text-2xl font-bold mb-4">
              এই কোর্সে আপনি পাচ্ছেন
            </div>
            <ul className="list-disc ml-6 mb-4">
              <li>১৮ সপ্তাহের স্টাডিপ্ল্যান</li>
              <li>৩৬টি মেইন লাইভ ক্লাস</li>
              <li>ইন্ডাস্ট্রি স্ট্যান্ডার্ড প্রোজেক্ট</li>
              <li>উইকলি অ্যাসেসমেন্ট</li>
              <li>প্রোগ্রেস ট্র্যাকিং</li>
              <li>Laravel API Development</li>
              <li>ক্যারিয়ার গাইডলাইন</li>
              <li>সার্টিফিকেট</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailsPage;
