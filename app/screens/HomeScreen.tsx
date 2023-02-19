import { Text, ViewStyle } from "react-native"
import React, { useCallback } from "react"
import BackHeader from "../components/BackHeader"
import { Screen } from "../components"
import { spacing } from "../theme"
import { Box, Button, Spacer, VStack } from "native-base"
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

      <Spacer size="20" />

      <Box>
        <VStack space="4">
          <Text>Navigate to screens</Text>

          <Button
            leftIcon={<AntDesign name="dashboard" size={24} color="black" />}
            colorScheme="light"
            onPress={onCameraPress}
          >
            Camera
          </Button>

          <Button
            leftIcon={<AntDesign name="dashboard" size={24} color="black" />}
            colorScheme="light"
            onPress={onCollectionPress}
          >
            Collection
          </Button>

          <Button
            leftIcon={<AntDesign name="dashboard" size={24} color="black" />}
            colorScheme="light"
            onPress={onSearchPress}
          >
            Search
          </Button>
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
