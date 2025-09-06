import Image from 'next/image';

export function ProfileSummary() {
  return (
    <section className="flex flex-col items-center text-center">
      <div className="relative h-40 w-40 rounded-full overflow-hidden border-4 border-primary/50 mb-4">
        <Image
          src="https://picsum.photos/200/200"
          alt="Harish Gouda"
          width={160}
          height={160}
          className="object-cover rounded-full"
          data-ai-hint="man portrait"
        />
      </div>
      <div className="space-y-2">
        <div>
          <span className="font-semibold">Name:</span>
          <span className="text-muted-foreground ml-2">Harish Gouda</span>
        </div>
        <div>
          <span className="font-semibold">Address:</span>
          <span className="text-muted-foreground ml-2">Bengaluru, India</span>
        </div>
      </div>
    </section>
  );
}
