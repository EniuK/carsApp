import { Button, VStack, HStack, Text, Box, View, ScrollView, Image } from "native-base"
import User from "./context/User"
import React, { useCallback, useEffect, useState } from "react"
import { useNavigation } from "@react-navigation/native"
import ScreenWrapper from "../components/ScreenWrapper"
import { observer } from "mobx-react-lite"

const LoginScreenTest = observer(() => {
  return (
    <ScreenWrapper>
      <View h={"100%"} justifyContent={"center"} alignItems={"center"}>
        <Box justifyContent={"center"} alignItems={"center"}>
          <Box h={"70%"} alignContent={"flex-end"} justifyContent={"center"}>
            <Text bold color={"white"} fontSize={40}>
              DiecastMe
            </Text>
          </Box>
          <Text>Sign up by</Text>
          <Box mt={20} justifyContent={"center"} alignItems={"center"}>
            <Button
              w={250}
              h="60"
              variant={"ghost"}
              borderWidth={2}
              borderColor={"white"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Text color={"white"} bold fontWeight={"extrabold"} fontSize={22}>
                E-mail/Phone number
              </Text>
            </Button>
          </Box>
        </Box>
        <Text bold justifyContent={"center"} alignItems={"center"}>
          or
        </Text>
        <HStack>
          {/* <Image source="">

          </Image> */}
        </HStack>
      </View>
    </ScreenWrapper>
  )
})

export default LoginScreenTest
