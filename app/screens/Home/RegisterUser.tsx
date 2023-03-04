import { observer } from "mobx-react-lite"
import { Button, VStack, HStack, Text, Box, View, ScrollView, Input } from "native-base"
import React, { useReducer, useState } from "react"
import User from "../context/User"

const RegisterUser = observer(() => {
  //   type userDataType = {
  //     name: string
  //     surrname: string
  //     IsLoggedIn: boolean
  //   }

  const initialUser = {
    name: "",
    surrname: "",
    isLoggedIn: false,
  }

  const [data, setData] = useState(initialUser)
  return (
    <Box>
      <VStack justifyContent={"center"} alignItems={"center"}>
        <Input
          size="lg"
          placeholder="Type your name"
          w="80%"
          color={"white"}
          onChangeText={(name: string) => {
            return setData({ ...data, name })
          }}
        />
        <Input
          size="lg"
          placeholder="Type your Surrname"
          w="80%"
          color={"white"}
          onChangeText={(surrname: string) => {
            return setData({ ...data, surrname })
          }}
        />
        <Button
          size={"lg"}
          w={"80%"}
          onPress={() => {
            setData({ ...data, isLoggedIn: true })
            User.prototype.updateData(data.name, data.surrname, data.isLoggedIn)
          }}
        >
          submit
        </Button>
        <Text color={"white"}>Hi {User.prototype.name}</Text>
      </VStack>
    </Box>
  )
})

export default RegisterUser
