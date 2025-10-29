import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView, 
  TouchableOpacity, 
  TextInput,
  Modal,
} from 'react-native';
import { colors, typography, spacing, borderRadius, shadows } from '@constants/theme';

const QuestionsScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [answerText, setAnswerText] = useState('');

  const handleSubmitAnswer = () => {
    // TODO: 답변 저장 로직
    setAnswerText('');
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      {/* 헤더 */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>오늘의 질문</Text>
        <TouchableOpacity>
          <Text style={styles.historyButton}>📋</Text>
        </TouchableOpacity>
      </View>

      <ScrollView 
        style={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* 질문 카드 */}
        <View style={styles.questionCard}>
          <View style={styles.questionHeader}>
            <Text style={styles.questionDate}>2024년 10월 29일</Text>
            <Text style={styles.questionNumber}>#10</Text>
          </View>
          
          <View style={styles.questionIconContainer}>
            <Text style={styles.questionIcon}>💕🧡</Text>
          </View>
          
          <Text style={styles.questionText}>
            오늘 가족에게 감사했던 순간은 무엇인가요?
          </Text>

          <View style={styles.answerProgress}>
            <Text style={styles.answerProgressText}>3/4명 답변 완료</Text>
          </View>
        </View>

        {/* 답변 목록 */}
        <View style={styles.answersSection}>
          <Text style={styles.sectionTitle}>가족의 답변</Text>
          
          <View style={styles.answerCard}>
            <View style={styles.answerHeader}>
              <Text style={styles.answerAuthor}>김아빠</Text>
              <Text style={styles.answerTime}>2시간 전</Text>
            </View>
            <Text style={styles.answerText}>
              저녁 식사를 함께 준비하면서 가족과 이야기를 나눈 시간이 정말 행복했어요. 
              간단한 일상이지만 함께라서 특별했습니다 ❤️
            </Text>
          </View>

          <View style={styles.answerCard}>
            <View style={styles.answerHeader}>
              <Text style={styles.answerAuthor}>이엄마</Text>
              <Text style={styles.answerTime}>1시간 전</Text>
            </View>
            <Text style={styles.answerText}>
              아이들이 자발적으로 설거지를 도와줬어요! 
              작은 관심과 배려에 하루 종일 기분이 좋았답니다 😊
            </Text>
          </View>

          <View style={styles.answerCard}>
            <View style={styles.answerHeader}>
              <Text style={styles.answerAuthor}>김딸</Text>
              <Text style={styles.answerTime}>30분 전</Text>
            </View>
            <Text style={styles.answerText}>
              엄마가 아침에 준비해주신 도시락이 너무 맛있었어요. 
              친구들도 부러워했어요! 사랑해요 엄마 💕
            </Text>
          </View>

          <View style={[styles.answerCard, styles.answerCardPending]}>
            <View style={styles.answerHeader}>
              <Text style={styles.answerAuthor}>김아들</Text>
            </View>
            <Text style={styles.answerPlaceholder}>아직 답변하지 않았어요</Text>
          </View>
        </View>
      </ScrollView>

      {/* 답변하기 버튼 */}
      <View style={styles.bottomContainer}>
        <TouchableOpacity 
          style={styles.answerButton}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.answerButtonText}>💬 답변하기</Text>
        </TouchableOpacity>
      </View>

      {/* 답변 입력 모달 */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <Text style={styles.modalCloseButton}>✕</Text>
              </TouchableOpacity>
              <Text style={styles.modalTitle}>답변 작성하기</Text>
              <TouchableOpacity onPress={handleSubmitAnswer}>
                <Text style={styles.modalSubmitButton}>완료</Text>
              </TouchableOpacity>
            </View>

            <TextInput
              style={styles.answerInput}
              placeholder="오늘 가족에게 감사했던 순간을 공유해주세요..."
              placeholderTextColor={colors.textSecondary}
              multiline
              numberOfLines={8}
              value={answerText}
              onChangeText={setAnswerText}
              textAlignVertical="top"
            />

            <View style={styles.inputOptions}>
              <TouchableOpacity style={styles.optionButton}>
                <Text>📷 사진</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.optionButton}>
                <Text>🎤 음성</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.optionButton}>
                <Text>🙈 익명</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundLight,
  },
  header: {
    backgroundColor: colors.white,
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.xl + 20,
    paddingBottom: spacing.md,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  headerTitle: {
    fontSize: typography.fontSize.title1,
    fontWeight: 'bold',
    color: colors.textPrimary,
  },
  historyButton: {
    fontSize: 24,
  },
  content: {
    flex: 1,
    padding: spacing.lg,
  },
  questionCard: {
    backgroundColor: colors.white,
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
    marginBottom: spacing.lg,
    ...shadows.md,
  },
  questionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: spacing.md,
  },
  questionDate: {
    fontSize: typography.fontSize.caption,
    color: colors.textSecondary,
  },
  questionNumber: {
    fontSize: typography.fontSize.caption,
    color: colors.primary,
    fontWeight: '600',
  },
  questionIconContainer: {
    alignItems: 'center',
    marginVertical: spacing.lg,
  },
  questionIcon: {
    fontSize: 48,
  },
  questionText: {
    fontSize: typography.fontSize.title2,
    fontWeight: '600',
    color: colors.textPrimary,
    textAlign: 'center',
    marginBottom: spacing.lg,
    lineHeight: typography.lineHeight.title2,
  },
  answerProgress: {
    alignItems: 'center',
  },
  answerProgressText: {
    fontSize: typography.fontSize.caption,
    color: colors.textSecondary,
  },
  answersSection: {
    marginBottom: 100,
  },
  sectionTitle: {
    fontSize: typography.fontSize.title3,
    fontWeight: '600',
    color: colors.textPrimary,
    marginBottom: spacing.md,
  },
  answerCard: {
    backgroundColor: colors.white,
    borderRadius: borderRadius.md,
    padding: spacing.md,
    marginBottom: spacing.md,
    ...shadows.sm,
  },
  answerCardPending: {
    borderWidth: 2,
    borderColor: colors.border,
    borderStyle: 'dashed',
    backgroundColor: 'transparent',
  },
  answerHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: spacing.sm,
  },
  answerAuthor: {
    fontSize: typography.fontSize.body,
    fontWeight: '600',
    color: colors.primary,
  },
  answerTime: {
    fontSize: typography.fontSize.small,
    color: colors.textSecondary,
  },
  answerText: {
    fontSize: typography.fontSize.body,
    color: colors.textPrimary,
    lineHeight: typography.lineHeight.body,
  },
  answerPlaceholder: {
    fontSize: typography.fontSize.body,
    color: colors.textSecondary,
    fontStyle: 'italic',
  },
  bottomContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: colors.white,
    padding: spacing.lg,
    borderTopWidth: 1,
    borderTopColor: colors.border,
    ...shadows.lg,
  },
  answerButton: {
    backgroundColor: colors.primary,
    paddingVertical: spacing.md,
    borderRadius: borderRadius.md,
    alignItems: 'center',
  },
  answerButtonText: {
    color: colors.white,
    fontSize: typography.fontSize.body,
    fontWeight: '600',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: colors.white,
    borderTopLeftRadius: borderRadius.xl,
    borderTopRightRadius: borderRadius.xl,
    padding: spacing.lg,
    maxHeight: '80%',
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.lg,
  },
  modalCloseButton: {
    fontSize: 24,
    color: colors.textSecondary,
  },
  modalTitle: {
    fontSize: typography.fontSize.title3,
    fontWeight: '600',
    color: colors.textPrimary,
  },
  modalSubmitButton: {
    fontSize: typography.fontSize.body,
    fontWeight: '600',
    color: colors.primary,
  },
  answerInput: {
    backgroundColor: colors.backgroundLight,
    borderRadius: borderRadius.md,
    padding: spacing.md,
    fontSize: typography.fontSize.body,
    color: colors.textPrimary,
    minHeight: 150,
    marginBottom: spacing.md,
  },
  inputOptions: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: spacing.md,
  },
  optionButton: {
    backgroundColor: colors.backgroundLight,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    borderRadius: borderRadius.md,
  },
});

export default QuestionsScreen;

