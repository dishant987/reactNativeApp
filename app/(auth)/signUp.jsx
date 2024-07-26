import { Alert, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../../constants'
import FormField from '../../components/FormField'
import CustomBtn from '../../components/CustomBtn'
import { Link, router } from 'expo-router'
import { createUser } from '../../lib/appwrite'
import { useGlobalContext } from '../../context/GlobalProvider'

const SignUp = () => {
  
  const { setUser, setIsLogged } = useGlobalContext();
  const [isSubmiting, setIsSubmiting] = useState(false)
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: ''
  })
  const submit = async (e) => {
    if (!form.username || !form.password) {
      Alert.alert('Error', 'Please fill in all the field')
      return
    }
    setIsSubmiting(true)
    try {
      const result = await createUser(form.email, form.password, form.username)
      setUser(result);
      setIsLogged(true);
      console.log("signup client : ",result)
      
      router.replace('/signIn')
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
        <View className="w-full justify-center min-h-[85vh] px-5 my-6">
          <Image
            source={images.logo}
            resizeMode='contain'
            className="w-[115px] h-[35px] mx-auto"
          />

          <Text className="text-2xl text-white mx-auto text-semibold mt-10 font-psemibold">
            Sign Up the Aora
          </Text>

          <FormField
            title="Username"
            value={form.username}
            handleChangeText={(e) => setForm({ ...form, username: e })}
            otherStyles="mt-7"

          // placeholder={'Username'}
          />
          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles="mt-7"

          // placeholder={'Email'}
          />
          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            otherStyles="mt-7"

          // placeholder={'Password'}

          />
          <CustomBtn title={'Sign Up'}
            containerStyles={'mt-7'}
            handlePress={submit}
            
            isLoading={isSubmiting}
          />
          <View className="justify-center flex-row pt-5 gap-2">
            <Text className="text-lg text-gray-100 font-pregular">
              Do you have account {''}
            </Text>
            <Link className='text-secondary text-lg underline font-psemibold' href={'/signIn'}>Sign In</Link>
          </View>
        </View>
      </ScrollView>

    </SafeAreaView>
  )
}

export default SignUp

const styles = StyleSheet.create({})