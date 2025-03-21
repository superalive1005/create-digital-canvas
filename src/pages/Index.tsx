
import React from 'react';
import { Helmet } from 'react-helmet';
import HeroSection from '@/components/ui/HeroSection';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { ArrowRight, Github, Mail, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SkillPill from '@/components/ui/SkillPill';
import ExperienceCard from '@/components/ui/ExperienceCard';
import ProjectCard from '@/components/ui/ProjectCard';

// About data
const aboutData = {
  bio: `I'm Adrian Liu, a seasoned Full Stack Developer with over 10 years of experience in building scalable web and mobile applications. With a focus on healthcare and e-commerce solutions, I've led development teams to create innovative software that solves real-world problems.`,
  details: [
    "Specialized in developing HIPAA-compliant healthcare applications",
    "Expert in microservices architecture with Spring Boot and Kubernetes",
    "Passionate about clean, maintainable code and intuitive user interfaces",
    "Experienced team leader with a focus on collaborative development",
  ],
  socialLinks: {
    github: "https://github.com/livebcdev0603",
    // linkedin: "https://linkedin.com/in/adrianliu",
    email: "adrian.liu@example.com"
  }
};

// Experience data
const experienceData = [
  {
    company: 'KPH Healthcare Services',
    position: 'Senior Full Stack Engineer',
    period: '2022 - 2025',
    description: [
      'Led development of HIPAA-compliant systems and microservices architecture with Spring Boot and Kubernetes.',
      'Optimized database performance using PostgreSQL, reducing query times by 40%.',
      'Implemented CI/CD pipelines with CircleCI, reducing deployment time by 60%.',
      'Mentored junior developers and conducted code reviews for team of 8 engineers.'
    ],
    url: 'https://kphhealthcareservices.com'
  },
  {
    company: 'Colizey',
    position: 'Full Stack Developer',
    period: '2019 - 2022',
    description: [
      'Developed high-traffic e-commerce platform handling 1M+ transactions annually with optimized performance.',
      'Built inventory management system with real-time updates using WebSockets.',
      'Implemented secure payment processing integration with Stripe and PayPal.',
      'Created mobile-responsive UI with React and Material UI, improving user engagement by 35%.'
    ],
    url: 'https://colizey.com'
  },
  {
    company: 'Docebo',
    position: 'Full-Stack Developer',
    period: '2017 - 2019',
    description: [
      'Built Learning Management System with Java EE microservices serving 50,000+ active users.',
      'Implemented real-time notification system using WebSockets and RabbitMQ.',
      'Developed course creation and management tools with drag-and-drop functionality.',
      'Optimized frontend performance with lazy loading, reducing initial load time by 30%.'
    ],
    url: 'https://docebo.com'
  },
  {
    company: 'GECKO Governance',
    position: 'Junior Web Developer',
    period: '2014 - 2016',
    description: [
      'Developed REST APIs with Spring Framework and Vue.js frontend, enhancing user experience.',
      'Implemented responsive data visualization dashboards using D3.js.',
      'Created automated testing suite with JUnit and Mockito, achieving 85% code coverage.',
      'Participated in Agile development process with daily standups and bi-weekly sprints.'
    ],
    url: 'https://geckogovernance.com'
  }
];

// Skills data
const skillsData = {
  languages: ['Java', 'Kotlin', 'TypeScript', 'Python', 'JavaScript'],
  frontend: ['React', 'Vue.js', 'Next.js', 'React Native', 'Flutter', 'TailwindCSS'],
  backend: ['Spring Boot', 'Spring MVC', 'Java EE', 'Hibernate', 'Express.js', 'Microservices'],
  cloud: ['Docker', 'Kubernetes', 'AWS Lambda', 'CircleCI', 'Grafana', 'Datadog'],
  databases: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch']
};

// Projects data
const projectsData = [
  {
    title: 'Apache Camel codebase',
    description: 'Apache Camel application working in a Spring Boot environment. Although it was tested only with Hibernate and H2, it should work with any JPA 2.1 implementation and any database supported by it.',
    imageSrc: '/img/1.jpg',
    technologies: ['Spring Boot', 'Hibernate ', 'H2', 'JPA2.1'],
    githubUrl: 'https://github.com/livebcdev0603/realworld-camel-springboot',
    liveUrl: ''
  },
  {
    title: 'Snakgame',
    description: '',
    imageSrc: '/img/2.jpg',
    technologies: ['Java'],
    githubUrl: 'https://github.com/livebcdev0603/snakegame',
    liveUrl: ''
  },
  {
    title: 'Sudoku Solving',
    description: 'A java application which user can play sudoku solving game.',
    imageSrc: '/img/3.jpg',
    technologies: ['Java'],
    githubUrl: 'https://github.com/livebcdev0603/sudokusolving',
    liveUrl: ''
  },
  {
    title: 'Spring boot microservices',
    description: 'A real time microservices supply monitoring project utilizing spring cloud technologies framework.',
    imageSrc: '/img/4.jpg',
    technologies: ['Docker', 'Zipkin', 'Kafka', 'RabbitMQ', 'MongoDB'],
    githubUrl: 'https://github.com/livebcdev0603/spring-boot-microservices',
    liveUrl: ''
  }
];

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
          {/* Hero Section */}
          <section id="home" className="relative flex min-h-screen w-full items-center justify-center overflow-hidden">
            <HeroSection />
          </section>
          
          {/* About Section */}
          <section id="about" className="py-24">
            <div className="container">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-16 text-center"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">About Me</h2>
                <div className="w-24 h-1 bg-primary mx-auto mb-8 rounded-full"></div>
                <p className="text-muted-foreground max-w-3xl mx-auto">
                  {aboutData.bio}
                </p>
              </motion.div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="col-span-1 md:col-span-2"
                >
                  <div className="space-y-6">
                    <ul className="space-y-4">
                      {aboutData.details.map((detail, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <span className="inline-block h-6 w-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-sm mt-0.5">✓</span>
                          <p className="text-muted-foreground">{detail}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="glass-card rounded-2xl p-6"
                >
                  <h3 className="text-xl font-bold mb-4">Connect with me</h3>
                  
                  <div className="space-y-4">
                    <a 
                      href={aboutData.socialLinks.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors p-2 rounded-lg hover:bg-primary/5"
                    >
                      <Github size={20} />
                      <span>GitHub</span>
                    </a>
                    
                    <a 
                      href={aboutData.socialLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors p-2 rounded-lg hover:bg-primary/5"
                    >
                      <Linkedin size={20} />
                      <span>LinkedIn</span>
                    </a>
                    
                    <a 
                      href={`mailto:${aboutData.socialLinks.email}`}
                      className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors p-2 rounded-lg hover:bg-primary/5"
                    >
                      <Mail size={20} />
                      <span>{aboutData.socialLinks.email}</span>
                    </a>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
          
          {/* Experience Section */}
          <section id="experience" className="py-24 bg-secondary/20">
            <div className="container">
              <div className="mb-16 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Work Experience</h2>
                <div className="w-24 h-1 bg-primary mx-auto mb-8 rounded-full"></div>
                <p className="text-muted-foreground max-w-xl mx-auto">
                  Over 10 years of industry experience building robust applications and leading development teams.
                </p>
              </div>
              
              <div className="max-w-5xl mx-auto">
                {experienceData.map((exp, index) => (
                  <ExperienceCard
                    key={index}
                    company={exp.company}
                    position={exp.position}
                    period={exp.period}
                    description={exp.description}
                    url={exp.url}
                    isLast={index === experienceData.length - 1}
                  />
                ))}
              </div>
            </div>
          </section>
          
          {/* Projects Section */}
          <section id="projects" className="py-24">
            <div className="container">
              <div className="mb-16 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Projects</h2>
                <div className="w-24 h-1 bg-primary mx-auto mb-8 rounded-full"></div>
                <p className="text-muted-foreground max-w-xl mx-auto">
                  A selection of projects that showcase my technical expertise and problem-solving abilities.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projectsData.map((project, index) => (
                  <ProjectCard
                    key={index}
                    title={project.title}
                    description={project.description}
                    imageSrc={project.imageSrc}
                    technologies={project.technologies}
                    liveUrl={project.liveUrl}
                    githubUrl={project.githubUrl}
                  />
                ))}
              </div>
            </div>
          </section>
          
          {/* Skills Section */}
          <section id="skills" className="py-24 bg-secondary/20">
            <div className="container">
              <div className="mb-16 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Skills</h2>
                <div className="w-24 h-1 bg-primary mx-auto mb-8 rounded-full"></div>
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
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="glass-card rounded-2xl p-6"
                  >
                    <h3 className="text-lg font-medium mb-4 text-foreground">Cloud & DevOps</h3>
                    <div className="flex flex-wrap gap-2">
                      {skillsData.cloud.map((skill, index) => (
                        <SkillPill key={index} name={skill} index={index} />
                      ))}
                    </div>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="glass-card rounded-2xl p-6"
                  >
                    <h3 className="text-lg font-medium mb-4 text-foreground">Databases</h3>
                    <div className="flex flex-wrap gap-2">
                      {skillsData.databases.map((skill, index) => (
                        <SkillPill key={index} name={skill} index={index} />
                      ))}
                    </div>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="glass-card rounded-2xl p-6 flex items-center justify-center"
                  >
                    <a 
                      href={aboutData.socialLinks.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center gap-3 text-foreground hover:text-primary transition-colors"
                    >
                      <Github size={40} />
                      <span className="text-lg font-medium">See more on GitHub</span>
                    </a>
                  </motion.div>
                </div>
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
