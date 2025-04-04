import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';

dayjs.extend(utc);
dayjs.extend(timezone);

/**
 * Formats a UTC time string to local readable format
 * @param utcTime - UTC time string (e.g. "2025-04-04 09:03:51 UTC")
 * @returns Formatted local time string (e.g. "Apr 4, 2025 2:03 PM")
 */
export const formatUTCToLocalTime = (utcTime: string): string => {
    if (!utcTime) return '';
    return dayjs(utcTime).local().format('MMM D, YYYY h:mm A');
};
