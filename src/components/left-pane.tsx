import { ProfileSummary } from '@/components/profile-summary';
import { Skills } from '@/components/skills';
import { Separator } from '@/components/ui/separator';

export function LeftPane() {
  return (
    <div className="space-y-12">
      <ProfileSummary />
      <Separator />
      <Skills />
    </div>
  );
}
