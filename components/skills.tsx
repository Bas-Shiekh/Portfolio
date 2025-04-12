"use client";

import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import {
  Code,
  Database,
  Globe,
  Layers,
  Server,
  Smartphone,
  Terminal,
  Workflow,
} from "lucide-react";

export function Skills() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills = [
    {
      category: "Frontend Development",
      icon: <Code className="h-10 w-10 text-primary" />,
      items: [
        "React",
        "Next.js",
        "Vue.js (Familiar)",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
        "Redux",
        "Zustand",
        "ANTD",
      ],
    },
    {
      category: "Backend Development",
      icon: <Server className="h-10 w-10 text-primary" />,
      items: [
        "Node.js",
        "Express",
        "NestJS (Familiar)",
        "REST APIs",
        "GraphQL",
        "WebSockets",
      ],
    },
    {
      category: "Database",
      icon: <Database className="h-10 w-10 text-primary" />,
      items: ["MongoDB", "PostgreSQL", "MySQL", "ORM", "Sequelize", "Prisma", "Mongoose"],
    },
    {
      category: "DevOps & Tools",
      icon: <Terminal className="h-10 w-10 text-primary" />,
      items: ["Git", "Vercel", "Jest", "Cypress"],
    },
    {
      category: "UI/UX",
      icon: <Layers className="h-10 w-10 text-primary" />,
      items: ["Figma", "Responsive Design", "Accessibility", "Animation"],
    },
    {
      category: "Languages",
      icon: <Globe className="h-10 w-10 text-primary" />,
      items: ["JavaScript", "TypeScript", "PHP (Familiar)", "HTML", "CSS", "SQL"],
    },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">My Skills</h2>
          <div className="section-divider"></div>
          <p className="section-description">
            A comprehensive overview of my technical skills and areas of
            expertise.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-4 p-3 rounded-full bg-muted">
                      {skill.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-4">{skill.category}</h3>
                    <div className="flex flex-wrap justify-center gap-2">
                      {skill.items.map((item) => (
                        <span
                          key={item}
                          className="px-3 py-1 bg-muted rounded-full text-sm"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
