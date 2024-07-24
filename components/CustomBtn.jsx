import { Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const CustomBtn = ({ title, handlePress, containerStyles, textStyles, isLoading }) => {
    return (
        <TouchableOpacity
            onPress={handlePress}
            activeOpacity={0.75}
            className={` bg-secondary rounded-xl min-h-[50px] justify-center items-center ${containerStyles} ${isLoading ? 'opacity-50' : ''}`}
            disabled={isLoading}
        >
            <Text className={` text-primary font-semibold text-lg ${textStyles}`}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}

export default CustomBtn

