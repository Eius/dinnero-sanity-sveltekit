import type { Time } from "$lib/types/Time";

function addTrailingZero(number: number): string
{
    return number.toString().padStart(2, "0");
}

export function formatTime (time: Time): string
{
    if (time == null) return "";
    const hour = addTrailingZero(time.hours);
    const minute = addTrailingZero(time.minutes);
    return `${hour}:${minute}`;
}