import { ProfileSummary } from '@/components/profile-summary';
import { AboutMe } from '@/components/about-me';
import { Skills } from '@/components/skills';
import { Projects } from '@/components/projects';
import { Education } from '@/components/education';
import { Separator } from '@/components/ui/separator';
import { Header } from '@/components/header';
import { Contact } from '@/components/contact';

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <main className="flex-1 container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="max-w-4xl mx-auto space-y-12 sm:space-y-16">
          <ProfileSummary />
          <Separator />
          <AboutMe />
          <Separator />
          <Skills />
          <Separator />
          <Projects />
          <Separator />
          <Education />
          <Separator />
          <Contact />
        </div>
      </main>
      <footer className="py-6 text-center text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} Persona Portfolio. All rights reserved.</p>
      </footer>
    </div>
  );
}
