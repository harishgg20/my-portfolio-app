import { Button } from '@/components/ui/button';
import { Section } from './section';
import { Education } from './education';

const resumeDescription =
  'Data Analyst with hands-on experience in analyzing large datasets, developing data models, and applying statistical techniques to deliver actionable business insights. Skilled in SQL, Python, Excel, Power BI, and Tableau. Adept at creating impactful dashboards and reports and presenting complex findings clearly to stakeholders to drive business strategy.';

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
            <a href="https://drive.google.com/file/d/17Wxv76dkNP16SIWAnpUccKkI47mTBzNl/view?usp=sharing" target="_blank" rel="noopener noreferrer">
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
