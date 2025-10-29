import {apiClient} from '../api/apiClient';
import {Pet, ApiResponse} from '../../types';

interface InteractionRequest {
  type: 'feed' | 'pet' | 'play';
}

interface PetActivityResponse {
  pet: Pet;
  reward?: {
    experience: number;
    happiness: number;
  };
  levelUp?: boolean;
}

/**
 * 패밀리 펫 서비스
 */
export const petService = {
  /**
   * 가족 펫 조회
   */
  async getFamilyPet(familyId: string): Promise<Pet> {
    const response = await apiClient.get<ApiResponse<Pet>>(`/pets/family/${familyId}`);
    return response.data;
  },

  /**
   * 펫 생성 (가족 생성 시 자동)
   */
  async createPet(familyId: string, data: {name: string; type: 'dog' | 'cat' | 'rabbit'}): Promise<Pet> {
    const response = await apiClient.post<ApiResponse<Pet>>('/pets', {
      familyId,
      ...data,
    });
    return response.data;
  },

  /**
   * 펫 이름 변경
   */
  async updatePetName(petId: string, name: string): Promise<Pet> {
    const response = await apiClient.put<ApiResponse<Pet>>(`/pets/${petId}`, {name});
    return response.data;
  },

  /**
   * 펫 상호작용 (먹이주기, 쓰다듬기, 놀아주기)
   */
  async interact(petId: string, type: 'feed' | 'pet' | 'play'): Promise<PetActivityResponse> {
    const response = await apiClient.post<ApiResponse<PetActivityResponse>>(
      `/pets/${petId}/interact`,
      {type}
    );
    return response.data;
  },

  /**
   * 펫 상태 업데이트 (자동 감소 처리)
   */
  async updatePetStatus(petId: string): Promise<Pet> {
    const response = await apiClient.post<ApiResponse<Pet>>(`/pets/${petId}/update-status`);
    return response.data;
  },

  /**
   * 펫 레벨업 체크
   */
  canLevelUp(pet: Pet): boolean {
    const requiredExp = pet.level * 100;
    return pet.experience >= requiredExp;
  },

  /**
   * 다음 레벨까지 필요한 경험치
   */
  getRequiredExpForNextLevel(pet: Pet): number {
    const requiredExp = pet.level * 100;
    return Math.max(0, requiredExp - pet.experience);
  },

  /**
   * 경험치 진행률 (%)
   */
  getExpProgress(pet: Pet): number {
    const requiredExp = pet.level * 100;
    return Math.min(100, (pet.experience / requiredExp) * 100);
  },

  /**
   * 펫 상태 문자열
   */
  getPetStatusMessage(pet: Pet): string {
    if (pet.hunger < 20) return '매우 배고파해요 🥺';
    if (pet.hunger < 40) return '배고파 보여요 😕';
    if (pet.happiness < 20) return '슬퍼 보여요 😢';
    if (pet.happiness < 40) return '심심해 보여요 😐';
    if (pet.happiness > 80 && pet.hunger > 80) return '정말 행복해해요! 😄';
    return '기분이 좋아 보여요 😊';
  },
};
