import React, { useCallback } from "react"
import { Button, Switch, Text, Box, VStack, ArrowBackIcon, HStack } from "native-base"
import ScreenWrapper from "../components/ScreenWrapper"
import BackHeader from "../components/BackHeader"
import User from "./context/User"
import { useNavigation } from "@react-navigation/native"
import Touchable from "../components/Touchable"

const ProfileScreen = () => {
  const navigation = useNavigation()
  const onBack = useCallback(() => {
    navigation.goBack()
  }, [])
  return (
    <ScreenWrapper>
      <BackHeader title="profile" hideHeader />
      <Box bg={"#EDF0FF"} h={"100%"} borderRadius={10}>
        <VStack>
          <HStack mt={5} mb={75} justifyContent={"center"} alignItems={"center"}>
            <Box zIndex={10} left={5} justifyContent={"flex-start"} alignItems={"center"}>
              <Touchable onPress={onBack}>
                <ArrowBackIcon opacity={0.7} size={6} />
              </Touchable>
            </Box>

            <Box w={"90%"} mr={5} alignItems={"center"} justifyContent={"center"}>
              <Text fontSize={"xl"} fontWeight={"extrabold"} color={"#09154D"}>
                Preferences
              </Text>
            </Box>
          </HStack>
          <Box mb={10} justifyContent={"center"} alignItems={"center"}>
            <Text color={"#09154D"} bold>
              Notifications
            </Text>
          </Box>
          <Box mb={5} justifyContent={"center"} alignItems={"center"}>
            <HStack>
              <Text mr={5}>Email</Text>
              <Switch onTrackColor="#09154D" onThumbColor="#2400FF" />
            </HStack>
          </Box>
          <Box justifyContent={"center"} alignItems={"center"}>
            <HStack>
              <Text mr={5}>Push</Text>
              <Switch onTrackColor="#09154D" onThumbColor="#2400FF" />
            </HStack>
          </Box>
          <Box justifyContent={"center"} alignItems={"center"}>
            <Button
              variant="ghost"
              mt={200}
              borderWidth={2}
              borderColor={"#132788"}
              width={"60%"}
              onPress={() => User.prototype.updateData(" ", " ", false)}
            >
              <Text color={"#132788"} bold>
                Log out
              </Text>
            </Button>
          </Box>
          <Box mt={2} justifyContent={"center"} alignItems={"center"}>
            <Text fontSize={"xs"}>Cars App v.1.0</Text>
          </Box>
        </VStack>
      </Box>
    </ScreenWrapper>
  )
}

export default ProfileScreen
