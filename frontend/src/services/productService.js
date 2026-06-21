import api from "./api";
import { products, categories, getProductById, getProductsByCategory } from "../utils/mockData";

export const fetchProducts = async () => {
  try {
    const { data } = await api.get("/products");
    return data;
  } catch {
    return products;
  }
};

export const fetchProduct = async (id) => {
  try {
    const { data } = await api.get(`/products/${id}`);
    return data;
  } catch {
    return getProductById(id);
  }
};

export const fetchCategories = async () => {
  try {
    const { data } = await api.get("/categories");
    return data;
  } catch {
    return categories;
  }
};

export const fetchProductsByCategory = async (category) => {
  try {
    const { data } = await api.get(`/categories/${category}/products`);
    return data;
  } catch {
    return getProductsByCategory(category);
  }
};

export const searchProducts = async (query) => {
  const q = query.toLowerCase();
  const all = await fetchProducts();
  return all.filter(
    (p) =>
      p.name.toLowerCase().includes(q) ||
      p.description?.toLowerCase().includes(q) ||
      p.category.includes(q)
  );
};
