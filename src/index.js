import React  from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout/Layout";
import Home from "./pages/Home";
import Geodomy from "./pages/Geodomy";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import "./index.css"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="geodomy" element={<Geodomy />} />
          <Route path="kontakt" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);