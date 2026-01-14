import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import PublicLayout from "@/components/layout/PublicLayout";
import {
  ArrowRight,
  Shield,
  Heart,
  Users,
  Award,
  Target,
  Sparkles,
} from "lucide-react";

const AboutPage = () => {
  const team = [
    {
      name: "Dr. Amanda Foster",
      role: "CEO & Co-Founder",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face",
    },
    {
      name: "Michael Chen",
      role: "CTO & Co-Founder",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    },
    {
      name: "Dr. Sarah Williams",
      role: "Chief Medical Officer",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face",
    },
    {
      name: "James Rodriguez",
      role: "Head of Product",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    },
  ];

  const values = [
    {
      icon: Heart,
      title: "Patient-First",
      description:
        "Every decision we make starts with what's best for our patients.",
    },
    {
      icon: Shield,
      title: "Privacy & Trust",
      description:
        "Your health information is sacred. We protect it with the highest standards.",
    },
    {
      icon: Sparkles,
      title: "Excellence",
      description:
        "We partner only with licensed, vetted providers who share our commitment to quality.",
    },
    {
      icon: Target,
      title: "Accessibility",
      description:
        "Quality mental healthcare should be available to everyone, everywhere.",
    },
  ];

  return (
    <PublicLayout>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/30 py-20 md:py-28">
        <div className="container-tight text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Making mental healthcare{" "}
              <span className="healthcare-gradient-text">
                accessible for all
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              We're on a mission to break down barriers to mental healthcare and
              connect people with the support they need.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 border-y border-border bg-card">
        <div className="container-wide">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "10,000+", label: "Patients helped" },
              { value: "500+", label: "Licensed providers" },
              { value: "50", label: "States covered" },
              { value: "4.9/5", label: "Average rating" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <p className="text-3xl md:text-4xl font-bold healthcare-gradient-text">
                  {stat.value}
                </p>
                <p className="text-muted-foreground mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="section-padding">
        <div className="container-tight">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              Our Mission
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              One in five adults experiences a mental health condition each
              year, yet the majority don't receive treatment. Long wait times,
              high costs, and limited access keep people from getting the help
              they need.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              We founded CareConnect to change that. By connecting patients with
              licensed providers through secure video sessions, we're making
              quality mental healthcare accessible, affordable, and convenient
              for everyone.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-muted/30">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold">
              Our Values
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="card-elevated-lg p-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Our Leadership
            </h2>
            <p className="text-muted-foreground">
              Led by healthcare and technology experts
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                className="card-elevated-lg p-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="font-display font-semibold">{member.name}</h3>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance */}
      <section className="section-padding bg-muted/30">
        <div className="container-tight">
          <div className="card-elevated-xl p-8 md:p-12 text-center">
            <Shield className="w-12 h-12 text-primary mx-auto mb-6" />
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">
              Your Privacy is Our Priority
            </h2>
            <p className="text-muted-foreground mb-6">
              CareConnect is fully HIPAA compliant and uses bank-level
              encryption to protect your data. We never sell your information
              and follow the strictest privacy standards in healthcare.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <div className="flex items-center gap-2 text-sm">
                <div className="w-2 h-2 rounded-full bg-success" />
                HIPAA Compliant
              </div>
              <div className="flex items-center gap-2 text-sm">
                <div className="w-2 h-2 rounded-full bg-success" />
                256-bit SSL Encryption
              </div>
              <div className="flex items-center gap-2 text-sm">
                <div className="w-2 h-2 rounded-full bg-success" />
                SOC 2 Type II
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 healthcare-gradient">
        <div className="container-tight text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to start your journey?
          </h2>
          <p className="text-white/80 mb-8">
            Join thousands who've found care with CareConnect
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/find-doctor">
              <Button
                size="xl"
                className="w-full sm:w-auto bg-white text-primary hover:bg-white/90"
              >
                Find a Doctor
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <Link to="/signup?role=doctor">
              <Button variant="glass" size="xl" className="w-full sm:w-auto">
                Join as Provider
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
};

export default AboutPage;
