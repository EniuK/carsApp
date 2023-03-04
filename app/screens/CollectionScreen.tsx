import { ViewStyle } from "react-native"
import React from "react"
import BackHeader from "../components/BackHeader"
import { Screen } from "../components"
import { spacing } from "../theme"
import CollectionFragment from "./Home/CollectionFragment"
import FavoritesFragment from "./Home/FavoritesFragment"

const CollectionScreen = () => {
  return (
    <Screen preset="scroll" safeAreaEdges={["top"]} style={$container}>
      <BackHeader title="Collection" />
      <FavoritesFragment />
      <CollectionFragment />
    </Screen>
  )
}

export default CollectionScreen

const $container: ViewStyle = {
  paddingTop: spacing.large,
  paddingBottom: spacing.huge,
  paddingHorizontal: spacing.large,
}
