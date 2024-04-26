import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import "../../assets/admin/css/styles.css";
import "../../assets/admin/js/scripts.js";

import PromotionForm from "../../Components/Admin/PromotionForm.jsx";

const PromotionLayout = () => {
  return (
    <div className="sb-nav-fixed">
      <Navbar />
      <div id="layoutSidenav">
        <div id="layoutSidenav_nav">
          <Sidebar />
        </div>
        <div id="layoutSidenav_content">
          <main>
            <h1>Добавить товар</h1>
            <PromotionForm />
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default PromotionLayout;
