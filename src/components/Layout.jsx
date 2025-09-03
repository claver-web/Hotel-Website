import { Outlet } from "react-router-dom";
import Navbar from "./ConstentPage/Navbar"
import Footer from "./ConstentPage/FooterContent";
import WhatsAppButton from "./LandingPage/whatsAppLink";

const Layout = () => {
  return (
    <>
      <Navbar />
      <WhatsAppButton />
        <main>
          <Outlet /> {/* This is where the page content changes */}
        </main>
      <Footer />
    </>
  );
};

export default Layout;