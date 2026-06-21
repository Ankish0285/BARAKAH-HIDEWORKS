import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import LoadingScreen from "./components/LoadingScreen";

// Lazily load page components
const Home = lazy(() => import("./pages/Home"));
const Shop = lazy(() => import("./pages/Shop"));
const Category = lazy(() => import("./pages/Category"));
const Product = lazy(() => import("./pages/Product"));
const Search = lazy(() => import("./pages/Search"));
const Cart = lazy(() => import("./pages/Cart"));
const Checkout = lazy(() => import("./pages/Checkout"));
const Payment = lazy(() => import("./pages/Payment"));
const Wishlist = lazy(() => import("./pages/Wishlist"));
const Orders = lazy(() => import("./pages/Orders"));
const TrackOrder = lazy(() => import("./pages/TrackOrder"));
const Offers = lazy(() => import("./pages/Offers"));
const Support = lazy(() => import("./pages/Support"));
const Contact = lazy(() => import("./pages/Contact"));
const About = lazy(() => import("./pages/About"));
const Profile = lazy(() => import("./pages/Profile"));
const Addresses = lazy(() => import("./pages/Addresses"));
const AccountOrders = lazy(() => import("./pages/AccountOrders"));
const AccountReviews = lazy(() => import("./pages/AccountReviews"));
const AccountSettings = lazy(() => import("./pages/AccountSettings"));
const Login = lazy(() => import("./pages/Login"));
const Register = lazy(() => import("./pages/Register"));
const Otp = lazy(() => import("./pages/Otp"));
const ForgotPassword = lazy(() => import("./pages/ForgotPassword"));
const AdminDashboard = lazy(() => import("./pages/AdminDashboard"));
const AdminProducts = lazy(() => import("./pages/AdminProducts"));
const AdminCategories = lazy(() => import("./pages/AdminCategories"));
const AdminOrders = lazy(() => import("./pages/AdminOrders"));
const AdminCustomers = lazy(() => import("./pages/AdminCustomers"));
const AdminInventory = lazy(() => import("./pages/AdminInventory"));
const AdminAnalytics = lazy(() => import("./pages/AdminAnalytics"));
const AdminCoupons = lazy(() => import("./pages/AdminCoupons"));
const AdminReviews = lazy(() => import("./pages/AdminReviews"));
const AdminSupport = lazy(() => import("./pages/AdminSupport"));
const AdminSettings = lazy(() => import("./pages/AdminSettings"));

export default function App() {
  return (
    <Suspense fallback={<LoadingScreen />}>
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
    </Suspense>
  );
}
