import {
  Button,
  HStack,
  Text,
  Box,
  View,
  FormControl,
  Input,
  Divider,
  Icon,
  Pressable,
} from "native-base"
import React, { useCallback, useState } from "react"
import { useNavigation } from "@react-navigation/native"
import ScreenWrapper from "../../components/ScreenWrapper"
import { MaterialIcons } from "@expo/vector-icons"
import ButtonWithGradient from "../../components/ButtonWithGradient"

const CreateUser = () => {
  const navigation = useNavigation()
  const [show, setShow] = useState(false)
  const onCreateAccountPress = useCallback(() => {
    navigation.navigate("HomeScreen")
  }, [])

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
                  //   value={"model"}
                  borderWidth={0}
                  pl={0}
                  w={"90%"}
                  //   onChangeText={(text) => handleChange("model", text)}
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
                  //   value={"model"}
                  borderWidth={0}
                  pl={0}
                  w={"90%"}
                  //   onChangeText={(text) => handleChange("model", text)}
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
              </Box>
            </FormControl>
            <FormControl>
              <Box mt={2} mb={10} w={"100%"}>
                <Input
                  w={"90%"}
                  borderWidth={0}
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
              </Box>
            </FormControl>

            <ButtonWithGradient padding={true} width={true} onPress={onCreateAccountPress}>
              Create the account
            </ButtonWithGradient>
          </Box>
        </Box>
      </View>
    </ScreenWrapper>
  )
}

export default CreateUser
