import React from 'react';
import { StyleSheet, View } from 'react-native';

import { useAtom } from 'jotai';

import { recipeAtom } from '@/atoms/recipe';
import { Button } from '@/components/Button';
import { TScreenProps } from '@/utils/navigation';
import { recipes } from '@/utils/recipes';

export const StyleScreen: React.FC<TScreenProps> = ({ route, navigation }) => {
  const [recipe, setRecipe] = useAtom(recipeAtom);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {recipes.map((recipeItem) => (
        <Button
          onPress={() => {
            setRecipe({ ...recipe, type: recipeItem.type });
            navigation.navigate('GramsScreen');
          }}
          text={recipeItem.name}
          style={{ marginBottom: 16 }}
          key={recipeItem.type}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({});
