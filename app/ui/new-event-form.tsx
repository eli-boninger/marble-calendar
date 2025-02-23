'use client';

import { createEvent } from "@/app/lib/actions";
import Input from "@/app/ui/input";
import dayjs from "dayjs";
import { SlotInfo } from "react-big-calendar";

interface Props {
    slotInfo?: SlotInfo;
    onCancel: () => void;
}

export default function NewEventForm(props: Props) {
    const { slotInfo, onCancel } = props;

    return (<div role='dialog' aria-modal aria-labelledby="form-label" className="absolute m-auto left-0 right-0 z-10 top-10 bg-white border p-8 shadow-md max-w-md">
        <form action={createEvent} onSubmit={onCancel}>
            <h2 className="text-base/7 font-semibold text-gray-900" id="form-label">Add new event</h2>
            <Input label="Title"
                id="title"
                autoFocus
                name="title"
                type="text"
                required />
            <Input label="Start"
                id="start"
                name="start"
                type="datetime-local"
                defaultValue={dayjs(slotInfo?.start).format('YYYY-MM-DDThh:mm')}
                required />
            <Input label="End"
                id="end"
                name="end"
                type="datetime-local"
                defaultValue={dayjs(slotInfo?.end).format('YYYY-MM-DDThh:mm')}
                required />
            <div className="mt-6 mb-6 flex items-center justify-end gap-x-6">
                <button type="button" className="text-sm/6 font-semibold text-gray-900" onClick={onCancel}>
                    Cancel
                </button>
                <button
                    type="submit"
                    className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Create
                </button>
            </div>
        </form></div>);
}