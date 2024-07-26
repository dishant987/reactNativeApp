import { Alert, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../../constants'
import FormField from '../../components/FormField'
import CustomBtn from '../../components/CustomBtn'
import { Link, router } from 'expo-router'
import { getCurrentUser, signIn } from '../../lib/appwrite'
import { showMessage } from 'react-native-flash-message'
import { useGlobalContext } from '../../context/GlobalProvider'

const SignIn = () => {
  const { setUser, setIsLogged } = useGlobalContext();
  const [isSubmiting, setIsSubmiting] = useState(false)
  const [form, setForm] = useState({
    email: '',
    password: ''
  })


  const submit = async (e) => {
    if (!form.email || !form.password) {
      Alert.alert('Error', 'Please fill in all the field')
      return
    }
    setIsSubmiting(true)
    try {

      await signIn(form.email, form.password)
      const result  = await getCurrentUser();
      setUser(result)
      setIsLogged(true)
      router.replace('/home')
      // showMessage({
      //   message: "Simple message",
      //   type:'success',
      // })

    } catch (error) {
      Alert.alert('Error', error.message)
      console.log(error.message)
    } finally {
      setIsSubmiting(false)
    }
  }
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView >
        <View className="w-full justify-center min-h-[85vh] px-4 my-6">
          <Image
            source={images.logo}
            resizeMode='contain'
            className="w-[115px] h-[35px] mx-auto"
          />

          <Text className="text-2xl text-white mx-auto text-semibold mt-10 font-psemibold">
            Log in the Aora
          </Text>

          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles="mt-7"

            placeholder={'Email'}
          />
          <FormField
            title="Password"

            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            otherStyles="mt-7"

            placeholder={'Password'}

          />
          <CustomBtn title={'Sign In'}
            containerStyles={'mt-7'}
            handlePress={submit}
            isLoading={isSubmiting}
          />
          <View className="justify-center flex-row pt-5 gap-2">
            <Text className="text-lg text-gray-100 font-pregular">
              Don't have account {''}
            </Text>
            <Link className='text-secondary text-lg underline font-psemibold' href={'/signUp'}>Sign Up</Link>
          </View>
        </View>
      </ScrollView>

    </SafeAreaView>
  )
}

export default SignIn

const styles = StyleSheet.create({})