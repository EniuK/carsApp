import { SafeAreaView } from "react-native-safe-area-context"
import { ViewStyle } from "react-native"
import { colors, spacing } from "../theme"

import React from "react"

const ScreenWrapper = ({ children }) => {
  return <SafeAreaView style={$container}>{children}</SafeAreaView>
}

export default ScreenWrapper
const $container: ViewStyle = {
  paddingTop: spacing.large,
  paddingBottom: spacing.huge,
  paddingHorizontal: spacing.large,
  backgroundColor: colors.background,
}
