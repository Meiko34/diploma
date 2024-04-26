import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import "../../assets/admin/css/styles.css";
import "../../assets/admin/js/scripts.js";

const HomeLayout = () => {
  return (
    <div className="sb-nav-fixed">
      <Navbar />
      <div id="layoutSidenav">
        <div id="layoutSidenav_nav">
          <Sidebar />
        </div>
        <div id="layoutSidenav_content">
          <main>
            <h1>Главная страница</h1>
            {/* <ProductForm /> */}
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default HomeLayout;
