import {apiClient} from '../api/apiClient';
import {Family, FamilyMember, ApiResponse} from '../../types';

interface CreateFamilyRequest {
  name: string;
}

interface InviteMemberRequest {
  email?: string;
  phone?: string;
  role: 'parent' | 'child' | 'grandparent';
}

/**
 * 가족 관리 서비스
 */
export const familyService = {
  /**
   * 가족 목록 조회
   */
  async getFamilies(): Promise<Family[]> {
    const response = await apiClient.get<ApiResponse<Family[]>>('/families');
    return response.data;
  },

  /**
   * 가족 상세 조회
   */
  async getFamily(familyId: string): Promise<Family> {
    const response = await apiClient.get<ApiResponse<Family>>(`/families/${familyId}`);
    return response.data;
  },

  /**
   * 가족 생성
   */
  async createFamily(data: CreateFamilyRequest): Promise<Family> {
    const response = await apiClient.post<ApiResponse<Family>>('/families', data);
    return response.data;
  },

  /**
   * 가족 수정
   */
  async updateFamily(familyId: string, data: Partial<Family>): Promise<Family> {
    const response = await apiClient.put<ApiResponse<Family>>(`/families/${familyId}`, data);
    return response.data;
  },

  /**
   * 가족 구성원 조회
   */
  async getMembers(familyId: string): Promise<FamilyMember[]> {
    const response = await apiClient.get<ApiResponse<FamilyMember[]>>(
      `/families/${familyId}/members`
    );
    return response.data;
  },

  /**
   * 가족 구성원 초대
   */
  async inviteMember(familyId: string, data: InviteMemberRequest): Promise<void> {
    await apiClient.post(`/families/${familyId}/members`, data);
  },

  /**
   * 가족 구성원 역할 변경
   */
  async updateMemberRole(
    familyId: string,
    userId: string,
    role: 'parent' | 'child' | 'grandparent'
  ): Promise<void> {
    await apiClient.put(`/families/${familyId}/members/${userId}`, {role});
  },

  /**
   * 가족 구성원 제거
   */
  async removeMember(familyId: string, userId: string): Promise<void> {
    await apiClient.delete(`/families/${familyId}/members/${userId}`);
  },

  /**
   * 가족 탈퇴
   */
  async leaveFamily(familyId: string): Promise<void> {
    await apiClient.post(`/families/${familyId}/leave`);
  },

  /**
   * 초대 수락
   */
  async acceptInvitation(invitationCode: string): Promise<Family> {
    const response = await apiClient.post<ApiResponse<Family>>('/families/accept-invitation', {
      code: invitationCode,
    });
    return response.data;
  },
};
