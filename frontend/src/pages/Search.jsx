import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import PageTemplate from "../components/PageTemplate";
import ProductGrid from "../components/ProductGrid";
import { searchProducts } from "../services/productService";

export default function Search() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (query) searchProducts(query).then(setResults);
    else setResults([]);
  }, [query]);

  return (
    <PageTemplate title="Search Results" subtitle={query ? `Results for "${query}"` : "Enter a search term"}>
      {query ? (
        <ProductGrid products={results} title={`${results.length} products found`} />
      ) : (
        <p className="empty">Use the search bar to find products.</p>
      )}
    </PageTemplate>
  );
}
