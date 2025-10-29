/**
 * 우리집 디자인 시스템
 * PRD Section 8.2 Visual Design System 기반
 */

export const colors = {
  // Primary Colors
  primary: '#4A90E2',
  primaryLight: '#6BA5E7',
  primaryDark: '#3A7BC8',
  
  // Secondary Colors
  warmOrange: '#FF6B6B',
  softGreen: '#4ECDC4',
  
  // Neutral Colors
  textPrimary: '#2C3E50',
  textSecondary: '#7F8C8D',
  backgroundLight: '#ECF0F1',
  white: '#FFFFFF',
  
  // Semantic Colors
  success: '#27AE60',
  warning: '#F39C12',
  error: '#E74C3C',
  info: '#3498DB',
  
  // Additional
  border: '#E0E0E0',
  shadow: 'rgba(0, 0, 0, 0.1)',
};

export const typography = {
  // Font Families
  fontFamily: {
    regular: 'Pretendard-Regular',
    medium: 'Pretendard-Medium',
    semiBold: 'Pretendard-SemiBold',
    bold: 'Pretendard-Bold',
  },
  
  // Font Sizes (PRD 8.2.2 Type Scale)
  fontSize: {
    display: 32,
    title1: 28,
    title2: 24,
    title3: 20,
    body: 16,
    caption: 14,
    small: 12,
  },
  
  // Line Heights
  lineHeight: {
    display: 40,
    title1: 36,
    title2: 32,
    title3: 28,
    body: 24,
    caption: 20,
    small: 16,
  },
};

export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 40,
};

export const borderRadius = {
  sm: 4,
  md: 8,
  lg: 12,
  xl: 16,
  round: 999,
};

export const shadows = {
  sm: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  md: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  lg: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 8,
  },
};

export const animations = {
  duration: {
    fast: 150,
    normal: 300,
    slow: 500,
  },
  easing: {
    easeInOut: 'ease-in-out',
    easeIn: 'ease-in',
    easeOut: 'ease-out',
  },
};

export default {
  colors,
  typography,
  spacing,
  borderRadius,
  shadows,
  animations,
};

