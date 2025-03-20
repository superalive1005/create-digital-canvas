
import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ProjectCard from '@/components/ui/ProjectCard';
import { motion } from 'framer-motion';

const projectsData = [
  {
    title: 'HIPAA-Compliant Patient Management System',
    description: 'A comprehensive healthcare solution that improves patient data security and accessibility across multiple departments. Built with Spring Boot microservices architecture, Docker, and Kubernetes.',
    imageSrc: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2940&auto=format&fit=crop',
    technologies: ['Spring Boot', 'Docker', 'Kubernetes', 'HIPAA Compliance']
  },
  {
    title: 'E-Commerce Platform',
    description: 'High-traffic e-commerce platform handling over 1 million transactions annually. Features include inventory management, payment processing, and order fulfillment systems.',
    imageSrc: 'https://images.unsplash.com/photo-1661956602944-249bcd04b63f?q=80&w=2940&auto=format&fit=crop',
    technologies: ['Spring MVC', 'Hibernate', 'React', 'MySQL']
  },
  {
    title: 'Healthcare Content Management System',
    description: 'A specialized CMS for healthcare providers to manage and publish content across various channels. Reduced administrative workload by 27% within 5 months of implementation.',
    imageSrc: 'https://images.unsplash.com/photo-1576089172869-4f5f6f315620?q=80&w=2874&auto=format&fit=crop',
    technologies: ['Java', 'React', 'GraphQL', 'MongoDB']
  },
  {
    title: 'Mobile Healthcare App',
    description: 'Cross-platform mobile application for patient engagement and appointment management. Reached 5,000+ active users within the first year of launch.',
    imageSrc: 'https://images.unsplash.com/photo-1550638462-79f9438659a9?q=80&w=2952&auto=format&fit=crop',
    technologies: ['Flutter', 'Firebase', 'RESTful APIs']
  },
  {
    title: 'Learning Management System',
    description: 'Contributed to the development of an LMS serving 50,000+ active users. Integrated features for course creation, user management, and progress tracking.',
    imageSrc: 'https://images.unsplash.com/photo-1504884790557-420404ff5e6e?q=80&w=2940&auto=format&fit=crop',
    technologies: ['Java EE', 'Microservices', 'GraphQL', 'MongoDB']
  },
  {
    title: 'Real-time Monitoring Dashboard',
    description: 'Implemented comprehensive monitoring for distributed systems using Datadog and Grafana, reducing incident resolution time from 1 hour to 35 minutes.',
    imageSrc: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2940&auto=format&fit=crop',
    technologies: ['Datadog', 'Grafana', 'Prometheus', 'Kubernetes']
  }
];

const Projects = () => {
  return (
    <>
      <Helmet>
        <title>Projects | Adrian Liu</title>
        <meta name="description" content="Explore Adrian Liu's portfolio of full-stack development projects across healthcare, e-commerce, and education sectors." />
      </Helmet>
      
      <div className="flex min-h-screen flex-col">
        <Navbar />
        
        <main className="flex-1 pt-24">
          <section className="py-20">
            <div className="container">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-16 text-center"
              >
                <h1 className="text-3xl md:text-4xl font-bold mb-4">Projects</h1>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  A selection of projects that showcase my technical expertise and problem-solving abilities 
                  across various domains and technologies.
                </p>
              </motion.div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projectsData.map((project, index) => (
                  <ProjectCard
                    key={index}
                    title={project.title}
                    description={project.description}
                    imageSrc={project.imageSrc}
                    technologies={project.technologies}
                  />
                ))}
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Projects;
