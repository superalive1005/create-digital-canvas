
import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ProjectCard from '@/components/ui/ProjectCard';
import { motion } from 'framer-motion';

const projectsData = [
  {
    title: 'Apache Camel codebase',
    description: 'Apache Camel application working in a Spring Boot environment. Although it was tested only with Hibernate and H2, it should work with any JPA 2.1 implementation and any database supported by it.',
    imageSrc: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2940&auto=format&fit=crop',
    technologies: ['Spring Boot', 'Hibernate ', 'H2', 'JPA2.1'],
    github: 'https://github.com/livebcdev0603/realworld-camel-springboot',
    liveUrl: ''
  },
  {
    title: 'Snakgame',
    description: '',
    imageSrc: 'https://images.unsplash.com/photo-1661956602944-249bcd04b63f?q=80&w=2940&auto=format&fit=crop',
    technologies: ['Java'],
    github: 'https://github.com/livebcdev0603/snakegame',
    liveUrl: ''
  },
  {
    title: 'Sudoku Solving',
    description: 'A java application which user can play sudoku solving game.',
    imageSrc: 'https://images.unsplash.com/photo-1576089172869-4f5f6f315620?q=80&w=2874&auto=format&fit=crop',
    technologies: ['Java'],
    github: 'https://github.com/livebcdev0603/sudokusolving',
    liveUrl: ''
  },
  {
    title: 'Spring boot microservices',
    description: 'A real time microservices supply monitoring project utilizing spring cloud technologies framework.',
    imageSrc: 'https://images.unsplash.com/photo-1550638462-79f9438659a9?q=80&w=2952&auto=format&fit=crop',
    technologies: ['Docker', 'Zipkin', 'Kafka', 'RabbitMQ', 'MongoDB'],
    github: 'https://github.com/livebcdev0603/spring-boot-microservices',
    liveUrl: ''
  },
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
                    liveUrl={project.liveUrl}
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
