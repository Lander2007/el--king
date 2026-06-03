import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router';
import { LanguageProvider } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './components/HomePage';
import { ProductsPage } from './components/ProductsPage';
import { AccessoriesPage } from './components/AccessoriesPage';
import { ProductDetailPage } from './components/ProductDetailPage';
import { ContactPage } from './components/ContactPage';

function AppShell() {
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = (_id: number) => {
    setCartCount((c) => c + 1);
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar cartCount={cartCount} />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage onAddToCart={handleAddToCart} />} />
          <Route path="/phones" element={<ProductsPage onAddToCart={handleAddToCart} />} />
          <Route path="/accessories" element={<AccessoriesPage onAddToCart={handleAddToCart} />} />
          <Route path="/offers" element={<ProductsPage onAddToCart={handleAddToCart} />} />
          <Route path="/product/:id" element={<ProductDetailPage onAddToCart={handleAddToCart} />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<HomePage onAddToCart={handleAddToCart} />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <AppShell />
      </LanguageProvider>
    </BrowserRouter>
  );
}
