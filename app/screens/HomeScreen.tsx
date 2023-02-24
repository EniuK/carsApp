import { ViewStyle } from "react-native"
import React, { useCallback } from "react"
import BackHeader from "../components/BackHeader"
import { Screen } from "../components"
import { spacing } from "../theme"
import { Box, Button, Spacer, VStack, HStack, Text, Divider } from "native-base"
import { AntDesign } from "@expo/vector-icons"
import Touchable from "../components/Touchable"
import { useNavigation } from "@react-navigation/native"

const HomeScreen = () => {
  const navigation = useNavigation()

  const onCameraPress = useCallback(() => {
    navigation.navigate("CameraScreen")
  }, [])
  const onCollectionPress = useCallback(() => {
    navigation.navigate({ routeName: "CollectionScreen" })
  }, [])
  const onSearchPress = useCallback(() => {
    navigation.navigate("SearchScreen")
  }, [])

  return (
    <Screen preset="scroll" safeAreaEdges={["top"]} style={$container}>
      <BackHeader title="Home" />

      <Spacer size="10" />

      <Box>
        <VStack space="4">
          <Text>Navigate to screens</Text>
          <HStack justifyContent={"space-between"}>
            <Box w={"30%"} bg={"red.400"} h="20"></Box>
            <Button
              leftIcon={<AntDesign name="dashboard" size={24} color="black" />}
              colorScheme="light"
              onPress={onCameraPress}
              w={"60%"}
            >
              Camera
            </Button>
          </HStack>
          <Divider w="100%" />

          <HStack justifyContent={"space-between"}>
            <Box w={"30%"} bg={"red.400"} h="20"></Box>
            <Button
              leftIcon={<AntDesign name="dashboard" size={24} color="black" />}
              colorScheme="light"
              onPress={onCollectionPress}
              w={"60%"}
            >
              Collection
            </Button>
          </HStack>
          <Divider w="100%" />
          <HStack justifyContent={"space-between"}>
            <Box w={"30%"} bg={"red.400"} h="20"></Box>
            <Button
              leftIcon={<AntDesign name="dashboard" size={24} color="black" />}
              colorScheme="light"
              onPress={onSearchPress}
              w={"60%"}
            >
              Search
            </Button>
          </HStack>

          <Text alignSelf={"center"}>More</Text>
        </VStack>
        <VStack marginTop={30} alignContent={"center"} alignItems={"center"} space="4">
          <Button w="220" h="65">
            <Text fontWeight={"extrabold"} fontSize="lg">
              See your collection
            </Text>
          </Button>
          <HStack w="220" justifyContent={"space-between"}>
            <Button w="100" h="65">
              <Text>+ Use scanning</Text>
            </Button>
            <Button w="100" h="65">
              <Text>+ Add manually</Text>
            </Button>
          </HStack>
        </VStack>
      </Box>
    </Screen>
  )
}

export default HomeScreen

const $container: ViewStyle = {
  paddingTop: spacing.large,
  paddingBottom: spacing.huge,
  paddingHorizontal: spacing.large,
}
