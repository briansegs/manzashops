import Header from "../components/Header";
import Menu from "../components/Menu";
import Footer from "../containers/Footer";
import { Outlet } from "react-router";

const Layout = () => {
  return (
    <html lang="en">
      <body className="bg-white w-full">
        <Header />
        <Menu />
        <Outlet />
        <Footer />
      </body>
    </html>
  );
};

export default Layout;
