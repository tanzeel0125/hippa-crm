import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  User,
  FileText,
  Briefcase,
  Shield,
  CreditCard,
  Clock,
  Upload,
  Building,
  Stethoscope,
} from "lucide-react";
import { credentialTypes, licenseTypes, usStates, specialties, insuranceProviders } from "@/lib/mockData";

const steps = [
  { id: 1, title: "Professional Info", icon: User },
  { id: 2, title: "License & Credentials", icon: FileText },
  { id: 3, title: "Practice Details", icon: Briefcase },
  { id: 4, title: "Insurance & Rates", icon: Shield },
  { id: 5, title: "Payment Info", icon: CreditCard },
  { id: 6, title: "Verification", icon: Clock },
];

const DoctorOnboarding = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Step 1: Professional Info
    firstName: "",
    lastName: "",
    credential: "",
    npiNumber: "",
    phone: "",
    // Step 2: License & Credentials
    licenseType: "",
    licenseNumber: "",
    licenseState: "",
    licenseExpiration: "",
    licenseDocument: null as File | null,
    // Step 3: Practice Details
    selectedSpecialties: [] as string[],
    yearsExperience: "",
    education: "",
    languages: [] as string[],
    bio: "",
    // Step 4: Insurance & Rates
    acceptedInsurance: [] as string[],
    sessionRate: "",
    acceptsSelfPay: false,
    // Step 5: Payment Info
    accountHolderName: "",
    routingNumber: "",
    accountNumber: "",
    confirmAccountNumber: "",
  });

  const updateFormData = (field: string, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const toggleArrayItem = (field: string, item: string) => {
    setFormData((prev) => {
      const currentArray = prev[field as keyof typeof prev] as string[];
      if (currentArray.includes(item)) {
        return { ...prev, [field]: currentArray.filter((i) => i !== item) };
      } else {
        return { ...prev, [field]: [...currentArray, item] };
      }
    });
  };

  const nextStep = () => {
    if (currentStep < 6) {
      setCurrentStep(currentStep + 1);
    } else {
      navigate("/doctor/dashboard");
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const languages = ["English", "Spanish", "Mandarin", "French", "Arabic", "Hindi", "Portuguese", "Korean", "Vietnamese", "Tagalog"];

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <motion.div
            key="step1"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Stethoscope className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold text-foreground">
                Professional Information
              </h2>
              <p className="text-muted-foreground mt-2">
                Tell us about your professional background
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input
                  id="firstName"
                  value={formData.firstName}
                  onChange={(e) => updateFormData("firstName", e.target.value)}
                  placeholder="Enter first name"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input
                  id="lastName"
                  value={formData.lastName}
                  onChange={(e) => updateFormData("lastName", e.target.value)}
                  placeholder="Enter last name"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="credential">Professional Credential</Label>
              <Select
                value={formData.credential}
                onValueChange={(value) => updateFormData("credential", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select your credential" />
                </SelectTrigger>
                <SelectContent>
                  {credentialTypes.map((cred) => (
                    <SelectItem key={cred.value} value={cred.value}>
                      {cred.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="npiNumber">NPI Number</Label>
              <Input
                id="npiNumber"
                value={formData.npiNumber}
                onChange={(e) => updateFormData("npiNumber", e.target.value)}
                placeholder="Enter your 10-digit NPI"
                maxLength={10}
              />
              <p className="text-xs text-muted-foreground">
                Your National Provider Identifier is required for insurance billing
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => updateFormData("phone", e.target.value)}
                placeholder="(555) 555-5555"
              />
            </div>
          </motion.div>
        );

      case 2:
        return (
          <motion.div
            key="step2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold text-foreground">
                License & Credentials
              </h2>
              <p className="text-muted-foreground mt-2">
                We'll verify your credentials to ensure patient safety
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="licenseType">License Type</Label>
              <Select
                value={formData.licenseType}
                onValueChange={(value) => updateFormData("licenseType", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select license type" />
                </SelectTrigger>
                <SelectContent>
                  {licenseTypes.map((license) => (
                    <SelectItem key={license.value} value={license.value}>
                      {license.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="licenseNumber">License Number</Label>
                <Input
                  id="licenseNumber"
                  value={formData.licenseNumber}
                  onChange={(e) => updateFormData("licenseNumber", e.target.value)}
                  placeholder="Enter license number"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="licenseState">State Issued</Label>
                <Select
                  value={formData.licenseState}
                  onValueChange={(value) => updateFormData("licenseState", value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select state" />
                  </SelectTrigger>
                  <SelectContent>
                    {usStates.map((state) => (
                      <SelectItem key={state.value} value={state.value}>
                        {state.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="licenseExpiration">Expiration Date</Label>
              <Input
                id="licenseExpiration"
                type="date"
                value={formData.licenseExpiration}
                onChange={(e) => updateFormData("licenseExpiration", e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label>Upload License Document</Label>
              <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary/50 transition-colors cursor-pointer">
                <Upload className="w-10 h-10 text-muted-foreground mx-auto mb-3" />
                <p className="text-sm text-muted-foreground mb-1">
                  Drag and drop your license document, or click to browse
                </p>
                <p className="text-xs text-muted-foreground">
                  PDF, JPG, or PNG up to 10MB
                </p>
                <input
                  type="file"
                  className="hidden"
                  accept=".pdf,.jpg,.jpeg,.png"
                  onChange={(e) => {
                    if (e.target.files?.[0]) {
                      updateFormData("licenseDocument", e.target.files[0]);
                    }
                  }}
                />
              </div>
              {formData.licenseDocument && (
                <p className="text-sm text-green-600 flex items-center gap-2">
                  <Check className="w-4 h-4" />
                  {formData.licenseDocument.name} uploaded
                </p>
              )}
            </div>
          </motion.div>
        );

      case 3:
        return (
          <motion.div
            key="step3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Briefcase className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold text-foreground">
                Practice Details
              </h2>
              <p className="text-muted-foreground mt-2">
                Help patients understand your expertise
              </p>
            </div>

            <div className="space-y-2">
              <Label>Specialties (select all that apply)</Label>
              <div className="grid grid-cols-2 gap-2 max-h-48 overflow-y-auto p-1">
                {specialties.map((specialty) => (
                  <div
                    key={specialty}
                    className={`flex items-center gap-2 p-3 rounded-lg border cursor-pointer transition-colors ${
                      formData.selectedSpecialties.includes(specialty)
                        ? "border-primary bg-primary/5"
                        : "border-border hover:border-primary/50"
                    }`}
                    onClick={() => toggleArrayItem("selectedSpecialties", specialty)}
                  >
                    <Checkbox
                      checked={formData.selectedSpecialties.includes(specialty)}
                      onCheckedChange={() => toggleArrayItem("selectedSpecialties", specialty)}
                    />
                    <span className="text-sm">{specialty}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="yearsExperience">Years of Experience</Label>
              <Select
                value={formData.yearsExperience}
                onValueChange={(value) => updateFormData("yearsExperience", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select years of experience" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0-2">0-2 years</SelectItem>
                  <SelectItem value="3-5">3-5 years</SelectItem>
                  <SelectItem value="6-10">6-10 years</SelectItem>
                  <SelectItem value="11-15">11-15 years</SelectItem>
                  <SelectItem value="15+">15+ years</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="education">Education & Training</Label>
              <Textarea
                id="education"
                value={formData.education}
                onChange={(e) => updateFormData("education", e.target.value)}
                placeholder="e.g., MD from Johns Hopkins University, Residency at Mass General..."
                rows={3}
              />
            </div>

            <div className="space-y-2">
              <Label>Languages Spoken</Label>
              <div className="flex flex-wrap gap-2">
                {languages.map((lang) => (
                  <button
                    key={lang}
                    type="button"
                    onClick={() => toggleArrayItem("languages", lang)}
                    className={`px-3 py-1.5 rounded-full text-sm transition-colors ${
                      formData.languages.includes(lang)
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-muted-foreground hover:bg-muted/80"
                    }`}
                  >
                    {lang}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="bio">Professional Bio</Label>
              <Textarea
                id="bio"
                value={formData.bio}
                onChange={(e) => updateFormData("bio", e.target.value)}
                placeholder="Write a brief introduction about yourself and your approach to patient care..."
                rows={4}
              />
              <p className="text-xs text-muted-foreground">
                This will be displayed on your public profile
              </p>
            </div>
          </motion.div>
        );

      case 4:
        return (
          <motion.div
            key="step4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold text-foreground">
                Insurance & Rates
              </h2>
              <p className="text-muted-foreground mt-2">
                Set up your billing preferences
              </p>
            </div>

            <div className="space-y-2">
              <Label>Accepted Insurance Providers</Label>
              <div className="grid grid-cols-2 gap-2 max-h-56 overflow-y-auto p-1">
                {insuranceProviders.map((provider) => (
                  <div
                    key={provider}
                    className={`flex items-center gap-2 p-3 rounded-lg border cursor-pointer transition-colors ${
                      formData.acceptedInsurance.includes(provider)
                        ? "border-primary bg-primary/5"
                        : "border-border hover:border-primary/50"
                    }`}
                    onClick={() => toggleArrayItem("acceptedInsurance", provider)}
                  >
                    <Checkbox
                      checked={formData.acceptedInsurance.includes(provider)}
                      onCheckedChange={() => toggleArrayItem("acceptedInsurance", provider)}
                    />
                    <span className="text-sm">{provider}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="sessionRate">Session Rate (per hour)</Label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                  $
                </span>
                <Input
                  id="sessionRate"
                  type="number"
                  value={formData.sessionRate}
                  onChange={(e) => updateFormData("sessionRate", e.target.value)}
                  placeholder="150"
                  className="pl-8"
                />
              </div>
              <p className="text-xs text-muted-foreground">
                This is your rate for self-pay patients. Insurance rates are set by the payer.
              </p>
            </div>

            <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg">
              <Checkbox
                id="acceptsSelfPay"
                checked={formData.acceptsSelfPay}
                onCheckedChange={(checked) =>
                  updateFormData("acceptsSelfPay", checked)
                }
              />
              <div>
                <Label htmlFor="acceptsSelfPay" className="cursor-pointer">
                  Accept self-pay patients
                </Label>
                <p className="text-xs text-muted-foreground">
                  Allow patients without insurance to book at your session rate
                </p>
              </div>
            </div>
          </motion.div>
        );

      case 5:
        return (
          <motion.div
            key="step5"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold text-foreground">
                Payment Information
              </h2>
              <p className="text-muted-foreground mt-2">
                Set up your payout account for earnings
              </p>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
              <div className="flex gap-3">
                <Shield className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-blue-900">
                    Bank-level security
                  </p>
                  <p className="text-sm text-blue-700">
                    Your payment information is encrypted and securely stored. We never share your banking details.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="accountHolderName">Account Holder Name</Label>
              <Input
                id="accountHolderName"
                value={formData.accountHolderName}
                onChange={(e) => updateFormData("accountHolderName", e.target.value)}
                placeholder="Enter name as it appears on your account"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="routingNumber">Routing Number</Label>
              <Input
                id="routingNumber"
                value={formData.routingNumber}
                onChange={(e) => updateFormData("routingNumber", e.target.value)}
                placeholder="9-digit routing number"
                maxLength={9}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="accountNumber">Account Number</Label>
              <Input
                id="accountNumber"
                type="password"
                value={formData.accountNumber}
                onChange={(e) => updateFormData("accountNumber", e.target.value)}
                placeholder="Enter account number"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="confirmAccountNumber">Confirm Account Number</Label>
              <Input
                id="confirmAccountNumber"
                type="password"
                value={formData.confirmAccountNumber}
                onChange={(e) =>
                  updateFormData("confirmAccountNumber", e.target.value)
                }
                placeholder="Re-enter account number"
              />
            </div>
          </motion.div>
        );

      case 6:
        return (
          <motion.div
            key="step6"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="text-center py-8"
          >
            <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Clock className="w-10 h-10 text-amber-600" />
            </div>

            <h2 className="text-2xl font-semibold text-foreground mb-3">
              Verification In Progress
            </h2>

            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              Thank you for submitting your credentials! Our team will review your
              application within <strong>24-48 hours</strong>.
            </p>

            <div className="bg-muted/50 rounded-xl p-6 max-w-md mx-auto mb-8">
              <h3 className="font-medium text-foreground mb-4">
                What happens next?
              </h3>
              <div className="space-y-4 text-left">
                <div className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-xs font-medium text-primary">1</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    We verify your license and credentials
                  </p>
                </div>
                <div className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-xs font-medium text-primary">2</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    You'll receive an email once approved
                  </p>
                </div>
                <div className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-xs font-medium text-primary">3</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Set your availability and start accepting patients
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-6">
              <Check className="w-4 h-4 text-green-600" />
              <span>Application submitted successfully</span>
            </div>
          </motion.div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      {/* Header */}
      <header className="border-b bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">C</span>
            </div>
            <span className="font-semibold text-lg">CareConnect</span>
          </div>
          <div className="text-sm text-muted-foreground">
            Provider Registration
          </div>
        </div>
      </header>

      {/* Progress Steps */}
      <div className="border-b bg-background">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between max-w-3xl mx-auto">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isActive = currentStep === step.id;
              const isComplete = currentStep > step.id;

              return (
                <div key={step.id} className="flex items-center">
                  <div className="flex flex-col items-center">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                        isComplete
                          ? "bg-green-500 text-white"
                          : isActive
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {isComplete ? (
                        <Check className="w-5 h-5" />
                      ) : (
                        <Icon className="w-5 h-5" />
                      )}
                    </div>
                    <span
                      className={`text-xs mt-2 hidden sm:block ${
                        isActive ? "text-primary font-medium" : "text-muted-foreground"
                      }`}
                    >
                      {step.title}
                    </span>
                  </div>
                  {index < steps.length - 1 && (
                    <div
                      className={`w-8 sm:w-16 h-0.5 mx-2 ${
                        currentStep > step.id ? "bg-green-500" : "bg-muted"
                      }`}
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Form Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-xl mx-auto">
          <div className="bg-card rounded-2xl shadow-sm border p-8">
            <AnimatePresence mode="wait">{renderStep()}</AnimatePresence>

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8 pt-6 border-t">
              {currentStep > 1 && currentStep < 6 ? (
                <Button variant="outline" onClick={prevStep}>
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back
                </Button>
              ) : (
                <div />
              )}

              <Button onClick={nextStep} className="ml-auto">
                {currentStep === 6 ? (
                  <>
                    Go to Dashboard
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </>
                ) : (
                  <>
                    Continue
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DoctorOnboarding;
