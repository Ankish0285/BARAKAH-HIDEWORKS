import { useSearchParams } from "react-router-dom";
import PageTemplate from "../components/PageTemplate";
import ProductDetails from "../components/ProductDetails";
import { getProductById } from "../utils/mockData";

export default function Product() {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const product = getProductById(id);

  return (
    <PageTemplate title="" className="product-page">
      <ProductDetails product={product} />
    </PageTemplate>
  );
}
