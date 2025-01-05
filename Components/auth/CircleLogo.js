import React from 'react'
import { View, Image } from 'react-native'


const CircleLogo = () => {
  return (
    <View style={{
        justifyContent: 'center',
        alignItems: 'center',
    }}>
        <Image
            source={require("../../assets/image.png")}
            style={{
                width: 150,
                height: 150,
                marginVertical: 20,
                opacity: 0.9
            }}
        />
    </View>
  )
}

export default CircleLogo