
import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SkillPill from '@/components/ui/SkillPill';
import { motion } from 'framer-motion';

const skillsData = {
  'Programming Languages': ['Java', 'Kotlin', 'Python', 'TypeScript', 'JavaScript'],
  'Backend Technologies': ['Spring Boot', 'Spring MVC', 'Java EE', 'Hibernate', 'JPA', 'Express.js'],
  'Frontend Technologies': ['React', 'Vue.js', 'Next.js', 'React Native', 'Flutter', 'Bulma', 'Material UI', 'TailwindCSS'],
  'Cloud & DevOps': ['Docker', 'Kubernetes', 'AWS Lambda', 'CircleCI', 'Grafana', 'Datadog'],
  'Databases & Messaging': ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'RabbitMQ', 'Kafka', 'Elasticsearch'],
  'Testing & CI/CD': ['JUnit', 'Mockito', 'Cypress', 'CI/CD Pipelines'],
  'Other Tools & Concepts': ['HIPAA compliance', 'PCI DSS', 'Microservices', 'ORM', 'API Gateways', 'GraphQL']
};

const Skills = () => {
  return (
    <>
      <Helmet>
        <title>Skills | Adrian Liu</title>
        <meta name="description" content="Technical skills and expertise of Adrian Liu, covering programming languages, frameworks, and tools across full-stack development." />
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
                <h1 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h1>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  A comprehensive overview of my technical expertise gained through years of professional experience 
                  in full-stack development.
                </p>
              </motion.div>
              
              <div className="max-w-5xl mx-auto space-y-12">
                {Object.entries(skillsData).map(([category, skills], categoryIndex) => (
                  <motion.div
                    key={category}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                    viewport={{ once: true, margin: "-100px" }}
                  >
                    <h2 className="text-2xl font-bold mb-6">{category}</h2>
                    <div className="flex flex-wrap gap-3">
                      {skills.map((skill, skillIndex) => (
                        <SkillPill 
                          key={skill} 
                          name={skill} 
                          index={skillIndex}
                        />
                      ))}
                    </div>
                  </motion.div>
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

export default Skills;
