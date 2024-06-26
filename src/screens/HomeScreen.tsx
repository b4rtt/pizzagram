import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { API_URL } from '@/api/API';
import { Button } from '@/components/Button';
import { env } from '@/env';
import { useTranslations } from '@/hooks/useTranslation';
import { TScreenProps } from '@/utils/navigation';

export const HomeScreen: React.FC<TScreenProps> = ({ route, navigation }) => {
  const { t } = useTranslations();

  return (
    <View style={styles.container}>
      <Text style={{ fontFamily: 'Inter-Thin', marginBottom: 16 }}>
        Welcome to Pizzagram
        {/* {t('HomeScreen.title')} */}
      </Text>
      <Button
        onPress={() => {
          navigation.navigate('StyleScreen');
        }}
        text="Start generating pizza"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});
