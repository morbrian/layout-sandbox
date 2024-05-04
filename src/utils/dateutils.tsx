
const oneDayInMilliseconds = 24 * 60 * 60 * 1000;

export const getFirstDayOfWeek = (weekNumber: number, year: number): Date => {
    const date = new Date(year, 0, 1 + (weekNumber - 1) * 7);
    date.setDate(date.getDate() + (1 - date.getDay())); // Adjust to the start of the week (e.g., Monday)
    return date;
}

export const getDatePlusDays = (date: Date, days: number): Date => {
    return new Date(date.getTime() + oneDayInMilliseconds * days);
}

export const areDatesOnSameDay = (date1: Date, date2: Date): boolean => {
    return (
      date1.getFullYear() === date2.getFullYear() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getDate() === date2.getDate()
    );
  }

  export const getWeekNumber = (date: Date): number => {
    // Copy the date to avoid modifying the original
    const copiedDate = new Date(date);
    
    // Set the date to January 4th (which is always in week 1)
    copiedDate.setMonth(0, 4);
  
    // Calculate the time elapsed since January 4th
    const timeElapsed = copiedDate.getTime() - new Date(copiedDate.getFullYear(), 0, 1).getTime();
  
    // Calculate the week number (adding 1 to account for week 1)
    const weekNumber = Math.ceil(timeElapsed / (7 * 24 * 60 * 60 * 1000)) + 1;
  
    return weekNumber;
  }