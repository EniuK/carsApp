import { SafeAreaView } from "react-native-safe-area-context"
import { ViewStyle } from "react-native"
import { colors, spacing } from "../theme"
import LinearGradient from "react-native-linear-gradient"

import React from "react"

const ScreenWrapper = ({ children }) => {
  return (
    <LinearGradient
      style={$container}
      start={{ x: 0, y: 1 }}
      end={{ x: 2, y: 0 }}
      colors={["#06153C", "#2917FC", "#192f6a"]}
    >
      <SafeAreaView style={$container2}>{children}</SafeAreaView>
    </LinearGradient>
  )
}

export default ScreenWrapper
const $container: ViewStyle = {
  paddingTop: 0,
  paddingBottom: spacing.huge,
  marginBottom: 100,
}
const $container2: ViewStyle = {
  paddingBottom: spacing.huge,
  paddingTop: 10,
}
