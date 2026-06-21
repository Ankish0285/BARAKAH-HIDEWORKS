import { reviews } from "../utils/mockData";

export default function ReviewSection({ productName }) {
  const filtered = productName
    ? reviews.filter((r) => r.product === productName)
    : reviews;

  return (
    <section className="reviews-section">
      <h3>Customer Reviews</h3>
      {filtered.length === 0 ? (
        <p>No reviews yet. Be the first to review!</p>
      ) : (
        <div className="reviews-list">
          {filtered.map((review) => (
            <article key={review.id} className="review-card">
              <div className="review-header">
                <strong>{review.user}</strong>
                <span>★ {review.rating}</span>
              </div>
              <p>{review.comment}</p>
              <small>{review.date}</small>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
