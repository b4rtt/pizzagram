import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { useAtom } from 'jotai';

import { recipeAtom } from '@/atoms/recipe';
import { Button } from '@/components/Button';
import { useTranslations } from '@/hooks/useTranslation';
import { TScreenProps } from '@/utils/navigation';
import { Recipe, recipes } from '@/utils/recipes';

export const RecipeScreen: React.FC<TScreenProps> = ({ route, navigation }) => {
  const { t } = useTranslations();
  const [recipe, setRecipe] = useAtom(recipeAtom);

  const selectedRecipe = recipes.find((r) => r.type === recipe.type);

  const roundFirstDecimal = (n: number): number => Math.round(n * 10) / 10;

  const fixedFloat = (n: number): number => parseFloat(n.toFixed(2));

  const totalWeight = (pizza: Recipe): number => {
    return pizza.number * pizza['grams-per-pizza'];
  };

  const oilGrams = (pizza: Recipe): number =>
    roundFirstDecimal(
      fixedFloat(totalWeight(pizza) * (pizza['oil-percentage'] || 0))
    );

  const saltGrams = (pizza: Recipe): number =>
    roundFirstDecimal(
      fixedFloat(totalWeight(pizza) * (pizza['salt-percentage'] || 0))
    );

  const yeastGrams = (pizza: Recipe): number => {
    return roundFirstDecimal(
      fixedFloat(totalWeight(pizza) * (pizza.yeast[recipe.yeast] || 0))
    );
  };

  const sugarGrams = (pizza: Recipe): number =>
    roundFirstDecimal(
      fixedFloat(totalWeight(pizza) * (pizza['sugar-percentage'] || 0))
    );

  const netWeightWaterFlour = (pizza: Recipe): number => {
    const salt = saltGrams(pizza);
    const yeast = yeastGrams(pizza);
    const oil = oilGrams(pizza);
    const sugar = sugarGrams(pizza);
    return totalWeight(pizza) - salt - yeast - oil - sugar;
  };

  const waterGrams = (pizza: Recipe, weightReference: number): number =>
    Math.round(((pizza['water-share'] || 0) / 100) * weightReference);

  const flourGramsAllFlours = (pizza: Recipe): number =>
    Math.round(
      netWeightWaterFlour(pizza) / ((100 + (pizza['water-share'] || 0)) / 100)
    );

  const semolinaGrams = (
    pizza: Recipe,
    flourGramsWithSemolina: number
  ): number =>
    Math.round((pizza['semolina-percentage'] || 0) * flourGramsWithSemolina);

  if (!selectedRecipe) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text
        style={{
          fontFamily: 'Inter-Thin',
          marginBottom: 16,
          textAlign: 'center',
          lineHeight: 30,
          fontSize: 20,
        }}
      >
        {recipe.count} {recipe.type} Style Pizza
        {'\n'}Doughs weigh {recipe.grams}g each and{' '}
        {totalWeight(selectedRecipe)}g total {'\n'}
        {'\n'}
        {'\n'}Flour: {flourGramsAllFlours(selectedRecipe)}g {'\n'}
        Water: {waterGrams(selectedRecipe, flourGramsAllFlours(selectedRecipe))}
        g {'\n'}Salt: {saltGrams(selectedRecipe)}g {'\n'}Yeast ({recipe.yeast}):{' '}
        {yeastGrams(selectedRecipe)}g {'\n'}
        {/* Oil: {oilGrams(selectedRecipe)}g {'\n'}Sugar:{' '}
        {sugarGrams(selectedRecipe)}g {'\n'}Semolina:{' '}
        {semolinaGrams(selectedRecipe, flourGramsAllFlours(selectedRecipe))}g{' '} */}
        {'\n'}
        {'\n'}
        <Text style={{ fontSize: 10 }}>{JSON.stringify(recipe)}</Text>
        {selectedRecipe && <Text style={{ marginTop: 30 }} />}
      </Text>
      <Button
        text="Start over"
        onPress={() => navigation.navigate('StyleScreen')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});
