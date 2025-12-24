import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Briefcase,
  Mail,
  Lock,
  User,
  ArrowRight,
  GraduationCap,
  Building2,
  Github,
  Chrome,
} from "lucide-react";

const Signup = () => {
  const [role, setRole] = useState<"freelancer" | "client">("freelancer");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  return (
    <div className="min-h-screen bg-gradient-hero">
      <Header />

      <div className="container mx-auto px-4 pt-28 pb-16">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="hidden lg:block"
            >
              <h1 className="text-4xl font-bold text-primary-foreground mb-6">
                Join the Future of <span className="text-gradient-primary">Freelancing</span>
              </h1>
              <p className="text-xl text-primary-foreground/70 mb-8">
                Whether you're a talented freelancer or looking for the best talent, SB Works has everything you need to succeed.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary-foreground mb-1">StudentPass™ Benefits</h3>
                    <p className="text-primary-foreground/60 text-sm">
                      Students get 0% commission on their first 3 jobs, free courses, and exclusive opportunities.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <Briefcase className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary-foreground mb-1">AI-Powered Matching</h3>
                    <p className="text-primary-foreground/60 text-sm">
                      Our smart algorithms connect you with perfect matches based on skills and work style.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Building2 className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary-foreground mb-1">Trusted by 50K+ Users</h3>
                    <p className="text-primary-foreground/60 text-sm">
                      Join a growing community of professionals and businesses worldwide.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right - Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-card rounded-2xl p-8 shadow-xl border border-border"
            >
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-2">Create Your Account</h2>
                <p className="text-muted-foreground">Get started in less than 2 minutes</p>
              </div>

              {/* Role Toggle */}
              <div className="flex rounded-xl bg-secondary p-1 mb-6">
                <button
                  onClick={() => setRole("freelancer")}
                  className={`flex-1 py-3 rounded-lg text-sm font-medium transition-all ${
                    role === "freelancer"
                      ? "bg-gradient-primary text-primary-foreground shadow-md"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  I'm a Freelancer
                </button>
                <button
                  onClick={() => setRole("client")}
                  className={`flex-1 py-3 rounded-lg text-sm font-medium transition-all ${
                    role === "client"
                      ? "bg-gradient-primary text-primary-foreground shadow-md"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  I'm a Client
                </button>
              </div>

              {/* Social Signup */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                <Button variant="outline" className="h-12">
                  <Chrome className="w-5 h-5 mr-2" />
                  Google
                </Button>
                <Button variant="outline" className="h-12">
                  <Github className="w-5 h-5 mr-2" />
                  GitHub
                </Button>
              </div>

              <div className="relative mb-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-border" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-card px-2 text-muted-foreground">Or continue with</span>
                </div>
              </div>

              {/* Form */}
              <form className="space-y-4">
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    placeholder="Full Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="pl-12 h-12"
                  />
                </div>

                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    type="email"
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-12 h-12"
                  />
                </div>

                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-12 h-12"
                  />
                </div>

                {role === "freelancer" && (
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="rounded border-border" />
                    <span className="text-sm text-muted-foreground">
                      I'm a student (unlock <span className="text-primary font-medium">StudentPass™</span> benefits)
                    </span>
                  </label>
                )}

                <Button variant="gradient" size="lg" className="w-full">
                  Create Account
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </form>

              <p className="text-xs text-muted-foreground text-center mt-6">
                By signing up, you agree to our{" "}
                <Link to="/terms" className="text-primary hover:underline">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link to="/privacy" className="text-primary hover:underline">
                  Privacy Policy
                </Link>
              </p>

              <div className="mt-6 pt-6 border-t border-border text-center">
                <p className="text-muted-foreground">
                  Already have an account?{" "}
                  <Link to="/login" className="text-primary font-medium hover:underline">
                    Sign in
                  </Link>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Signup;
