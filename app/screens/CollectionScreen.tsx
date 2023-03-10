import React from "react"
import BackHeader from "../components/BackHeader"
import CollectionFragment from "./Home/CollectionFragment"
import FavoritesFragment from "./Home/FavoritesFragment"
import ScreenWrapper from "../components/ScreenWrapper"
import { ScrollView } from "native-base"
const CollectionScreen = () => {
  return (
    <ScreenWrapper>
      <BackHeader title="Collection" />
      <ScrollView>
        <FavoritesFragment />

        <CollectionFragment />
      </ScrollView>
    </ScreenWrapper>
  )
}

export default CollectionScreen
