import { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
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
import API from "@/lib/axios"; // ✅ use central API

const Signup = () => {
  const [role, setRole] = useState<"freelancer" | "client">("freelancer");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await API.post("/auth/register", {
        name,
        email,
        password,
        role,
      });

      alert("Signup successful");
      navigate("/login"); // ✅ let login handle role routing
    } catch (error: any) {
      alert(error.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-hero">
      <Header />

      <div className="container mx-auto px-4 pt-28 pb-16">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="hidden lg:block"
            >
              <h1 className="text-4xl font-bold text-primary-foreground mb-6">
                Join the Future of{" "}
                <span className="text-gradient-primary">Freelancing</span>
              </h1>
              <p className="text-xl text-primary-foreground/70 mb-8">
                Whether you're a freelancer or a client, SB Works helps you succeed.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary-foreground">
                      StudentPass™ Benefits
                    </h3>
                    <p className="text-primary-foreground/60 text-sm">
                      0% commission on first 3 jobs.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center">
                    <Briefcase className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary-foreground">
                      AI-Powered Matching
                    </h3>
                    <p className="text-primary-foreground/60 text-sm">
                      Smart job-talent matching.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary-foreground">
                      Trusted by 50K+ Users
                    </h3>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-card rounded-2xl p-8 shadow-xl border border-border"
            >
              <h2 className="text-2xl font-bold text-center mb-6">
                Create Your Account
              </h2>

              {/* Role Toggle */}
              <div className="flex rounded-xl bg-secondary p-1 mb-6">
                <button
                  type="button"
                  onClick={() => setRole("freelancer")}
                  className={`flex-1 py-3 rounded-lg ${
                    role === "freelancer"
                      ? "bg-gradient-primary text-primary-foreground"
                      : "text-muted-foreground"
                  }`}
                >
                  I'm a Freelancer
                </button>
                <button
                  type="button"
                  onClick={() => setRole("client")}
                  className={`flex-1 py-3 rounded-lg ${
                    role === "client"
                      ? "bg-gradient-primary text-primary-foreground"
                      : "text-muted-foreground"
                  }`}
                >
                  I'm a Client
                </button>
              </div>

              <form className="space-y-4" onSubmit={handleSignup}>
                <Input
                  placeholder="Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <Input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />

                <Button type="submit" className="w-full" variant="gradient">
                  Create Account <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </form>

              <p className="text-sm text-center mt-6">
                Already have an account?{" "}
                <Link to="/login" className="text-primary font-medium">
                  Sign in
                </Link>
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Signup;