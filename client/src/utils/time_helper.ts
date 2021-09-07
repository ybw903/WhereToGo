export const datetimeTranseToString = (datetime: Date) => {
    const timezoneOffset = datetime.getTimezoneOffset() * 60000;
    const timezoneDate = new Date(datetime.getTime() - timezoneOffset);
    const str = timezoneDate.toISOString();
    return str.substring(0, str.length - 8);
}