import React from "react"
import BackHeader from "../components/BackHeader"
import CollectionFragment from "./Home/CollectionFragment"
import FavoritesFragment from "./Home/FavoritesFragment"
import ScreenWrapper from "../components/ScreenWrapper"
import { ScrollView } from "native-base"

import { SafeAreaView } from "react-native"

const CollectionScreen = () => {
  return (
    <ScreenWrapper>
      <SafeAreaView>
        <BackHeader title="This is your collection!" />
      </SafeAreaView>
      <ScrollView borderTopRadius={5}>
        <FavoritesFragment />

        <CollectionFragment />
      </ScrollView>
    </ScreenWrapper>
  )
}

export default CollectionScreen
