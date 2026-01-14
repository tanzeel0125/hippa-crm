import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import PublicLayout from "@/components/layout/PublicLayout";
import {
  Check,
  ArrowRight,
  Shield,
  HelpCircle,
  CreditCard,
  Building2,
} from "lucide-react";
import { insuranceProviders } from "@/lib/mockData";

const PricingPage = () => {
  return (
    <PublicLayout>
      {/* Hero */}
      <section className="bg-gradient-to-b from-background to-muted/30 py-16 md:py-24">
        <div className="container-tight text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Simple, Transparent Pricing
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Most patients pay $0-$50 per session with insurance. No hidden
              fees, ever.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* With Insurance */}
            <motion.div
              className="card-elevated-xl p-8 border-2 border-primary relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="absolute -top-3 left-6 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                Most Popular
              </div>

              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <h2 className="font-display text-2xl font-bold">
                  With Insurance
                </h2>
              </div>

              <div className="mb-6">
                <span className="text-4xl font-bold">$0 - $50</span>
                <span className="text-muted-foreground"> / session</span>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-success mt-0.5" />
                  <span>Pay only your copay or coinsurance</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-success mt-0.5" />
                  <span>We verify your benefits automatically</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-success mt-0.5" />
                  <span>We handle all insurance billing</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-success mt-0.5" />
                  <span>No surprise bills or hidden fees</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-success mt-0.5" />
                  <span>Easy online payment</span>
                </li>
              </ul>

              <Link to="/signup">
                <Button variant="hero" size="lg" className="w-full">
                  Get Started
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </motion.div>

            {/* Without Insurance */}
            <motion.div
              className="card-elevated-xl p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center">
                  <CreditCard className="w-6 h-6 text-muted-foreground" />
                </div>
                <h2 className="font-display text-2xl font-bold">Self-Pay</h2>
              </div>

              <div className="mb-6">
                <span className="text-4xl font-bold">$150 - $250</span>
                <span className="text-muted-foreground"> / session</span>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-success mt-0.5" />
                  <span>Clear upfront pricing</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-success mt-0.5" />
                  <span>Superbills for out-of-network reimbursement</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-success mt-0.5" />
                  <span>HSA/FSA accepted</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-success mt-0.5" />
                  <span>Cancel anytime</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-success mt-0.5" />
                  <span>Sliding scale options available</span>
                </li>
              </ul>

              <Link to="/signup">
                <Button variant="outline" size="lg" className="w-full">
                  Get Started
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Insurance Partners */}
      <section className="section-padding bg-muted/30">
        <div className="container-wide">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Building2 className="w-6 h-6 text-primary" />
              <h2 className="font-display text-2xl md:text-3xl font-bold">
                Insurance We Accept
              </h2>
            </div>
            <p className="text-muted-foreground">
              We work with most major insurance providers
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {insuranceProviders.map((insurance, index) => (
              <motion.div
                key={insurance}
                className="card-elevated p-4 text-center"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <p className="font-medium">{insurance}</p>
              </motion.div>
            ))}
          </div>

          <p className="text-center text-muted-foreground mt-8">
            Don't see your insurance?{" "}
            <Link to="/about" className="text-primary hover:underline">
              Contact us
            </Link>{" "}
            to check coverage.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding">
        <div className="container-tight">
          <div className="text-center mb-12">
            <HelpCircle className="w-8 h-8 text-primary mx-auto mb-4" />
            <h2 className="font-display text-2xl md:text-3xl font-bold">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                q: "How do I know if my insurance is covered?",
                a: "During signup, we'll verify your insurance benefits and let you know exactly what your cost per session will be. This only takes a few minutes.",
              },
              {
                q: "What if I need to cancel an appointment?",
                a: "You can cancel or reschedule up to 24 hours before your appointment at no charge. Late cancellations may incur a fee.",
              },
              {
                q: "Can I use my HSA or FSA?",
                a: "Yes! Mental health services are eligible expenses for both HSA and FSA accounts. We provide receipts you can use for reimbursement.",
              },
              {
                q: "What forms of payment do you accept?",
                a: "We accept all major credit cards, debit cards, and HSA/FSA cards. Payment is collected at the time of your session.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                className="card-elevated-lg p-6"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="font-semibold text-lg mb-2">{faq.q}</h3>
                <p className="text-muted-foreground">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 healthcare-gradient">
        <div className="container-tight text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to get started?
          </h2>
          <p className="text-white/80 mb-8">
            Find out your exact cost in minutes
          </p>
          <Link to="/signup">
            <Button
              size="xl"
              className="bg-white text-primary hover:bg-white/90"
            >
              Check Your Coverage
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </PublicLayout>
  );
};

export default PricingPage;
