import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { API_URL } from '@/api/API';
import { Button } from '@/components/Button';
import { env } from '@/env';
import { useTranslations } from '@/hooks/useTranslation';
import { TScreenProps } from '@/utils/navigation';

export const RecipeScreen: React.FC<TScreenProps> = ({ route, navigation }) => {
  const { t } = useTranslations();

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
        2 Neapolitan Style Pizza
        {'\n'}Doughs weigh 280g each and 560g total {'\n'}Flour: 333g {'\n'}
        Water: 216g {'\n'}Salt: 10g {'\n'}Yeast (fresh): 0.7g
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
