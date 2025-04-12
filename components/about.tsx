"use client"

import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Github, Linkedin, Twitter } from "lucide-react"
import personalImage from "@/public/20230821_180534.jpg"

export function About() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="about" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">About Me</h2>
          <div className="section-divider"></div>
          <p className="section-description">
            Get to know more about me, my background, and what drives me as a
            developer.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-square overflow-hidden rounded-xl border-4 border-white shadow-md">
              <Image
                src={personalImage}
                alt="Basil"
                width={500}
                height={600}
                className="object-cover w-full h-full"
                priority
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-white p-3 rounded-lg shadow-md border border-muted">
              <div className="font-bold text-lg text-primary">3+ Years</div>
              <div className="text-muted-foreground text-sm">Experience</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold mb-4">
              Software Engineer & Web Developer
            </h3>
            <p className="text-muted-foreground mb-6">
              I'm a passionate software engineer with expertise in React and
              Node.js. With over 3 years of experience, I've worked on a variety
              of projects ranging from small business websites to complex
              enterprise applications.
            </p>
            <p className="text-muted-foreground mb-6">
              My approach to development focuses on creating clean, efficient,
              and maintainable code. I'm dedicated to continuous learning and
              staying up-to-date with the latest technologies and best practices
              in the field.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <Card>
                <CardContent className="p-4">
                  <div className="font-medium">Name:</div>
                  <div className="text-muted-foreground">Basil Alsheikh</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="font-medium">Email:</div>
                  <div className="text-muted-foreground">
                    basilelshakhe@gmail.com
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="font-medium">Location:</div>
                  <div className="text-muted-foreground">Gaza, Palestine</div>
                </CardContent>
              </Card>
              <Card className="border-green-300 border-[1px]">
                <CardContent className="p-4">
                  <div className="font-medium">Availability:</div>
                  <div className="text-muted-foreground">
                    Open to opportunities
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button asChild>
                <a href="#contact">Hire Me</a>
              </Button>
              <Button variant="outline" asChild>
                <a href="https://drive.google.com/uc?export=download&id=1AlcF0IDWSFL_kIkaWsZbV-VMyXaD8Mfs">
                  Download CV
                </a>
              </Button>
              <div className="flex items-center gap-2 ml-auto">
                <Button variant="ghost" size="icon" asChild>
                  <a
                    href="https://github.com/Bas-Shiekh"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-5 w-5 text-primary" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <a
                    href="https://www.linkedin.com/in/basel-alsheikh-a2b7a1230/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="h-5 w-5 text-primary" />
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

