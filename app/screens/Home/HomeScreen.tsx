import React, { useCallback } from "react"
import BackHeader from "../../components/BackHeader"
import { Button, VStack, Text, Box, ScrollView, HStack } from "native-base"
import { useNavigation } from "@react-navigation/native"
import RecentNewsFragment from "./RecentNewsFragment"
import ScreenWrapper from "../../components/ScreenWrapper"
import { observer } from "mobx-react-lite"
import { AntDesign } from "@expo/vector-icons"
import { ViewStyle } from "react-native"
import Touchable from "../../components/Touchable"
import { spacing } from "../../theme"
import FeaturedCollections from "./FeaturedCollectionsFragment"
import SmallArticle from "./SmallArticle"

const HomeScreen = observer(() => {
  const navigation = useNavigation()

  const onAddPress = useCallback(() => {
    navigation.navigate("AddCar")
  }, [])
  const onCameraPress = useCallback(() => {
    navigation.navigate("CameraScreen")
  }, [])
  const onCollectionPress = useCallback(() => {
    navigation.navigate("CollectionScreen")
  }, [])
  const onSearchPress = useCallback(() => {
    navigation.navigate("SearchScreen")
  }, [])
  const onModelDetailsPress = useCallback(() => {
    navigation.navigate("ModelDetailsScreen")
  }, [])

  return (
    <ScreenWrapper>
      <BackHeader title="Home" hideHeader />

      <ScrollView>
        <VStack flex={1} flexGrow={1} justifyContent="space-between">
          <FeaturedCollections />
          <RecentNewsFragment />
          <SmallArticle />

          <VStack marginTop={30} alignContent={"center"} alignItems={"center"} space="4">
            <Button w="220" h="65" onPress={onCollectionPress}>
              <Text fontWeight={"extrabold"} fontSize="lg">
                See your collection
              </Text>
            </Button>
            <HStack>
              <Button
                alignSelf={"center"}
                mt={30}
                mb={50}
                w="100"
                h="100"
                onPress={onModelDetailsPress}
                mr={5}
              >
                <Text>Model Details</Text>
              </Button>
              <Button alignSelf={"center"} mt={30} mb={50} w="100" h="100" onPress={onAddPress}>
                <Text>Add car</Text>
              </Button>
            </HStack>
          </VStack>
        </VStack>

        <Box h={100} />
        {/* this box is added just to quick fix buttons */}
      </ScrollView>

      <Box style={$bottomBox}>
        <Touchable onPress={onCollectionPress}>
          <Box style={$bottomButton}>
            <AntDesign name="home" size={24} color="black" />
            <Text fontSize="xs">Home</Text>
          </Box>
        </Touchable>
        <Touchable onPress={onCollectionPress}>
          <Box style={$bottomButton}>
            <AntDesign name="plussquareo" size={24} color="black" />
            <Text fontSize="xs">Add</Text>
          </Box>
        </Touchable>
        <Touchable onPress={onCollectionPress}>
          <Box style={$bottomButton}>
            <AntDesign name="appstore-o" size={24} color="black" />
            <Text fontSize="xs">Collection</Text>
          </Box>
        </Touchable>
      </Box>
    </ScreenWrapper>
  )
})

const $bottomBox: ViewStyle = {
  position: "absolute",

  bottom: 0,
  left: 0,
  right: 0,
  height: 100,
  backgroundColor: "#D6D6D6",

  flex: 3,
  flexDirection: "row",
  justifyContent: "center",
}

const $bottomButton: ViewStyle = {
  alignItems: "center",
  justifyContent: "center",
  paddingVertical: spacing.medium,
  paddingHorizontal: spacing.extraLarge,
}

export default HomeScreen
