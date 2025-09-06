
"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#resume', label: 'Resume' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

export function Header() {
  const [activeLink, setActiveLink] = useState('Home');
  const isScrolling = useRef(false);
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (isScrolling.current) {
        return;
      }

      const scrollPosition = window.scrollY + 150;
      let currentSectionId = '';

      for (const link of navLinks) {
        const section = document.querySelector(link.href) as HTMLElement;
        if (section) {
          if (section.offsetTop <= scrollPosition) {
            currentSectionId = section.id;
          }
        }
      }

      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 50) {
        currentSectionId = 'contact';
      }

      const newActiveLink = navLinks.find(link => link.href === `#${currentSectionId}`)?.label || 'Home';
      
      setActiveLink(newActiveLink);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, label: string) => {
    e.preventDefault();
    setActiveLink(label);
    isScrolling.current = true;

    if (scrollTimeout.current) {
      clearTimeout(scrollTimeout.current);
    }
    
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }

    scrollTimeout.current = setTimeout(() => {
      isScrolling.current = false;
    }, 1000); 
  };

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="text-2xl font-bold text-foreground">
            <a href="#home" onClick={(e) => handleNavClick(e, '#home', 'Home')}>Ganapati Naik</a>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href, link.label)}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  activeLink === link.label
                    ? 'text-primary border-b-2 border-primary'
                    : 'text-foreground/80'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="md:hidden">
            {/* Mobile menu button can be added here */}
          </div>
        </div>
      </div>
    </header>
  );
}
