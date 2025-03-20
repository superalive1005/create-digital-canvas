
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedTextProps {
  text: string;
  className?: string;
  once?: boolean;
  delay?: number;
  tag?: keyof JSX.IntrinsicElements;
}

const AnimatedText = ({
  text,
  className,
  once = true,
  delay = 0,
  tag: Tag = 'div',
}: AnimatedTextProps) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && (!once || !hasAnimated.current)) {
            hasAnimated.current = true;
            
            if (elementRef.current) {
              const spans = elementRef.current.querySelectorAll('span');
              
              spans.forEach((span, index) => {
                setTimeout(() => {
                  span.classList.add('opacity-100');
                  span.classList.remove('translate-y-5');
                }, delay + index * 30);
              });
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [delay, once]);

  return (
    <Tag
      ref={elementRef}
      className={cn('inline-block', className)}
    >
      {text.split('').map((char, index) => (
        <span
          key={index}
          className={cn(
            'inline-block opacity-0 translate-y-5 transition-all duration-300 ease-out',
            char === ' ' ? 'mr-1' : ''
          )}
        >
          {char}
        </span>
      ))}
    </Tag>
  );
};

export default AnimatedText;
