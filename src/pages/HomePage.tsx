import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import PublicLayout from "@/components/layout/PublicLayout";
import {
  ArrowRight,
  Shield,
  Video,
  Calendar,
  Heart,
  Star,
  CheckCircle2,
  Users,
  Clock,
  Award,
} from "lucide-react";
import { doctors } from "@/lib/mockData";

const HomePage = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  return (
    <PublicLayout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/30">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
        </div>

        <div className="container-wide relative py-20 md:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="text-center lg:text-left"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Shield className="w-4 h-4" />
                HIPAA Compliant & Secure
              </div>

              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
                Find the right care,{" "}
                <span className="healthcare-gradient-text">on your terms</span>
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8">
                Connect with licensed therapists and psychiatrists from the
                comfort of your home. Quality mental healthcare made accessible,
                affordable, and convenient.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link to="/find-doctor">
                  <Button variant="hero" size="xl" className="w-full sm:w-auto">
                    Find a Doctor
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </Link>
                <Link to="/signup?role=doctor">
                  <Button
                    variant="heroOutline"
                    size="xl"
                    className="w-full sm:w-auto"
                  >
                    Join as Provider
                  </Button>
                </Link>
              </div>

              <div className="mt-10 flex items-center gap-8 justify-center lg:justify-start">
                <div className="text-center">
                  <p className="text-2xl font-bold text-foreground">10k+</p>
                  <p className="text-sm text-muted-foreground">
                    Patients helped
                  </p>
                </div>
                <div className="w-px h-10 bg-border" />
                <div className="text-center">
                  <p className="text-2xl font-bold text-foreground">500+</p>
                  <p className="text-sm text-muted-foreground">
                    Licensed providers
                  </p>
                </div>
                <div className="w-px h-10 bg-border" />
                <div className="text-center">
                  <p className="text-2xl font-bold text-foreground">4.9</p>
                  <p className="text-sm text-muted-foreground">Average rating</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="relative hidden lg:block"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop"
                  alt="Healthcare professional"
                  className="rounded-3xl shadow-2xl"
                />
                
                {/* Floating cards */}
                <div className="absolute -left-8 top-1/4 card-elevated-lg p-4 animate-slide-in-right">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-success/10 flex items-center justify-center">
                      <Video className="w-5 h-5 text-success" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Video session</p>
                      <p className="text-xs text-muted-foreground">Ready to join</p>
                    </div>
                  </div>
                </div>

                <div className="absolute -right-4 bottom-1/4 card-elevated-lg p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Calendar className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Next: Tomorrow</p>
                      <p className="text-xs text-muted-foreground">2:00 PM with Dr. Chen</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 bg-muted/30 border-y border-border">
        <div className="container-wide">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Shield className="w-5 h-5" />
              <span className="text-sm font-medium">HIPAA Compliant</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Award className="w-5 h-5" />
              <span className="text-sm font-medium">Licensed Providers</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Clock className="w-5 h-5" />
              <span className="text-sm font-medium">Same-Day Availability</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <CheckCircle2 className="w-5 h-5" />
              <span className="text-sm font-medium">Insurance Accepted</span>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding">
        <div className="container-wide">
          <motion.div
            className="text-center mb-16"
            {...fadeInUp}
            viewport={{ once: true }}
            whileInView="animate"
            initial="initial"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Getting started is simple
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Book your first session in just a few minutes
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Find your match",
                description:
                  "Browse our network of licensed therapists and psychiatrists. Filter by specialty, availability, and insurance.",
                icon: Users,
              },
              {
                step: "02",
                title: "Book a session",
                description:
                  "Choose a time that works for you. Many providers offer same-day or next-day appointments.",
                icon: Calendar,
              },
              {
                step: "03",
                title: "Start your journey",
                description:
                  "Join your secure video session from anywhere. Get personalized care from a licensed professional.",
                icon: Video,
              },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="card-elevated-lg p-8 h-full hover:shadow-lg transition-shadow">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                    <item.icon className="w-7 h-7 text-primary" />
                  </div>
                  <span className="text-xs font-bold text-primary/60 tracking-wider">
                    STEP {item.step}
                  </span>
                  <h3 className="font-display text-xl font-semibold mt-2 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/how-it-works">
              <Button variant="outline" size="lg">
                Learn more about how it works
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Providers */}
      <section className="section-padding bg-muted/30">
        <div className="container-wide">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Meet our providers
              </h2>
              <p className="text-lg text-muted-foreground max-w-xl">
                Experienced, licensed professionals ready to help you on your
                wellness journey.
              </p>
            </div>
            <Link to="/find-doctor" className="mt-4 md:mt-0">
              <Button variant="outline">
                View all providers
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {doctors.slice(0, 3).map((doctor, index) => (
              <motion.div
                key={doctor.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link to={`/doctor/${doctor.id}`}>
                  <div className="card-elevated-lg p-6 hover:shadow-lg transition-all group">
                    <div className="flex items-start gap-4">
                      <img
                        src={doctor.image}
                        alt={doctor.name}
                        className="w-16 h-16 rounded-xl object-cover"
                      />
                      <div className="flex-1 min-w-0">
                        <h3 className="font-display font-semibold text-lg group-hover:text-primary transition-colors">
                          {doctor.name}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {doctor.title}
                        </p>
                        <div className="flex items-center gap-1 mt-1">
                          <Star className="w-4 h-4 fill-warning text-warning" />
                          <span className="text-sm font-medium">
                            {doctor.rating}
                          </span>
                          <span className="text-sm text-muted-foreground">
                            ({doctor.reviewCount} reviews)
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {doctor.specialties.slice(0, 3).map((specialty) => (
                        <span
                          key={specialty}
                          className="px-2.5 py-1 bg-muted rounded-full text-xs font-medium text-muted-foreground"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>

                    <div className="mt-4 pt-4 border-t border-border flex items-center justify-between">
                      <div>
                        <p className="text-xs text-muted-foreground">
                          Next available
                        </p>
                        <p className="text-sm font-medium text-success">
                          {doctor.nextAvailable}
                        </p>
                      </div>
                      <Button size="sm">Book Now</Button>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Trusted by thousands
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Hear from patients who found the care they needed
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "CareConnect made finding a therapist so easy. I was able to book my first session the same day and my therapist has been amazing.",
                author: "Sarah M.",
                role: "Patient since 2025",
              },
              {
                quote:
                  "As someone with a busy schedule, the flexibility of video sessions has been a game-changer. I can attend from anywhere.",
                author: "Michael T.",
                role: "Patient since 2024",
              },
              {
                quote:
                  "The insurance billing was seamless. I just paid my copay and CareConnect handled everything else with my insurance.",
                author: "Jennifer L.",
                role: "Patient since 2025",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                className="card-elevated-lg p-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-warning text-warning"
                    />
                  ))}
                </div>
                <p className="text-foreground mb-6">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 healthcare-gradient">
        <div className="container-wide text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
              Start your wellness journey today
            </h2>
            <p className="text-lg text-white/80 max-w-xl mx-auto mb-8">
              Take the first step towards better mental health. Book your first
              session with a licensed provider.
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
              <Link to="/signup">
                <Button variant="glass" size="xl" className="w-full sm:w-auto">
                  Create Account
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </PublicLayout>
  );
};

export default HomePage;
