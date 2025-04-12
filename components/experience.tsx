"use client";

import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, GraduationCap } from "lucide-react";

export function Experience() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const workExperience = [
    {
      position: "Mid Frontend Developer",
      company: "Tindo Inc.",
      period: "2023 - Present",
      description:
        "Contributed to front-end development using React and Next.js, focusing on building reusable components, optimizing performance, and implementing responsive designs to enhance user experience and development efficiency.",
      skills: ["React", "TypeScript", "Next.js", "Zustand", "Payload CMS"],
    },
    {
      position: "Full Stack Developer Internship",
      company: "Gaza sky geeks (GSG)",
      period: "2022 - 2023",
      description:
        "Developed and maintained web applications across various industries. Worked on both frontend and backend aspects of projects, from design to deployment.",
      skills: ["React", "Node.js", "Express", "MongoDB"],
    },
  ];

  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "Al-Azhar University",
      period: "2018 - 2023",
      description:
        "Focused on programming fundamentals, data structures, and algorithms. Participated in coding competitions and hackathons.",
    },
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Experience & Education</h2>
          <div className="section-divider"></div>
          <p className="section-description">
            My professional journey and educational background.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 rounded-full bg-muted">
                <Briefcase className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">Work Experience</h3>
            </div>

            <div className="relative border-l-2 border-muted pl-8 ml-4">
              {workExperience.map((job, index) => (
                <motion.div
                  key={job.position}
                  initial={{ opacity: 0, x: -50 }}
                  animate={
                    inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }
                  }
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="mb-12 relative"
                >
                  <div className="absolute -left-10 w-6 h-6 rounded-full bg-white border-4 border-primary" />
                  <Card className="hover:shadow-md transition-all">
                    <CardContent className="p-6">
                      <div className="flex flex-wrap justify-between items-start mb-2">
                        <h4 className="text-xl font-bold">{job.position}</h4>
                        <Badge variant="outline">{job.period}</Badge>
                      </div>
                      <div className="text-primary font-medium mb-4">
                        {job.company}
                      </div>
                      <p className="text-muted-foreground mb-4">
                        {job.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {job.skills.map((skill) => (
                          <Badge key={skill} variant="secondary">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 rounded-full bg-muted">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">Education</h3>
            </div>

            <div className="relative border-l-2 border-muted pl-8 ml-4">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, x: -50 }}
                  animate={
                    inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }
                  }
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="mb-12 relative"
                >
                  <div className="absolute -left-10 w-6 h-6 rounded-full bg-white border-4 border-primary" />
                  <Card className="hover:shadow-md transition-all">
                    <CardContent className="p-6">
                      <div className="flex flex-wrap justify-between items-start mb-2">
                        <h4 className="text-xl font-bold">{edu.degree}</h4>
                        <Badge variant="outline">{edu.period}</Badge>
                      </div>
                      <div className="text-primary font-medium mb-4">
                        {edu.institution}
                      </div>
                      <p className="text-muted-foreground">{edu.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Card className="hover:shadow-md transition-all">
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold mb-4">Certifications</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <Badge variant="outline">2020</Badge>
                      <span>React Developer Certification</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
