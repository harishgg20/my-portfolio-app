import Image from 'next/image';
import { Button } from '@/components/ui/button';

export function MoreProjects() {
  return (
    <section className="relative h-96 w-full">
      <Image
        src="https://picsum.photos/1920/1080?grayscale"
        alt="Mountain landscape"
        fill
        className="object-cover"
        data-ai-hint="snowy mountains"
      />
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white p-4">
        <h2 className="text-3xl md:text-4xl font-bold">
          More projects on <span className="text-primary">Github</span>
        </h2>
        <p className="mt-4 text-lg text-white/80 max-w-2xl">
          I love to solve business problems & uncover hidden data stories
        </p>
        <Button asChild size="lg" className="mt-8 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-3 text-lg font-semibold">
          <a href="https://github.com/harishgg20" target="_blank" rel="noopener noreferrer">
            GITHUB
          </a>
        </Button>
      </div>
    </section>
  );
}
