import PageTemplate from "../components/PageTemplate";
import CheckoutForm from "../components/CheckoutForm";

export default function Checkout() {
  return (
    <PageTemplate title="Checkout" subtitle="Complete your order">
      <CheckoutForm />
    </PageTemplate>
  );
}
