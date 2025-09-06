import { Button } from '@/components/ui/button';
import { Section } from './section';
import { Education } from './education';

const resumeDescription =
  'Aspiring Data Analyst with a strong foundation in data science, statistical analysis, and Data Visualization. Experienced in Python, SQL, natural language processing, and tools like LangChain and Hugging Face. Passionate about developing AI solutions and leveraging LLMs to drive innovative business strategies.';

export function Resume() {
  return (
    <div className="relative py-16">
      <div
        className="absolute inset-x-0 top-0 flex items-center justify-center text-[20vw] font-bold text-gray-500/10 pointer-events-none -z-10 leading-none"
        aria-hidden="true"
      >
        Resume
      </div>
      <Section id="resume" title="Resume">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-muted-foreground mb-8">{resumeDescription}</p>
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-3 text-lg font-semibold"
          >
            <a href="/resume.pdf" download>
              Download Resume
            </a>
          </Button>
        </div>
      </Section>
      <div className="mt-24">
        <Education />
      </div>
    </div>
  );
}
