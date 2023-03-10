import React from "react"
import { Button, Switch, Text, Box, VStack, ArrowBackIcon, HStack } from "native-base"
import ScreenWrapper from "../components/ScreenWrapper"
import BackHeader from "../components/BackHeader"
import User from "./context/User"
import { observer } from "mobx-react-lite"

const ProfileScreen = observer(() => {
  return (
    <ScreenWrapper>
      <BackHeader title="profile" />
      <Box bg={"#EDF0FF"} h={"100%"} borderRadius={10}>
        <VStack>
          <HStack mt={5} mb={75} justifyContent={"center"} alignItems={"center"}>
            <ArrowBackIcon
              position={"absolute"}
              left={5}
              opacity={0.7}
              size={6}
              justifyContent={"flex-start"}
              alignItems={"flex-start"}
            />
            <Text fontSize={"xl"} bold color={"#09154D"}>
              Preferences
            </Text>
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
              <Text color={"#132788"}>WYLOGUJ SIE {User.prototype.name}</Text>
            </Button>
          </Box>
          <Box mt={2} justifyContent={"center"} alignItems={"center"}>
            <Text fontSize={"xs"}>Cars App v.1.0</Text>
          </Box>
        </VStack>
      </Box>
    </ScreenWrapper>
  )
})

export default ProfileScreen
