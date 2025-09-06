import { Section } from './section';

const educationHistory = [
  {
    institution: 'University of Technology',
    degree: 'Master of Science in Artificial Intelligence',
    period: '2020 - 2022',
    details: 'Focused on machine learning, natural language processing, and computer vision. Thesis on generative models.'
  },
  {
    institution: 'State University',
    degree: 'Bachelor of Science in Computer Science',
    period: '2016 - 2020',
    details: 'Graduated with honors. Coursework in data structures, algorithms, and software engineering.'
  }
];

export function Education() {
  return (
    <Section id="education" title="Education">
      <div className="relative pl-6 before:absolute before:top-0 before:left-0 before:h-full before:w-0.5 before:bg-border">
        {educationHistory.map((edu, index) => (
          <div key={index} className="relative mb-8 pl-8 last:mb-0">
            <div className="absolute left-[-22px] top-1.5 h-4 w-4 rounded-full bg-primary" aria-hidden="true" />
            <p className="text-sm text-muted-foreground">{edu.period}</p>
            <h3 className="mt-1 text-lg font-semibold text-primary/90">{edu.institution}</h3>
            <h4 className="text-md font-medium">{edu.degree}</h4>
            <p className="mt-2 text-muted-foreground">{edu.details}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
