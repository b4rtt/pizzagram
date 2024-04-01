// import RootBottomTabsNavigation from './navigation/RootBottomTabsNavigation';
// import RootDrawerNavigation from './navigation/RootDrawerNavigation';

import { StatusBar } from 'react-native';
import Toast from 'react-native-toast-message';
import { QueryClient, QueryClientProvider } from 'react-query';

import { NotificationsInit } from './components/NotificationsInit';
import RootStackNavigation from './navigation/RootStackNavigation';
import { toastConfig } from './utils/toast';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <StatusBar barStyle="light-content" />
      <RootStackNavigation />
      <NotificationsInit />
      <Toast config={toastConfig} />
    </QueryClientProvider>
  );
}

export default App;
