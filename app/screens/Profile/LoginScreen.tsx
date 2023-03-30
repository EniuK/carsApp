import { Button, HStack, Text, Box, View } from "native-base"
import React, { useCallback } from "react"
import { useNavigation } from "@react-navigation/native"
import ScreenWrapper from "../../components/ScreenWrapper"
import { observer } from "mobx-react-lite"
import { AntDesign } from "@expo/vector-icons"
import { FontAwesome } from "@expo/vector-icons"

const LoginScreen = observer(() => {
  const navigation = useNavigation()

  const onCreateAccountPress = useCallback(() => {
    navigation.navigate("CreateUser")
  }, [])

  return (
    <ScreenWrapper>
      <View mt={100} h={"100%"} alignItems={"center"}>
        <Box justifyContent={"flex-end"} alignItems={"center"}>
          <Box h={"20%"} alignContent={"flex-end"} justifyContent={"flex-end"}>
            <Text bold color={"white"} fontSize={40}>
              DiecastMe
            </Text>
          </Box>
          <Text mt={20} mb={5} fontSize={18} bold color={"white"}>
            Sign up by
          </Text>
          <Box justifyContent={"center"} alignItems={"center"}>
            <Button
              h="60"
              variant={"ghost"}
              borderWidth={2}
              borderColor={"white"}
              justifyContent={"center"}
              alignItems={"center"}
              onPress={onCreateAccountPress}
              pl={5}
              pr={5}
            >
              <Text color={"white"} bold fontWeight={"extrabold"} fontSize={22}>
                E-mail/Phone number
              </Text>
            </Button>
          </Box>
        </Box>
        <Text
          mt={5}
          fontSize={18}
          bold
          justifyContent={"center"}
          color={"white"}
          alignItems={"center"}
        >
          or
        </Text>
        <HStack space={6} mt={5}>
          <Box
            bg={"white"}
            w={50}
            h={50}
            borderRadius={30}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <AntDesign name="google" size={32} color="black" />
          </Box>
          <Box
            bg={"white"}
            w={50}
            h={50}
            borderRadius={30}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <FontAwesome name="facebook" size={32} color="black" />
          </Box>
          <Box
            bg={"white"}
            w={50}
            h={50}
            justifyContent={"center"}
            alignItems={"center"}
            borderRadius={30}
          >
            <AntDesign name="apple1" size={32} color="black" />
          </Box>
        </HStack>
      </View>
    </ScreenWrapper>
  )
})

export default LoginScreen
