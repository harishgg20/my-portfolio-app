import { Section } from '@/components/section';

const aboutMeText = "I am an aspiring Data Analyst/Business Analyst with a BSc from Dr. A.V. Baliga College of Arts & Science, where I consistently achieved high academic performance. I am proficient in Python, SQL, and MS Excel, with a strong background in data cleaning, analytics, statistical analysis, data visualization, machine learning, deep learning, and natural language processing. My technical skills include extensive use of Python libraries such as NumPy, Pandas, Matplotlib, Seaborn, Scikit-learn, and nltk, as well as tools like GIT and VS Code. I am also deeply passionate about artificial intelligence, particularly in the areas of Large Language Models (LLMs) and their applications. I have hands-on experience with LangChain and Hugging Face, and I am eager to contribute to AI-driven innovations. Beyond data science, I have a passion for cinema, video editing, and reading, and I am keen to leverage my expertise in data science, AI, and LLMs to drive innovative solutions.";

const details = [
  { label: 'Profile', value: 'Data Science & Artificial Intelligence' },
  { label: 'Education', value: 'Bachelor of Science' },
  { label: 'Language', value: 'English, Hindi, Kannada' },
  { label: 'Other Skills', value: 'Power BI, MS-Excel, Git, VS Code & Power BI' },
  { label: 'Interest', value: 'Traveling, Cinema, Reading' },
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
