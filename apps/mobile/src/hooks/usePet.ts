import {useQuery, useMutation, useQueryClient} from '@tanstack/react-query';
import {petService} from '../services/pet/petService';
import {useFamilyStore} from '../store/familyStore';

/**
 * 펫 관련 커스텀 훅
 */
export const usePet = () => {
  const queryClient = useQueryClient();
  const {selectedFamily} = useFamilyStore();

  // 가족 펫 조회
  const {
    data: pet,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['pet', selectedFamily?.id],
    queryFn: () => petService.getFamilyPet(selectedFamily!.id),
    enabled: !!selectedFamily,
  });

  // 펫 상호작용
  const interactMutation = useMutation({
    mutationFn: ({petId, type}: {petId: string; type: 'feed' | 'pet' | 'play'}) =>
      petService.interact(petId, type),
    onSuccess: (data) => {
      // 펫 정보 업데이트
      queryClient.setQueryData(['pet', selectedFamily?.id], data.pet);
      return data;
    },
  });

  const feedPet = async () => {
    if (!pet) return;
    return interactMutation.mutateAsync({petId: pet.id, type: 'feed'});
  };

  const petPet = async () => {
    if (!pet) return;
    return interactMutation.mutateAsync({petId: pet.id, type: 'pet'});
  };

  const playWithPet = async () => {
    if (!pet) return;
    return interactMutation.mutateAsync({petId: pet.id, type: 'play'});
  };

  return {
    pet,
    isLoading,
    error,
    feedPet,
    petPet,
    playWithPet,
    isInteracting: interactMutation.isPending,
    canLevelUp: pet ? petService.canLevelUp(pet) : false,
    expProgress: pet ? petService.getExpProgress(pet) : 0,
    statusMessage: pet ? petService.getPetStatusMessage(pet) : '',
  };
};
