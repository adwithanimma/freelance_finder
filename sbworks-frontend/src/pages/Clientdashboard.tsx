import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import { Button } from "@/components/ui/button";
import {
  Users,
  Briefcase,
  MessageSquare,
  TrendingUp,
  Plus,
  ChevronRight,
  Clock,
  Star,
  Eye,
  CheckCircle,
  BadgeCheck,
} from "lucide-react";

const stats = [
  { label: "Active Jobs", value: "4", icon: Briefcase, color: "primary" },
  { label: "Total Applicants", value: "87", icon: Users, color: "accent" },
  { label: "Messages", value: "12", icon: MessageSquare, color: "primary" },
  { label: "Hired This Month", value: "5", icon: TrendingUp, color: "accent" },
];

const activeJobs = [
  {
    id: 1,
    title: "Senior React Developer for E-commerce Platform",
    applicants: 23,
    shortlisted: 5,
    posted: "2 days ago",
    status: "active",
    deadline: "5 days left",
  },
  {
    id: 2,
    title: "UI/UX Designer for Mobile App Redesign",
    applicants: 18,
    shortlisted: 3,
    posted: "5 days ago",
    status: "active",
    deadline: "3 days left",
  },
  {
    id: 3,
    title: "Content Writer for Tech Blog",
    applicants: 45,
    shortlisted: 8,
    posted: "1 week ago",
    status: "interviewing",
    deadline: "Closed",
  },
];

const topApplicants = [
  {
    id: 1,
    name: "Sarah Chen",
    title: "Senior UI/UX Designer",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
    rating: 4.9,
    verified: true,
    matchScore: 98,
  },
  {
    id: 2,
    name: "Marcus Johnson",
    title: "Full Stack Developer",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    rating: 4.8,
    verified: true,
    matchScore: 95,
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    title: "React Developer",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    rating: 4.7,
    verified: false,
    matchScore: 92,
  },
];

const statusColors = {
  active: "bg-green-500/10 text-green-600",
  interviewing: "bg-primary/10 text-primary",
  closed: "bg-secondary text-secondary-foreground",
};

const ClientDashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="pt-24 pb-12">
        <div className="container mx-auto px-4">
          {/* Welcome Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gradient-hero rounded-2xl p-8 mb-8"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <h1 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-2">
                  Welcome back, TechVentures! 👋
                </h1>
                <p className="text-primary-foreground/70">
                  You have 12 new applicants and 4 messages waiting.
                </p>
              </div>
              <div className="flex gap-3">
                <Button variant="hero" asChild>
                  <Link to="/post-job">
                    <Plus className="w-5 h-5 mr-2" />
                    Post New Job
                  </Link>
                </Button>
                <Button variant="hero-outline">
                  <MessageSquare className="w-5 h-5 mr-2" />
                  Messages
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-2xl p-6 shadow-md border border-border"
              >
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      stat.color === "primary" ? "bg-gradient-primary" : "bg-gradient-accent"
                    }`}
                  >
                    <stat.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                </div>
                <div className="text-2xl font-bold text-foreground mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Active Jobs */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-card rounded-2xl p-6 shadow-md border border-border"
              >
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-foreground">Your Job Postings</h2>
                  <Link to="/dashboard/jobs" className="text-sm text-primary hover:underline flex items-center">
                    View All <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>

                <div className="space-y-4">
                  {activeJobs.map((job) => (
                    <div
                      key={job.id}
                      className="p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">{job.title}</h3>
                          <div className="flex items-center gap-3 text-sm text-muted-foreground">
                            <span>Posted {job.posted}</span>
                            <span>•</span>
                            <span className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              {job.deadline}
                            </span>
                          </div>
                        </div>
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium capitalize ${
                            statusColors[job.status as keyof typeof statusColors]
                          }`}
                        >
                          {job.status}
                        </span>
                      </div>

                      <div className="flex items-center gap-6">
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4 text-muted-foreground" />
                          <span className="text-sm text-foreground">{job.applicants} applicants</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-primary" />
                          <span className="text-sm text-primary">{job.shortlisted} shortlisted</span>
                        </div>
                        <Button variant="ghost" size="sm" className="ml-auto">
                          View Applicants
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.section>

              {/* Top Applicants */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-card rounded-2xl p-6 shadow-md border border-border"
              >
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-foreground">Top Applicants</h2>
                  <Link to="/dashboard/applicants" className="text-sm text-primary hover:underline flex items-center">
                    View All <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>

                <div className="space-y-4">
                  {topApplicants.map((applicant) => (
                    <div
                      key={applicant.id}
                      className="flex items-center justify-between p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <div className="relative">
                          <img
                            src={applicant.avatar}
                            alt={applicant.name}
                            className="w-12 h-12 rounded-full object-cover"
                          />
                          {applicant.verified && (
                            <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-primary rounded-full flex items-center justify-center">
                              <BadgeCheck className="w-3 h-3 text-primary-foreground" />
                            </div>
                          )}
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground">{applicant.name}</h3>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <span>{applicant.title}</span>
                            <span>•</span>
                            <span className="flex items-center gap-1">
                              <Star className="w-3.5 h-3.5 text-accent fill-accent" />
                              {applicant.rating}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-4">
                        <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                          {applicant.matchScore}% Match
                        </span>
                        <Button variant="outline" size="sm" asChild>
                          <Link to={`/freelancer/${applicant.id}`}>
                            <Eye className="w-4 h-4 mr-1" />
                            View
                          </Link>
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.section>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
                className="bg-card rounded-2xl p-6 shadow-md border border-border"
              >
                <h3 className="font-bold text-foreground mb-4">This Month</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Jobs Posted</span>
                    <span className="font-bold text-foreground">4</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Total Spent</span>
                    <span className="font-bold text-foreground">$12,500</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Avg. Time to Hire</span>
                    <span className="font-bold text-primary">5 days</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Avg. Rating Given</span>
                    <span className="font-bold text-accent flex items-center gap-1">
                      4.8 <Star className="w-4 h-4 fill-accent" />
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Quick Actions */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-card rounded-2xl p-6 shadow-md border border-border"
              >
                <h3 className="font-bold text-foreground mb-4">Quick Actions</h3>
                <div className="space-y-2">
                  <Button variant="gradient" className="w-full justify-start" asChild>
                    <Link to="/post-job">
                      <Plus className="w-4 h-4 mr-2" />
                      Post New Job
                    </Link>
                  </Button>
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <Link to="/browse-freelancers">
                      <Users className="w-4 h-4 mr-2" />
                      Browse Freelancers
                    </Link>
                  </Button>
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <Link to="/dashboard/contracts">
                      <Briefcase className="w-4 h-4 mr-2" />
                      Manage Contracts
                    </Link>
                  </Button>
                </div>
              </motion.div>

              {/* Hiring Tips */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
                className="bg-gradient-primary rounded-2xl p-6 text-primary-foreground"
              >
                <h3 className="font-bold mb-2">Pro Tip 💡</h3>
                <p className="text-sm text-primary-foreground/80 mb-4">
                  Respond to applicants within 24 hours to increase your chances of hiring top talent.
                </p>
                <Button variant="hero-outline" size="sm">
                  Learn More
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientDashboard;
