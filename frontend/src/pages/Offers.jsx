import { useEffect, useState } from "react";
import PageTemplate from "../components/PageTemplate";
import { fetchOffers } from "../services/couponService";
import { formatPrice } from "../utils/formatPrice";

export default function Offers() {
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    fetchOffers().then(setOffers);
  }, []);

  return (
    <PageTemplate title="Offers & Coupons" subtitle="Save more on your orders">
      <div className="offers-grid">
        {offers.map((offer) => (
          <div key={offer.id} className="offer-card">
            <h3>{offer.title}</h3>
            <p className="offer-code">Code: <strong>{offer.code}</strong></p>
            <p>
              {offer.isFlat
                ? `Flat ${formatPrice(offer.discount)} off`
                : `${offer.discount}% off`}
            </p>
            <p className="offer-min">Min order: {formatPrice(offer.minOrder)}</p>
          </div>
        ))}
      </div>
    </PageTemplate>
  );
}
