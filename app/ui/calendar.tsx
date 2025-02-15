'use client'

import { Calendar as ReactBigCalendar, dayjsLocalizer } from 'react-big-calendar'
import "react-big-calendar/lib/css/react-big-calendar.css"
import dayjs from 'dayjs'

const localizer = dayjsLocalizer(dayjs)

export const Calendar = () => {
    const myEventsList = [
        {
            start: dayjs().toDate(),
            end: dayjs()
                .add(1, "days")
                .toDate(),
        }
    ]
    return <ReactBigCalendar
        localizer={localizer}
        events={myEventsList}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500, maxWidth: 800 }}
    />
}