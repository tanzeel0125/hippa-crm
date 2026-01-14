import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Heart, ArrowRight, ArrowLeft, Check, Shield } from "lucide-react";
import { insuranceProviders } from "@/lib/mockData";

const PatientOnboarding = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const totalSteps = 4;

  const [formData, setFormData] = useState({
    phone: "", dob: "", address: "", city: "", state: "", zip: "",
    insurance: "", memberId: "", groupNumber: "",
    concerns: [] as string[], therapyBefore: "", preferredTime: "",
  });

  const concerns = ["Anxiety", "Depression", "Stress", "Relationships", "Grief", "Trauma", "Self-esteem", "Life transitions"];

  const handleNext = () => {
    if (step < totalSteps) setStep(step + 1);
    else navigate("/patient/dashboard");
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="border-b border-border p-4">
        <div className="container-tight flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg healthcare-gradient flex items-center justify-center">
              <Heart className="w-4 h-4 text-white" />
            </div>
            <span className="font-display font-bold">CareConnect</span>
          </div>
          <span className="text-sm text-muted-foreground">Step {step} of {totalSteps}</span>
        </div>
      </header>

      <div className="container-tight py-4">
        <Progress value={(step / totalSteps) * 100} className="h-2" />
      </div>

      <main className="flex-1 container-tight py-8">
        <motion.div key={step} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="max-w-lg mx-auto">
          {step === 1 && (
            <div className="space-y-6">
              <div><h1 className="font-display text-2xl font-bold">Personal Information</h1><p className="text-muted-foreground">Let's get to know you</p></div>
              <div className="space-y-4">
                <div><Label>Phone Number</Label><Input placeholder="(555) 123-4567" className="h-12" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} /></div>
                <div><Label>Date of Birth</Label><Input type="date" className="h-12" value={formData.dob} onChange={(e) => setFormData({...formData, dob: e.target.value})} /></div>
                <div><Label>Address</Label><Input placeholder="Street address" className="h-12" value={formData.address} onChange={(e) => setFormData({...formData, address: e.target.value})} /></div>
                <div className="grid grid-cols-3 gap-4">
                  <Input placeholder="City" className="h-12" value={formData.city} onChange={(e) => setFormData({...formData, city: e.target.value})} />
                  <Input placeholder="State" className="h-12" value={formData.state} onChange={(e) => setFormData({...formData, state: e.target.value})} />
                  <Input placeholder="ZIP" className="h-12" value={formData.zip} onChange={(e) => setFormData({...formData, zip: e.target.value})} />
                </div>
              </div>
            </div>
          )}
          {step === 2 && (
            <div className="space-y-6">
              <div><h1 className="font-display text-2xl font-bold">Insurance Information</h1><p className="text-muted-foreground">We'll verify your coverage</p></div>
              <div className="space-y-4">
                <div><Label>Insurance Provider</Label><Select value={formData.insurance} onValueChange={(v) => setFormData({...formData, insurance: v})}><SelectTrigger className="h-12"><SelectValue placeholder="Select provider" /></SelectTrigger><SelectContent>{insuranceProviders.map((i) => <SelectItem key={i} value={i}>{i}</SelectItem>)}</SelectContent></Select></div>
                <div><Label>Member ID</Label><Input placeholder="Enter member ID" className="h-12" value={formData.memberId} onChange={(e) => setFormData({...formData, memberId: e.target.value})} /></div>
                <div><Label>Group Number</Label><Input placeholder="Enter group number" className="h-12" value={formData.groupNumber} onChange={(e) => setFormData({...formData, groupNumber: e.target.value})} /></div>
              </div>
            </div>
          )}
          {step === 3 && (
            <div className="space-y-6">
              <div><h1 className="font-display text-2xl font-bold">Care Preferences</h1><p className="text-muted-foreground">Help us match you with the right provider</p></div>
              <div><Label>What brings you to therapy?</Label><div className="grid grid-cols-2 gap-2 mt-2">{concerns.map((c) => (<button key={c} onClick={() => setFormData({...formData, concerns: formData.concerns.includes(c) ? formData.concerns.filter(x => x !== c) : [...formData.concerns, c]})} className={`p-3 rounded-lg border text-sm text-left transition-colors ${formData.concerns.includes(c) ? "bg-primary text-primary-foreground border-primary" : "border-border hover:border-primary"}`}>{c}</button>))}</div></div>
            </div>
          )}
          {step === 4 && (
            <div className="space-y-6 text-center">
              <div className="w-16 h-16 rounded-full bg-success/10 flex items-center justify-center mx-auto"><Check className="w-8 h-8 text-success" /></div>
              <div><h1 className="font-display text-2xl font-bold">You're all set!</h1><p className="text-muted-foreground">Your account is ready. Start by finding a provider.</p></div>
              <div className="card-elevated p-4 text-left flex items-center gap-3"><Shield className="w-5 h-5 text-primary" /><div><p className="text-sm font-medium">HIPAA Consent Accepted</p><p className="text-xs text-muted-foreground">Your data is protected</p></div></div>
            </div>
          )}
        </motion.div>
      </main>

      <footer className="border-t border-border p-4">
        <div className="container-tight flex justify-between">
          {step > 1 && <Button variant="ghost" onClick={() => setStep(step - 1)}><ArrowLeft className="w-4 h-4" /> Back</Button>}
          <div className="flex-1" />
          <Button variant="hero" onClick={handleNext}>{step === totalSteps ? "Go to Dashboard" : "Continue"}<ArrowRight className="w-4 h-4" /></Button>
        </div>
      </footer>
    </div>
  );
};

export default PatientOnboarding;
