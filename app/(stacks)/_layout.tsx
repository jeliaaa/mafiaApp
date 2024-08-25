import { Stack } from 'expo-router';
import React from 'react';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="explore"
        options={{ headerShown: false}}
      />
      <Stack.Screen
        name="players"
        options={{ headerShown: false}}
      />
    </Stack>
  );
}
