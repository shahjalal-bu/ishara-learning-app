/* eslint-disable react/prop-types */
const Reviews = () => {
  const reviews = [
    {
      reviewerName: "John Doe",
      rating: 4.5,
      content: "Excellent product, highly recommended!",
    },
    {
      reviewerName: "Jane Smith",
      rating: 5.0,
      content: "Absolutely love it! Best purchase ever.",
    },
    {
      reviewerName: "David Johnson",
      rating: 4.0,
      content: "Good quality, but it could be improved.",
    },
    {
      reviewerName: "David Johnson",
      rating: 4.0,
      content: "Good quality, but it could be improved.",
    },
  ];

  return (
    <div className="bg-gray-200 border-l-4 border-lime-400 rounded-lg p-4 shadow-md my-2">
      <h1 className="text-2xl font-bold mb-4">Product Reviews</h1>
      <div className="grid grid-cols-2 gap-2">
        {reviews.map((review, index) => (
          <Review
            key={index}
            reviewerName={review.reviewerName}
            content={review.content}
            rating={review.rating}
          />
        ))}
      </div>
    </div>
  );
};

export default Reviews;

function Review({ reviewerName, rating, content }) {
  return (
    <div className="bg-white p-2 rounded-lg shadow-md mt-2">
      <div className="mb-2">
        <p className="text-xl font-semibold text-gray-800">{reviewerName}</p>
        <p className="text-xl font-semibold text-gray-800">{rating}/5</p>
      </div>
      <p className="text-gray-700">{content}</p>
    </div>
  );
}
