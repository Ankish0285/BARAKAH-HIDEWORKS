import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import CartDrawer from "./CartDrawer";
import ChatSupport from "./ChatSupport";
import AIAssistant from "./AIAssistant";

export default function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
      <CartDrawer />
      <ChatSupport />
      <AIAssistant />
    </>
  );
}
