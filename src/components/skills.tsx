import { Progress } from '@/components/ui/progress';
import { Section } from './section';

const skills = [
  { name: 'SQL', proficiency: 90 },
  { name: 'PYTHON', proficiency: 90 },
  { name: 'Data Visualization', proficiency: 90 },
  { name: 'Statistical Analysis', proficiency: 85 },
  { name: 'MS Excel', proficiency: 90 },
  { name: 'Power BI', proficiency: 80 },
];

export function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="space-y-6">
        {skills.map((skill) => (
          <div key={skill.name}>
            <div className="flex justify-between items-center mb-1">
              <p className="font-medium text-sm">{skill.name}</p>
              <p className="text-sm text-muted-foreground">{skill.proficiency}%</p>
            </div>
            <Progress value={skill.proficiency} className="h-2 [&>div]:bg-primary" aria-label={`${skill.name} proficiency`} />
          </div>
        ))}
      </div>
    </Section>
  );
}
