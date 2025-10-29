import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Question} from '../../types';
import {colors, typography} from '../../constants/theme';

interface QuestionCardProps {
  question: Question;
  answeredCount?: number;
  totalMembers?: number;
  onPress: () => void;
}

/**
 * 질문 카드 컴포넌트
 */
export const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  answeredCount = 0,
  totalMembers = 0,
  onPress,
}) => {
  const categoryEmoji = getCategoryEmoji(question.category);

  return (
    <TouchableOpacity style={styles.container} onPress={onPress} activeOpacity={0.8}>
      <View style={styles.header}>
        <Text style={styles.emoji}>{categoryEmoji}</Text>
        <Text style={styles.category}>{getCategoryName(question.category)}</Text>
      </View>

      <Text style={styles.questionText}>{question.questionText.ko}</Text>

      <View style={styles.footer}>
        <View style={styles.tags}>
          {question.tags.slice(0, 2).map((tag, index) => (
            <View key={index} style={styles.tag}>
              <Text style={styles.tagText}>#{tag}</Text>
            </View>
          ))}
        </View>

        {totalMembers > 0 && (
          <View style={styles.progress}>
            <Text style={styles.progressText}>
              👨‍👩‍👧‍👦 {answeredCount}/{totalMembers}
            </Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

const getCategoryEmoji = (category: Question['category']): string => {
  const emojiMap: Record<Question['category'], string> = {
    daily: '☀️',
    memory: '💭',
    emotion: '❤️',
    future: '🌟',
    values: '💎',
  };
  return emojiMap[category] || '❓';
};

const getCategoryName = (category: Question['category']): string => {
  const nameMap: Record<Question['category'], string> = {
    daily: '일상',
    memory: '추억',
    emotion: '감정',
    future: '미래',
    values: '가치관',
  };
  return nameMap[category] || '기타';
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: 16,
    padding: 20,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  emoji: {
    fontSize: 24,
    marginRight: 8,
  },
  category: {
    fontSize: typography.caption.fontSize,
    color: colors.text.secondary,
    fontWeight: '600',
  },
  questionText: {
    fontSize: typography.body.fontSize,
    lineHeight: 24,
    color: colors.text.primary,
    marginBottom: 16,
    fontWeight: '500',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  tags: {
    flexDirection: 'row',
    flex: 1,
  },
  tag: {
    backgroundColor: colors.background.light,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
    marginRight: 8,
  },
  tagText: {
    fontSize: typography.small.fontSize,
    color: colors.primary.main,
    fontWeight: '500',
  },
  progress: {
    backgroundColor: colors.primary.light,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
  },
  progressText: {
    fontSize: typography.small.fontSize,
    color: colors.primary.main,
    fontWeight: '600',
  },
});
