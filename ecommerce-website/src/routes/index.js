import Homepage from "../pages/Homepage/Homepage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import OrderPage from "../pages/OderPage/OrderPage"
import Product from "../pages/ProductPage/Product"

export const routes = [
   {
      path: "/",
      page: Homepage
   },
   {
      path: "/order",
      page: OrderPage
   },
   {
      path: "/product",
      page: Product
   },
   {
      path: "*",
      page: NotFoundPage
   }
]
