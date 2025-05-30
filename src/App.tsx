
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
import Tags from "./pages/Tags";
import TabsPage from "./pages/Tabs";
import Navigation from "./pages/Navigation";
import Banners from "./pages/Banners";
import Buttons from "./pages/Buttons";
import Checkboxes from "./pages/Checkboxes";
import ExpInputFieldPage from "./pages/ExpInputField";
import ProgressBar from "./pages/ProgressBar";
import Documentation from "./pages/Documentation";
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
          <Route path="/tags" element={<Tags />} />
          <Route path="/tabs" element={<TabsPage />} />
          <Route path="/navigation" element={<Navigation />} />
          <Route path="/banners" element={<Banners />} />
          <Route path="/buttons" element={<Buttons />} />
          <Route path="/checkboxes" element={<Checkboxes />} />
          <Route path="/input-field" element={<ExpInputFieldPage />} />
          <Route path="/progress-bar" element={<ProgressBar />} />
          <Route path="/docs" element={<Documentation />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
