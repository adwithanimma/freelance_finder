import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Briefcase, Users, Shield, Sparkles, Star, ChevronRight, BadgeCheck, Zap, GraduationCap } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-hero overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative container mx-auto px-4 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-8rem)]">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 backdrop-blur-sm mb-8"
            >
              <GraduationCap className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Perfect for Students & New Talent</span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary-foreground leading-tight mb-6">
              Connect{" "}
              <span className="text-gradient-primary bg-clip-text">
                Emerging Talent
              </span>
              <br />
              with Honest Clients
            </h1>

            <p className="text-lg md:text-xl text-primary-foreground/70 mb-8 max-w-xl mx-auto lg:mx-0">
              Build your freelance career with fair visibility, AI-powered matching, and a community that supports your growth from day one.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <Button variant="hero" size="xl" asChild>
                <Link to="/signup?role=freelancer" className="flex items-center gap-2">
                  <Briefcase className="w-5 h-5" />
                  I'm a Freelancer
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="hero-outline" size="xl" asChild>
                <Link to="/signup?role=client" className="flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  I'm a Client
                </Link>
              </Button>
            </div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-6 justify-center lg:justify-start"
            >
              <div className="flex items-center gap-2 text-primary-foreground/60">
                <BadgeCheck className="w-5 h-5 text-primary" />
                <span className="text-sm">Verified Profiles</span>
              </div>
              <div className="flex items-center gap-2 text-primary-foreground/60">
                <Shield className="w-5 h-5 text-primary" />
                <span className="text-sm">Secure Payments</span>
              </div>
              <div className="flex items-center gap-2 text-primary-foreground/60">
                <Zap className="w-5 h-5 text-primary" />
                <span className="text-sm">AI Matching</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Stats Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="grid grid-cols-2 gap-4">
              {/* Stat Card 1 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="glass p-6 rounded-2xl"
              >
                <div className="text-4xl font-bold text-primary mb-2">50K+</div>
                <div className="text-sm text-primary-foreground/70">Active Freelancers</div>
              </motion.div>

              {/* Stat Card 2 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="glass p-6 rounded-2xl mt-8"
              >
                <div className="text-4xl font-bold text-accent mb-2">10K+</div>
                <div className="text-sm text-primary-foreground/70">Projects Completed</div>
              </motion.div>

              {/* Stat Card 3 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="glass p-6 rounded-2xl"
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="text-4xl font-bold text-primary-foreground">4.9</div>
                  <Star className="w-6 h-6 text-accent fill-accent" />
                </div>
                <div className="text-sm text-primary-foreground/70">Average Rating</div>
              </motion.div>

              {/* Stat Card 4 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="glass p-6 rounded-2xl mt-8"
              >
                <div className="text-4xl font-bold text-primary mb-2">0%</div>
                <div className="text-sm text-primary-foreground/70">Commission for Students*</div>
              </motion.div>
            </div>

            {/* Floating elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-10 -right-10 w-20 h-20 bg-gradient-primary rounded-2xl flex items-center justify-center shadow-glow"
            >
              <Sparkles className="w-8 h-8 text-primary-foreground" />
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs text-primary-foreground/50">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex justify-center pt-2"
          >
            <div className="w-1 h-2 bg-primary rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
