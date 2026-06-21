import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Category from "./pages/Category";
import Product from "./pages/Product";
import Search from "./pages/Search";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Payment from "./pages/Payment";
import Wishlist from "./pages/Wishlist";
import Orders from "./pages/Orders";
import TrackOrder from "./pages/TrackOrder";
import Offers from "./pages/Offers";
import Support from "./pages/Support";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Addresses from "./pages/Addresses";
import AccountOrders from "./pages/AccountOrders";
import AccountReviews from "./pages/AccountReviews";
import AccountSettings from "./pages/AccountSettings";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Otp from "./pages/Otp";
import ForgotPassword from "./pages/ForgotPassword";
import AdminDashboard from "./pages/AdminDashboard";
import AdminProducts from "./pages/AdminProducts";
import AdminCategories from "./pages/AdminCategories";
import AdminOrders from "./pages/AdminOrders";
import AdminCustomers from "./pages/AdminCustomers";
import AdminInventory from "./pages/AdminInventory";
import AdminAnalytics from "./pages/AdminAnalytics";
import AdminCoupons from "./pages/AdminCoupons";
import AdminReviews from "./pages/AdminReviews";
import AdminSupport from "./pages/AdminSupport";
import AdminSettings from "./pages/AdminSettings";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="category" element={<Category />} />
        <Route path="product" element={<Product />} />
        <Route path="search" element={<Search />} />
        <Route path="cart" element={<Cart />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="payment" element={<Payment />} />
        <Route path="wishlist" element={<Wishlist />} />
        <Route path="orders" element={<Orders />} />
        <Route path="track-order" element={<TrackOrder />} />
        <Route path="offers" element={<Offers />} />
        <Route path="support" element={<Support />} />
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />} />

        <Route path="account/profile" element={<Profile />} />
        <Route path="account/addresses" element={<Addresses />} />
        <Route path="account/orders" element={<AccountOrders />} />
        <Route path="account/reviews" element={<AccountReviews />} />
        <Route path="account/settings" element={<AccountSettings />} />

        <Route path="auth/login" element={<Login />} />
        <Route path="auth/register" element={<Register />} />
        <Route path="auth/otp" element={<Otp />} />
        <Route path="auth/forgot-password" element={<ForgotPassword />} />

        <Route path="admin/dashboard" element={<AdminDashboard />} />
        <Route path="admin/products" element={<AdminProducts />} />
        <Route path="admin/categories" element={<AdminCategories />} />
        <Route path="admin/orders" element={<AdminOrders />} />
        <Route path="admin/customers" element={<AdminCustomers />} />
        <Route path="admin/inventory" element={<AdminInventory />} />
        <Route path="admin/analytics" element={<AdminAnalytics />} />
        <Route path="admin/coupons" element={<AdminCoupons />} />
        <Route path="admin/reviews" element={<AdminReviews />} />
        <Route path="admin/support" element={<AdminSupport />} />
        <Route path="admin/settings" element={<AdminSettings />} />
      </Route>
    </Routes>
  );
}
