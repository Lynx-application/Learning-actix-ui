export function formatterDate(date: Date): string {
    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    const day = daysOfWeek[date.getDay()]; // Get day of the week
    const month = months[date.getMonth()]; // Get month
    const dateNum = date.getDate(); // Get day of the month
    let hours = date.getHours(); // Get hours
    const minutes = date.getMinutes(); // Get minutes

    // Determine AM/PM suffix
    const ampm = hours >= 12 ? 'PM' : 'AM';
    
    // Convert to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'

    // Pad minutes with leading zero if needed
    const minutesStr = minutes < 10 ? '0' + minutes : minutes;

    // Construct final formatted string
    return `${day} ${month} ${dateNum} ${hours}:${minutesStr}${ampm}`;
}