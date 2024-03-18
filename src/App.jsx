import { Route, Routes } from "react-router";

import "./App.css";
import About from "./components/About";
import Benefits from "./components/Benefits";
import Contact from "./components/Contact";
import Download from "./components/Download";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Partners from "./components/Partners";
import Products from "./components/Products";
import Testimonials from "./components/Testimonials";

import { benefits, testimonials, partners } from "../src/assets/data";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import LocationHistory from "./components/LocationHistory";
import UserProfile from "./components/UserProfile";

const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Navbar />
            <Hero />
            <About />
            <Features />
            <Products />
            <Benefits benefits={benefits} />
            <Download />
            <Testimonials testimonials={testimonials} />
            <Partners partners={partners} />
            <Contact />
            <Footer />
          </>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/location-history" element={<LocationHistory />} />
      <Route path="/user-profile" element={<UserProfile />} />
    </Routes>
  );
};

export default App;
