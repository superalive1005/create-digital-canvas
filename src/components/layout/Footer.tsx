
import React from 'react';
import { Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container">
        <div className="mx-auto max-w-4xl">
          <div className="flex flex-col items-center justify-between gap-8 sm:flex-row">
            <div>
              <h2 className="text-xl font-bold">Adrian Liu</h2>
              <p className="mt-1 text-sm text-muted-foreground">Full Stack Developer</p>
            </div>
            
            <div className="flex flex-col items-end gap-2">
              <a 
                href="mailto:adrianliu0603@gmail.com" 
                className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <Mail size={16} />
                <span>adrianliu0603@gmail.com</span>
              </a>
              <a 
                href="tel:+13233916006" 
                className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <Phone size={16} />
                <span>+1 (323) 391-6006</span>
              </a>
            </div>
          </div>
          
          <div className="mt-8 border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} Adrian Liu. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
