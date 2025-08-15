import { format } from 'date-fns';
import { ko } from 'date-fns/locale';

export const setDateFormat = (date: string) => {
  const targetDate = new Date(date);
  const now = new Date();
  const diffInMinutes = Math.floor((now.getTime() - targetDate.getTime()) / (1000 * 60));
  const diffInHours = Math.floor(diffInMinutes / 60);
  const diffInDays = Math.floor(diffInHours / 24);
  const diffInWeeks = Math.floor(diffInDays / 7);

  // 1분 ~ 59분 전
  if (diffInMinutes < 60) {
    return `${diffInMinutes}분 전`;
  }

  // 1시간 ~ 23시간 전
  if (diffInHours < 24) {
    return `${diffInHours}시간 전`;
  }

  // 1일 ~ 6일 전
  if (diffInDays < 7) {
    return `${diffInDays}일 전`;
  }

  // 1주 ~ 3주 전
  if (diffInWeeks < 4) {
    return `${diffInWeeks}주 전`;
  }

  // 4주 이상 - 절대 날짜 표시 (M월 d일)
  return format(targetDate, 'M월 d일', { locale: ko });
};

// 절대 날짜가 필요한 경우를 위한 함수
export const setAbsoluteDateFormat = (date: string) => {
  const targetDate = new Date(date);
  return format(targetDate, 'yyyy-MM-dd', { locale: ko });
};
