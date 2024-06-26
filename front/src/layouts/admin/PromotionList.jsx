import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import "../../assets/admin/css/styles.css";
import "../../assets/admin/js/scripts.js";

import PromotionPage from "../../Components/Admin/PromotionPage.jsx";

const PromotionList = () => {
  return (
    <div className="sb-nav-fixed">
      <Navbar />
      <div id="layoutSidenav">
        <div id="layoutSidenav_nav">
          <Sidebar />
        </div>
        <div id="layoutSidenav_content">
          <main>
            <PromotionPage />
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default PromotionList;
