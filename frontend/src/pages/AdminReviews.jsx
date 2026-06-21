import PageTemplate from "../components/PageTemplate";
import { reviews } from "../utils/mockData";

export default function AdminReviews() {
  return (
    <PageTemplate title="Manage Reviews" subtitle={`${reviews.length} reviews`} className="admin-page">
      <div className="reviews-list">
        {reviews.map((review) => (
          <div key={review.id} className="review-card admin">
            <div className="review-header">
              <strong>{review.user}</strong>
              <span>★ {review.rating}</span>
            </div>
            <p className="review-product">{review.product}</p>
            <p>{review.comment}</p>
            <div className="card-actions">
              <button className="btn btn-outline btn-sm">Approve</button>
              <button className="btn btn-danger btn-sm">Remove</button>
            </div>
          </div>
        ))}
      </div>
    </PageTemplate>
  );
}
