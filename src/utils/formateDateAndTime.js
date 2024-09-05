export function formatDateTime(dateTimeStr) {
    const date = new Date(dateTimeStr);

    const options = {
        year: 'numeric',
        day: 'numeric',
        month: 'long',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
    };

    return date.toLocaleString('en-IN', options);
}
export function formatDateTimeAnother(dateTimeStr) {
    const date = new Date(dateTimeStr);

    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'short' });
    const year = date.getFullYear().toString().slice(-2);
    const hours = date.getHours();
    const minutes = date.getMinutes();

    // Determine AM or PM
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const hour12 = hours % 12 || 12; // Convert to 12-hour format
    const minutePadded = minutes.toString().padStart(2, '0'); // Ensure two digits for minutes

    // Add ordinal suffix to the day
    const dayWithSuffix = day + (day % 10 === 1 && day !== 11 ? 'st' :
        day % 10 === 2 && day !== 12 ? 'nd' :
            day % 10 === 3 && day !== 13 ? 'rd' : 'th');

    return `${dayWithSuffix} ${month}'${year} ${hour12}:${minutePadded} ${ampm}`;
}

