import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors, typography, spacing } from '@constants/theme';

const AlbumScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>가족 앨범</Text>
      {/* TODO: 앨범 그리드 뷰 구현 */}
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

export default AlbumScreen;

