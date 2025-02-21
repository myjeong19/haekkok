export const setDateFormat = (date: string) => {
  const getDate = new Date(date);

  return getDate.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};
