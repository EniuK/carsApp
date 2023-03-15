import React, { useCallback } from "react"
import { ViewStyle } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { Text, Box, ChevronLeftIcon, Image, HStack, VStack, View } from "native-base"
import Touchable from "./Touchable"
import { spacing } from "../theme"
import profileIcon from "../../assets/images/profileIcon.png"

type BackHeaderProps = {
  title: string
  rightAccessory?: React.ReactNode
  hideHeader?: boolean
}

const BackHeader = ({ title, rightAccessory, hideHeader }: BackHeaderProps) => {
  const navigation = useNavigation()

  const onBack = useCallback(() => {
    navigation.goBack()
  }, [])
  const onProfilePress = useCallback(() => {
    navigation.navigate("ProfileScreen")
  }, [])

  return (
    <VStack space="4" style={hideHeader ? $heightOfContainer2 : $heightOfContainer}>
      <HStack style={$header}>
        <Box pt={0} ml={4}>
          <Text fontSize="18" fontWeight={"extrabold"} color="white" letterSpacing="xs">
            DiecastMe
          </Text>
        </Box>
        <Touchable onPress={onProfilePress}>
          <Box
            alignItems="center"
            bg={"gray.400"}
            borderRadius={5}
            p={2}
            justifyContent="center"
            mr={2}
          >
            <Image w={30} h={30} source={profileIcon} alt={"profile"}></Image>
          </Box>
        </Touchable>
      </HStack>
      {hideHeader ? null : (
        <HStack style={$navigationBar}>
          {navigation.canGoBack() ? (
            <View style={[$navigationBarChild, { alignItems: "flex-start" }]}>
              <Touchable onPress={onBack} hitSlop={$hitSlop}>
                <Box rounded={25} p={15} bgColor="darkBlue.600">
                  <ChevronLeftIcon color="white" />
                </Box>
              </Touchable>
            </View>
          ) : (
            <Box p={15} style={$navigationBarChild} />
          )}
          <Box style={[$navigationBarChild, $headerTitle]}>
            <Text bold fontSize="xl">
              {title}
            </Text>
          </Box>
          {rightAccessory || <Box p={15} style={$navigationBarChild} />}
        </HStack>
      )}
    </VStack>
  )
}

export default BackHeader

const $heightOfContainer: ViewStyle = {
  height: 140,
}
const $heightOfContainer2: ViewStyle = {
  height: 70,
}

const $logoContainer: ViewStyle = {
  paddingTop: spacing.large,
}
const $logo: ViewStyle = {
  position: "absolute",
  bottom: spacing.medium,
}

const $header: ViewStyle = {
  flex: 1,
  justifyContent: "space-between",
}
const $navigationBar: ViewStyle = {
  flex: 1,
  justifyContent: "space-between",
  alignItems: "center",
  paddingTop: spacing.tiny,
  marginBottom: spacing.medium,
}
const $navigationBarChild: ViewStyle = {
  flex: 1,
}

const $headerTitle: ViewStyle = {
  alignItems: "center",
}

const $hitSlop: ViewStyle = {
  top: 10,
  bottom: 10,
  left: 10,
  right: 10,
}
