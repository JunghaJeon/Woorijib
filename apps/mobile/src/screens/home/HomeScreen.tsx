import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { colors, typography, spacing, borderRadius, shadows } from '@constants/theme';

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* 헤더 */}
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>안녕하세요 👋</Text>
          <Text style={styles.familyName}>김씨네 가족</Text>
        </View>
        <TouchableOpacity style={styles.notificationButton}>
          <Text style={styles.notificationIcon}>🔔</Text>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>3</Text>
          </View>
        </TouchableOpacity>
      </View>

      <ScrollView 
        style={styles.content} 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
      >
        {/* 오늘의 질문 카드 */}
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardTitle}>📝 오늘의 질문</Text>
            <Text style={styles.cardBadge}>답변 대기</Text>
          </View>
          <Text style={styles.questionText}>
            오늘 가족에게 감사했던 순간은 무엇인가요?
          </Text>
          <View style={styles.questionMeta}>
            <Text style={styles.questionMetaText}>3/4명 답변 완료</Text>
          </View>
          <TouchableOpacity 
            style={styles.answerButton}
            onPress={() => navigation.navigate('Questions' as never)}
          >
            <Text style={styles.answerButtonText}>답변하기</Text>
          </TouchableOpacity>
        </View>

        {/* 가족 감정 현황 */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>가족의 오늘 기분</Text>
          <View style={styles.emotionRow}>
            <View style={styles.emotionCard}>
              <Text style={styles.emotionEmoji}>😊</Text>
              <Text style={styles.emotionName}>김아빠</Text>
            </View>
            <View style={styles.emotionCard}>
              <Text style={styles.emotionEmoji}>😌</Text>
              <Text style={styles.emotionName}>이엄마</Text>
            </View>
            <View style={styles.emotionCard}>
              <Text style={styles.emotionEmoji}>😊</Text>
              <Text style={styles.emotionName}>김딸</Text>
            </View>
            <View style={styles.emotionCard}>
              <Text style={styles.emotionEmoji}>🤔</Text>
              <Text style={styles.emotionName}>김아들</Text>
            </View>
          </View>
        </View>

        {/* 우리펫 미리보기 */}
        <TouchableOpacity 
          style={styles.petCard}
          onPress={() => navigation.navigate('Pet' as never)}
        >
          <View style={styles.petInfo}>
            <Text style={styles.petTitle}>🐾 우리펫 복실이</Text>
            <Text style={styles.petLevel}>레벨 3 • 경험치 250/300</Text>
          </View>
          <View style={styles.petCharacter}>
            <Text style={styles.petEmoji}>🐕</Text>
          </View>
        </TouchableOpacity>

        {/* 최근 활동 */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>최근 활동</Text>
          <View style={styles.activityItem}>
            <View style={styles.activityIcon}>
              <Text>💬</Text>
            </View>
            <View style={styles.activityContent}>
              <Text style={styles.activityText}>김딸님이 질문에 답변했어요</Text>
              <Text style={styles.activityTime}>30분 전</Text>
            </View>
          </View>
          <View style={styles.activityItem}>
            <View style={styles.activityIcon}>
              <Text>🎉</Text>
            </View>
            <View style={styles.activityContent}>
              <Text style={styles.activityText}>우리펫이 레벨업 했어요!</Text>
              <Text style={styles.activityTime}>2시간 전</Text>
            </View>
          </View>
        </View>
      </ScrollView>
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
  greeting: {
    fontSize: typography.fontSize.body,
    color: colors.textSecondary,
    marginBottom: 4,
  },
  familyName: {
    fontSize: typography.fontSize.title2,
    fontWeight: 'bold',
    color: colors.textPrimary,
  },
  notificationButton: {
    position: 'relative',
    padding: spacing.sm,
  },
  notificationIcon: {
    fontSize: 24,
  },
  badge: {
    position: 'absolute',
    top: 4,
    right: 4,
    backgroundColor: colors.error,
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    color: colors.white,
    fontSize: 10,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
  },
  contentContainer: {
    padding: spacing.lg,
  },
  card: {
    backgroundColor: colors.white,
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
    marginBottom: spacing.lg,
    ...shadows.md,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.md,
  },
  cardTitle: {
    fontSize: typography.fontSize.title3,
    fontWeight: '600',
    color: colors.textPrimary,
  },
  cardBadge: {
    backgroundColor: colors.warmOrange,
    paddingHorizontal: spacing.sm,
    paddingVertical: 4,
    borderRadius: borderRadius.md,
    fontSize: typography.fontSize.small,
    color: colors.white,
    fontWeight: '600',
  },
  questionText: {
    fontSize: typography.fontSize.body,
    color: colors.textPrimary,
    lineHeight: typography.lineHeight.body,
    marginBottom: spacing.md,
  },
  questionMeta: {
    marginBottom: spacing.md,
  },
  questionMetaText: {
    fontSize: typography.fontSize.caption,
    color: colors.textSecondary,
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
  section: {
    marginBottom: spacing.lg,
  },
  sectionTitle: {
    fontSize: typography.fontSize.title3,
    fontWeight: '600',
    color: colors.textPrimary,
    marginBottom: spacing.md,
  },
  emotionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  emotionCard: {
    flex: 1,
    backgroundColor: colors.white,
    borderRadius: borderRadius.md,
    padding: spacing.md,
    marginHorizontal: 4,
    alignItems: 'center',
    ...shadows.sm,
  },
  emotionEmoji: {
    fontSize: 32,
    marginBottom: spacing.xs,
  },
  emotionName: {
    fontSize: typography.fontSize.small,
    color: colors.textSecondary,
  },
  petCard: {
    backgroundColor: colors.softGreen,
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
    marginBottom: spacing.lg,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  petInfo: {
    flex: 1,
  },
  petTitle: {
    fontSize: typography.fontSize.title3,
    fontWeight: '600',
    color: colors.white,
    marginBottom: 4,
  },
  petLevel: {
    fontSize: typography.fontSize.caption,
    color: colors.white,
    opacity: 0.9,
  },
  petCharacter: {
    width: 60,
    height: 60,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  petEmoji: {
    fontSize: 40,
  },
  activityItem: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    borderRadius: borderRadius.md,
    padding: spacing.md,
    marginBottom: spacing.sm,
    ...shadows.sm,
  },
  activityIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.backgroundLight,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: spacing.md,
  },
  activityContent: {
    flex: 1,
    justifyContent: 'center',
  },
  activityText: {
    fontSize: typography.fontSize.body,
    color: colors.textPrimary,
    marginBottom: 2,
  },
  activityTime: {
    fontSize: typography.fontSize.small,
    color: colors.textSecondary,
  },
});

export default HomeScreen;

