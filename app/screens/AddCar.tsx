import { SafeAreaView, ViewStyle } from "react-native"
import React, { useCallback } from "react"
import { Text, Box, VStack, Image, HStack, ScrollView, Divider, Input } from "native-base"
import BackHeader from "../components/BackHeader"
import CardCar from "../../assets/images/card_car.png"
import Buttonv2 from "../components/Buttonv2"
import LinearGradient from "react-native-linear-gradient"
import Touchable from "../components/Touchable"
import { AntDesign } from "@expo/vector-icons"
import { useNavigation } from "@react-navigation/native"

const AddCar = () => {
  const colors = ["red", "white", "blue"]
  const navigation = useNavigation()
  const onBack = useCallback(() => {
    navigation.goBack()
  }, [])
  return (
    <Box>
      <LinearGradient
        start={{ x: 0, y: 1 }}
        end={{ x: 2, y: 0 }}
        colors={["#06153C", "#2917FC", "#192f6a"]}
      >
        <SafeAreaView>
          <BackHeader hideHeader title="" />

          <VStack mt={-9} justifyContent={"flex-start"} alignItems={"flex-start"} mb={4}>
            <Box
              ml={4}
              mb={2}
              width={"30%"}
              justifyContent={"flex-start"}
              alignItems={"flex-start"}
            >
              <Box style={$iconContainer}>
                <Touchable onPress={onBack}>
                  <AntDesign name="arrowleft" size={28} color="white" />
                </Touchable>
              </Box>
            </Box>
            <Box mb={3} w={"40%"} ml={4} justifyContent={"flex-start"} alignItems={"flex-start"}>
              <Text bold color={"white"} fontSize={"18"}>
                Add new
              </Text>
            </Box>
          </VStack>
        </SafeAreaView>
      </LinearGradient>

      <ScrollView>
        <Box pb={270} borderRadius={5} bg={"#FFFFFF"}>
          {/* padding to fix */}
          <VStack bg={"#FFFFFF"}>
            <Box justifyContent={"center"} alignItems={"center"}>
              <Image
                opacity={0.4}
                source={CardCar}
                resizeMode="stretch"
                w="100%"
                alt="big red kitty"
              />
              <Box position={"absolute"} justifyContent={"center"} alignItems={"center"} w={"70%"}>
                <Text
                  bold
                  fontSize={"xl"}
                  pt={2}
                  pb={2}
                  pr={20}
                  pl={20}
                  style={{ borderWidth: 1, borderColor: "blue" }}
                >
                  Add photo
                </Text>
              </Box>
            </Box>
            <Box pl={16} pr={16} pt={4} justifyContent={"center"}>
              <Box mt={2} w={"100%"}>
                <Input type="text" borderWidth={0} pl={0} />
                <Divider w={"100%"} bg={"#B7B7B7"} />
                <Text color={"#B7B7B7"} fontSize={"xs"}>
                  MODEL
                </Text>
              </Box>
              <Box mt={2} w={"100%"}>
                <Input type="text" borderWidth={0} pl={0} />
                <Divider w={"100%"} bg={"#B7B7B7"} />

                <Text color={"#B7B7B7"} fontSize={"xs"}>
                  BRAND
                </Text>
              </Box>

              <Box mt={2} w={"100%"}>
                <Input type="text" borderWidth={0} pl={0}></Input>
                <Divider w={"100%"} bg={"#B7B7B7"} />
                <Text color={"#B7B7B7"} fontSize={"xs"}>
                  SERIES
                </Text>
              </Box>
              <Box mt={2}>
                <Input type="text" borderWidth={0} pl={0}></Input>
                <Divider w={"100%"} bg={"#B7B7B7"} />
                <Text color={"#B7B7B7"} fontSize={"xs"}>
                  YEAR
                </Text>
              </Box>
              <Box mt={2}>
                <Input type="text" borderWidth={0} pl={0}></Input>
                <Divider w={"100%"} bg={"#B7B7B7"} />
                <Text color={"#B7B7B7"} fontSize={"xs"}>
                  ID NUMBER
                </Text>
              </Box>
              <Box mt={8}>
                <HStack space={2}>
                  <Box bg={colors[0] + ".600"} style={$shadow} w={5} h={5} borderRadius={30} />
                  <Box bg={colors[1]} style={$shadow} w={5} h={5} borderRadius={30} />
                  <Box bg={colors[2] + ".600"} style={$shadow} w={5} h={5} borderRadius={30} />
                </HStack>
                <Text color={"#B7B7B7"} fontSize={"xs"} mt={1}>
                  COLORS
                </Text>
              </Box>
              <Box mt={2}>
                <Input type="text" borderWidth={0} pl={0}></Input>
                <Divider bg={"#B7B7B7"} />
                <Text color={"#B7B7B7"} fontSize={"xs"}>
                  NOTES
                </Text>
              </Box>
              <Box mt={2} mb={5}>
                <Input type="text" borderWidth={0} pl={0}></Input>
                <Divider bg={"#B7B7B7"} />
                <Text color={"#B7B7B7"} fontSize={"xs"} mb={7}>
                  DATE ADDED
                </Text>
              </Box>
              <Buttonv2 padding={false}>ADD TO MY COLLECTION</Buttonv2>
            </Box>
          </VStack>
        </Box>
      </ScrollView>
    </Box>
  )
}

const $shadow: ViewStyle = {
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,

  elevation: 5,
}
const $iconContainer: ViewStyle = {
  padding: 5,
  marginBottom: 2,
  marginRight: 2,
  borderRadius: 20,
  backgroundColor: "#09154d",
}
export default AddCar
