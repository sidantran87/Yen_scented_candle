import React, { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import { routes } from './routes/index'
import {DefaultComponent} from './components/DefautlComponent/DefaultComponent'
// import ProductOperations from "./services/TestPage";

function App() {
  // const user = useSelector((state) = => state.user)

  return (
    <div style={{overflow: 'hidden'}}>
      {/* <ProductOperations></ProductOperations> */}
      <Router>
        <Routes>
          {routes.map((route) => {
            const Page = route.page;
            // [Thịnh]: sửa
            const ischeckAuth = !route.isPrivate
            const Layout = route.isShowHeader ?  DefaultComponent: Fragment
            return (
              <Route key={route.path} path={ischeckAuth && route.path} element={
                <Layout>
                  <Page/>
                </Layout>
              } />
            )
          })}
        </Routes>
      </Router>

      

    </div>
  );
}
export default App
