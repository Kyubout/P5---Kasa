import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "./index.scss"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Home from "./pages/Home"
import About from "./pages/About"
import Housing from "./pages/Housing"
import Invalid from "./pages/Invalid"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/a-propos" element={<About />} />
        <Route path="/housing/:housingId" element={<Housing />} />
        <Route path="*" element={<Invalid />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>,
)
