const Review = ({ review }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <div className="mb-4">
        <img
          src={review.avatar}
          alt={review.name}
          className="w-12 h-12 rounded-full object-cover object-center"
        />
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">
        {review.name}
      </h3>
      <p className="text-gray-600 mb-4">{review.comment}</p>
      <div className="flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-yellow-500 mr-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 13l4 4L19 7"
          />
        </svg>
        <span className="text-yellow-500 font-semibold">{review.rating}/5</span>
      </div>
    </div>
  );
};

export default Review;
