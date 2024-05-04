import React from 'react';
import 'primeflex/primeflex.css';

export interface Colors {
    border: string,
    background: string,
}

export interface EventItem {
    label: string,
    colors?: Colors,
    date: Date,
    data?: any
}

export type WeekDayEventProps = {
    eventItem: EventItem
}

export const WeekDayEvent = (props: WeekDayEventProps) => {
    const eventItem = props.eventItem;
    const colors = eventItem.colors;
    const backgroundColor = colors?.background;
    const borderColor = colors?.border;

    return (
        <div class="flex align-items-center border-3 h-1rem mb-1" style={{ backgroundColor, borderColor }}>{eventItem.label}</div>
    )
}