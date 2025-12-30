import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import { ScrollToTop } from "./components/ScrollToTop";
import Home from "./pages/Home";
import UeberMich from "./pages/UeberMich";
import Leistungen from "./pages/Leistungen";
import Behandlungen from "./pages/Behandlungen";
import Galerie from "./pages/Galerie";
import Preise from "./pages/Preise";
import Kontakt from "./pages/Kontakt";
import AGB from "./pages/AGB";
import Datenschutz from "./pages/Datenschutz";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
        <BrowserRouter>
          <ScrollToTop />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/ueber-mich" element={<UeberMich />} />
              <Route path="/leistungen" element={<Leistungen />} />
              <Route path="/behandlungen/:slug" element={<Behandlungen />} />
              <Route path="/galerie" element={<Galerie />} />
              <Route path="/preise" element={<Preise />} />
              <Route path="/kontakt" element={<Kontakt />} />
              <Route path="/agb" element={<AGB />} />
              <Route path="/datenschutz" element={<Datenschutz />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
      <Analytics />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;