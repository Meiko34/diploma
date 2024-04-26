import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Catalog from "./Components/Catalog/Catalog";
import AboutUs from "./Components/AboutUs";
import Delivery from "./Components/Delivery";
import Footer from "./Components/Footer/Footer";
import Stock from "./Components/Stock/Stock";
import Entrance from "./Components/Entrance/Entrance";
import Soothing from "./Components/Soothing/CardSoothing";
import CardDelicious from "./Components/Delicious/CardDelicious";
import Fruit from "./Components/Fruit/CardFruit";
import Test from "./Components/Test";
import Basket from "./Components/Basket/Basket";
import ProductPage from "./Components/ProductPage";
import Authorization from "./Components/Authorization/Authorization";
import MasterLayout from "./layouts/admin/MasterLayout";
import Dashboard from "./Components/Admin/Dashboard";
import Profile from "../src/Components/Admin/Profile";
import UserLayout from "./layouts/admin/UserLayout";
import ProductLayout from "./layouts/admin/ProductLayout";
import ProductEdit from "./layouts/admin/ProductEdit";
import PromotionList from "./layouts/admin/PromotionList";
import PromotionLayout from "./layouts/admin/PromotionLayout";
import ArticleList from "./layouts/admin/ArticleList";
import ArticleLayout from "./layouts/admin/ArticleLayout";
import Contact from "./Components/Contact/Contact";
import HomeLayout from "./layouts/admin/HomeLayout";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/stock" element={<Stock />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/delivery" element={<Delivery />} />
        <Route path="/entrance" element={<Entrance />} />
        <Route path="/soothing" element={<Soothing />} />
        <Route path="/delicious" element={<CardDelicious />} />
        <Route path="/fruit" element={<Fruit />} />
        <Route path="/test" element={<Test />} />
        <Route path="/cart" element={<Basket />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin" element={<HomeLayout />} />

        <Route path="/admin/add" element={<MasterLayout />} />
        <Route path="admin/userLayout" element={<UserLayout />} />
        <Route exact path="/admin/dashboard" element={<Dashboard />} />
        <Route exact path="/admin/profile" element={<Profile />} />
        <Route exact path="/admin/productLayout" element={<ProductLayout />} />
        <Route exact path="/admin/promotionList" element={<PromotionList />} />
        <Route
          exact
          path="/admin/promotionLayout"
          element={<PromotionLayout />}
        />

        <Route
          exact
          path="/admin/promotionLayout"
          element={<PromotionLayout />}
        />

        <Route path="/authorization" element={<Authorization />} />
        <Route path="/products/:id" element={<ProductPage />} />
        <Route exact path="/admin/edit/:productId" element={<ProductEdit />} />
        <Route exact path="/admin/articleList" element={<ArticleList />} />
        <Route exact path="/admin/articleLayout" element={<ArticleLayout />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
