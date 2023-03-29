import { VStack } from "native-base"
import React from "react"
import { ScrollView, ViewStyle } from "react-native"
import BackHeader from "../components/BackHeader"
import ScreenWrapper from "../components/ScreenWrapper"

const NewsScreen = ({ news }) => {
  return (
    <ScreenWrapper>
      <BackHeader title="NewsScreen" />

      <ScrollView borderRadius={10} style={$articlesContainer}>
        <VStack mb={10} flex={1} flexGrow={1} justifyContent="space-between"></VStack>
      </ScrollView>
    </ScreenWrapper>
  )
}
const $articlesContainer: ViewStyle = {
  marginBottom: 30,
}
export default NewsScreen
