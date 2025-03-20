
import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ExperienceCard from '@/components/ui/ExperienceCard';
import { motion } from 'framer-motion';

const experienceData = [
  {
    company: 'KPH Healthcare Services',
    position: 'Senior Full Stack Engineer',
    period: 'Sep 2022 – Feb 2025',
    url: 'https://www.kphhealthcareservices.com',
    description: [
      'Led the development of a HIPAA-compliant Patient Management System, improving patient data security and accessibility across multiple departments within 6 months.',
      'Designed and deployed microservices architecture using Spring Boot, Docker, and Kubernetes, reducing deployment time by 40%.',
      'Integrated OpenAI API to enhance automated patient interactions, decreasing manual support efforts by 35 hours/month.',
      'Refactored and optimized backend services, leading to a 23% improvement in system performance and scalability by Q3 2024.',
      'Developed a CMS for managing healthcare content, reducing administrative workload by 27% within 5 months.',
      'Built and maintained cross-platform Flutter applications, reaching 5,000+ active users within the first year.',
      'Established CircleCI pipelines for automated testing and deployment, reducing release cycles by 2 weeks.',
      'Improved real-time monitoring with Datadog and Grafana, reducing incident resolution time from 1 hours to 35 minutes.',
      'Implemented event-driven architecture using Kafka, ensuring seamless communication between distributed services.'
    ]
  },
  {
    company: 'Colizey',
    position: 'Full Stack Developer',
    period: 'June 2019 – Aug 2022',
    url: 'https://www.cathayinnovation.com',
    description: [
      'Developed and maintained a high-traffic e-commerce platform, handling 1M+ transactions annually.',
      'Migrated the legacy backend to Spring MVC with Hibernate, reducing API response time by 45% within 4 months.',
      'Designed and deployed an API Gateway to centralize and secure backend communication, improving request efficiency by 30%.',
      'Introduced React Native to the mobile development stack, launching the first mobile app with 15k+ downloads by Dec 2020.',
      'Led the adoption of Material UI and Bulma to modernize the frontend, enhancing UX and increasing customer retention by 12%.',
      'Implemented Agile methodologies, improving sprint velocity and reducing feature rollout time by 2 weeks per cycle.',
      'Optimized database queries using MySQL and ORM, cutting down query execution time from 800ms to 250ms.'
    ]
  },
  {
    company: 'Docebo',
    position: 'Full-Stack Developer',
    period: 'Jan 2017 – May 2019',
    url: 'https://www.docebo.com',
    description: [
      'Contributed to the development of a Learning Management System (LMS) serving 50,000+ active users.',
      'Developed Java EE microservices for the platform, enabling seamless scalability and increasing uptime to 99.98%.',
      'Integrated RabbitMQ and other message brokers, enhancing asynchronous communication efficiency by 30% within a year.',
      'Designed and implemented GraphQL APIs, reducing over-fetching and under-fetching issues by 50%.',
      'Spearheaded the transition from SQL to MongoDB, optimizing performance for high-concurrency workloads.',
      'Strengthened security measures to meet PCI DSS compliance, ensuring data protection for payment processing.',
      'Automated testing using JUnit and CI/CD pipelines, reducing regression issues by 20% within 6 months.'
    ]
  },
  {
    company: 'GECKO Governance',
    position: 'Junior Web Developer',
    period: 'Oct 2014 – Dec 2016',
    url: 'https://www.geckogovernance.io',
    description: [
      'Built and maintained REST APIs using Spring Framework, improving data retrieval efficiency by 35%.',
      'Assisted in the development of a Vue + Vuex frontend, enhancing user experience and reducing load times by 1.2s on average.',
      'Developed TailwindCSS-based UI components, streamlining frontend development by 30% over 5 months.',
      'Enhanced search functionality with Elasticsearch, improving query performance for large datasets by 5x.',
      'Optimized PostgreSQL queries using JDBC, reducing load time from 3.5s to 900ms.',
      'Integrated JMS (Java Message Service) to enable efficient asynchronous processing, improving data handling by 40%.',
      'Contributed to Laravel-based microservices, improving backend maintainability and reducing downtime by 25% in the first year.'
    ]
  }
];

const Experience = () => {
  return (
    <>
      <Helmet>
        <title>Experience | Adrian Liu</title>
        <meta name="description" content="Professional experience of Adrian Liu, showcasing a decade of expertise in full-stack development across multiple industries." />
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
                <h1 className="text-3xl md:text-4xl font-bold mb-4">Professional Experience</h1>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Over 10 years of experience building scalable applications and leading development teams 
                  across healthcare, e-commerce, and education sectors.
                </p>
              </motion.div>
              
              <div className="max-w-4xl mx-auto">
                {experienceData.map((job, index) => (
                  <ExperienceCard
                    key={index}
                    company={job.company}
                    position={job.position}
                    period={job.period}
                    url={job.url}
                    description={job.description}
                    isLast={index === experienceData.length - 1}
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

export default Experience;
