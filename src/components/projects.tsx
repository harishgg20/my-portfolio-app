
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Section } from './section';

const projects = [
  {
    title: 'Insurance Customer Analysis',
    description: 'This project presents an interactive Power BI dashboard for Prism Insurance Pvt. Ltd., designed to provide insights into customer demographics, policy performance, claims management, and overall insurance operations. The dashboard integrates multiple data sources to support data-driven decision-making for business stakeholders.',
    image: 'https://images.unsplash.com/photo-1724482606633-fa74fe4f5de1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHxpbnN1cmFuY2V8ZW58MHx8fHwxNzU3MTU4NTMxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    imageHint: 'insurance analysis chart',
    link: 'https://github.com/harishgg20/insurance-customer-analysis',
  },
  {
    title: 'Sales Performance Dashboard',
    description: "Developed an interactive Tableau dashboard using the Superstore Sales dataset to analyze sales, profit, and customer trends across regions and categories, enabling data-driven insights through visualization and drill-down analysis.",
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHxBbmFseXRpY3N8ZW58MHx8fHwxNzU3MTU4NjE0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    imageHint: 'tableau sales dashboard',
    link: 'https://github.com/harishgg20/tableau-sales-project',
  },
  {
    title: 'Automated AI Data Analyst',
    description: 'This project is an AI-powered data analysis workflow built with n8n. It integrates Google Gemini (PaLM) AI, Google Sheets, and QuickChart.io to automatically analyze datasets, generate visualizations, and send professional summaries via Gmail.',
    image: 'https://images.unsplash.com/photo-1582406592664-24b0c8705265?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMnx8QWklMjBBbmFseXRpY3N8ZW58MHx8fHwxNzU3MTU4NjY0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    imageHint: 'workflow automation',
    link: 'https://github.com/harishgg20/n8n-ai-data-analyst',
  },
  {
    title: 'Blinkit Data Insights',
    description: 'Conducted SQL-based analysis on Blinkit grocery sales data to clean and standardize datasets. Extracted key KPIs including sales, average value, and customer ratings. Delivered insights on product, outlet, and location performance to support data-driven decision-making.',
    image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw3fHxBbmFseXRpY3N8ZW58MHx8fHwxNzU3MTU4NjE0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    imageHint: 'data insights dashboard',
    link: 'https://github.com/harishgg20/blinkit-data-insights',
  },
  {
    title: 'Disease Prediction App',
    description: 'This project is a web application that uses various machine learning models to predict the likelihood of several diseases. The application is built with Streamlit and provides a user-friendly interface for users to input their health data and get a prediction.',
    image: 'https://picsum.photos/600/400?random=5',
    imageHint: 'health machine learning',
    link: 'https://github.com/harishgg20/disease-prediction-app',
  }
];

export function Projects() {
  return (
    <Section id="projects" title="Projects">
       <p className="text-center text-muted-foreground mb-12">
        Below are the sample Data Science projects on Data Analysis, Data Cleaning, dashboard Creation, and Machine Learning.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {projects.map((project) => (
          <div key={project.title}>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="block group">
              <Card className="flex flex-col overflow-hidden bg-transparent border-none shadow-none rounded-none h-full">
                <div className="relative h-48 w-full mb-4">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                    data-ai-hint={project.imageHint}
                  />
                </div>
                <CardHeader className="p-0 flex-grow">
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">{project.title}</CardTitle>
                  <CardDescription className="pt-2 text-muted-foreground">{project.description}</CardDescription>
                </CardHeader>
              </Card>
            </a>
          </div>
        ))}
      </div>
    </Section>
  );
}
