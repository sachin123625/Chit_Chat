import React from 'react';
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Chat from "./pages/Chat";
import Register from "./pages/Register";
import Login from "./pages/Login";
import About from "./pages/About"; // Import About component
import Contact from "./pages/Contact"; // Import Contact component
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Container } from "react-bootstrap";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import { ChatContextProvider } from "./context/ChatContext";
import './index.css'; // Import enhanced global styles

function App() {
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";
  const isRegisterPage = location.pathname === "/register";
  const hideNavbarAndFooter = isLoginPage || isRegisterPage;

  const { user } = useContext(AuthContext);

  return (
    <div className="app-container">
      <ChatContextProvider user={user}>
        {!hideNavbarAndFooter && <Navbar />}
        
        <div className={`main-content ${user && !hideNavbarAndFooter ? 'with-sidebar' : ''}`}>
          <Container fluid className={user ? 'p-0' : 'py-4'}>
            <Routes>
              <Route path="/" element={<Chat />} />
              <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
              <Route path="/register" element={user ? <Navigate to="/" /> : <Register />} />
              <Route path="/about" element={<About />} /> {/* Add About route */}
              <Route path="/contact" element={<Contact />} /> {/* Add Contact route */}
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </Container>
        </div>
    
        {!hideNavbarAndFooter && !user && <Footer />}
      </ChatContextProvider>
    </div>
  );
}

export default App;