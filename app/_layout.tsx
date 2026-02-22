import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider, useTheme } from '@/lib/theme';
import { StoreProvider } from '@/lib/store';
import { AuthProvider } from '@/lib/auth';
import { View } from 'react-native';

function RootLayoutContent() {
  const { colors, isDark } = useTheme();
  return (
    <View style={{ flex: 1, backgroundColor: colors.bg }}>
      <StatusBar style={isDark ? 'light' : 'dark'} />
      <Stack screenOptions={{ headerShown: false, contentStyle: { backgroundColor: colors.bg } }} />
    </View>
  );
}

export default function RootLayout() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <StoreProvider>
          <RootLayoutContent />
        </StoreProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}
