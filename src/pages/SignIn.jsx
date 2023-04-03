import React from 'react'
import { View, TextInput } from 'react-native'
import { TextBold, TextRegular, TextLight } from '../components'

const SignIn = () => {
  return (
    <View className='w-full px-6'>
      <View className='flex items-center'>
        <TextBold className='text-2xl dark:text-white'>Pets App</TextBold>
        <TextRegular className='dark:text-white'>Cuide do seu Pet</TextRegular>
      </View>
    </View>
  )
}

export default SignIn
