import Homepage from "../pages/Homepage/Homepage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import OrderPage from "../pages/OderPage/OrderPage"
import Product from "../pages/ProductPage/Product"

export const routes = [
   {
      path: "/",
      page: Homepage,
      isShowHeader: true
   },
   {
      path: "/order",
      page: OrderPage,
      isShowHeader: true
   },
   {
      path: "/product",
      page: Product,
      isShowHeader: true
   },
   {
      path: "*",
      page: NotFoundPage
   }
]
