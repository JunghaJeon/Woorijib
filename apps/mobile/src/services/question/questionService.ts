import {apiClient} from '../api/apiClient';
import {Question, Answer, ApiResponse} from '../../types';

interface CreateAnswerRequest {
  questionId: string;
  familyId: string;
  answerText: string;
  mediaUrls?: string[];
  voiceUrl?: string;
  isAnonymous?: boolean;
}

interface AddReactionRequest {
  type: 'heart' | 'hug' | 'thumbsup';
}

/**
 * 질문/답변 서비스
 */
export const questionService = {
  /**
   * 일일 질문 조회
   */
  async getDailyQuestion(familyId: string): Promise<Question> {
    const response = await apiClient.get<ApiResponse<Question>>(
      `/questions/daily?familyId=${familyId}`
    );
    return response.data;
  },

  /**
   * 질문 목록 조회 (카테고리별)
   */
  async getQuestionsByCategory(
    category: string,
    page = 1,
    limit = 20
  ): Promise<{questions: Question[]; total: number}> {
    const response = await apiClient.get<ApiResponse<{questions: Question[]; total: number}>>(
      `/questions?category=${category}&page=${page}&limit=${limit}`
    );
    return response.data;
  },

  /**
   * 질문 상세 조회
   */
  async getQuestion(questionId: string): Promise<Question> {
    const response = await apiClient.get<ApiResponse<Question>>(`/questions/${questionId}`);
    return response.data;
  },

  /**
   * 답변 생성
   */
  async createAnswer(data: CreateAnswerRequest): Promise<Answer> {
    const response = await apiClient.post<ApiResponse<Answer>>('/answers', data);
    return response.data;
  },

  /**
   * 답변 수정
   */
  async updateAnswer(answerId: string, data: Partial<CreateAnswerRequest>): Promise<Answer> {
    const response = await apiClient.put<ApiResponse<Answer>>(`/answers/${answerId}`, data);
    return response.data;
  },

  /**
   * 답변 삭제
   */
  async deleteAnswer(answerId: string): Promise<void> {
    await apiClient.delete(`/answers/${answerId}`);
  },

  /**
   * 가족 답변 조회
   */
  async getFamilyAnswers(familyId: string, questionId: string): Promise<Answer[]> {
    const response = await apiClient.get<ApiResponse<Answer[]>>(
      `/answers?familyId=${familyId}&questionId=${questionId}`
    );
    return response.data;
  },

  /**
   * 사용자 답변 히스토리
   */
  async getUserAnswers(
    userId: string,
    page = 1,
    limit = 20
  ): Promise<{answers: Answer[]; total: number}> {
    const response = await apiClient.get<ApiResponse<{answers: Answer[]; total: number}>>(
      `/answers/user/${userId}?page=${page}&limit=${limit}`
    );
    return response.data;
  },

  /**
   * 답변에 리액션 추가
   */
  async addReaction(answerId: string, data: AddReactionRequest): Promise<void> {
    await apiClient.post(`/answers/${answerId}/reactions`, data);
  },

  /**
   * 답변 리액션 제거
   */
  async removeReaction(answerId: string): Promise<void> {
    await apiClient.delete(`/answers/${answerId}/reactions`);
  },
};
