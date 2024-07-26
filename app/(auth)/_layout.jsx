import { Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import FlashMessage from 'react-native-flash-message'

const AuthLayout = () => {
  return (
    <>
      <Stack>
        <Stack.Screen
          name='signIn'
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='signUp'
          options={{ headerShown: false }}
        />
      </Stack>
      <FlashMessage position={'center'} />
    </>
  )
}

export default AuthLayout

