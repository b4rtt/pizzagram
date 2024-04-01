import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

import { Button } from '@/components/Button';
import { colors } from '@/theme/colors';
import { TScreenProps } from '@/utils/navigation';

export const GramsScreen: React.FC<TScreenProps> = ({ route, navigation }) => {
  const [grams, setGrams] = React.useState<number>(230);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 16,
      }}
    >
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
        value={grams.toString()}
        onChangeText={(text) => setGrams(parseInt(text, 10))}
      />
      <Button
        onPress={() => navigation.navigate('YeastScreen')}
        text={`Use ${grams} grams`}
      />
      <Text style={{ marginTop: 30, marginBottom: 6 }}>
        Or choose a predefined amount:
      </Text>
      <View
        style={{
          flexDirection: 'row',
        }}
      >
        <Button
          onPress={() => setGrams(160)}
          text="Small"
          type="transparent"
          style={{ marginHorizontal: 6 }}
        />
        <Button
          onPress={() => setGrams(230)}
          text="Large"
          type="transparent"
          style={{ marginHorizontal: 6 }}
        />
        <Button
          onPress={() => setGrams(300)}
          text="X-Large"
          type="transparent"
          style={{ marginHorizontal: 6 }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});
