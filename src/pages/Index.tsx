
import React from 'react';
import { Helmet } from 'react-helmet';
import HeroSection from '@/components/ui/HeroSection';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SkillPill from '@/components/ui/SkillPill';

// Experience data
const experienceData = [
  {
    company: 'KPH Healthcare Services',
    position: 'Senior Full Stack Engineer',
    period: '2022 - 2025',
    description: 'Led development of HIPAA-compliant systems and microservices architecture with Spring Boot and Kubernetes.'
  },
  {
    company: 'Colizey',
    position: 'Full Stack Developer',
    period: '2019 - 2022',
    description: 'Developed high-traffic e-commerce platform handling 1M+ transactions annually with optimized performance.'
  },
  {
    company: 'Docebo',
    position: 'Full-Stack Developer',
    period: '2017 - 2019',
    description: 'Built Learning Management System with Java EE microservices serving 50,000+ active users.'
  },
  {
    company: 'GECKO Governance',
    position: 'Junior Web Developer',
    period: '2014 - 2016',
    description: 'Developed REST APIs with Spring Framework and Vue.js frontend, enhancing user experience.'
  }
];

// Skills data
const skillsData = {
  languages: ['Java', 'Kotlin', 'TypeScript', 'Python', 'JavaScript'],
  frontend: ['React', 'Vue.js', 'Next.js', 'React Native', 'Flutter', 'TailwindCSS'],
  backend: ['Spring Boot', 'Spring MVC', 'Java EE', 'Hibernate', 'Express.js', 'Microservices']
};

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
          
          <section id="experience" className="py-24 bg-secondary/20">
            <div className="container">
              <div className="mb-16 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Work Experience</h2>
                <p className="text-muted-foreground max-w-xl mx-auto">
                  Over 10 years of industry experience building robust applications and leading development teams.
                </p>
              </div>
              
              <div className="max-w-5xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {experienceData.map((exp, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="glass-card p-6 rounded-2xl card-hover"
                    >
                      <h3 className="text-xl font-bold mb-2 text-foreground">{exp.company}</h3>
                      <div className="flex justify-between items-center mb-4">
                        <p className="text-primary font-medium">{exp.position}</p>
                        <p className="text-sm text-muted-foreground">{exp.period}</p>
                      </div>
                      <p className="mb-4 text-muted-foreground">{exp.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              <div className="mt-12 text-center">
                <Link to="/experience">
                  <Button className="rounded-full bg-primary/20 hover:bg-primary/30 text-primary border border-primary/30">
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
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Featured Projects</h2>
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
                  className="glass-card overflow-hidden rounded-2xl card-hover"
                >
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                    <div className="text-4xl font-bold text-primary">HIPAA</div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-foreground">Patient Management System</h3>
                    <p className="text-muted-foreground mb-4">
                      HIPAA-compliant system improving patient data security and accessibility across departments.
                    </p>
                    <Link to="/projects">
                      <Button variant="link" className="p-0 h-auto font-medium text-primary hover:text-primary/80">
                        <span>View project details</span>
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
                  className="glass-card overflow-hidden rounded-2xl card-hover"
                >
                  <div className="aspect-video bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center">
                    <div className="text-4xl font-bold text-accent">E-COM</div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-foreground">E-Commerce Platform</h3>
                    <p className="text-muted-foreground mb-4">
                      High-traffic platform handling 1M+ transactions annually with optimized performance.
                    </p>
                    <Link to="/projects">
                      <Button variant="link" className="p-0 h-auto font-medium text-primary hover:text-primary/80">
                        <span>View project details</span>
                        <ArrowRight size={16} className="ml-1" />
                      </Button>
                    </Link>
                  </div>
                </motion.div>
              </div>
              
              <div className="mt-12 text-center">
                <Link to="/projects">
                  <Button className="rounded-full bg-primary/20 hover:bg-primary/30 text-primary border border-primary/30">
                    Explore All Projects
                    <ArrowRight size={16} className="ml-1" />
                  </Button>
                </Link>
              </div>
            </div>
          </section>
          
          <section className="py-24 bg-secondary/20">
            <div className="container">
              <div className="mb-16 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Skills</h2>
                <p className="text-muted-foreground max-w-xl mx-auto">
                  Technical expertise gained through years of professional experience.
                </p>
              </div>
              
              <div className="mx-auto max-w-4xl">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="glass-card rounded-2xl p-6"
                  >
                    <h3 className="text-lg font-medium mb-4 text-foreground">Languages</h3>
                    <div className="flex flex-wrap gap-2">
                      {skillsData.languages.map((skill, index) => (
                        <SkillPill key={index} name={skill} index={index} />
                      ))}
                    </div>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="glass-card rounded-2xl p-6"
                  >
                    <h3 className="text-lg font-medium mb-4 text-foreground">Frontend</h3>
                    <div className="flex flex-wrap gap-2">
                      {skillsData.frontend.map((skill, index) => (
                        <SkillPill key={index} name={skill} index={index} />
                      ))}
                    </div>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="glass-card rounded-2xl p-6"
                  >
                    <h3 className="text-lg font-medium mb-4 text-foreground">Backend</h3>
                    <div className="flex flex-wrap gap-2">
                      {skillsData.backend.map((skill, index) => (
                        <SkillPill key={index} name={skill} index={index} />
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>
              
              <div className="mt-12 text-center">
                <Link to="/skills">
                  <Button className="rounded-full bg-primary/20 hover:bg-primary/30 text-primary border border-primary/30">
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
