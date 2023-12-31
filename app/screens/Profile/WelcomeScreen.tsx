import { Button, Text, Box, View } from "native-base"
import React, { useCallback } from "react"
import { useNavigation } from "@react-navigation/native"
import ScreenWrapper from "../../components/ScreenWrapper"
import { observer } from "mobx-react-lite"
const WelcomeScreen = observer(() => {
  const navigation = useNavigation()

  const onWelcomePress = useCallback(() => {
    navigation.navigate("LoginScreen")
  }, [])

  return (
    <ScreenWrapper>
      <View h={"100%"} justifyContent={"center"} alignItems={"center"}>
        <Box justifyContent={"center"} alignItems={"center"}>
          <Box h={"70%"} alignContent={"flex-end"} justifyContent={"center"}>
            <Text bold color={"white"} fontSize={40}>
              TrueCollector
            </Text>
          </Box>
          <Box mt={70} justifyContent={"center"} alignItems={"center"}>
            <Button
              w={250}
              h="60"
              variant={"ghost"}
              borderWidth={2}
              borderColor={"white"}
              onPress={onWelcomePress}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Text color={"white"} bold fontWeight={"extrabold"} fontSize={22}>
                Welcome
              </Text>
            </Button>
          </Box>
        </Box>
      </View>
    </ScreenWrapper>
  )
})

export default WelcomeScreen
