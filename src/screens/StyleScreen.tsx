import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Button } from '@/components/Button';
import { TScreenProps } from '@/utils/navigation';

export const StyleScreen: React.FC<TScreenProps> = ({ route, navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Button
        onPress={() => navigation.navigate('GramsScreen')}
        text="Neapolitan"
        style={{ marginBottom: 16 }}
      />
      <Button
        onPress={() => navigation.navigate('GramsScreen')}
        text="New York"
        style={{ marginBottom: 16 }}
      />
      <Button
        onPress={() => navigation.navigate('GramsScreen')}
        text="Sicilian"
        style={{ marginBottom: 16 }}
      />
      <Button
        onPress={() => navigation.navigate('GramsScreen')}
        text="Homemade Pan"
        style={{ marginBottom: 16 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});
