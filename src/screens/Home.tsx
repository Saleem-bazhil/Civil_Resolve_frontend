import { View, Text ,Button} from 'react-native'
import React from 'react'

const Home = ({navigation}:any) => {
  return (
    <View className='bg-background-bgcolor min-h-screen'>
      <Text>Home</Text>
      <Button title='go screen ' onPress={()=>navigation.navigate("Screen")}/>
    </View>
  )
}

export default Home