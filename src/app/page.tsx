import { AboutMe } from '@/components/about-me';
import { Projects } from '@/components/projects';
import { Separator } from '@/components/ui/separator';
import { Header } from '@/components/header';
import { Contact } from '@/components/contact';
import { LeftPane } from '@/components/left-pane';
import { Hero } from '@/components/hero';
import { Resume } from '@/components/resume';

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <main className="flex-1 container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <Hero />
        <div id="about" className="grid grid-cols-1 md:grid-cols-3 gap-16 mt-32">
          <div className="md:col-span-1">
            <LeftPane />
          </div>
          <div className="md:col-span-2">
            <AboutMe />
          </div>
        </div>
        <div className="max-w-6xl mx-auto space-y-12 sm:space-y-16 mt-16">
          <Separator />
          <Projects />
          <Separator />
          <Resume />
          <Separator />
          <Contact />
        </div>
      </main>
    </div>
  );
}
