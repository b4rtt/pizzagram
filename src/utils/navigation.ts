import { TRootStackNavigationProps } from '@/navigation/RootStackNavigation';

export type TScreenProps = {
  route: { key: string; name: string };
  navigation: TRootStackNavigationProps;
};
