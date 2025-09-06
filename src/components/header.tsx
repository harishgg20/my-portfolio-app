
"use client";

import React, { useState, useEffect } from 'react';
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

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link => document.querySelector(link.href) as HTMLElement).filter(s => s);
      const scrollPosition = window.scrollY;

      // Check if we are at the bottom of the page
      if (window.innerHeight + scrollPosition >= document.body.offsetHeight - 2) {
        setActiveLink('Contact');
        return;
      }
      
      // Check if we are at the top of the page
      if (scrollPosition < 200) {
        setActiveLink('Home');
        return;
      }

      let currentSection = 'Home';
      for (const section of sections) {
        if (section.offsetTop <= scrollPosition + 150) {
          currentSection = navLinks.find(link => link.href === `#${section.id}`)?.label || currentSection;
        }
      }

      setActiveLink(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, label: string) => {
    e.preventDefault();
    setActiveLink(label);
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.open(href, '_blank', 'noopener noreferrer');
    }
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
