import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Entry from "./components/Auth/Entry";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import LoginHome from "./components/AfterLogin/Home";
import MessageBoard from "./components/Final/MessageBoard";
import Audio from "./components/Final/Audio";
import Video from "./components/Final/Video";

import Footer from "./components/Footer";
import { AuthProvider } from "./context/AuthContext";
import { LoadingProvider, useLoading } from './context/LoadingContext'
// import Resume from "./components/Resume/ResumeNew";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const ProtectedRoute = ({ children }) => {
  const isAuthOrNot = localStorage.getItem('isAuth');
  return isAuthOrNot ? children : <Navigate to="/" />;
};


function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <LoadingProvider>
    <AuthProvider>
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/entry" element={<Entry />} />
          <Route path="/login" element={<Login />} />
          <Route path="/login/home" element={<ProtectedRoute><LoginHome /></ProtectedRoute>} />
          <Route path='/register' element={<Register />} />
          <Route path="/about" element={<About />} />
          <Route path="/messageBoard" element={<MessageBoard />} />
          <Route path="/audio" element={<Audio />} />
          <Route path="/video" element={<Video />} />
          {/* <Route path="/resume" element={<Resume />} /> */}
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
    </AuthProvider>
    </LoadingProvider>
  );
}

export default App;
