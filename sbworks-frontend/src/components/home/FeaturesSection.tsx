import { motion } from "framer-motion";
import { Zap, Shield, GraduationCap, Brain, Users, Trophy, Sparkles, BadgeCheck } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Matching",
    description: "Smart algorithms connect you with jobs that match your skills, availability, and work style preferences.",
    color: "primary",
  },
  {
    icon: GraduationCap,
    title: "StudentPass™ Verified",
    description: "Students get exclusive perks: zero commission on first 3 jobs, free courses, and student-only gigs.",
    color: "accent",
  },
  {
    icon: Shield,
    title: "Secure Escrow Payments",
    description: "Your money is protected. Clients pay upfront, freelancers get paid when work is delivered.",
    color: "primary",
  },
  {
    icon: Zap,
    title: "Resume Parser",
    description: "Upload your resume and let AI build your profile automatically. Get started in seconds.",
    color: "accent",
  },
  {
    icon: Trophy,
    title: "Gamification & Badges",
    description: "Earn achievements, climb leaderboards, and showcase your growth with verified badges.",
    color: "primary",
  },
  {
    icon: Users,
    title: "SkillTrack™ Academy",
    description: "Learn new skills or teach what you know. Monetize your expertise with micro-courses.",
    color: "accent",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Why Choose SB Works</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Everything You Need to{" "}
            <span className="text-gradient-primary">Succeed</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From AI-powered job matching to secure payments, we've built the tools you need to thrive as a freelancer or find the perfect talent.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-card rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-border hover:border-primary/30"
            >
              {/* Icon */}
              <div
                className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 ${
                  feature.color === "primary"
                    ? "bg-gradient-primary shadow-glow"
                    : "bg-gradient-accent shadow-accent-glow"
                }`}
              >
                <feature.icon className="w-7 h-7 text-primary-foreground" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>

              {/* Hover effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-4 px-6 py-4 rounded-2xl bg-secondary/50 border border-border">
            <BadgeCheck className="w-6 h-6 text-primary" />
            <span className="text-foreground font-medium">
              Join <strong className="text-primary">50,000+</strong> freelancers already growing with SB Works
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
