
import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Code, Lightbulb } from 'lucide-react';

const About = () => {
  return (
    <>
      <Helmet>
        <title>About | Adrian Liu</title>
        <meta name="description" content="Learn more about Adrian Liu, a Full Stack Developer with 10+ years of experience in building scalable web applications." />
      </Helmet>
      
      <div className="flex min-h-screen flex-col">
        <Navbar />
        
        <main className="flex-1 pt-24">
          <section className="py-20 md:py-32">
            <div className="container">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="rounded-2xl overflow-hidden glass-card p-1.5">
                    <div className="aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-primary/20 to-primary/40 flex items-center justify-center">
                      <div className="text-7xl font-bold text-white">AL</div>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <h1 className="text-3xl md:text-4xl font-bold mb-6">About Me</h1>
                  
                  <div className="space-y-4 text-muted-foreground mb-8">
                    <p>
                      I'm Adrian Liu, a Full Stack Developer with over 10 years of experience building scalable, 
                      high-performance web and mobile applications. I specialize in Java frameworks, microservices 
                      architecture, cloud computing, and modern front-end technologies.
                    </p>
                    <p>
                      Throughout my career, I've led development teams, designed secure and compliant systems, 
                      optimized application performance, and integrated complex third-party APIs. I'm passionate 
                      about creating elegant solutions to challenging technical problems.
                    </p>
                    <p>
                      I hold a Bachelor's degree in Computer Science from the University of Edinburgh, where I 
                      developed a strong foundation in software engineering principles that continue to guide 
                      my professional work.
                    </p>
                  </div>
                  
                  <div className="flex flex-wrap gap-4">
                    <Link to="/experience">
                      <Button className="rounded-full">
                        View Experience
                        <ArrowRight size={16} className="ml-1" />
                      </Button>
                    </Link>
                    
                    <Link to="/skills">
                      <Button variant="outline" className="rounded-full">
                        See Skills
                        <ArrowRight size={16} className="ml-1" />
                      </Button>
                    </Link>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
          
          <section className="py-20 bg-secondary/50">
            <div className="container">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">What I Do</h2>
                <p className="text-muted-foreground max-w-xl mx-auto">
                  I combine technical expertise with creative problem-solving to deliver exceptional digital experiences.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="glass-card rounded-2xl p-8 text-center"
                >
                  <div className="mx-auto mb-6 h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center">
                    <Code size={24} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Full Stack Development</h3>
                  <p className="text-muted-foreground">
                    Building scalable applications with modern frontend frameworks and robust backend systems.
                  </p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="glass-card rounded-2xl p-8 text-center"
                >
                  <div className="mx-auto mb-6 h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center">
                    <Lightbulb size={24} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Architecture Design</h3>
                  <p className="text-muted-foreground">
                    Designing secure, compliant, and efficient system architectures for complex applications.
                  </p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="glass-card rounded-2xl p-8 text-center"
                >
                  <div className="mx-auto mb-6 h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center">
                    <BookOpen size={24} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Technical Leadership</h3>
                  <p className="text-muted-foreground">
                    Leading development teams and implementing best practices for efficient project delivery.
                  </p>
                </motion.div>
              </div>
            </div>
          </section>
          
          <section className="py-20">
            <div className="container">
              <div className="max-w-3xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">Education</h2>
                  <p className="text-muted-foreground max-w-xl mx-auto">
                    My academic background has provided me with a strong foundation in computer science.
                  </p>
                </div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="glass-card rounded-2xl p-8"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                    <h3 className="text-xl font-bold">University of Edinburgh</h3>
                    <div className="text-sm text-muted-foreground">2010 - 2014</div>
                  </div>
                  <div className="mb-6">
                    <p className="font-medium">Bachelor's degree in Computer Science</p>
                  </div>
                  <p className="text-muted-foreground">
                    Studied core computer science principles including algorithms, data structures, 
                    software engineering, and database systems. Developed a strong foundation in 
                    programming concepts and software development methodologies.
                  </p>
                </motion.div>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default About;
