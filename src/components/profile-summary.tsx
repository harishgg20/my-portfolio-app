import Image from 'next/image';
import { Github, Linkedin, Mail } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';

export function ProfileSummary() {
  return (
    <section id="profile" className="flex flex-col items-start gap-8 text-left pt-16">
      <div>
        <p className="text-primary font-bold">HELLO!</p>
        <h1 className="text-4xl sm:text-5xl font-bold font-headline text-foreground">I'm <span className="text-primary">Ganapati Naik</span></h1>
        <p className="mt-2 text-xl sm:text-2xl text-foreground/80">Data Analyst</p>
        
        <div className="mt-6 flex justify-start items-center gap-4">
          <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold rounded-full px-6">
            <a href="#projects">
              MY WORKS
            </a>
          </Button>
           <a href="#" aria-label="LinkedIn" className="text-primary/80 hover:text-primary transition-colors">
            <Button variant="outline" className="rounded-full px-6 bg-accent hover:bg-accent/90 text-accent-foreground font-bold">
              LINKEDIN
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
