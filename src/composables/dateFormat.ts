import dayjs from 'dayjs';

export const useDateFormat = () => {
  const dateFormat = (date: string | Date, format = 'DD MMMM YYYY') => {
    return dayjs(date).format(format);
  }

  return {
    dateFormat,
  }
}