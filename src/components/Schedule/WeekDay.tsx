import React from 'react';

import 'primeflex/primeflex.css';
import { EventItem, WeekDayEvent } from './WeekDayEvent';
import { areDatesOnSameDay } from '../../utils/dateutils';


export type WeekDayProps = {
    date: Date,
    eventItems: EventItem[]
}

export const WeekDay = ({ date, eventItems}: WeekDayProps) => {
    const eventsForDate = eventItems.filter(e => areDatesOnSameDay(date, e.date));

    return (
        <div className="week-day">
            <div class="surface-overlay border-1 flex w-10rem h-10rem bg-primary border-round">
                <div class="flex flex-column w-full">
                    <div class="flex align-items-top justify-content-left bg-primary font-bold border-round m-2">{date.getDate()}</div>
                    {...eventsForDate.map(c => (<WeekDayEvent eventItem={c} />))}
                </div>
            </div>
        </div>
    );
}
