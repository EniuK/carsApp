import { Button, VStack, HStack, Text, Box, View, ScrollView } from "native-base"
import User from "./context/User"
import React, { useCallback, useEffect, useState } from "react"
import { useNavigation } from "@react-navigation/native"
import ScreenWrapper from "../components/ScreenWrapper"
import { observer } from "mobx-react-lite"

const WelcomeScreen = observer(() => {
  const navigation = useNavigation()

  const onWelcomePress = useCallback(() => {
    navigation.navigate("HomeScreen")
  }, [])

  return (
    <ScreenWrapper>
      <View h={"100%"} justifyContent={"center"} alignItems={"center"}>
        <Text bold color={"white"}>
          DiecastMe
        </Text>
        <Button
          w="100"
          h="65"
          variant={"ghost"}
          borderWidth={2}
          borderColor={"white"}
          onPress={onWelcomePress}
        >
          <Text>Welcome</Text>
        </Button>
      </View>
    </ScreenWrapper>
  )
})

export default WelcomeScreen
