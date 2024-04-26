import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import "../../assets/admin/css/styles.css";
import "../../assets/admin/js/scripts.js";

import routes from "../../routes/routes.js";
import ArticleForm from "../../Components/Admin/ArticleForm.jsx";

const ArticleLayout = () => {
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
            <ArticleForm />
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default ArticleLayout;
