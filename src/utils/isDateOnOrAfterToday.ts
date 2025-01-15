
export default function isDateOnOrAfterToday(dateToCompare: any): boolean {
    const today = new Date();
    const todayDateOnly = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    const compareDate = new Date(dateToCompare);
    const compareDateOnly = new Date(compareDate.getFullYear(), compareDate.getMonth(), compareDate.getDate()+1);
    const response = compareDateOnly >= todayDateOnly;
    return response;
}