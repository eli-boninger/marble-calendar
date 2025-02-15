'use server'

import { Prisma } from "@prisma/client";
import { prisma } from '@/app/lib/prisma';
import dayjs from "dayjs";

const createDatabaseEvent = (title: string, start: string, end: string) => {
    return Prisma.validator<Prisma.EventCreateInput>()({
        title,
        start,
        end
    })
}

export async function createEvent(formData: FormData) {
    const rawFormData = {
        title: formData.get('title'),
        start: formData.get('start'),
        end: formData.get('end')
    }

    console.log(rawFormData);
    await prisma.event.create({
        data: createDatabaseEvent(rawFormData.title, dayjs(rawFormData.start).toISOString(), dayjs(rawFormData.end).toISOString())
    })
}