import Image from 'next/image';
import { Github, Linkedin, Mail, Download } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';

export function ProfileSummary() {
  return (
    <section id="profile" className="flex flex-col sm:flex-row items-center gap-8 text-center sm:text-left">
      <Avatar className="w-32 h-32 sm:w-40 sm:h-40 border-4 border-primary/80">
        <AvatarImage src="https://picsum.photos/200" alt="Persona" data-ai-hint="portrait" />
        <AvatarFallback>PP</AvatarFallback>
      </Avatar>
      <div>
        <h1 className="text-4xl sm:text-5xl font-bold font-headline text-primary">Persona</h1>
        <p className="mt-2 text-xl sm:text-2xl text-foreground/80">Full-Stack Developer & AI Enthusiast</p>
        <p className="mt-4 max-w-xl text-muted-foreground mx-auto sm:mx-0">
          A passionate developer creating modern, responsive, and user-friendly web applications.
        </p>
        <div className="mt-6 flex justify-center sm:justify-start items-center gap-4">
          <a href="#" aria-label="GitHub" className="text-primary/80 hover:text-primary transition-colors">
            <Github className="w-6 h-6" />
          </a>
          <a href="#" aria-label="LinkedIn" className="text-primary/80 hover:text-primary transition-colors">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="#" aria-label="Email" className="text-primary/80 hover:text-primary transition-colors">
            <Mail className="w-6 h-6" />
          </a>
        </div>
        <Button asChild className="mt-8 bg-accent hover:bg-accent/90 text-accent-foreground font-bold">
          <a href="/resume.pdf" download>
            <Download className="mr-2 h-4 w-4" />
            Download Resume
          </a>
        </Button>
      </div>
    </section>
  );
}
