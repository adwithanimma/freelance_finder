import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import API from "@/lib/axios";

const PostJob = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [budget, setBudget] = useState("");
  const navigate = useNavigate();

  const handlePostJob = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await API.post("/jobs", {
        title,
        description,
        budget,
      });

      navigate("/jobs");
    } catch (error: any) {
      alert(error.response?.data?.message || "Failed to post job");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-4 pt-28 pb-16 max-w-xl">
        <h1 className="text-2xl font-bold mb-6">Post a Job</h1>

        <form className="space-y-4" onSubmit={handlePostJob}>
          <Input
            placeholder="Job Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <Input
            placeholder="Job Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <Input
            placeholder="Budget"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
          />

          <Button variant="gradient" type="submit" className="w-full">
            Post Job
          </Button>
        </form>
      </div>

      <Footer />
    </div>
  );
};

export default PostJob;