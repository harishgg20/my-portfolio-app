import { Section } from './section';
import { MapPin, Phone, Send, Download } from 'lucide-react';

const contactDetails = [
  {
    icon: <MapPin />,
    label: 'ADDRESS',
    value: 'Bangalore, India',
    href: 'https://www.google.com/maps/search/?api=1&query=Bangalore',
  },
  {
    icon: <Phone />,
    label: 'CONTACT NUMBER',
    value: '+91 9141074129',
  },
  {
    icon: <Send />,
    label: 'EMAIL ADDRESS',
    value: 'harishgouda52001@gmail.com',
    href: 'mailto:harishgouda52001@gmail.com',
  },
  {
    icon: <Download />,
    label: 'DOWNLOAD RESUME',
    value: 'Download',
    href: 'https://drive.google.com/file/d/17Wxv76dkNP16SIWAnpUccKkI47mTBzNl/view?usp=sharing',
  },
];

export function Contact() {
  return (
    <div className="relative py-16">
      <div
        className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex items-center justify-center text-[20vw] font-bold text-gray-500/10 pointer-events-none -z-10 leading-none"
        aria-hidden="true"
      >
        Contact
      </div>
      <Section id="contact" title="Contact Me">
        <p className="text-center text-muted-foreground mb-12">
          Below are the details to reach out to me!
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {contactDetails.map((detail) => (
            <div key={detail.label} className="flex flex-col items-center text-center">
              <a
                href={detail.href}
                target={detail.href ? '_blank' : undefined}
                rel={detail.href ? 'noopener noreferrer' : undefined}
                className="group"
              >
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/20 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    {detail.icon}
                  </div>
                </div>
              </a>
              <p className="text-sm font-semibold tracking-widest text-muted-foreground mb-2">{detail.label}</p>
              <a
                href={detail.href}
                target={detail.href ? '_blank' : undefined}
                rel={detail.href ? 'noopener noreferrer' : undefined}
                className="text-foreground/80 hover:text-primary transition-colors"
              >
                {detail.value}
              </a>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
