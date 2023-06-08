import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Lobby from "./pages/website/index";
import Login from "./pages/auth/login";
import RegistrationForm from "./pages/auth/registration";
import './App.css';
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <ChakraProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Lobby />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<RegistrationForm />} />
        {/* Add more routes here if needed */}
      </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;