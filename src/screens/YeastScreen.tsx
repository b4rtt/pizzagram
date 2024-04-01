import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Button } from '@/components/Button';
import { TScreenProps } from '@/utils/navigation';

export const YeastScreen: React.FC<TScreenProps> = ({ route, navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Button
        onPress={() => navigation.navigate('CountScreen')}
        text="Fresh Yeast"
        style={{ marginBottom: 16 }}
      />
      <Button
        onPress={() => navigation.navigate('CountScreen')}
        text="Dry Yeast"
        style={{ marginBottom: 16 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});
