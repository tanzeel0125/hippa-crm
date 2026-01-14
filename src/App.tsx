import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";

// Public Pages
import HomePage from "./pages/HomePage";
import HowItWorksPage from "./pages/HowItWorksPage";
import FindDoctorPage from "./pages/FindDoctorPage";
import DoctorProfilePage from "./pages/DoctorProfilePage";
import PricingPage from "./pages/PricingPage";
import AboutPage from "./pages/AboutPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";

// Onboarding
import PatientOnboarding from "./pages/onboarding/PatientOnboarding";
import DoctorOnboarding from "./pages/onboarding/DoctorOnboarding";

// Patient Pages
import PatientDashboard from "./pages/patient/PatientDashboard";
import TelehealthSession from "./pages/patient/TelehealthSession";

// Doctor Pages
import DoctorDashboard from "./pages/doctor/DoctorDashboard";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/how-it-works" element={<HowItWorksPage />} />
          <Route path="/find-doctor" element={<FindDoctorPage />} />
          <Route path="/doctor/:id" element={<DoctorProfilePage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />

          {/* Onboarding */}
          <Route path="/onboarding/patient" element={<PatientOnboarding />} />
          <Route path="/onboarding/doctor" element={<DoctorOnboarding />} />

          {/* Patient Routes */}
          <Route path="/patient/dashboard" element={<PatientDashboard />} />
          <Route path="/patient/find-doctor" element={<FindDoctorPage />} />
          <Route path="/patient/appointments" element={<PatientDashboard />} />
          <Route path="/patient/messages" element={<PatientDashboard />} />
          <Route path="/patient/billing" element={<PatientDashboard />} />
          <Route path="/patient/profile" element={<PatientDashboard />} />
          <Route path="/patient/session/:id" element={<TelehealthSession />} />
          <Route path="/patient/visit/:id" element={<PatientDashboard />} />

          {/* Doctor Routes */}
          <Route path="/doctor/dashboard" element={<DoctorDashboard />} />
          <Route path="/doctor/schedule" element={<DoctorDashboard />} />
          <Route path="/doctor/patients" element={<DoctorDashboard />} />
          <Route path="/doctor/appointments" element={<DoctorDashboard />} />
          <Route path="/doctor/earnings" element={<DoctorDashboard />} />
          <Route path="/doctor/profile" element={<DoctorDashboard />} />
          <Route path="/doctor/session/:id" element={<TelehealthSession />} />
          <Route path="/doctor/notes/:id" element={<DoctorDashboard />} />

          {/* Catch-all */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
