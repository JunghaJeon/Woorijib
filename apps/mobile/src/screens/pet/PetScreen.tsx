import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors, typography, spacing } from '@constants/theme';

const PetScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>우리펫</Text>
      {/* TODO: 펫 상호작용 시스템 구현 */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    padding: spacing.lg,
  },
  title: {
    fontSize: typography.fontSize.title1,
    fontWeight: 'bold',
    color: colors.textPrimary,
    marginBottom: spacing.lg,
  },
});

export default PetScreen;

