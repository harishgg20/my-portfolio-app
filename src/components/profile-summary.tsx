import Image from 'next/image';
import { Github, Linkedin, Mail } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';

export function ProfileSummary() {
  return (
    <section id="profile" className="flex flex-col sm:flex-row items-center gap-8 text-center sm:text-left pt-16">
      <Avatar className="w-32 h-32 sm:w-40 sm:h-40 border-4 border-primary/80">
        <AvatarImage src="https://picsum.photos/200" alt="Persona" data-ai-hint="portrait" />
        <AvatarFallback>PP</AvatarFallback>
      </Avatar>
      <div>
        <p className="text-primary font-bold">HELLO!</p>
        <h1 className="text-4xl sm:text-5xl font-bold font-headline text-foreground">I'm <span className="text-primary">Persona</span></h1>
        <p className="mt-2 text-xl sm:text-2xl text-foreground/80">Full-Stack Developer & AI Enthusiast</p>
        
        <div className="mt-6 flex justify-center sm:justify-start items-center gap-4">
          <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold rounded-full px-6">
            <a href="#projects">
              My Works
            </a>
          </Button>
           <a href="#" aria-label="LinkedIn" className="text-primary/80 hover:text-primary transition-colors">
            <Button variant="outline" className="rounded-full px-6">
              <Linkedin className="w-5 h-5 mr-2" /> LinkedIn
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
