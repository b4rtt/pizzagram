import React from 'react';
import { StyleSheet, View } from 'react-native';

import { useAtom } from 'jotai';

import { recipeAtom } from '@/atoms/recipe';
import { Button } from '@/components/Button';
import { TScreenProps } from '@/utils/navigation';

export const YeastScreen: React.FC<TScreenProps> = ({ route, navigation }) => {
  const [recipe, setRecipe] = useAtom(recipeAtom);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Button
        onPress={() => {
          setRecipe({ ...recipe, yeast: 'fresh' });
          navigation.navigate('CountScreen');
        }}
        text="Fresh Yeast"
        style={{ marginBottom: 16 }}
      />
      <Button
        onPress={() => {
          setRecipe({ ...recipe, yeast: 'dry' });
          navigation.navigate('CountScreen');
        }}
        text="Dry Yeast"
        style={{ marginBottom: 16 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});
