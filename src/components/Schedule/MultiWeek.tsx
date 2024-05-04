
import { Accordion, AccordionTab } from 'primereact/accordion';
import 'primeflex/primeflex.css';
import { useState } from 'react';
import { EventItem } from './WeekDayEvent';
import { Week } from './Week';
import { getWeekNumber } from '../../utils/dateutils';
import { Button } from 'primereact/button';

export type MultiWeekProps = {
    focusWeek: number,
    year: number,
    eventItems: EventItem[],
    pastWeekCount?: number,
    futureWeekCount?: number,
    collapsible?: boolean,
}

export const MultiWeek = (props: MultiWeekProps) => {
    const [activeIndex, setActiveIndex] = useState([props.pastWeekCount || 0])

    const getWeeks = (props: MultiWeekProps) => {
        const startWeek = props.focusWeek - (props.pastWeekCount || 1);
        const endWeek = props.focusWeek + (props.futureWeekCount || 0);
        const weeks: React.ReactElement[] = [];
    
        for (let i = startWeek; i < endWeek +1; i++) {
            const week = <Week weekNumber={i} year={props.year} eventItems={props.eventItems} />
            if (props.collapsible) {
                // const weekNumber = getWeekNumber();
                weeks.push((
                    <AccordionTab header={"hello"}>
                        {week}
                    </AccordionTab>
                ))
            } else {
                weeks.push(week)
            }
        }

        if (props.collapsible) {
            return (
                <Accordion activeIndex={activeIndex} multiple={true} >
                    {...weeks}
                </Accordion>
            )
        } else {
            return (
                <div>
                    {...weeks}
                </div>
            )
        }
    }

    const getContent = (props: MultiWeekProps) => {
        return getWeeks(props);
    }


    return (
        <div >
            {getContent(props)}
        </div>

    )
}