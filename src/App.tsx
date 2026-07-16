import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { WhatsAppFab } from './components/layout/WhatsAppFab';
import { ScrollToTop } from './components/layout/ScrollToTop';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { Contact } from './pages/Contact';
function PageWrapper({ children }: {children: React.ReactNode;}) {
  return (
    <motion.main
      initial={{
        opacity: 0
      }}
      animate={{
        opacity: 1
      }}
      exit={{
        opacity: 0
      }}
      transition={{
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1]
      }}>
      
      {children}
    </motion.main>);

}
function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
          <PageWrapper>
              <Home />
            </PageWrapper>
          } />
        
        <Route
          path="/about"
          element={
          <PageWrapper>
              <About />
            </PageWrapper>
          } />
        
        <Route
          path="/services"
          element={
          <PageWrapper>
              <Services />
            </PageWrapper>
          } />
        
        <Route
          path="/contact"
          element={
          <PageWrapper>
              <Contact />
            </PageWrapper>
          } />
        
        <Route
          path="*"
          element={
          <PageWrapper>
              <Home />
            </PageWrapper>
          } />
        
      </Routes>
    </AnimatePresence>);

}
export function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex min-h-screen w-full flex-col bg-white">
        <Navbar />
        <AnimatedRoutes />
        <Footer />
        <WhatsAppFab />
      </div>
    </BrowserRouter>);

}