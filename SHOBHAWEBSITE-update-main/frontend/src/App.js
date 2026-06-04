import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import { AuthProvider } from "./contexts/AuthContext";
import Home from "./pages/Home";
import About from "./pages/About";
import WhySobha from "./pages/WhySobha";
import Contact from "./pages/Contact";
import Pharmaceuticals from "./pages/Pharmaceuticals";
import PharmaCategoryPage from "./pages/PharmaCategoryPage";
import AdminLogin from "./pages/admin/AdminLogin";
import AdminLayout from "./pages/admin/AdminLayout";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminInquiries from "./pages/admin/AdminInquiries";
import AdminProducts from "./pages/admin/AdminProducts";
import AdminContent from "./pages/admin/AdminContent";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Toaster
            position="top-right"
            richColors
            toastOptions={{
              style: {
                fontFamily: "Inter, sans-serif",
                borderRadius: "12px",
              },
            }}
          />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/why-shobha" element={<WhySobha />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/pharmaceuticals" element={<Pharmaceuticals />} />
            <Route
              path="/pharmaceuticals/:slug"
              element={<PharmaCategoryPage />}
            />
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin" element={<AdminLayout />}>
              <Route index element={<AdminDashboard />} />
              <Route path="inquiries" element={<AdminInquiries />} />
              <Route path="products" element={<AdminProducts />} />
              <Route path="content" element={<AdminContent />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
