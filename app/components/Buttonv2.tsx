import LinearGradient from "react-native-linear-gradient"
import { Box, Button, Text } from "native-base"
import React from "react"

const Buttonv2 = ({ children }) => {
  return (
    <LinearGradient
      start={{ x: 0, y: 1 }}
      end={{ x: 2, y: 0 }}
      colors={["#06153C", "#2917FC", "#192f6a"]}
      borderRadius={5}
    >
      <Button variant="ghost">
        <Text color={"white"} bold>
          {children}
        </Text>
      </Button>
    </LinearGradient>
  )
}
export default Buttonv2
