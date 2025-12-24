import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import {
  Star,
  MapPin,
  Calendar,
  MessageSquare,
  ExternalLink,
  BadgeCheck,
  Github,
  Linkedin,
  Globe,
  Briefcase,
  Award,
  Clock,
} from "lucide-react";

const freelancerData = {
  name: "Sarah Chen",
  title: "Senior UI/UX Designer",
  tagline: "Creating intuitive digital experiences that users love",
  avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face",
  coverImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&h=300&fit=crop",
  location: "San Francisco, CA",
  memberSince: "January 2023",
  rating: 4.9,
  reviewCount: 127,
  completedJobs: 89,
  responseTime: "< 2 hours",
  verified: true,
  studentVerified: true,
  skills: ["Figma", "Adobe XD", "UI Design", "UX Research", "Prototyping", "Design Systems", "Mobile Design", "Web Design"],
  hourlyRate: "$75/hr",
  availability: "Available",
  bio: "I'm a passionate UI/UX designer with 5+ years of experience creating beautiful, functional digital products. I specialize in mobile app design, design systems, and user research. I believe great design solves real problems and delights users at every touchpoint.",
  socials: {
    website: "https://sarahchen.design",
    github: "https://github.com/sarahchen",
    linkedin: "https://linkedin.com/in/sarahchen",
  },
  portfolio: [
    {
      id: 1,
      title: "Fitness App Redesign",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
      category: "Mobile Design",
    },
    {
      id: 2,
      title: "E-commerce Dashboard",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      category: "Web Design",
    },
    {
      id: 3,
      title: "Banking App UI Kit",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop",
      category: "Design System",
    },
    {
      id: 4,
      title: "Travel Booking Platform",
      image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=600&h=400&fit=crop",
      category: "Web Design",
    },
  ],
  reviews: [
    {
      id: 1,
      client: "Marcus Johnson",
      clientAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      date: "2 weeks ago",
      content: "Sarah exceeded all expectations! Her designs were not only beautiful but incredibly thoughtful and user-focused. Highly recommend!",
      project: "Mobile App Design",
    },
    {
      id: 2,
      client: "Emily Rodriguez",
      clientAvatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      date: "1 month ago",
      content: "Working with Sarah was a breeze. She understood our vision immediately and delivered a stunning design system that our team loves.",
      project: "Design System",
    },
  ],
  badges: [
    { name: "Top Rated", icon: Award },
    { name: "Student Verified", icon: BadgeCheck },
    { name: "Fast Responder", icon: Clock },
  ],
};

