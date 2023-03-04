import React from "react"
import { Button, Text } from "native-base"
import ScreenWrapper from "../components/ScreenWrapper"
import BackHeader from "../components/BackHeader"
import User from "./context/User"
import { observer } from "mobx-react-lite"

const ProfileScreen = observer(() => {
  return (
    <ScreenWrapper>
      <BackHeader title="profile" />
      <Button size={"lg"} h={200} onPress={() => User.prototype.updateData(" ", " ", false)}>
        <Text color={"white"}>WYLOGUJ SIE {User.prototype.name}</Text>
      </Button>
    </ScreenWrapper>
  )
})

export default ProfileScreen
