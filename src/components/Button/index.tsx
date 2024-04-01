import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
} from 'react-native';

import { colors } from '@/theme/colors';

export interface ButtonProps extends TouchableOpacityProps {
  type?: 'default' | 'transparent';
  style?: ViewStyle;
  text: string;
}

export const Button = ({
  onPress,
  text,
  type = 'default',
  style,
}: ButtonProps) => {
  const color = type === 'default' ? 'white' : 'black';
  return (
    <TouchableOpacity
      style={{ ...styles[type], ...style }}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Text style={{ color }}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  default: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: colors.black,
    borderRadius: 8,
  },
  transparent: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: 'transparent',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.black,
  },
});
