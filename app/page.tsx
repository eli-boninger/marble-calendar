import { Calendar } from "./ui/calendar";
import prisma from '@/prisma/client';

export default async function Home() {
  const events = await prisma.event.findMany();
  return (
    <Calendar events={events} />
  );
}
