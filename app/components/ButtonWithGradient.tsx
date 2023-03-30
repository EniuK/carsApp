import LinearGradient from "react-native-linear-gradient"
import { Button, Text } from "native-base"
import React from "react"
import { ViewStyle } from "react-native"

const ButtonWithGradient = ({ children, padding, onPress }) => {
  return (
    <LinearGradient
      start={{ x: 0, y: 1 }}
      end={{ x: 2, y: 0 }}
      colors={["#06153C", "#2917FC", "#192f6a"]}
      borderRadius={5}
    >
      <Button variant="ghost" onPress={onPress} style={padding ? $baseViewStyle : $baseViewStyle2}>
        <Text color={"white"} fontSize={13} bold>
          {children}
        </Text>
      </Button>
    </LinearGradient>
  )
}

const $baseViewStyle: ViewStyle = {
  paddingTop: 1,
  paddingBottom: 1,
}

const $baseViewStyle2: ViewStyle = {
  paddingRight: 2,
  paddingLeft: 3,
}
export default ButtonWithGradient
