import React, { useCallback } from "react"
import { Text, View, ViewStyle } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { Box, ChevronLeftIcon, CircleIcon, HStack, VStack } from "native-base"
import Touchable from "./Touchable"

type BackHeaderProps = {
  title: string
  rightAccessory?: React.ReactNode
}

const BackHeader = ({ title, rightAccessory }: BackHeaderProps) => {
  const navigation = useNavigation()

  const onBack = useCallback(() => {
    navigation.goBack()
  }, [])

  return (
    <VStack space="4">
      <HStack style={$header}>
        <Text>Logo</Text>

        <Box>
          <CircleIcon />
          <Text>Profile</Text>
        </Box>
      </HStack>
      <HStack style={$header}>
        {navigation.canGoBack() ? (
          <Touchable onPress={onBack}>
            <ChevronLeftIcon />
          </Touchable>
        ) : (
          <View />
        )}
        <Box>
          <Text>{title}</Text>
        </Box>
        {rightAccessory || <View />}
      </HStack>
    </VStack>
  )
}

export default BackHeader

const $header: ViewStyle = {
  flex: 1,
  justifyContent: "space-between",
}
