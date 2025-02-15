'use client';


import { createEvent } from "@/app/lib/actions";
import dayjs from "dayjs";
import { SlotInfo } from "react-big-calendar";

interface Props {
    slotInfo?: SlotInfo;
    onCancel: () => void;
}

export default function NewEventForm(props: Props) {
    const { slotInfo, onCancel } = props;
    return (<form action={createEvent} className="flex flex-col">
        <h1>Add new</h1>
        <label>Event title<input name='title' required /></label>
        <label>Start <input type='datetime-local' required name='start' defaultValue={dayjs(slotInfo?.start).format('YYYY-MM-DDThh:mm')} /></label>
        <label>End <input type='datetime-local' required name='end' defaultValue={dayjs(slotInfo?.end).format('YYYY-MM-DDThh:mm')} /></label>
        <button type='submit'>Create</button>
        <button onClick={onCancel}>Cancel</button>
    </form>)
}