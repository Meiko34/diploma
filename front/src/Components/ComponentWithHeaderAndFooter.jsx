import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import { Outlet } from "react-router-dom";

export default function ComponentWithHeaderAndFooter() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
