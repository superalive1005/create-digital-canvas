
import React from 'react';
import { Helmet } from 'react-helmet';
import HeroSection from '@/components/ui/HeroSection';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Adrian Liu | Full Stack Developer</title>
        <meta name="description" content="Portfolio of Adrian Liu, an experienced Full Stack Developer with expertise in building scalable, high-performance web and mobile applications." />
      </Helmet>
      
      <div className="flex min-h-screen flex-col">
        <Navbar />
        
        <main className="flex-1">
          <HeroSection />
          
          <section id="experience" className="py-24 bg-secondary/50">
            <div className="container">
              <div className="mb-16 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Work Experience</h2>
                <p className="text-muted-foreground max-w-xl mx-auto">
                  Over 10 years of industry experience building robust applications and leading development teams.
                </p>
              </div>
              
              <div className="max-w-3xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="glass-card p-6 rounded-2xl mb-8"
                >
                  <h3 className="text-xl font-bold mb-2">KPH Healthcare Services</h3>
                  <p className="text-muted-foreground mb-4">Senior Full Stack Engineer | 2022 - 2025</p>
                  <p className="mb-4">Led development of HIPAA-compliant systems and microservices architecture with Spring Boot and Kubernetes.</p>
                  <Link to="/experience">
                    <Button variant="link" className="p-0 h-auto font-medium text-primary hover:text-primary/80">
                      <span>See more experience</span>
                      <ArrowRight size={16} className="ml-1" />
                    </Button>
                  </Link>
                </motion.div>
              </div>
              
              <div className="mt-12 text-center">
                <Link to="/experience">
                  <Button className="rounded-full">
                    View Full Experience
                    <ArrowRight size={16} className="ml-1" />
                  </Button>
                </Link>
              </div>
            </div>
          </section>
          
          <section className="py-24">
            <div className="container">
              <div className="mb-16 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
                <p className="text-muted-foreground max-w-xl mx-auto">
                  A selection of projects that showcase my technical expertise and problem-solving abilities.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="glass-card overflow-hidden rounded-2xl"
                >
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/40 flex items-center justify-center">
                    <div className="text-4xl font-bold text-white">HIPAA</div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">Patient Management System</h3>
                    <p className="text-muted-foreground mb-4">
                      HIPAA-compliant system improving patient data security and accessibility across departments.
                    </p>
                    <Link to="/projects">
                      <Button variant="link" className="p-0 h-auto font-medium text-primary hover:text-primary/80">
                        <span>View more projects</span>
                        <ArrowRight size={16} className="ml-1" />
                      </Button>
                    </Link>
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="glass-card overflow-hidden rounded-2xl"
                >
                  <div className="aspect-video bg-gradient-to-br from-accent/20 to-accent/40 flex items-center justify-center">
                    <div className="text-4xl font-bold text-white">E-COM</div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">E-Commerce Platform</h3>
                    <p className="text-muted-foreground mb-4">
                      High-traffic platform handling 1M+ transactions annually with optimized performance.
                    </p>
                    <Link to="/projects">
                      <Button variant="link" className="p-0 h-auto font-medium text-primary hover:text-primary/80">
                        <span>View more projects</span>
                        <ArrowRight size={16} className="ml-1" />
                      </Button>
                    </Link>
                  </div>
                </motion.div>
              </div>
              
              <div className="mt-12 text-center">
                <Link to="/projects">
                  <Button className="rounded-full">
                    Explore All Projects
                    <ArrowRight size={16} className="ml-1" />
                  </Button>
                </Link>
              </div>
            </div>
          </section>
          
          <section className="py-24 bg-secondary/50">
            <div className="container">
              <div className="mb-16 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills</h2>
                <p className="text-muted-foreground max-w-xl mx-auto">
                  Technical expertise gained through years of professional experience.
                </p>
              </div>
              
              <div className="mx-auto max-w-4xl">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="glass-card rounded-2xl p-6 h-full"
                  >
                    <h3 className="text-lg font-medium mb-4">Languages</h3>
                    <div className="space-y-2">
                      <p className="text-sm text-muted-foreground">Java</p>
                      <p className="text-sm text-muted-foreground">Kotlin</p>
                      <p className="text-sm text-muted-foreground">TypeScript</p>
                    </div>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="glass-card rounded-2xl p-6 h-full"
                  >
                    <h3 className="text-lg font-medium mb-4">Frontend</h3>
                    <div className="space-y-2">
                      <p className="text-sm text-muted-foreground">React</p>
                      <p className="text-sm text-muted-foreground">Vue.js</p>
                      <p className="text-sm text-muted-foreground">React Native</p>
                    </div>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="glass-card rounded-2xl p-6 h-full"
                  >
                    <h3 className="text-lg font-medium mb-4">Backend</h3>
                    <div className="space-y-2">
                      <p className="text-sm text-muted-foreground">Spring Boot</p>
                      <p className="text-sm text-muted-foreground">Express.js</p>
                      <p className="text-sm text-muted-foreground">Microservices</p>
                    </div>
                  </motion.div>
                </div>
              </div>
              
              <div className="mt-12 text-center">
                <Link to="/skills">
                  <Button className="rounded-full">
                    View All Skills
                    <ArrowRight size={16} className="ml-1" />
                  </Button>
                </Link>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Index;
