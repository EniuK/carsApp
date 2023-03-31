import LinearGradient from "react-native-linear-gradient"
import { Box, Button, Text } from "native-base"
import React from "react"
import { Dimensions, ViewStyle } from "react-native"

const ButtonWithGradient = ({ children, padding, onPress, width, fontsize }) => {
  const windowWidth = Dimensions.get("window").width
  return (
    <Box w={padding ? windowWidth - 100 : null}>
      <LinearGradient
        start={{ x: 0, y: 1 }}
        end={{ x: 2, y: 0 }}
        colors={["#06153C", "#2917FC", "#192f6a"]}
        borderRadius={5}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Button
          variant="ghost"
          onPress={onPress}
          style={width ? $baseViewStyle2 : $baseViewStyle}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Text color={"white"} fontSize={fontsize || 18} bold>
            {children}
          </Text>
        </Button>
      </LinearGradient>
    </Box>
  )
}

const $baseViewStyle: ViewStyle = {
  paddingTop: 1,
  paddingBottom: 1,
}
const $baseViewStyle2: ViewStyle = {
  paddingTop: 10,
  paddingBottom: 10,
}

export default ButtonWithGradient
