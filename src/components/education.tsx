
import { Section } from './section';
import { Card, CardContent } from '@/components/ui/card';

const educationHistory = [
  {
    period: '2020-2023',
    degree: 'Bachelor of Science',
    institution: 'DR.A.V.BALIGA COLLEGE OF ARTS AND SCIENCE',
    details: 'Percentage: 73.6%',
  },
  {
    period: '2018-2020',
    degree: 'Higher Secondary School',
    institution: 'JAWAHAR NAVODAYA VIDYALAYA',
    details: 'Percentage: 86%',
  },
];

export function Education() {
  return (
    <div className="relative">
       <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent" />
      <Section id="education" title="Education">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {educationHistory.map((edu, index) => (
            <Card
              key={index}
              className="bg-card p-6 rounded-xl shadow-lg border-2 border-card hover:border-primary/50 transition-all duration-300"
            >
              <CardContent className="p-0">
                <p className="text-primary font-bold text-lg mb-2">{edu.period}</p>
                <h3 className="text-xl font-semibold text-foreground/90 mb-1">
                  {edu.degree}
                </h3>
                <h4 className="text-md font-medium text-muted-foreground mb-3">
                  {edu.institution}
                </h4>
                <p className="text-muted-foreground">{edu.details}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>
    </div>
  );
}
