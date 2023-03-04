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
        <Text color={"white"}>SIEMANECZKO W APLIKACJI {User.prototype.name}</Text>
        <Button w="100" h="65" onPress={onWelcomePress}>
          <Text>Go to HOMEPAGE </Text>
        </Button>
      </View>
    </ScreenWrapper>
  )
})

export default WelcomeScreen
