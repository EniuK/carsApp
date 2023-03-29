import { Text, View } from "native-base"
import React from "react"
import BackHeader from "../components/BackHeader"
import ScreenWrapper from "../components/ScreenWrapper"

const SingleCollectionScreen = ({ route }) => {
  const collection = route.params.item || {}
  console.log(collection)
  return (
    <ScreenWrapper>
      <BackHeader title="SingleCollection" />
      <View>
        <Text color={"white"}>Randomtest</Text>
      </View>
    </ScreenWrapper>
  )
}

export default SingleCollectionScreen
