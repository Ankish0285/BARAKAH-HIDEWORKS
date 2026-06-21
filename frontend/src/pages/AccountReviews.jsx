import PageTemplate from "../components/PageTemplate";
import ReviewSection from "../components/ReviewSection";

export default function AccountReviews() {
  return (
    <PageTemplate title="My Reviews" subtitle="Reviews you've written">
      <ReviewSection />
    </PageTemplate>
  );
}
