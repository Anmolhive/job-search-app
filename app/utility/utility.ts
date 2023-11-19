export const convertDate = async (dateTimeString: any) => {
    const options: Intl.DateTimeFormatOptions = {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
    };
    const date = new Date(dateTimeString);
    const formattedDate = date.toLocaleDateString('en-US', options);
    return formattedDate;
}