import { SafeAreaView, StatusBar, View } from 'react-native'
import { TextBold, ToggleTheme } from './components'
import * as Font from 'expo-font'
import SignIn from './pages/SignIn'

export default function App () {
  async function loadFonts () {
    await Font.loadAsync({
      Quicksand: require('../assets/fonts/Quicksand-VariableFont_wght.ttf')
    })
  }
  loadFonts()
  if (!loadFonts) return null
  return (
    <SafeAreaView className='m-0'>
      <StatusBar />
      <View className='h-full flex items-center py-12 dark:bg-body'>
      <SignIn />
      </View>
    </SafeAreaView>
  )
}
