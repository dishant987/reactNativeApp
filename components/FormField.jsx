import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { icons, images } from '../constants'


const FormField = ({ title, value, placeholder, handleChangeText, otherStyles, keyboardType, ...props }) => {
    const [showPassword, setShowPassword] = useState(false)
    return (
        <View className={`space-y-2 ${otherStyles}`}>
            <Text className="text-base text-gray-50">{title}</Text>
            <View className="w-full border-2 rounded-xl h-16 px-4 bg-black-100 focus:border-secondary flex-row items-center ">
                <TextInput className="flex-1 text-white font-psemibold text-base"
                
                    {...props}
                    keyboardType={keyboardType}
                    value={value}
                    placeholder={placeholder}
                    placeholderTextColor={'#7b7b8b'}
                    onChangeText={handleChangeText}
                    secureTextEntry={title === 'Password' && !showPassword}
                />
                {title === 'Password' && (
                    <TouchableOpacity onPress={() => {
                        setShowPassword(!showPassword)
                    }}>
                        <Image className="w-8 h-8"
                            source={!showPassword ? icons.eye : icons.eyeHide}
                        />

                    </TouchableOpacity>
                )}

               

            </View>
           
        </View>
    )
}

export default FormField

