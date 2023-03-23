import React, { useCallback } from "react"
import BackHeader from "../components/BackHeader"
import CollectionFragment from "./Home/CollectionFragment"
import FavoritesFragment from "./Home/FavoritesFragment"
import ScreenWrapper from "../components/ScreenWrapper"
import { Box, ScrollView, VStack, Text } from "native-base"
import Touchable from "../components/Touchable"
import { SafeAreaView, ViewStyle } from "react-native"
import { AntDesign } from "@expo/vector-icons"
import { useNavigation } from "@react-navigation/native"

const CollectionScreen = () => {
  const navigation = useNavigation()

  const onBack = useCallback(() => {
    navigation.goBack()
  }, [])
  return (
    <ScreenWrapper>
      <SafeAreaView>
        <BackHeader hideHeader title="" />

        <VStack mt={-9} justifyContent={"flex-start"} alignItems={"flex-start"} mb={4}>
          <Box ml={4} mb={2} width={"30%"} justifyContent={"flex-start"} alignItems={"flex-start"}>
            <Box style={$iconContainer}>
              <Touchable onPress={onBack}>
                <AntDesign name="arrowleft" size={28} color="white" />
              </Touchable>
            </Box>
          </Box>
        </VStack>
      </SafeAreaView>
      <ScrollView borderTopRadius={5}>
        <FavoritesFragment />

        <CollectionFragment />
      </ScrollView>
    </ScreenWrapper>
  )
}

const $iconContainer: ViewStyle = {
  padding: 5,
  marginBottom: 2,
  marginRight: 2,
  borderRadius: 20,
  backgroundColor: "#09154d",
}
export default CollectionScreen
