/**
 * 공통 타입 정의
 */

export interface User {
  id: string;
  email: string;
  name: string;
  phone?: string;
  birthdate?: string;
  profileImageUrl?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Family {
  id: string;
  name: string;
  createdBy: string;
  petId?: string;
  subscriptionTier: 'free' | 'premium' | 'premium_plus';
  createdAt: string;
}

export interface FamilyMember {
  familyId: string;
  userId: string;
  role: 'parent' | 'child' | 'grandparent';
  nickname?: string;
  joinedAt: string;
}

export interface Question {
  id: string;
  questionText: {
    ko: string;
    en?: string;
  };
  category: 'daily' | 'memory' | 'emotion' | 'future' | 'values';
  difficulty: 'easy' | 'medium' | 'hard';
  ageGroup: string[];
  tags: string[];
}

export interface Answer {
  id: string;
  questionId: string;
  familyId: string;
  userId: string;
  answerText: string;
  mediaUrls: string[];
  voiceUrl?: string;
  isAnonymous: boolean;
  createdAt: string;
  reactions: Reaction[];
}

export interface Reaction {
  userId: string;
  type: 'heart' | 'hug' | 'thumbsup';
  createdAt: string;
}

export interface Pet {
  id: string;
  familyId: string;
  name: string;
  type: 'dog' | 'cat' | 'rabbit';
  level: number;
  experience: number;
  happiness: number;
  hunger: number;
  createdAt: string;
}

export interface Emotion {
  id: string;
  userId: string;
  familyId: string;
  emotion: 'happy' | 'sad' | 'angry' | 'anxious' | 'calm';
  note?: string;
  createdAt: string;
}

export interface Mission {
  id: string;
  title: string;
  description: string;
  type: 'together' | 'express' | 'memory';
  difficulty: 'easy' | 'medium' | 'hard';
  points: number;
  expiresAt: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
}

export interface ApiError {
  success: false;
  message: string;
  code?: string;
  errors?: Record<string, string[]>;
}

