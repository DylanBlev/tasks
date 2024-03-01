import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): JSX.Element {
    const [holiday, setHoliday] = useState<holiday>("🎉");

    // New Years - Jan 1st - 🎉
    // St. Patricks Day - Mar 17th - 🍀
    // Independence Day - July 4th - 🎆
    // Halloween - Oct, 31st - 🎃
    // Christmas - Dec, 25th - 🎄

    type holiday = "🎉" | "🍀" | "🎆" | "🎃" | "🎄";

    const holidayDateTimeline: Record<holiday, holiday> = {
        "🎉": "🍀",
        "🍀": "🎆",
        "🎆": "🎃",
        "🎃": "🎄",
        "🎄": "🎉"
    };

    const holidayAlphabetically: Record<holiday, holiday> = {
        "🎄": "🎃",
        "🎃": "🎆",
        "🎆": "🎉",
        "🎉": "🍀",
        "🍀": "🎄"
    };

    function alphabetical(): void {
        const newHoliday = holidayAlphabetically[holiday];
        setHoliday(newHoliday);
    }

    function byDate(): void {
        const newHoliday = holidayDateTimeline[holiday];
        setHoliday(newHoliday);
    }

    return (
        <div>
            <span>Holiday: {holiday}</span>
            <Button onClick={alphabetical}>Next Holiday by Alphabet</Button>
            <Button onClick={byDate}>Next Holiday by Year</Button>
        </div>
    );
}
