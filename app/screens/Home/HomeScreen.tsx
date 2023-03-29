import React, { useCallback, useEffect, useState } from "react"
import BackHeader from "../../components/BackHeader"
import { VStack, Text, Box, ScrollView, HStack } from "native-base"
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
import LinearGradient from "react-native-linear-gradient"
import { api } from "../../services/api"

export type CollectionDb = Array<{
  id: string
  name: string
  ownerUserId: string
  featured: boolean
}>

const HomeScreen = observer(() => {
  const initialFeaturedCollections = [
    {
      id: "123456789",
      name: "moja kolekcja",
      ownerUserId: "123",
      featured: true,
    },
    {
      id: "32131213",
      name: "moja kolekcja",
      ownerUserId: "123",
      featured: true,
    },
  ]
  const navigation = useNavigation()
  const [featuredCollections, setFeaturedCollections] = useState(initialFeaturedCollections)
  useEffect(() => {
    async function fun() {
      const data = await api.getFeaturedCollections()

      setFeaturedCollections(data.featuredCollections)
    }

    fun()
  }, [])

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

      <ScrollView borderRadius={10} style={$articlesContainer}>
        <VStack mb={10} flex={1} flexGrow={1} justifyContent="space-between">
          <FeaturedCollections items={featuredCollections} />
          <RecentNewsFragment />
          <SmallArticle />
        </VStack>
      </ScrollView>
      <Box style={$bottomBox}>
        <LinearGradient
          colors={["#06153C", "#2917FC"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={$container}
        >
          <HStack justifyContent={"center"} alignItems={"center"} pl={10} pr={10}>
            <Touchable onPress={onCollectionPress}>
              <Box style={$bottomButton}>
                <AntDesign name="appstore-o" size={36} color="white" />
                <Text fontSize={10} color="white">
                  See your collection
                </Text>
              </Box>
            </Touchable>
            <Touchable onPress={onAddPress}>
              <Box style={$bottomButton}>
                <AntDesign name="pluscircleo" size={36} color="white" />
                <Text fontSize={10} color="white">
                  Add to the collection
                </Text>
              </Box>
            </Touchable>
          </HStack>
        </LinearGradient>
      </Box>
    </ScreenWrapper>
  )
})

const $articlesContainer: ViewStyle = {
  marginBottom: 30,
}
const $container: ViewStyle = {
  flex: 1,
  borderWidth: 1,
  borderColor: "#000000",
  borderRadius: 0,
  shadowColor: "#000000",
  shadowOffset: {
    width: 0,
    height: 4,
  },
}
const $bottomBox: ViewStyle = {
  position: "absolute",
  bottom: 0,
  left: 0,
  right: 0,
  height: 140,

  flex: 3,
}

const $bottomButton: ViewStyle = {
  alignItems: "center",
  justifyContent: "center",
  paddingVertical: spacing.medium,
  paddingHorizontal: spacing.small,
}

export default HomeScreen
