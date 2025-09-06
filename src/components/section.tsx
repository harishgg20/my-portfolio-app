import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

export function Section({
  id,
  title,
  children,
  className,
}: {
  id: string;
  title: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={cn('w-full', className)}>
      <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-primary mb-6 sm:mb-8 font-headline">
        {title}
      </h2>
      {children}
    </section>
  );
}
