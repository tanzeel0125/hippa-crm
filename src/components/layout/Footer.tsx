import { Link } from "react-router-dom";
import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-white/80">
      <div className="container-wide py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <span className="font-display font-bold text-xl text-white">
                CareConnect
              </span>
            </Link>
            <p className="text-sm text-white/60 max-w-xs">
              Making quality mental healthcare accessible, affordable, and
              convenient for everyone.
            </p>
          </div>

          {/* For Patients */}
          <div>
            <h4 className="font-semibold text-white mb-4">For Patients</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/how-it-works"
                  className="text-sm hover:text-white transition-colors"
                >
                  How It Works
                </Link>
              </li>
              <li>
                <Link
                  to="/find-doctor"
                  className="text-sm hover:text-white transition-colors"
                >
                  Find a Doctor
                </Link>
              </li>
              <li>
                <Link
                  to="/pricing"
                  className="text-sm hover:text-white transition-colors"
                >
                  Pricing & Insurance
                </Link>
              </li>
              <li>
                <Link
                  to="/signup"
                  className="text-sm hover:text-white transition-colors"
                >
                  Get Started
                </Link>
              </li>
            </ul>
          </div>

          {/* For Providers */}
          <div>
            <h4 className="font-semibold text-white mb-4">For Providers</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/signup?role=doctor"
                  className="text-sm hover:text-white transition-colors"
                >
                  Join as Provider
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-sm hover:text-white transition-colors"
                >
                  Why CareConnect
                </Link>
              </li>
              <li>
                <Link
                  to="/login"
                  className="text-sm hover:text-white transition-colors"
                >
                  Provider Login
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/about"
                  className="text-sm hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-sm hover:text-white transition-colors"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-sm hover:text-white transition-colors"
                >
                  Press
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-sm hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/about"
                  className="text-sm hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-sm hover:text-white transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-sm hover:text-white transition-colors"
                >
                  HIPAA Compliance
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white/50">
            © 2026 CareConnect. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-2 text-sm text-white/50">
              <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
              HIPAA Compliant
            </span>
            <span className="flex items-center gap-2 text-sm text-white/50">
              <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
              256-bit SSL Encrypted
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
