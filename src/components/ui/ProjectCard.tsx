
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  imageSrc: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  className?: string;
}

const ProjectCard = ({
  title,
  description,
  imageSrc,
  technologies,
  liveUrl,
  githubUrl,
  className
}: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={cn(
        'group relative overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-500',
        'hover:shadow-xl border border-border/50',
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="aspect-video w-full overflow-hidden">
        <img 
          src={imageSrc} 
          alt={title}
          className="h-full w-full object-cover transition-all duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </div>
      
      <div className="relative z-10 p-6">
        <div className="mb-2 flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span 
              key={index} 
              className="inline-block rounded-full bg-secondary px-3 py-1 text-xs font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <h3 className="mb-2 text-xl font-bold text-black">{title}</h3>
        
        <p className="text-muted-foreground line-clamp-3">{description}</p>
        
        <div className="mt-4 flex items-center gap-4">
          {liveUrl && (
            <a 
              href={liveUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
            >
              <span>View Project</span> <ExternalLink size={16} />
            </a>
          )}
          
          {githubUrl && (
            <a 
              href={githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
            >
              <span>GitHub</span> <Github size={16} />
            </a>
          )}
        </div>
        
        <div 
          className={cn(
            "mt-4 h-0.5 w-0 bg-primary transition-all duration-500",
            isHovered ? "w-full" : "w-0"
          )} 
        />
      </div>
    </motion.div>
  );
};

export default ProjectCard;
