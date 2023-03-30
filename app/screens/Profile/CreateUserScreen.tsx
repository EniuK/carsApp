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

            <Button
              h="60"
              mt={10}
              variant={"ghost"}
              borderWidth={2}
              borderColor={"black"}
              justifyContent={"center"}
              alignItems={"center"}
              onPress={onCreateAccountPress}
              pl={5}
              pr={5}
            >
              <Text color={"black"} bold fontWeight={"extrabold"} fontSize={22}>
                E-mail/Phone number
              </Text>
            </Button>
          </Box>
        </Box>
      </View>
    </ScreenWrapper>
  )
}

export default CreateUser
