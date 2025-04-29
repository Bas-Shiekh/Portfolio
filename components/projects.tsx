"use client";

import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import BlogPostImage from "@/public/blogpost.png";
import GeekSchool from "@/public/GeekSchool.png";
import GamsicIamge from "@/public/Gamsic.png";
import ClockImage from "@/public/Clock.png";
import CalculatorImage from "@/public/Calculator.png"

export function Projects() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: "Brain Vault",
      description:
        "AI-Powered Knowledge Base is a smart note-taking app that lets you create, organize, and share notes with AI-generated content and summaries.",
      image: BlogPostImage,
      tags: [
        "React",
        "NestJS",
        "MongoDB",
        "Node.js",
        "TypeScript",
        "Zustand",
        "TailwindCSS",
      ],
      liveUrl: "https://brain-vault-a3pqaapr6-basshiekhs-projects.vercel.app/",
      githubUrl: "https://github.com/Bas-Shiekh/BrainVault",
    },
    {
      title: "Blog Post",
      description:
        "A full-stack Blog Post platform built with React, Node.js, and MongoDB. Features include user authentication, and Posts & comments management.",
      image: BlogPostImage,
      tags: [
        "React",
        "Node.js",
        "PostgreSQL",
        "Express",
        "TypeScript",
        "Redux",
        "TailwindCSS",
      ],
      liveUrl: "https://blog-post-bice.vercel.app/",
      githubUrl: "https://github.com/Bas-Shiekh/BlogPost?tab=readme-ov-file",
    },
    {
      title: "GeekSchool Platform",
      description:
        "GeekSchool is a web platform that connects teachers, parents, and students to improve communication and make it easier to track academic progress. It allows teachers to share grades, assignments, and notes, while parents can monitor their children’s performance and contact teachers. Students can access their schedules, tasks, and classroom updates—all in one place.",
      image: GeekSchool,
      tags: [
        "React",
        "Express",
        "Node.js",
        "TypeScript",
        "PostgreSQL",
        "Socket.io",
      ],
      liveUrl: "https://geek-school.onrender.com/",
      githubUrl: "https://github.com/CA-G12/GeekSchool",
    },
    {
      title: "GAMSIC Platform",
      description:
        "GAMSIC is a web app that brings gaming news and music together.Users can explore game details and listen to their favorite tracks at the same time, all in one place.",
      image: GamsicIamge,
      tags: ["HTML", "CSS", "Javascript", "REST API"],
      liveUrl: "https://gsg-cf05.github.io/GAMSIC/",
      githubUrl: "https://github.com/GSG-CF05/GAMSIC",
    },
    {
      title: "Calculator Application",
      description:
        "This app is a basic calculator built to practice CSS and JavaScript. It allows users to perform summation, subtraction, multiplication, and division.",
      image: CalculatorImage,
      tags: ["HTML", "CSS", "Javascript"],
      liveUrl: "https://bas-shiekh.github.io/Calculator/",
      githubUrl: "https://github.com/Bas-Shiekh/Calculator",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">My Projects</h2>
          <div className="section-divider"></div>
          <p className="section-description">
            A selection of my recent work and personal projects.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full overflow-hidden hover:shadow-md transition-all group">
                <div className="relative overflow-hidden aspect-video">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={800}
                    height={600}
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <Button size="sm" asChild>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                    <Button size="sm" variant="outline" asChild>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" asChild>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-5 w-5 mr-2 text-primary" />
              View More on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
