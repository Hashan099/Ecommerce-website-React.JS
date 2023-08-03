
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Product from "./pages/Product/Product";
import Products from "./pages/Products/Products";
import AboutUs from "./pages/About us/AboutUs";
import ContactUs from "./pages/ContactUs/ContactUs";
import SummaryPage from "./components/Cart/SummaryPage";
import Cart from "./components/Cart/Cart";
import SuccessPage from "./components/Cart/SuccessPage";
import FailurePage from "./components/Cart/FailurePage";
import FAQsPage from "./pages/FAQS/FAQsPage";
import "./app.scss"

const Layout = () => {
  return (
    <div className="app">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products/:id",
        element: <Products />,
      },
      {
        path: "/product/:id",
        element: <Product />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },

      {
        path: "/contact",
        element: <ContactUs />,
      },

      {
        path: "/summary", 
        element: <SummaryPage />, 
      },

      {
        path: "/cart",
        element: <Cart />,
      },

      {
        path: "/success",
        element: <SuccessPage />,
      },

      {
        path: "/failure",
        element: <FailurePage />,
      },

      {
        path: "/faqs",
        element: <FAQsPage />,
      },

         

    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
