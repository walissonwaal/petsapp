import { SafeAreaView, StatusBar, View } from 'react-native'
import { TextBold, ToggleTheme } from './components'
import * as Font from 'expo-font'

export default function App () {
  async function loadFonts () {
    await Font.loadAsync({
      Quicksand: require('../assets/fonts/Quicksand-VariableFont_wght.ttf')
    })
  }
  loadFonts()
  if (!loadFonts) return null
  return (
    <SafeAreaView>
      <StatusBar />
      <View className='flex h-full items-center justify-center dark:bg-body light:bg-white'>
        <ToggleTheme />
        <TextBold className='text-2xl dark:text-white light:text-black'>Pets App</TextBold>
      </View>
    </SafeAreaView>
  )
}
