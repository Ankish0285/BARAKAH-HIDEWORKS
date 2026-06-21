let idCounter = 100;

const mockStore = {
  products: require("../database/mockData").products.map((p, i) => ({ ...p, id: String(i + 1) })),
  categories: require("../database/mockData").categories.map((c, i) => ({ ...c, id: c.slug })),
  offers: require("../database/mockData").offers.map((o, i) => ({ ...o, id: String(i + 1) })),
  orders: require("../database/mockData").orders.map((o) => ({ ...o, id: o.orderId })),
  reviews: require("../database/mockData").reviews.map((r, i) => ({ ...r, id: String(i + 1) })),
  users: [],
  carts: {},
  wishlists: {},
};

const nextId = () => String(++idCounter);

module.exports = { mockStore, nextId };
