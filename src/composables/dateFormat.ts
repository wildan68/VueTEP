import dayjs from 'dayjs';

export const useDateFormat = () => {
  return {
    dateFormat: (date: string | Date, format = 'DD MMMM YYYY') => {
      return dayjs(date).format(format);
    },
  }
}