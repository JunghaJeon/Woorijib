import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors, typography, spacing } from '@constants/theme';

const SignupScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>회원가입</Text>
      {/* TODO: 회원가입 폼 구현 */}
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

export default SignupScreen;

