import PageTemplate from "../components/PageTemplate";
import { APP_NAME } from "../utils/constants";

export default function About() {
  return (
    <PageTemplate title={`About ${APP_NAME}`} subtitle="Crafted with care, delivered with barakah">
      <div className="about-content">
        <p>
          {APP_NAME} is a premium leather goods brand dedicated to quality craftsmanship.
          Every wallet, belt, bag and jacket is made from genuine leather by skilled artisans.
        </p>
        <h3>Our Mission</h3>
        <p>
          To provide timeless leather products that combine traditional craftsmanship with
          modern design — products that last for years and bring barakah to everyday life.
        </p>
        <h3>Why Choose Us?</h3>
        <ul className="feature-list">
          <li>✓ 100% Genuine Leather</li>
          <li>✓ Handcrafted Quality</li>
          <li>✓ 30-Day Easy Returns</li>
          <li>✓ Free Shipping above ₹999</li>
          <li>✓ Secure Payments</li>
        </ul>
      </div>
    </PageTemplate>
  );
}
