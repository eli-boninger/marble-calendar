'use server'

import { prisma } from '@/app/lib/prisma';
import dayjs from "dayjs";
import { revalidateTag } from "next/cache";
import { z } from 'zod';

const EventFormSchema = z.object({
    title: z.string(),
    start: z.string(),
    end: z.string()
})

export async function createEvent(formData: FormData) {
    const { title, start, end } = EventFormSchema.parse({
        title: formData.get('title'),
        start: formData.get('start'),
        end: formData.get('end')
    })

    await prisma.event.create({
        data: {
            title: title,
            start: dayjs(start).toISOString(),
            end: dayjs(end).toISOString()
        }
    })
    revalidateTag('/')

}