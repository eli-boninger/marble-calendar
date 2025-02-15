import { prisma } from '@/app/lib/prisma';
import { Calendar } from '@/app/ui/calendar';

export default async function Home() {
  const events = await prisma.event.findMany();
  return (
    <div className="flex justify-center mt-16">
      <Calendar events={events} />
    </div>

  );
}
