import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import PublicLayout from "@/components/layout/PublicLayout";
import {
  ArrowRight,
  Search,
  Calendar,
  Video,
  FileText,
  CreditCard,
  MessageSquare,
  Shield,
  CheckCircle2,
} from "lucide-react";

const HowItWorksPage = () => {
  const steps = [
    {
      number: "01",
      title: "Create your account",
      description:
        "Sign up in minutes. Tell us about yourself, your insurance, and what kind of care you're looking for.",
      icon: Search,
      details: [
        "Quick 5-minute signup process",
        "Enter insurance details for coverage verification",
        "Share your care preferences",
        "Complete HIPAA-compliant consent forms",
      ],
    },
    {
      number: "02",
      title: "Find your provider",
      description:
        "Browse our network of licensed therapists and psychiatrists. Filter by specialty, availability, insurance, and more.",
      icon: Search,
      details: [
        "500+ licensed providers",
        "Filter by specialty, language, and availability",
        "Read verified patient reviews",
        "View detailed provider profiles",
      ],
    },
    {
      number: "03",
      title: "Book your session",
      description:
        "Choose a time that works for you. Many providers offer same-day or next-day appointments.",
      icon: Calendar,
      details: [
        "Real-time availability",
        "Same-day appointments available",
        "Easy rescheduling",
        "Automatic reminders",
      ],
    },
    {
      number: "04",
      title: "Attend your session",
      description:
        "Join your secure video session from any device. No downloads required—just click and connect.",
      icon: Video,
      details: [
        "HD video & audio",
        "Works on any device",
        "No software to install",
        "Secure, encrypted connection",
      ],
    },
    {
      number: "05",
      title: "Review & continue",
      description:
        "After your session, review your visit summary, follow-up instructions, and easily book your next appointment.",
      icon: FileText,
      details: [
        "Session notes and summaries",
        "Easy prescription management",
        "Secure messaging with your provider",
        "Simple follow-up scheduling",
      ],
    },
    {
      number: "06",
      title: "Simple billing",
      description:
        "We handle insurance billing for you. You'll only pay your copay or coinsurance amount.",
      icon: CreditCard,
      details: [
        "Insurance verified automatically",
        "Pay only your portion",
        "Transparent pricing",
        "Superbills for out-of-network",
      ],
    },
  ];

  return (
    <PublicLayout>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/30 py-20 md:py-28">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
        </div>

        <div className="container-tight relative text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
              How CareConnect Works
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Getting the mental healthcare you need shouldn't be complicated.
              Here's how we make it simple.
            </p>
            <Link to="/find-doctor">
              <Button variant="hero" size="xl">
                Find a Doctor
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Steps */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="space-y-24">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                className={`grid md:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <div className={index % 2 === 1 ? "md:order-2" : ""}>
                  <span className="text-6xl font-display font-bold text-primary/10">
                    {step.number}
                  </span>
                  <h2 className="font-display text-2xl md:text-3xl font-bold mt-4 mb-4">
                    {step.title}
                  </h2>
                  <p className="text-lg text-muted-foreground mb-6">
                    {step.description}
                  </p>
                  <ul className="space-y-3">
                    {step.details.map((detail, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0" />
                        <span className="text-foreground">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div
                  className={`${index % 2 === 1 ? "md:order-1" : ""}`}
                >
                  <div className="card-elevated-xl p-8 md:p-12">
                    <div className="w-20 h-20 rounded-2xl healthcare-gradient flex items-center justify-center mx-auto">
                      <step.icon className="w-10 h-10 text-white" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="section-padding bg-muted/30">
        <div className="container-tight text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Have questions?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Our team is here to help. Reach out anytime.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/about">
              <Button variant="outline" size="lg">
                <MessageSquare className="w-4 h-4" />
                Contact Support
              </Button>
            </Link>
            <Link to="/signup">
              <Button variant="hero" size="lg">
                Get Started
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
};

export default HowItWorksPage;
