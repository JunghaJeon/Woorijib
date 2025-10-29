/**
 * API 엔드포인트 상수
 */

export const API_BASE_URL = process.env.API_BASE_URL || 'http://localhost:3000/api/v1';
export const API_TIMEOUT = 30000;

export const API_ENDPOINTS = {
  // Auth
  AUTH: {
    SIGNIN: '/auth/signin',
    SIGNUP: '/auth/signup',
    SIGNOUT: '/auth/signout',
    REFRESH: '/auth/refresh',
    ME: '/auth/me',
    SOCIAL: {
      KAKAO: '/auth/kakao',
      NAVER: '/auth/naver',
      GOOGLE: '/auth/google',
      APPLE: '/auth/apple',
    },
  },

  // Family
  FAMILY: {
    BASE: '/families',
    DETAIL: (id: string) => `/families/${id}`,
    MEMBERS: (id: string) => `/families/${id}/members`,
    MEMBER: (familyId: string, userId: string) => `/families/${familyId}/members/${userId}`,
    LEAVE: (id: string) => `/families/${id}/leave`,
    ACCEPT_INVITATION: '/families/accept-invitation',
  },

  // Question
  QUESTION: {
    DAILY: '/questions/daily',
    BASE: '/questions',
    DETAIL: (id: string) => `/questions/${id}`,
  },

  // Answer
  ANSWER: {
    BASE: '/answers',
    DETAIL: (id: string) => `/answers/${id}`,
    USER: (userId: string) => `/answers/user/${userId}`,
    REACTIONS: (answerId: string) => `/answers/${answerId}/reactions`,
  },

  // Pet
  PET: {
    BASE: '/pets',
    FAMILY: (familyId: string) => `/pets/family/${familyId}`,
    DETAIL: (id: string) => `/pets/${id}`,
    INTERACT: (id: string) => `/pets/${id}/interact`,
    UPDATE_STATUS: (id: string) => `/pets/${id}/update-status`,
  },

  // Media
  MEDIA: {
    BASE: '/media',
    UPLOAD: {
      IMAGE: '/media/upload/image',
      VIDEO: '/media/upload/video',
      VOICE: '/media/upload/voice',
    },
  },

  // Album
  ALBUM: {
    BASE: '/albums',
    DETAIL: (id: string) => `/albums/${id}`,
    MEDIA: (albumId: string) => `/albums/${albumId}/media`,
  },

  // Notification
  NOTIFICATION: {
    BASE: '/notifications',
    SEND: '/notifications/send',
    SCHEDULE: '/notifications/schedule',
    SETTINGS: '/notifications/settings',
  },

  // Emotion
  EMOTION: {
    BASE: '/emotions',
    DAILY: '/emotions/daily',
    FAMILY: (familyId: string) => `/emotions/family/${familyId}`,
  },

  // Mission
  MISSION: {
    BASE: '/missions',
    ACTIVE: '/missions/active',
    COMPLETE: (id: string) => `/missions/${id}/complete`,
  },
} as const;
