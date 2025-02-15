'use client'

import { Calendar as ReactBigCalendar, dayjsLocalizer } from 'react-big-calendar'
import "react-big-calendar/lib/css/react-big-calendar.css"
import dayjs from 'dayjs'
import { Event, Prisma } from '@prisma/client'

const localizer = dayjsLocalizer(dayjs)

export const Calendar = ({ events }: { events: Array<Event> }) =>
(<ReactBigCalendar
    localizer={localizer}
    events={events}
    startAccessor="start"
    endAccessor="end"
    style={{ height: 500, maxWidth: 800 }}
/>)
