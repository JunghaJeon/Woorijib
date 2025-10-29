/**
 * 앱 설정 상수
 */

export const API_CONFIG = {
  BASE_URL: process.env.API_BASE_URL || 'http://localhost:3000/api',
  TIMEOUT: 30000,
  RETRY_COUNT: 2,
};

export const APP_CONFIG = {
  APP_NAME: '우리집',
  APP_VERSION: '1.0.0',
  MAX_FAMILY_MEMBERS: 10,
  MAX_PHOTO_UPLOAD: 10,
  MAX_VIDEO_SIZE_MB: 100,
  STORAGE_KEYS: {
    AUTH_TOKEN: '@woorijib:auth_token',
    REFRESH_TOKEN: '@woorijib:refresh_token',
    USER_DATA: '@woorijib:user_data',
    FAMILY_DATA: '@woorijib:family_data',
  },
};

export const QUESTION_CONFIG = {
  DAILY_QUESTION_TIME: '08:00',
  REMINDER_TIME: '20:00',
  MAX_ANSWER_LENGTH: 500,
  MAX_PHOTOS_PER_ANSWER: 3,
  MAX_VOICE_DURATION_SEC: 60,
};

export const PET_CONFIG = {
  EXPERIENCE_PER_ANSWER: 10,
  EXPERIENCE_PER_PHOTO: 5,
  EXPERIENCE_PER_MISSION: 20,
  EXPERIENCE_BONUS_ALL_ANSWERED: 30,
  MAX_PET_INTERACTION_PER_DAY: 3,
};

export const EMOTION_CONFIG = {
  EMOTIONS: [
    { id: 'happy', emoji: '😊', label: '기쁨' },
    { id: 'sad', emoji: '😔', label: '슬픔' },
    { id: 'angry', emoji: '😤', label: '화남' },
    { id: 'anxious', emoji: '😰', label: '불안' },
    { id: 'calm', emoji: '😌', label: '평온' },
  ],
};

export default {
  API_CONFIG,
  APP_CONFIG,
  QUESTION_CONFIG,
  PET_CONFIG,
  EMOTION_CONFIG,
};

