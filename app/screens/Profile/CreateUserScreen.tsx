import {
  HStack,
  Text,
  Box,
  View,
  FormControl,
  Input,
  Divider,
  Icon,
  Pressable,
  Checkbox,
  Button,
} from "native-base"
import React, { useCallback, useEffect, useState } from "react"
import { useNavigation } from "@react-navigation/native"
import ScreenWrapper from "../../components/ScreenWrapper"
import { MaterialIcons } from "@expo/vector-icons"
import ButtonWithGradient from "../../components/ButtonWithGradient"
import { string, object } from "yup"
import { api } from "../../services/api"

const UserSchema = object({
  name: string().required(),
  email: string().email().required(),
  password: string().required(),
  dateOfJoining: string().required(),
  id: string().required(),
})

const initialUser = {
  name: "",
  email: "",
  password: "",
  dateOfJoining: new Date().toJSON().slice(0, 10),
  id: Date.now().toString(),
}

const CreateUser = () => {
  const navigation = useNavigation()
  const [show, setShow] = useState(false)
  const [user, setUser] = useState<UserSchema>(initialUser)
  const [error, setError] = useState(false)
  const [password, SetPassword] = useState("")
  const [createdAccount, setCreatedAccount] = useState(false)

  useEffect(() => {
    if (createdAccount === true) {
      onHomePress()
    }
  }, [createdAccount])

  const onHomePress = useCallback(() => {
    navigation.navigate("HomeScreen")
  }, [])

  const handleChange = (key, value) => {
    setUser((prevState) => ({ ...prevState, [key]: value }))
  }

  const onCreateAccountPress = async () => {
    try {
      setError(false)
      const walidacja = await UserSchema.validate(user)
      if (user.password !== password) {
        throw new Error("incorrect password")
      }
      console.log({ walidacja })
      const userToAdd = {
        ...user,
        premium: false,
        blocked: false,
        status: "active",
      }
      await api.addUser(userToAdd)
      setCreatedAccount(true)
    } catch (error) {
      console.log(error)
      setError(true)
    }
  }

  return (
    <ScreenWrapper>
      <View mt={100} h={"100%"} w={"100%"} alignItems={"center"}>
        <Box justifyContent={"center"} alignItems={"center"} w={"90%"} bg={"white"}>
          <Box mb={35} h={"20%"} alignContent={"flex-end"} justifyContent={"flex-end"}>
            <Text bold color={"black"} fontSize={40}>
              DiecastMe
            </Text>
          </Box>

          <Box justifyContent={"center"} alignItems={"center"}>
            <FormControl>
              <Box mt={2} w={"100%"}>
                <Input
                  type="text"
                  value={user.name}
                  borderWidth={0}
                  pl={0}
                  w={"90%"}
                  onChangeText={(text) => handleChange("name", text)}
                />
                <Divider w={300} borderWidth={1} borderColor={"B7B7B7"} />
                <Text color={"#B7B7B7"} fontSize={"xs"}>
                  NAME/NICKNAME
                </Text>
              </Box>
            </FormControl>
            <FormControl>
              <Box mt={2} w={"100%"}>
                <Input
                  type="text"
                  value={user.email}
                  borderWidth={0}
                  pl={0}
                  w={"90%"}
                  onChangeText={(text) => handleChange("email", text)}
                />
                <Divider w={300} borderWidth={1} borderColor={"B7B7B7"} />
                <Text color={"#B7B7B7"} fontSize={"xs"}>
                  E-MAIL ADRESS
                </Text>
              </Box>
            </FormControl>

            <FormControl>
              <Box mt={2} w={"100%"}>
                <Input
                  w={"90%"}
                  borderWidth={0}
                  value={user.password}
                  onChangeText={(text) => handleChange("password", text)}
                  type={show ? "text" : "password"}
                  InputRightElement={
                    <Pressable onPress={() => setShow(!show)}>
                      <Icon
                        as={<MaterialIcons name={show ? "visibility" : "visibility-off"} />}
                        size={5}
                        mr="2"
                        color="muted.400"
                      />
                    </Pressable>
                  }
                />

                <Divider w={300} borderWidth={1} borderColor={"B7B7B7"} />
                <Text color={"#B7B7B7"} fontSize={"xs"}>
                  PASSWORD
                </Text>
              </Box>
            </FormControl>
            <FormControl>
              <Box mt={2} mb={10} w={"100%"}>
                <Input
                  w={"90%"}
                  borderWidth={0}
                  value={password}
                  onChangeText={(text) => SetPassword(text)}
                  type={show ? "text" : "password"}
                  InputRightElement={
                    <Pressable onPress={() => setShow(!show)}>
                      <Icon
                        as={<MaterialIcons name={show ? "visibility" : "visibility-off"} />}
                        size={5}
                        mr="2"
                        color="muted.400"
                      />
                    </Pressable>
                  }
                />

                <Divider w={300} borderWidth={1} borderColor={"B7B7B7"} />
                <Text color={"#B7B7B7"} fontSize={"xs"}>
                  REPEAT PASSWORD
                </Text>
                {error ? <Text color={"red.600"}>wrong password</Text> : null}
              </Box>
            </FormControl>
            <HStack mb={10}>
              <Checkbox value="test" accessibilityLabel="This is a dummy checkbox" />
              <Text ml={3} fontSize={12}>
                I accept the terms and conditions
              </Text>
            </HStack>
            {/* <Touchable onPress={onHomePress}> */}
            <ButtonWithGradient padding={true} width={true} onPress={onCreateAccountPress}>
              Create the account
            </ButtonWithGradient>
            {/* </Touchable> */}
          </Box>
        </Box>
        <Button mt={5} onPress={onHomePress}>
          skip making user
        </Button>
      </View>
    </ScreenWrapper>
  )
}

export default CreateUser
