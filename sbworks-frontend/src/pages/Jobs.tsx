import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import API from "@/lib/axios";
import {
  Search,
  Filter,
  MapPin,
  Clock,
  DollarSign,
  Star,
  Bookmark,
  ChevronDown,
  Briefcase,
  BadgeCheck,
} from "lucide-react";

const jobCategories = [
  "All Categories",
  "Web Development",
  "Mobile Development",
  "UI/UX Design",
  "Graphic Design",
  "Content Writing",
  "Digital Marketing",
  "Video Editing",
  "Data Science",
];

const Jobs = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [savedJobs, setSavedJobs] = useState<string[]>([]);
  const [jobs, setJobs] = useState<any[]>([]);

  useEffect(() => {
    API.get("/jobs")
      .then((res) => setJobs(res.data))
      .catch(() => {
        localStorage.removeItem("token");
        window.location.href = "/login";
      });
  }, []);

  const toggleSaveJob = (jobId: string) => {
    setSavedJobs((prev) =>
      prev.includes(jobId) ? prev.filter((id) => id !== jobId) : [...prev, jobId]
    );
  };

  // ✅ NEW: Apply job handler
  const handleApply = async (jobId: string) => {
    try {
      await API.post(`/jobs/${jobId}/apply`);
      alert("Applied successfully");
    } catch (error: any) {
      alert(error.response?.data?.message || "Failed to apply");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
              Find Your <span className="text-gradient-primary">Perfect</span> Project
            </h1>
            <p className="text-lg text-primary-foreground/70 mb-8">
              Browse thousands of jobs tailored to your skills and experience
            </p>

            <div className="flex flex-col md:flex-row gap-4 bg-card/90 backdrop-blur-sm p-4 rounded-2xl shadow-xl">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  placeholder="Search jobs, skills, or keywords..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 h-12 bg-background border-border"
                />
              </div>
              <Button variant="gradient" size="lg" className="h-12">
                <Search className="w-5 h-5 mr-2" />
                Search Jobs
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar */}
            <motion.aside
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:w-72"
            >
              <div className="bg-card rounded-2xl p-6 shadow-md border border-border sticky top-24">
                <h3 className="font-bold mb-4">Filters</h3>

                {jobCategories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-sm mb-1 ${
                      selectedCategory === category
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:bg-secondary"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </motion.aside>

            {/* Jobs */}
            <div className="flex-1">
              <p className="mb-6 text-muted-foreground">
                <span className="font-semibold text-foreground">
                  {jobs.length}
                </span>{" "}
                jobs found
              </p>

              <div className="space-y-4">
                {jobs.map((job, index) => (
                  <motion.div
                    key={job._id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="bg-card rounded-2xl p-6 shadow-md border border-border"
                  >
                    <Link
                      to={`/jobs/${job._id}`}
                      className="text-xl font-bold hover:text-primary"
                    >
                      {job.title}
                    </Link>

                    <p className="text-muted-foreground mt-1">
                      {job.description}
                    </p>

                    <div className="flex items-center gap-4 mt-3 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <DollarSign className="w-4 h-4" />
                        {job.budget}
                      </span>
                    </div>

                    <div className="flex gap-2 mt-4">
                      {/* ✅ UPDATED APPLY BUTTON */}
                      <Button
                        variant="gradient"
                        onClick={() => handleApply(job._id)}
                      >
                        Apply
                      </Button>

                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => toggleSaveJob(job._id)}
                      >
                        <Bookmark className="w-5 h-5" />
                      </Button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Jobs;