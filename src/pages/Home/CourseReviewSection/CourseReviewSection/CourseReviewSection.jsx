import Review from "../Review/Review";

const reviews = [
  {
    id: 1,
    name: "John Doe",
    avatar: "https://w7.pngwing.com/pngs/717/24/png-transparent-computer-icons-user-profile-user-account-avatar-heroes-silhouette-black.png", // Replace with actual image path
    comment:
      "I've had a fantastic learning experience on this platform. The variety of courses available is impressive!",
    rating: 5,
    date: "2023-05-15", // Date of the review
  },
  {
    id: 2,
    name: "Jane Smith",
    avatar: "https://w7.pngwing.com/pngs/717/24/png-transparent-computer-icons-user-profile-user-account-avatar-heroes-silhouette-black.png", // Replace with actual image path
    comment:
      "The quality of instruction and the engaging content make this platform stand out. Highly recommended!",
    rating: 4,
    date: "2023-06-02", // Date of the review
  },
  {
    id: 3,
    name: "Robert Johnson",
    avatar: "https://w7.pngwing.com/pngs/717/24/png-transparent-computer-icons-user-profile-user-account-avatar-heroes-silhouette-black.png", // Replace with actual image path
    comment:
      "I've been using this platform for a while, and it's been a game-changer in my career development.",
    rating: 5,
    date: "2023-07-10", // Date of the review
  },
  {
    id: 4,
    name: "Sarah Adams",
    avatar: "https://w7.pngwing.com/pngs/717/24/png-transparent-computer-icons-user-profile-user-account-avatar-heroes-silhouette-black.png", // Replace with actual image path
    comment:
      "This platform is a treasure trove of knowledge. I can't get enough of the courses!",
    rating: 5,
    date: "2023-08-21", 
  },
  {
    id: 5,
    name: "Michael Brown",
    avatar: "https://w7.pngwing.com/pngs/717/24/png-transparent-computer-icons-user-profile-user-account-avatar-heroes-silhouette-black.png", 
    comment:
      "The customer support here is top-notch. They are always ready to assist with any issues.",
    rating: 4,
    date: "2023-09-05", 
  },
  {
    id: 6,
    name: "Emily Wilson",
    avatar: "https://w7.pngwing.com/pngs/717/24/png-transparent-computer-icons-user-profile-user-account-avatar-heroes-silhouette-black.png", 
    comment:
      "I've recommended this platform to all my friends. It's a goldmine of educational content!",
    rating: 5,
    date: "2023-10-12", 
  },
  {
    id: 7,
    name: "David Lee",
    avatar: "https://w7.pngwing.com/pngs/717/24/png-transparent-computer-icons-user-profile-user-account-avatar-heroes-silhouette-black.png", 
    comment:
      "The user interface is clean and intuitive. It's easy to navigate and find the courses I need.",
    rating: 4,
    date: "2023-11-08", 
  },
  {
    id: 8,
    name: "Linda Anderson",
    avatar: "https://w7.pngwing.com/pngs/717/24/png-transparent-computer-icons-user-profile-user-account-avatar-heroes-silhouette-black.png", 
    comment:
      "I appreciate the affordability of the courses here. It doesn't break the bank to learn new skills.",
    rating: 5,
    date: "2023-12-19", 
  },
];

const CourseReviewSection = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">
          Course Reviews
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-4">
              {/* Review content */}
              <Review review={review} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseReviewSection;
