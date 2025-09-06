import { Progress } from '@/components/ui/progress';
import { Section } from './section';

const skills = [
  { name: 'TypeScript', proficiency: 95 },
  { name: 'React & Next.js', proficiency: 90 },
  { name: 'Node.js & Express', proficiency: 85 },
  { name: 'Python & GenAI', proficiency: 80 },
  { name: 'Databases (SQL/NoSQL)', proficiency: 88 },
  { name: 'Cloud & DevOps', proficiency: 75 },
];

export function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
        {skills.map((skill) => (
          <div key={skill.name}>
            <div className="flex justify-between items-center mb-1">
              <p className="font-medium">{skill.name}</p>
              <p className="text-sm text-muted-foreground">{skill.proficiency}%</p>
            </div>
            <Progress value={skill.proficiency} className="h-2 [&>div]:bg-primary" aria-label={`${skill.name} proficiency`} />
          </div>
        ))}
      </div>
    </Section>
  );
}
