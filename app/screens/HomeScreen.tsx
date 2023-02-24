import { ImageBackground, ViewStyle } from "react-native"
import React, { useCallback } from "react"
import BackHeader from "../components/BackHeader"
import { Screen } from "../components"
import { spacing } from "../theme"
import { Box, Button, Spacer, VStack, HStack, Text, Divider, FlatList, Stack } from "native-base"
import { AntDesign } from "@expo/vector-icons"
import Touchable from "../components/Touchable"
import { useNavigation } from "@react-navigation/native"
import CardCar from "../../assets/images/card_car.png"

const HomeScreen = () => {
  const navigation = useNavigation()

  const onCameraPress = useCallback(() => {
    navigation.navigate("CameraScreen")
  }, [])
  const onCollectionPress = useCallback(() => {
    navigation.navigate("CollectionScreen")
  }, [])
  const onSearchPress = useCallback(() => {
    navigation.navigate("SearchScreen")
  }, [])

  return (
    <Screen
      preset="scroll"
      safeAreaEdges={["top"]}
      style={$container}
      contentContainerStyle={$contentContainer}
    >
      <BackHeader title="Home" />

      <VStack flex={1} flexGrow={1} justifyContent="space-between">
        <VStack space="4">
          <Text bold fontSize="xs">
            Recent News
          </Text>
          <FlatList data={fakeArticles} renderItem={Article} />
        </VStack>
        <VStack marginTop={30} alignContent={"center"} alignItems={"center"} space="4">
          <Button w="220" h="65" onPress={onCollectionPress}>
            <Text fontWeight={"extrabold"} fontSize="lg">
              See your collection
            </Text>
          </Button>
          <HStack w="220" justifyContent={"space-between"}>
            <Button w="100" h="65" onPress={onCameraPress}>
              <Text>+ Use scanning</Text>
            </Button>
            <Button w="100" h="65" onPress={onCameraPress}>
              <Text>+ Add manually</Text>
            </Button>
          </HStack>
        </VStack>
      </VStack>
    </Screen>
  )
}

export default HomeScreen

const fakeArticles = [
  {
    id: 1,
    title: "React Native",
    desc: "blab lab la",
  },
  {
    id: 2,
    title: "Matchboxes on the way",
    desc: "blab lab la",
  },
  {
    id: 3,
    title: "Diecasters are on high",
    desc: "blab lab la",
  },
]

function Article({ item: { id, title, desc } }) {
  return (
    <Box flex={1}>
      <Stack>
        <Text>{id}</Text>
        <Text>{title}</Text>
        <Text>{desc}</Text>
      </Stack>
      <ImageBackground source={CardCar} style={{ width: "100%", height: "100%" }} />
    </Box>
  )
}

const $container: ViewStyle = {
  paddingTop: spacing.large,
  paddingBottom: spacing.huge,
  paddingHorizontal: spacing.large,
}

const $contentContainer: ViewStyle = {
  flexGrow: 1,
}
