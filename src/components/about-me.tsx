import { Section } from '@/components/section';

const aboutMeText = "As an MCA student at Sir M Visvesvaraya Institute of Technology, I have developed a strong foundation in data analytics and computer science. My recent internships at Deloitte Australia, 360DigiTMG, and UptoSkills have given me hands-on experience in data cleaning, visualization, and business intelligence using tools like Python, Tableau, and Excel. I've contributed to projects such as optimizing machine downtime and building interactive dashboards to uncover actionable insights. I am highly motivated to enable data-driven decisions through collaboration and innovation, and I am actively seeking opportunities in data analytics to apply my technical skills and grow professionally. I am passionate about using data to drive meaningful results and am open to Data Analyst roles.";

const details = [
  { label: 'Profile', value: 'Data Analyst' },
  { label: 'Education', value: 'Master of Computer Applications (MCA)' },
  { label: 'Top Skills', value: 'Communication, Problem Solving, Python' },
  { label: 'Language', value: 'English' },
  { label: 'Interest', value: 'Data-driven decision making, Innovation' },
];

export function AboutMe() {
  return (
    <Section id="about-content" title="About Me">
      <p className="text-muted-foreground leading-relaxed">
        {aboutMeText}
      </p>
      <div className="mt-8 space-y-4">
        {details.map((detail) => (
          <div key={detail.label} className="flex">
            <p className="w-32 font-semibold text-foreground/80">{detail.label}:</p>
            <p className="text-muted-foreground">{detail.value}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
