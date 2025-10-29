import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ActivityIndicator,
  ViewStyle,
  TextStyle,
} from 'react-native';
import {colors, typography} from '../../constants/theme';

interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'text';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

/**
 * 공통 버튼 컴포넌트
 */
export const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  loading = false,
  icon,
  style,
  textStyle,
}) => {
  const buttonStyle = [
    styles.base,
    styles[variant],
    styles[`${size}Size`],
    disabled && styles.disabled,
    style,
  ];

  const textStyles = [
    styles.text,
    styles[`${variant}Text`],
    styles[`${size}Text`],
    disabled && styles.disabledText,
    textStyle,
  ];

  return (
    <TouchableOpacity
      style={buttonStyle}
      onPress={onPress}
      disabled={disabled || loading}
      activeOpacity={0.7}>
      {loading ? (
        <ActivityIndicator
          color={variant === 'primary' ? colors.white : colors.primary.main}
        />
      ) : (
        <>
          {icon}
          <Text style={textStyles}>{title}</Text>
        </>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  base: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    paddingHorizontal: 24,
    paddingVertical: 14,
  },
  // Variants
  primary: {
    backgroundColor: colors.primary.main,
  },
  secondary: {
    backgroundColor: colors.secondary.main,
  },
  outline: {
    backgroundColor: 'transparent',
    borderWidth: 1.5,
    borderColor: colors.primary.main,
  },
  text: {
    backgroundColor: 'transparent',
  },
  // Sizes
  smallSize: {
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  mediumSize: {
    paddingHorizontal: 24,
    paddingVertical: 14,
  },
  largeSize: {
    paddingHorizontal: 32,
    paddingVertical: 18,
  },
  // Text styles
  primaryText: {
    color: colors.white,
    fontSize: typography.body.fontSize,
    fontWeight: '600',
  },
  secondaryText: {
    color: colors.white,
    fontSize: typography.body.fontSize,
    fontWeight: '600',
  },
  outlineText: {
    color: colors.primary.main,
    fontSize: typography.body.fontSize,
    fontWeight: '600',
  },
  textText: {
    color: colors.primary.main,
    fontSize: typography.body.fontSize,
    fontWeight: '600',
  },
  // Text sizes
  smallText: {
    fontSize: typography.caption.fontSize,
  },
  mediumText: {
    fontSize: typography.body.fontSize,
  },
  largeText: {
    fontSize: typography.title3.fontSize,
  },
  // Disabled
  disabled: {
    opacity: 0.5,
  },
  disabledText: {
    opacity: 0.7,
  },
});
