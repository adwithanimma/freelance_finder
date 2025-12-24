import { motion } from "framer-motion";
import { UserPlus, Search, MessageSquare, CheckCircle, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    title: "Create Your Profile",
    description: "Sign up and build your professional profile. Upload your portfolio, add skills, and get verified.",
    color: "primary",
  },
  {
    icon: Search,
    title: "Find Perfect Matches",
    description: "Browse AI-recommended jobs or search for specific opportunities. Clients can discover you too!",
    color: "accent",
  },
  {
    icon: MessageSquare,
    title: "Connect & Collaborate",
    description: "Chat with clients, discuss project details, and agree on terms. All communication in one place.",
    color: "primary",
  },
  {
    icon: CheckCircle,
    title: "Complete & Get Paid",
    description: "Deliver your work, get reviewed, and receive secure payments. Build your reputation with each project.",
    color: "accent",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="py-24 bg-background relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            How It <span className="text-gradient-primary">Works</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get started in minutes and find your next opportunity or perfect freelancer.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative text-center"
              >
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-[60%] w-full h-0.5 bg-gradient-to-r from-border to-transparent">
                    <ArrowRight className="absolute -right-2 -top-2 w-4 h-4 text-primary" />
                  </div>
                )}

                {/* Step number */}
                <div className="relative inline-block mb-6">
                  <div
                    className={`w-20 h-20 rounded-2xl flex items-center justify-center mx-auto ${
                      step.color === "primary"
                        ? "bg-gradient-primary shadow-glow"
                        : "bg-gradient-accent shadow-accent-glow"
                    }`}
                  >
                    <step.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-foreground text-background flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                </div>

                <h3 className="text-lg font-bold text-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
