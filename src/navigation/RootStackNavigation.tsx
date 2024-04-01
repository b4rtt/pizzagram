import { NavigationContainer } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';

import { CountScreen } from '@/screens/CountScreen';
import { GramsScreen } from '@/screens/GramsScreen';
import { RecipeScreen } from '@/screens/RecipeScreen';
import { YeastScreen } from '@/screens/YeastScreen';
import { colors } from '@/theme/colors';

import { HomeScreen } from '../screens/HomeScreen';
import { StyleScreen } from '../screens/StyleScreen';

export type TRootStackParamList = {
  HomeScreen: undefined;
  StyleScreen: undefined;
  GramsScreen: undefined;
  YeastScreen: undefined;
  CountScreen: undefined;
  RecipeScreen: undefined;
};

export type TRootStackNavigationProps =
  NativeStackScreenProps<TRootStackParamList>['navigation'];

const Stack = createNativeStackNavigator<TRootStackParamList>();

export default function RootStackNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen"
          options={{
            title: 'Pizzagram',
            headerShown: true,
            headerStyle: {
              backgroundColor: colors.black,
            },
            headerTintColor: colors.white,
          }}
        >
          {(props) => <HomeScreen {...props} />}
        </Stack.Screen>
        <Stack.Screen
          name="StyleScreen"
          options={{
            title: 'Select style',
            headerShown: true,
            headerStyle: {
              backgroundColor: colors.black,
            },
            headerTintColor: colors.white,
            headerBackTitleVisible: false,
          }}
        >
          {(props) => <StyleScreen {...props} />}
        </Stack.Screen>
        <Stack.Screen
          name="GramsScreen"
          options={{
            title: 'Select weight',
            headerShown: true,
            headerStyle: {
              backgroundColor: colors.black,
            },
            headerTintColor: colors.white,
            headerBackTitleVisible: false,
          }}
        >
          {(props) => <GramsScreen {...props} />}
        </Stack.Screen>
        <Stack.Screen
          name="YeastScreen"
          options={{
            title: 'Select yeast',
            headerShown: true,
            headerStyle: {
              backgroundColor: colors.black,
            },
            headerTintColor: colors.white,
            headerBackTitleVisible: false,
          }}
        >
          {(props) => <YeastScreen {...props} />}
        </Stack.Screen>
        <Stack.Screen
          name="CountScreen"
          options={{
            title: 'Select count',
            headerShown: true,
            headerStyle: {
              backgroundColor: colors.black,
            },
            headerTintColor: colors.white,
            headerBackTitleVisible: false,
          }}
        >
          {(props) => <CountScreen {...props} />}
        </Stack.Screen>
        <Stack.Screen
          name="RecipeScreen"
          options={{
            title: 'Recipe',
            headerShown: true,
            headerStyle: {
              backgroundColor: colors.black,
            },
            headerTintColor: colors.white,
            headerBackTitleVisible: false,
          }}
        >
          {(props) => <RecipeScreen {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
