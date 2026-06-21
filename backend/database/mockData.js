const categories = [
  { name: "Wallets", slug: "wallets", description: "Premium leather wallets", image: "👜", count: 24 },
  { name: "Belts", slug: "belts", description: "Genuine leather belts", image: "🪢", count: 18 },
  { name: "Bags", slug: "bags", description: "Travel and daily bags", image: "👜", count: 15 },
  { name: "Jackets", slug: "jackets", description: "Leather jackets", image: "🧥", count: 12 },
  { name: "Accessories", slug: "accessories", description: "Keychains and more", image: "⌚", count: 20 },
];

const products = [
  {
    name: "Classic Brown Leather Wallet",
    slug: "classic-brown-wallet",
    price: 1299,
    originalPrice: 1799,
    category: "wallets",
    rating: 4.8,
    reviews: 124,
    stock: 45,
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=400",
    description: "Handcrafted genuine leather wallet with multiple card slots and coin pocket.",
    features: ["Genuine leather", "RFID protected", "Slim profile"],
    isActive: true,
  },
  {
    name: "Premium Black Belt",
    slug: "premium-black-belt",
    price: 899,
    originalPrice: 1199,
    category: "belts",
    rating: 4.6,
    reviews: 89,
    stock: 30,
    image: "https://images.unsplash.com/photo-1624222247344-550fb605a10a?w=400",
    description: "Full-grain leather belt with brushed metal buckle.",
    features: ["Adjustable fit", "Anti-rust buckle", "Durable stitching"],
    isActive: true,
  },
  {
    name: "Travel Leather Duffle Bag",
    slug: "travel-duffle-bag",
    price: 4999,
    originalPrice: 6499,
    category: "bags",
    rating: 4.9,
    reviews: 56,
    stock: 12,
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400",
    description: "Spacious duffle bag perfect for weekend trips and gym.",
    features: ["Water resistant", "Multiple compartments", "Detachable strap"],
    isActive: true,
  },
  {
    name: "Heritage Leather Jacket",
    slug: "heritage-leather-jacket",
    price: 8999,
    originalPrice: 11999,
    category: "jackets",
    rating: 4.7,
    reviews: 42,
    stock: 8,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400",
    description: "Timeless biker-style jacket with premium lambskin leather.",
    features: ["Quilted lining", "YKK zippers", "Classic fit"],
    isActive: true,
  },
  {
    name: "Minimal Card Holder",
    slug: "minimal-card-holder",
    price: 699,
    originalPrice: 999,
    category: "wallets",
    rating: 4.5,
    reviews: 201,
    stock: 60,
    image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400",
    description: "Slim card holder for everyday carry.",
    features: ["6 card slots", "Cash pocket", "Vegetable tanned leather"],
    isActive: true,
  },
  {
    name: "Leather Keychain Set",
    slug: "leather-keychain-set",
    price: 399,
    originalPrice: 599,
    category: "accessories",
    rating: 4.4,
    reviews: 78,
    stock: 100,
    image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=400",
    description: "Set of 2 handcrafted leather keychains.",
    features: ["Hand stitched", "Metal ring included", "Gift ready"],
    isActive: true,
  },
];

const offers = [
  { title: "Flat 20% Off", code: "BARAKAH20", minOrder: 999, discount: 20, isFlat: false },
  { title: "First Order Special", code: "WELCOME10", minOrder: 499, discount: 10, isFlat: false },
  { title: "Festive Sale", code: "EID500", minOrder: 2999, discount: 500, isFlat: true },
];

const orders = [
  {
    orderId: "ORD-1001",
    date: "2026-06-15",
    status: "delivered",
    total: 2198,
    items: [{ name: "Classic Brown Leather Wallet", qty: 1, price: 1299 }],
  },
  {
    orderId: "ORD-1002",
    date: "2026-06-18",
    status: "shipped",
    total: 899,
    items: [{ name: "Premium Black Belt", qty: 1, price: 899 }],
  },
];

const reviews = [
  { user: "Ahmed K.", rating: 5, product: "Classic Brown Leather Wallet", comment: "Excellent quality leather!", date: "2026-05-10" },
  { user: "Fatima S.", rating: 4, product: "Travel Leather Duffle Bag", comment: "Great bag, slightly heavy.", date: "2026-05-22" },
];

module.exports = { categories, products, offers, orders, reviews };
