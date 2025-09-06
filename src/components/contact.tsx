import { Section } from './section';

export function Contact() {
  return (
    <Section id="contact" title="Contact">
      <div className="text-center">
        <p className="text-muted-foreground mb-4">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of an amazing team.
        </p>
        <a href="mailto:contact@persona.dev" className="text-primary hover:underline text-lg">
          contact@persona.dev
        </a>
      </div>
    </Section>
  );
}
