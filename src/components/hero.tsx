import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section id="home" className="flex flex-col justify-center min-h-[calc(100vh-10rem)] py-12">
      <div className="max-w-4xl text-left">
        <p className="text-primary text-lg font-medium mb-2">HELLO!</p>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
          I'm <span className="text-primary">Harish</span>
          <br />
          Gouda
        </h1>
        <p className="mt-8 text-2xl text-foreground/80">Data Analyst</p>
        <div className="mt-8 flex gap-4">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-3 text-lg font-semibold">
            <a href="#projects">My Works</a>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 hover:text-primary rounded-full px-8 py-3 text-lg font-semibold">
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
