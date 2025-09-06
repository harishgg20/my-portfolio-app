
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Section } from './section';

const projects = [
  {
    title: 'UPI Transaction Analysis',
    description: 'Extracted and transformed PhonePe Pulse\'s UPI transaction data using Python and Pandas. Stored the processed data in a MySQL database and developed an interactive dashboard with Streamlit and Plotly to visualize transaction trends, analyze top categories, and provide geospatial insights across different states and years.',
    image: 'https://picsum.photos/600/400?random=1',
    imageHint: 'data analysis dashboard',
  },
  {
    title: 'Blinkit PowerBI Dashboard',
    description: "Built an interactive Power BI dashboard to monitor Blinkit's key operational metrics such as Sales, Ratings, and Ordered items.",
    image: 'https://picsum.photos/600/400?random=2',
    imageHint: 'powerbi dashboard',
  },
  {
    title: 'Bank Loan Dashboard Using Excel',
    description: 'Developed two interactive Excel dashboards to analyze and generate actionable insights from bank loan data, enhancing decision-making processes.',
    image: 'https://picsum.photos/600/400?random=3',
    imageHint: 'excel dashboard',
  },
  {
    title: 'Customer Segmentation Using K-Means',
    description: 'Performed customer segmentation using credit card data in order to provide targeted recommendations such as saving plans, loans, and wealth management services for different customer groups.',
    image: 'https://picsum.photos/600/400?random=4',
    imageHint: 'customer segmentation',
  },
  {
    title: 'Walmart Data Case Study',
    description: 'Performed data cleaning, exploratory data analysis (EDA), and answered critical business questions for Walmart using Pandas, uncovering key retail insights and trends.',
    image: 'https://picsum.photos/600/400?random=5',
    imageHint: 'data study',
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
          <Card key={project.title} className="flex flex-col overflow-hidden bg-transparent border-none shadow-none rounded-none">
            <div className="relative h-48 w-full mb-4">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover rounded-lg"
                data-ai-hint={project.imageHint}
              />
            </div>
            <CardHeader className="p-0">
              <CardTitle className="text-xl">{project.title}</CardTitle>
              <CardDescription className="pt-2 text-muted-foreground">{project.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </Section>
  );
}
