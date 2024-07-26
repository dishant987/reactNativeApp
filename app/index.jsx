import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link, Redirect, router } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../constants'
import CustomBtn from '../components/CustomBtn'
import { StatusBar } from 'react-native'
import { useGlobalContext } from '../context/GlobalProvider'

const index = () => {
  
  const { isLoading, isLoggedIn } = useGlobalContext()

  if (!isLoading && isLoggedIn) return <Redirect href='/home' />
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: '100%' }}>
        <View className=" w-full justify-center items-center min-h-[85vh] px-5">
          <Image
            source={images.logo}
            className=" w-[130px] h-[84px]"
            resizeMode='contain'
          />
          <Image
            source={images.cards}
            className=" max-w-[380px] w-full h-[300px]"
            resizeMode='contain'
          />

          <View className=" relative mt-3">
            <Text className="text-3xl text-white font-bold text-center">
              Discover Endless Possibilitiees with {'  '}
              <Text className="text-secondary-200 border">
                Aora
              </Text>

            </Text>

          </View>
          <Text className="text-sm font-pregular text-gray-100 mt-5 text-center">
            Where creativity meets innovation: embark on a journey of limitless exploration with Aora
          </Text>
          <CustomBtn containerStyles="w-full mt-7" title="Continue with Email " handlePress={() => { router.push('/signIn') }} />
        </View>
      </ScrollView>
      <StatusBar backgroundColor="black" barStyle={'light-content'} />
    </SafeAreaView>
  )
}

export default index

