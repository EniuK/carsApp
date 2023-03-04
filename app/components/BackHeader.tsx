import React, { useCallback } from "react"
import { ViewBase, ViewStyle } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { Text, Box, ChevronLeftIcon, HStack, VStack, View } from "native-base"
import Touchable from "./Touchable"
import { Ionicons } from "@expo/vector-icons"
import { spacing } from "../theme"

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
    <VStack space="4" h={130}>
      <HStack style={$header}>
        <HStack alignItems="center" justifyContent="center" style={$logoContainer}>
          <Ionicons name="car-sport-sharp" size={48} color="black" style={$logo} />
          <Text fontSize="lg" bold color="white" letterSpacing="xs">
            Cars app
          </Text>
        </HStack>
        <Touchable onPress={onProfilePress}>
          <Box alignItems="center" justifyContent="center" borderRightWidth={2} pr={2}>
            <Ionicons name="body-outline" size={48} color="black" />
            <Text fontSize="xs" bold>
              Profile
            </Text>
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
            <Text bold fontSize="md">
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
