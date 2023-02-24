import React from "react"

import BackHeader from "../components/BackHeader"
import { Screen } from "../components"
import { spacing } from "../theme"
import { ViewStyle } from "react-native"

const SearchScreen = () => {
  return (
    <Screen preset="scroll" safeAreaEdges={["top"]} style={$container}>
      <BackHeader title="Collection" />
    </Screen>
  )
}

export default SearchScreen

const $container: ViewStyle = {
  paddingTop: spacing.large,
  paddingBottom: spacing.huge,
  paddingHorizontal: spacing.large,
}
