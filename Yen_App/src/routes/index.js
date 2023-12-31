import Homepage from "../pages/Homepage/Homepage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import OrderPage from "../pages/OderPage/OrderPage"
import Products from "../pages/ProductPage/Products"
import ProductDetailPage from "../pages/ProductDetailPage/ProductDetailPage"
import TypeProductPage from "../pages/TypeProductPage/TypeProductPage";
import SignInPage from "../pages/SignInPage/SignInPage"
import SignUpPage from "../pages/SignUpPage/SignUpPage"
import AdminPage from "../pages/AdminPage/AdminPage";
import ProfilePage from "../pages/ProfilePage/ProfilePage";

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
      path: "/products",
      page: Products,
      isShowHeader: true
   },
   {
      path: "/product-detail",
      page: ProductDetailPage,
      isShowHeader: true
   },
   {
      path: "/sign-in",
      page: SignInPage,
      isShowHeader: true
   },
   {
      path: "/sign-up",
      page: SignUpPage,
      isShowHeader: true
   },
   {
      path: "/type",
      page: TypeProductPage,
      isShowHeader: true
   },
   {
      path: "/profile-user",
      page: ProfilePage,
      isShowHeader: true
   },
   {
      path: "/system/admin",
      page: AdminPage,
      isShowHeader: false,
      // isPrivate: true
   },
   {
      path: "*",
      page: NotFoundPage
   }
]
