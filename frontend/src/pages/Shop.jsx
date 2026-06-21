import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import PageTemplate from "../components/PageTemplate";
import ProductGrid from "../components/ProductGrid";
import { fetchProducts, fetchProductsByCategory } from "../services/productService";
import { categories } from "../utils/mockData";

export default function Shop() {
  const [searchParams] = useSearchParams();
  const cat = searchParams.get("cat");
  const [products, setProducts] = useState([]);
  const [sort, setSort] = useState("default");

  useEffect(() => {
    const load = cat ? fetchProductsByCategory(cat) : fetchProducts();
    load.then(setProducts);
  }, [cat]);

  const sorted = [...products].sort((a, b) => {
    if (sort === "price-low") return a.price - b.price;
    if (sort === "price-high") return b.price - a.price;
    if (sort === "rating") return b.rating - a.rating;
    return 0;
  });

  const catName = categories.find((c) => c.slug === cat)?.name;

  return (
    <PageTemplate title={catName ? catName : "Shop All Products"} subtitle="Premium leather goods">
      <div className="shop-toolbar">
        <select value={sort} onChange={(e) => setSort(e.target.value)}>
          <option value="default">Sort: Default</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
          <option value="rating">Top Rated</option>
        </select>
      </div>
      <ProductGrid products={sorted} title="" />
    </PageTemplate>
  );
}
