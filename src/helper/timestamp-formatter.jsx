export function formatTimestamp(timestamp) {
    // Convert the timestamp to a Date object
    const date = new Date(timestamp);

    // Format the date using the toLocaleDateString and toLocaleTimeString methods
    const formattedDate = date.toLocaleDateString();
    const formattedTime = date.toLocaleTimeString();

    // Return the formatted date and time as a string
    return `${formattedDate} ${formattedTime}`;
}