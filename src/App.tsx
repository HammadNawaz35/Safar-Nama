import { useState, useEffect, lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import SplashScreen from "@/components/SplashScreen";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";

// Lazy load all pages
const Home = lazy(() => import("@/pages/Home"));
const Destinations = lazy(() => import("@/pages/Destinations"));
const Tours = lazy(() => import("@/pages/Tours"));
const Booking = lazy(() => import("@/pages/Booking"));
const Checkout = lazy(() => import("@/pages/Checkout"));
const TripPlanner = lazy(() => import("@/pages/TripPlanner"));
const Blog = lazy(() => import("@/pages/Blog"));
const BlogPost = lazy(() => import("@/pages/BlogPost"));
const Contact = lazy(() => import("@/pages/Contact"));
const NotFound = lazy(() => import("@/pages/NotFound"));

const queryClient = new QueryClient();

const App = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      // Add a small delay after load for smooth transition
      setTimeout(() => setShowSplash(false), 500);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <SplashScreen show={showSplash} />
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <ScrollProgress />
            <Navbar />
            <main>
              <Suspense fallback={null}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/destinations" element={<Destinations />} />
                  <Route path="/tours" element={<Tours />} />
                  <Route path="/booking" element={<Booking />} />
                  <Route path="/checkout" element={<Checkout />} />
                  <Route path="/trip-planner" element={<TripPlanner />} />
                  <Route path="/blog" element={<Blog />} />
                  <Route path="/blog/:id" element={<BlogPost />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Suspense>
            </main>
            <Footer />
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
};

export default App;
