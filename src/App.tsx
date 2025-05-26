
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Colors from "./pages/Colors";
import Typography from "./pages/Typography";
import Icons from "./pages/Icons";
import Grids from "./pages/Grids";
import Illustrations from "./pages/Illustrations";
import Background from "./pages/Background";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/colors" element={<Colors />} />
          <Route path="/typography" element={<Typography />} />
          <Route path="/icons" element={<Icons />} />
          <Route path="/grids" element={<Grids />} />
          <Route path="/illustrations" element={<Illustrations />} />
          <Route path="/background" element={<Background />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
