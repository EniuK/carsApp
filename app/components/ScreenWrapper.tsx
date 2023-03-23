import { SafeAreaView } from "react-native-safe-area-context"
import { ViewStyle } from "react-native"
import { colors, spacing } from "../theme"
import LinearGradient from "react-native-linear-gradient"

import React from "react"

const ScreenWrapper = ({ children }) => {
  return (
    <LinearGradient
      style={$container}
      colors={["#2400FF", "#1A1346", "#09154D", "#2400FF"]}
      locations={[0.0126, 0.3644, 0.6308, 0.9777]}
      style={{ flex: 1 }}
      start={{ x: 0, y: 1 }}
      end={{ x: 1, y: 0 }}
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
  paddingLeft: 4,
  paddingRight: 4,
}
