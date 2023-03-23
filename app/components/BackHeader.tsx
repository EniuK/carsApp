import React, { useCallback } from "react"
import { ViewStyle } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { Text, Box, ChevronLeftIcon, Image, HStack, VStack, View } from "native-base"
import Touchable from "./Touchable"
import { spacing } from "../theme"
import { AntDesign, MaterialIcons, Feather } from "@expo/vector-icons"

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
    <VStack style={hideHeader ? $heightOfContainer2 : $heightOfContainer}>
      <HStack style={$header}>
        <Box pt={0} ml={4}>
          <Text fontSize="18" fontWeight={"extrabold"} color="white" letterSpacing="xs">
            DiecastMe
          </Text>
        </Box>
        <Touchable onPress={onProfilePress}>
          <Box alignItems="center" bg={"rgba(18, 20, 73, 0.5)"} borderRadius={20} p={2} mr={2}>
            <Text color={"white"} fontSize={12}>
              {"<icon>" + " "}anynamelongenough
            </Text>
          </Box>
        </Touchable>
      </HStack>
      {hideHeader ? null : (
        <VStack style={$navigationBar}>
          {navigation.canGoBack() ? (
            <View style={[$navigationBarChild, { alignItems: "flex-start" }]}>
              <Touchable onPress={onBack} hitSlop={$hitSlop}>
                <AntDesign name="arrowleft" size={24} color="white" />
              </Touchable>
            </View>
          ) : (
            <Box p={15} style={$navigationBarChild} />
          )}
          <Box style={[$navigationBarChild, $headerTitle]}>
            <HStack>
              <Text pt={2} bold fontSize={18} color={"white"}>
                {title}
              </Text>
              <Box alignItems={"flex-end"} pr={5} flex={1}>
                <HStack>
                  <Box p={2} bg={"rgba(18, 20, 73, 0.5)"} rounded={20}>
                    <MaterialIcons name="search" size={24} color="white" />
                  </Box>
                  <Box p={2} bg={"rgba(18, 20, 73, 0.5)"} rounded={20}>
                    <Feather name="plus" size={24} color="white" />
                  </Box>
                </HStack>
              </Box>
            </HStack>
          </Box>
          {/* {rightAccessory || <Box p={15} style={$navigationBarChild} />} */}
        </VStack>
      )}
    </VStack>
  )
}

export default BackHeader

const $heightOfContainer: ViewStyle = {
  height: 150,
}
const $heightOfContainer2: ViewStyle = {
  height: 70,
}

const $header: ViewStyle = {
  flex: 1,
  justifyContent: "space-between",
}
const $navigationBar: ViewStyle = {
  marginTop: -50,
  paddingLeft: 18,
  flex: 1,
}
const $navigationBarChild: ViewStyle = {}

const $headerTitle: ViewStyle = {
  marginBottom: -50,
  marginTop: 10,
  alignItems: "flex-start",
}

const $hitSlop: ViewStyle = {
  top: 10,
  bottom: 10,
  left: 10,
  right: 10,
}
