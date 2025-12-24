import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "UI/UX Designer",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
    content: "As a recent graduate, SB Works gave me the visibility I needed. The StudentPass program helped me land my first 3 clients with zero commission!",
    rating: 5,
    badge: "Student Verified",
  },
  {
    id: 2,
    name: "Marcus Johnson",
    role: "Full Stack Developer",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    content: "The AI matching is incredible. I'm getting job recommendations that actually fit my skills and schedule. Best platform I've used.",
    rating: 5,
    badge: "Top Rated",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Startup Founder",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    content: "Finding talented developers was always hard until SB Works. The escrow system gives us confidence, and the quality of freelancers is outstanding.",
    rating: 5,
    badge: "Verified Client",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-secondary/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Loved by <span className="text-gradient-primary">Thousands</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See what our community of freelancers and clients have to say about their experience.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative bg-card rounded-2xl p-8 shadow-lg border border-border group hover:shadow-xl transition-all duration-300"
            >
              {/* Quote icon */}
              <div className="absolute -top-4 -left-4 w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center shadow-glow">
                <Quote className="w-5 h-5 text-primary-foreground" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-accent fill-accent" />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-primary/20"
                />
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>

              {/* Badge */}
              <div className="absolute top-6 right-6 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                {testimonial.badge}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
