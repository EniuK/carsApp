import LinearGradient from "react-native-linear-gradient"
import { Box, Button, Text } from "native-base"
import React from "react"
import { Dimensions, ViewStyle } from "react-native"

const ButtonWithGradient = ({ children, padding, onPress }) => {
  const windowWidth = Dimensions.get("window").width

  return (
    <Box w={windowWidth - 100} bg={"amber.300"}>
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
          w={"100%"}
          style={padding ? $baseViewStyle : $baseViewStyle2}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Text color={"white"} fontSize={18} bold>
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
  paddingRight: 10,
  paddingLeft: 10,
}
export default ButtonWithGradient
