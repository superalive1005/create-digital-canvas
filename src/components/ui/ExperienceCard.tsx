
import React from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { CalendarIcon, ExternalLink } from 'lucide-react';

interface ExperienceCardProps {
  company: string;
  position: string;
  period: string;
  description: string[];
  url?: string;
  className?: string;
  isLast?: boolean;
}

const ExperienceCard = ({
  company,
  position,
  period,
  description,
  url,
  className,
  isLast = false
}: ExperienceCardProps) => {
  return (
    <div className={cn('relative pb-12', !isLast && 'before:absolute before:left-[19.5px] before:top-10 before:h-full before:w-0.5 before:bg-border', className)}>
      <div className="relative">
        <div className="absolute left-0 top-1 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
          <div className="h-3 w-3 rounded-full bg-primary" />
        </div>
        
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="ml-16 glass-card rounded-2xl p-6 transition-all duration-300 hover:shadow-lg"
        >
          <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
            <h3 className="text-xl font-bold tracking-tight">{position}</h3>
            <div className="flex items-center gap-3">
              <span className="text-sm flex items-center gap-1 text-muted-foreground">
                <CalendarIcon size={14} />
                {period}
              </span>
            </div>
          </div>
          
          <div className="mb-4 flex items-center gap-2">
            <h4 className="text-base font-medium">{company}</h4>
            {url && (
              <a 
                href={url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 transition-colors"
              >
                <ExternalLink size={16} />
              </a>
            )}
          </div>
          
          <ul className="space-y-2">
            {description.map((item, index) => (
              <li key={index} className="text-muted-foreground text-sm flex gap-2">
                <span className="text-primary">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default ExperienceCard;
