import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import { routes } from './routes/index'
import {DefaultComponent} from './components/DefautlComponent/DefaultComponent'
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
// import ProductOperations from "./services/TestPage";

function App() {
  const fetchApi = async () => {
    const res = await axios.get("http://localhost:3888/api/user")
    return res.data
  }

  const query = useQuery({queryKey: ['todos'], queryFn: fetchApi})

  // useEffect(() => {
  //   fetchApi()
  // }, [])
  
  console.log('query', query)

  return (
    <div style={{overflowX: 'hidden', height:'100vh', width: '100%'}}>
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
