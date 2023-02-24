import { ViewStyle } from "react-native"
import React from "react"
import BackHeader from "../components/BackHeader"
import { Screen } from "../components"
import { spacing } from "../theme"

const CollectionScreen = () => {
  return (
    <Screen preset="scroll" safeAreaEdges={["top"]} style={$container}>
      <BackHeader title="Collection" />
    </Screen>
  )
}

export default CollectionScreen

const $container: ViewStyle = {
  paddingTop: spacing.large,
  paddingBottom: spacing.huge,
  paddingHorizontal: spacing.large,
}
