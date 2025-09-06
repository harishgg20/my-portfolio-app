
"use client";

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const navLinks = [
  { href: '#profile', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '/resume.pdf', label: 'Resume', isExternal: true },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

export function Header() {
  const [activeLink, setActiveLink] = useState('Home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks
        .filter(link => !link.isExternal)
        .map(link => document.querySelector(link.href));
      
      const scrollPosition = window.scrollY + 150;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i] as HTMLElement;
        if (section && section.offsetTop <= scrollPosition) {
          setActiveLink(navLinks.find(link => link.href === `#${section.id}`)?.label || 'Home');
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="text-2xl font-bold text-foreground">
            <a href="#profile">Ganapati Naik</a>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.isExternal ? '_blank' : undefined}
                rel={link.isExternal ? 'noopener noreferrer' : undefined}
                onClick={() => !link.isExternal && setActiveLink(link.label)}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  activeLink === link.label && !link.isExternal
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
