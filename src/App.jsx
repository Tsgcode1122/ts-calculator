// App.js
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./component/Layout";
import Home from "./component/Home";
import LogoService from "./component/LogoService";
import FlyerService from "./component/FlyerService";
import BusinessCardService from "./component/BusinessCardService";
import WebsiteService from "./component/WebsiteService";

import FAQs from "./component/FAQs"; // Import the FAQs component

import About from "./pages/About";
import { DarkModeProvider } from "./component/ DarkModeContext";

const App = () => {
  return (
    <DarkModeProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <Home />
              </Layout>
            }
          />
          <Route
            path="/logo"
            element={
              <Layout>
                <LogoService />
              </Layout>
            }
          />
          <Route
            path="/about"
            element={
              <Layout>
                <About />
              </Layout>
            }
          />
          <Route
            path="/faqs"
            element={
              <Layout>
                <FAQs />
              </Layout>
            }
          />
          <Route
            path="/flyer"
            element={
              <Layout>
                <FlyerService />
              </Layout>
            }
          />
          <Route
            path="/business-card"
            element={
              <Layout>
                <BusinessCardService />
              </Layout>
            }
          />
          <Route
            path="/website"
            element={
              <Layout>
                <WebsiteService />
              </Layout>
            }
          />
        </Routes>
      </BrowserRouter>
    </DarkModeProvider>
  );
};

export default App;
