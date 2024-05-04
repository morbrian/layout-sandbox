import React from 'react';
import 'primeflex/primeflex.css';
import { WeekDay } from './WeekDay';
import { EventItem } from './WeekDayEvent';
import { getDatePlusDays, getFirstDayOfWeek } from '../../utils/dateutils';

export type WeekProps = {
    weekNumber: number,
    year: number,
    eventItems: EventItem[]
}

const getWeekDays = (weekNumber: number, year: number, eventItems: EventItem[]) => {
    const weekStart = getFirstDayOfWeek(weekNumber, year);
    const days: React.ReactElement[] = [];
    for (let i = 0; i < 7; i++) {
        const date = getDatePlusDays(weekStart, i);
        days.push(<WeekDay date={date} eventItems={eventItems} />)
    }
    return days;
}

const getContent = (props: WeekProps) => {
    const weekDays = getWeekDays(props.weekNumber, props.year, props.eventItems);
    return (
        <div class="grid md:justify-content-between justify-content-left">
            {...weekDays}
        </div>
    )
}

export const Week = (props: WeekProps) => {
    return (
        <div>
            <div class="grid m-1 md:justify-content-between justify-content-left">
                {getContent(props)}
            </div>
        </div>
    )
}