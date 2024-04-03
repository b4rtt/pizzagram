import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

import { useAtom } from 'jotai';

import { recipeAtom } from '@/atoms/recipe';
import { Button } from '@/components/Button';
import { colors } from '@/theme/colors';
import { TScreenProps } from '@/utils/navigation';

export const CountScreen: React.FC<TScreenProps> = ({ route, navigation }) => {
  const [recipe, setRecipe] = useAtom(recipeAtom);

  const [count, setCount] = React.useState<number>(recipe.count);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 16,
      }}
    >
      <Text style={{ marginBottom: 16, fontSize: 40, textAlign: 'center' }}>
        {
          // every count add pizza emoji
          count > 0 ? `🍕`.repeat(count) : 'How many pizzas?'
        }
      </Text>

      <TextInput
        placeholder="Enter grams"
        style={{
          marginBottom: 16,
          borderColor: colors.black,
          borderWidth: 1,
          padding: 10,
          width: '100%',
          textAlign: 'center',
        }}
        keyboardType="numeric"
        value={count.toString()}
        onChangeText={(text) => setCount(parseInt(text, 10))}
      />

      <View
        style={{
          flexDirection: 'row',
        }}
      >
        <Button
          onPress={() => {
            if (count === 0) return;
            setCount(count - 1);
          }}
          text="-"
          type="transparent"
          style={{ marginHorizontal: 6 }}
        />
        <Button
          onPress={() => {
            setCount(count + 1);
          }}
          text="+"
          type="transparent"
          style={{ marginHorizontal: 6 }}
        />
      </View>

      <Button
        onPress={() => {
          setRecipe({ ...recipe, count });
          navigation.navigate('RecipeScreen');
        }}
        text="Generate recipe"
        style={{ marginTop: 30 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});
