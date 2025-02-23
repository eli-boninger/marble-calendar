'use client';

import { Calendar as ReactBigCalendar, SlotInfo, dayjsLocalizer } from 'react-big-calendar';
import "react-big-calendar/lib/css/react-big-calendar.css";
import dayjs from 'dayjs';
import { Event } from '@prisma/client';
import { useState } from 'react';
import NewEventForm from '@/app/ui/new-event-form';
import { createPortal } from 'react-dom';


const localizer = dayjsLocalizer(dayjs);

export const Calendar = ({ events }: { events: Array<Event> }) => {
    const [selectedSlotInfo, setSelectedSlotInfo] = useState<SlotInfo>();
    const [formOpen, setFormOpen] = useState(false);

    const onSelectSlot = (slotInfo: SlotInfo) => {
        setSelectedSlotInfo(slotInfo);
        setFormOpen(true);
    };

    return (
        <div className='flex flex-col'>
            <div inert={formOpen}>
                <ReactBigCalendar
                    localizer={localizer}
                    events={events}
                    startAccessor="start"
                    endAccessor="end"
                    style={{ height: 500, maxWidth: 800 }}
                    onSelectSlot={onSelectSlot}
                    selectable
                />
            </div>

            {formOpen && createPortal(<NewEventForm slotInfo={selectedSlotInfo} onCancel={() => setFormOpen(false)} />, document.body)}
            {formOpen && createPortal(<div className="absolute inset-0 z-5 bg-gray-500 bg-blend-overlay opacity-80" />, document.body)}
        </div>);
};