const FreelancerProfile = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Cover Image */}
      <div className="relative h-48 md:h-64 bg-gradient-hero">
        <img
          src={freelancerData.coverImage}
          alt="Cover"
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
      </div>

      <div className="container mx-auto px-4">
        {/* Profile Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative -mt-20 mb-8"
        >
          <div className="bg-card rounded-2xl p-6 md:p-8 shadow-xl border border-border">
            <div className="flex flex-col md:flex-row gap-6">
              {/* Avatar */}
              <div className="relative mx-auto md:mx-0">
                <img
                  src={freelancerData.avatar}
                  alt={freelancerData.name}
                  className="w-32 h-32 rounded-2xl object-cover ring-4 ring-background shadow-lg"
                />
                {freelancerData.verified && (
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center shadow-glow">
                    <BadgeCheck className="w-5 h-5 text-primary-foreground" />
                  </div>
                )}
              </div>

              {/* Info */}
              <div className="flex-1 text-center md:text-left">
                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-2">
                  <h1 className="text-2xl md:text-3xl font-bold text-foreground">
                    {freelancerData.name}
                  </h1>
                  <div className="flex items-center gap-2 justify-center md:justify-start">
                    {freelancerData.badges.map((badge) => (
                      <span
                        key={badge.name}
                        className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium"
                      >
                        <badge.icon className="w-3 h-3" />
                        {badge.name}
                      </span>
                    ))}
                  </div>
                </div>

                <p className="text-lg text-primary font-medium mb-1">{freelancerData.title}</p>
                <p className="text-muted-foreground mb-4">{freelancerData.tagline}</p>

                {/* Meta */}
                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground justify-center md:justify-start mb-4">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {freelancerData.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    Member since {freelancerData.memberSince}
                  </span>
                  <span className="flex items-center gap-1 text-primary font-medium">
                    <Star className="w-4 h-4 fill-accent text-accent" />
                    {freelancerData.rating} ({freelancerData.reviewCount} reviews)
                  </span>
                </div>

                {/* Socials */}
                <div className="flex gap-2 justify-center md:justify-start">
                  <a
                    href={freelancerData.socials.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <Globe className="w-5 h-5" />
                  </a>
                  <a
                    href={freelancerData.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href={freelancerData.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col gap-3 items-center md:items-end">
                <div className="text-center md:text-right mb-2">
                  <div className="text-2xl font-bold text-foreground">{freelancerData.hourlyRate}</div>
                  <div className="text-sm text-primary font-medium">{freelancerData.availability}</div>
                </div>
                <Button variant="gradient" size="lg">
                  <MessageSquare className="w-5 h-5 mr-2" />
                  Message
                </Button>
                <Button variant="outline" size="lg">
                  <Briefcase className="w-5 h-5 mr-2" />
                  Invite to Job
                </Button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-8 pb-16">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* About */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-card rounded-2xl p-6 shadow-md border border-border"
            >
              <h2 className="text-xl font-bold text-foreground mb-4">About</h2>
              <p className="text-muted-foreground leading-relaxed">{freelancerData.bio}</p>
            </motion.section>

            {/* Portfolio */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-card rounded-2xl p-6 shadow-md border border-border"
            >
              <h2 className="text-xl font-bold text-foreground mb-6">Portfolio</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {freelancerData.portfolio.map((project) => (
                  <div
                    key={project.id}
                    className="group relative overflow-hidden rounded-xl cursor-pointer"
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                      <span className="text-xs text-primary-foreground/70 mb-1">
                        {project.category}
                      </span>
                      <h3 className="text-lg font-bold text-primary-foreground flex items-center gap-2">
                        {project.title}
                        <ExternalLink className="w-4 h-4" />
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Reviews */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-card rounded-2xl p-6 shadow-md border border-border"
            >
              <h2 className="text-xl font-bold text-foreground mb-6">Reviews</h2>
              <div className="space-y-6">
                {freelancerData.reviews.map((review) => (
                  <div key={review.id} className="border-b border-border pb-6 last:border-0 last:pb-0">
                    <div className="flex items-start gap-4">
                      <img
                        src={review.clientAvatar}
                        alt={review.client}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-semibold text-foreground">{review.client}</span>
                          <span className="text-sm text-muted-foreground">{review.date}</span>
                        </div>
                        <div className="flex items-center gap-2 mb-2">
                          <div className="flex gap-0.5">
                            {[...Array(review.rating)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 text-accent fill-accent" />
                            ))}
                          </div>
                          <span className="text-sm text-muted-foreground">• {review.project}</span>
                        </div>
                        <p className="text-muted-foreground">{review.content}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.section>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-6">
            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="bg-card rounded-2xl p-6 shadow-md border border-border"
            >
              <h3 className="font-bold text-foreground mb-4">Stats</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Jobs Completed</span>
                  <span className="font-bold text-foreground">{freelancerData.completedJobs}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Response Time</span>
                  <span className="font-bold text-primary">{freelancerData.responseTime}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Total Reviews</span>
                  <span className="font-bold text-foreground">{freelancerData.reviewCount}</span>
                </div>
              </div>
            </motion.div>

            {/* Skills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-card rounded-2xl p-6 shadow-md border border-border"
            >
              <h3 className="font-bold text-foreground mb-4">Skills</h3>
              <div className="flex flex-wrap gap-2">
                {freelancerData.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default FreelancerProfile;
