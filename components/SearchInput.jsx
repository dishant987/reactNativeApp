import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { icons, images } from '../constants'


const SearchInput = ({ }) => {
    const [showPassword, setShowPassword] = useState(false)
    return (


        <View className="flex flex-row items-center space-x-4 w-full h-16 px-4 bg-black-100 rounded-2xl border-2 border-black-200 focus:border-secondary ">
            <TextInput className="text-base mt-0.5 text-white flex-1 font-pregular"
                placeholder="search for video"
                placeholderTextColor={'#7b7b8b'}

            />
            <TouchableOpacity>
                <Image
                    source={icons.search}
                    className="w-5 h-5"
                    resizeMode='contain'
                />
            </TouchableOpacity>
        </View>


    )
}

export default SearchInput

