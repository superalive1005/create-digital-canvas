
import React from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface SkillPillProps {
  name: string;
  className?: string;
  index?: number;
}

const SkillPill = ({ name, className, index = 0 }: SkillPillProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      viewport={{ once: true, margin: "-50px" }}
      className={cn(
        'skill-pill backdrop-blur-sm card-hover',
        'bg-secondary/80 border border-white/5 text-foreground/90',
        className
      )}
    >
      {name}
    </motion.div>
  );
};

export default SkillPill;
