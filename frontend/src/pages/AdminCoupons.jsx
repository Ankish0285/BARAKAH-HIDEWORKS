import PageTemplate from "../components/PageTemplate";
import { offers } from "../utils/mockData";
import { formatPrice } from "../utils/formatPrice";

export default function AdminCoupons() {
  return (
    <PageTemplate title="Coupons & Offers" subtitle="Manage discount codes" className="admin-page">
      <button className="btn btn-primary">+ Create Coupon</button>
      <table className="admin-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Code</th>
            <th>Discount</th>
            <th>Min Order</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {offers.map((offer) => (
            <tr key={offer.id}>
              <td>{offer.title}</td>
              <td><code>{offer.code}</code></td>
              <td>{offer.isFlat ? formatPrice(offer.discount) : `${offer.discount}%`}</td>
              <td>{formatPrice(offer.minOrder)}</td>
              <td>
                <button className="btn btn-outline btn-sm">Edit</button>
                <button className="btn btn-danger btn-sm">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </PageTemplate>
  );
}
