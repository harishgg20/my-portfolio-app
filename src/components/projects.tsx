import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Section } from './section';
import { ArrowRight } from 'lucide-react';

const projects = [
  {
    title: 'AI-Powered Content Summarizer',
    description: 'A web application that uses a custom-trained model to summarize long articles and documents, providing quick insights.',
    image: 'https://picsum.photos/600/400?random=1',
    imageHint: 'abstract tech',
    liveUrl: '#',
  },
  {
    title: 'E-commerce Recommendation Engine',
    description: 'Developed a personalized product recommendation system for an e-commerce platform, increasing user engagement by 25%.',
    image: 'https://picsum.photos/600/400?random=2',
    imageHint: 'online shopping',
    liveUrl: '#',
  },
  {
    title: 'Interactive Data Visualization Dashboard',
    description: 'A dashboard for visualizing complex datasets using D3.js and React, featuring dynamic filters and real-time updates.',
    image: 'https://picsum.photos/600/400?random=3',
    imageHint: 'data chart',
    liveUrl: '#',
  },
    {
    title: 'Project Management Tool',
    description: 'A SaaS application for teams to manage tasks, track progress, and collaborate effectively on projects.',
    image: 'https://picsum.photos/600/400?random=4',
    imageHint: 'team collaboration',
    liveUrl: '#',
  }
];

export function Projects() {
  return (
    <Section id="projects" title="Projects">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <Card key={project.title} className="flex flex-col overflow-hidden group transform transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/20 bg-card">
            <div className="relative h-48 w-full">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                data-ai-hint={project.imageHint}
              />
            </div>
            <div className="flex flex-col flex-grow p-6">
              <CardHeader className="p-0">
                <CardTitle className="text-xl group-hover:text-primary transition-colors">{project.title}</CardTitle>
                <CardDescription className="pt-2">{project.description}</CardDescription>
              </CardHeader>
              <div className="flex-grow" />
              <CardFooter className="p-0 pt-4 mt-auto">
                <Button asChild variant="link" className="p-0 text-primary/80 hover:text-primary">
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    View Project <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardFooter>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
