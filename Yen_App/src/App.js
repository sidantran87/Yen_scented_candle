import React, { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ConfigProvider } from "antd";
import { routes } from './routes/index';
import { DefaultComponent } from './components/DefautlComponent/DefaultComponent';
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

function App() {

  return (
    <div style={{ overflowX: 'hidden', height: '100vh', width: '100%' }}>
      <ConfigProvider
        theme={{
          token: {
            // Seed Token
            colorPrimary: '#B2006B',
            fontFamily: 'Poppins'
          },
        }}
      >
        <Router>
          <Routes>
            {routes.map((route) => {
              const Page = route.page;
              const ischeckAuth = !route.isPrivate;
              const Layout = route.isShowHeader ? DefaultComponent : Fragment;
              return (
                <Route key={route.path} path={ischeckAuth && route.path} element={
                  <Layout>
                    <Page />
                  </Layout>
                } />
              )
            })}
          </Routes>
        </Router>
      </ConfigProvider>
    </div>
  );
}

export default App;
