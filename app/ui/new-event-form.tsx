'use client';


import { Event } from "@prisma/client";
import dayjs from "dayjs";
import { SlotInfo } from "react-big-calendar";

interface Props {
    open: boolean;
    slotInfo?: SlotInfo;
    addNewEvent: (event: Omit<Event, 'id' | 'createdAt' | 'updatedAt'>) => void;
    onCancel: () => void;
}

export default function NewEventForm(props: Props) {
    const { slotInfo, addNewEvent, open, onCancel } = props;
    console.log(slotInfo?.start.toLocaleDateString())
    return <>
        <h1>Add new</h1>
        <label>Event title<input /></label>
        <label>Start <input type='datetime-local' defaultValue={dayjs(slotInfo?.start).format('YYYY-MM-DDThh:mm')} /></label>
        <label>End <input type='datetime-local' defaultValue={dayjs(slotInfo?.end).format('YYYY-MM-DDThh:mm')} /></label>
        <button onClick={addNewEvent}>Create</button>
        <button onClick={onCancel}>Cancel</button>
    </>
}