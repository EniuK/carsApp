import { ViewStyle } from "react-native"
import React from "react"
import {
  Text,
  Box,
  VStack,
  Image,
  HStack,
  ChevronLeftIcon,
  ChevronRightIcon,
  ScrollView,
  Divider,
  FlatList,
  Input,
  Button,
} from "native-base"
import BackHeader from "../components/BackHeader"
import { AntDesign } from "@expo/vector-icons"
import CardCar from "../../assets/images/card_car.png"
import ScreenWrapper from "../components/ScreenWrapper"
import Buttonv2 from "../components/Buttonv2"

const AddCar = () => {
  const colors = ["red", "white", "blue"]

  return (
    <ScreenWrapper>
      <BackHeader title="ModelDetails" />

      <ScrollView>
        <Box ml={9} mr={9} pt={5} pb={5} borderRadius={5}>
          <HStack justifyContent={"flex-start"} alignItems={"flex-start"}>
            <Box mb={3} w={"40%"} justifyContent={"center"} alignItems={"center"}>
              <Text bold fontSize={"xl"}>
                Add new
              </Text>
            </Box>
          </HStack>
          <VStack bg={"#FFFFFF"}>
            <Box justifyContent={"center"} alignItems={"center"}>
              <Image
                opacity={0.4}
                source={CardCar}
                resizeMode="stretch"
                w="100%"
                alt="big red kitty"
              />
              <Text
                position={"absolute"}
                justifyContent={"center"}
                alignItems={"center"}
                bold
                fontSize={"xl"}
              >
                Add photo
              </Text>
            </Box>
            <Box p={10} pt={5} justifyContent={"center"} pb={20}>
              <Box mt={2} w={"100%"}>
                <Input type="text" borderWidth={0} pl={0} />
                <Divider w={"100%"} bg={"#CCCCCC"} />
                <Text color={"#CCCCCC"} fontSize={"xs"}>
                  MODEL
                </Text>
              </Box>
              <Box mt={2} w={"100%"}>
                <Input type="text" borderWidth={0} pl={0} />
                <Divider w={"100%"} bg={"#CCCCCC"} />

                <Text color={"#CCCCCC"} fontSize={"xs"}>
                  BRAND
                </Text>
              </Box>

              <Box mt={2} w={"100%"}>
                <Input type="text" borderWidth={0} pl={0}></Input>
                <Divider w={"100%"} bg={"#CCCCCC"} />
                <Text color={"#CCCCCC"} fontSize={"xs"}>
                  SERIES
                </Text>
              </Box>
              <Box mt={2}>
                <Input type="text" borderWidth={0} pl={0}></Input>
                <Divider w={"25%"} bg={"#CCCCCC"} />
                <Text color={"#CCCCCC"} fontSize={"xs"}>
                  YEAR
                </Text>
              </Box>
              <Box mt={2}>
                <Input type="text" borderWidth={0} pl={0}></Input>
                <Divider w={"100%"} bg={"#CCCCCC"} />
                <Text color={"#CCCCCC"} fontSize={"xs"}>
                  ID NUMBER
                </Text>
              </Box>
              <Box mt={2}>
                <HStack space={2}>
                  <Box bg={colors[0] + ".600"} style={$shadow} w={5} h={5} borderRadius={30} />
                  <Box bg={colors[1]} style={$shadow} w={5} h={5} borderRadius={30} />
                  <Box bg={colors[2] + ".600"} style={$shadow} w={5} h={5} borderRadius={30} />
                </HStack>
                <Text color={"#CCCCCC"} fontSize={"xs"} mt={1}>
                  COLORS
                </Text>
              </Box>
              <Box mt={2}>
                <Input type="text" borderWidth={0} pl={0}></Input>
                <Divider bg={"#CCCCCC"} />
                <Text color={"#CCCCCC"} fontSize={"xs"}>
                  NOTES
                </Text>
              </Box>
              <Box mt={2} mb={5}>
                <Input type="text" borderWidth={0} pl={0}></Input>
                <Divider bg={"#CCCCCC"} />
                <Text color={"#CCCCCC"} fontSize={"xs"}>
                  DATE ADDED
                </Text>
              </Box>
              <Buttonv2 padding={false}>ADD TO MY COLLECTION</Buttonv2>
            </Box>
          </VStack>
        </Box>
      </ScrollView>
    </ScreenWrapper>
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
export default AddCar
