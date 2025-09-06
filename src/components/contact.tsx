import { Section } from './section';
import { MapPin, Phone, Send, Download } from 'lucide-react';

const contactDetails = [
  {
    icon: <MapPin />,
    label: 'ADDRESS',
    value: 'Kumta, India',
  },
  {
    icon: <Phone />,
    label: 'CONTACT NUMBER',
    value: '+91 6360188430',
  },
  {
    icon: <Send />,
    label: 'EMAIL ADDRESS',
    value: 'harishgouda@gmail.com',
    href: 'mailto:harishgouda@gmail.com',
  },
  {
    icon: <Download />,
    label: 'DOWNLOAD RESUME',
    value: 'resumelink',
    href: '/resume.pdf',
    download: true,
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
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/20 text-primary">
                  {detail.icon}
                </div>
              </div>
              <p className="text-sm font-semibold tracking-widest text-muted-foreground mb-2">{detail.label}</p>
              <a
                href={detail.href}
                download={detail.download}
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
