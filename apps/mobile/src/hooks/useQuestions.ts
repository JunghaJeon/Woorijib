import {useQuery, useMutation, useQueryClient} from '@tanstack/react-query';
import {questionService} from '../services/question/questionService';
import {useFamilyStore} from '../store/familyStore';

/**
 * 질문 관련 커스텀 훅
 */
export const useQuestions = () => {
  const queryClient = useQueryClient();
  const {selectedFamily} = useFamilyStore();

  // 일일 질문 조회
  const {
    data: dailyQuestion,
    isLoading: isLoadingDaily,
    error: dailyError,
  } = useQuery({
    queryKey: ['dailyQuestion', selectedFamily?.id],
    queryFn: () => questionService.getDailyQuestion(selectedFamily!.id),
    enabled: !!selectedFamily,
  });

  // 가족 답변 조회
  const {
    data: familyAnswers,
    isLoading: isLoadingAnswers,
  } = useQuery({
    queryKey: ['familyAnswers', selectedFamily?.id, dailyQuestion?.id],
    queryFn: () =>
      questionService.getFamilyAnswers(selectedFamily!.id, dailyQuestion!.id),
    enabled: !!selectedFamily && !!dailyQuestion,
  });

  // 답변 생성
  const createAnswerMutation = useMutation({
    mutationFn: questionService.createAnswer,
    onSuccess: () => {
      // 답변 목록 새로고침
      queryClient.invalidateQueries({
        queryKey: ['familyAnswers'],
      });
    },
  });

  // 리액션 추가
  const addReactionMutation = useMutation({
    mutationFn: ({answerId, type}: {answerId: string; type: 'heart' | 'hug' | 'thumbsup'}) =>
      questionService.addReaction(answerId, {type}),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['familyAnswers'],
      });
    },
  });

  return {
    dailyQuestion,
    isLoadingDaily,
    dailyError,
    familyAnswers,
    isLoadingAnswers,
    createAnswer: createAnswerMutation.mutateAsync,
    addReaction: addReactionMutation.mutateAsync,
    isCreatingAnswer: createAnswerMutation.isPending,
  };
};
