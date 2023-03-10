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
} from "native-base"
import BackHeader from "../components/BackHeader"
import { AntDesign } from "@expo/vector-icons"
import CardCar from "../../assets/images/card_car.png"
import ScreenWrapper from "../components/ScreenWrapper"

const ModelDetails = () => {
  const colors = ["red", "white"]

  console.log(colors[0])
  return (
    <ScreenWrapper>
      <BackHeader title="ModelDetails" />

      <ScrollView>
        <Box bg={"#FFFFFF"} ml={9} mr={9} pt={5} pb={5} borderRadius={5}>
          <HStack justifyContent={"center"} alignItems={"center"}>
            <Box pb={2} pl={2} width={"30%"}>
              <AntDesign name="arrowleft" size={24} color="black" />
            </Box>
            <Box mb={3} w={"40%"} justifyContent={"center"} alignItems={"center"}>
              <Text bold fontSize={"xl"}>
                Citroen
              </Text>
            </Box>
            <Box pb={2} pr={2} justifyContent={"flex-end"} w={"20%"} alignItems={"flex-end"}>
              <AntDesign name="edit" size={24} color="black" />
            </Box>
            <Box pb={2} w={"10%"} pr={2} justifyContent={"flex-end"} alignItems={"flex-end"}>
              <AntDesign name="staro" size={24} color="black" />
            </Box>
          </HStack>
          <ChevronRightIcon
            position={"absolute"}
            color={"white"}
            mt={"30%"}
            right={-40}
            size={10}
          />
          <ChevronLeftIcon color={"white"} position={"absolute"} mt={"30%"} left={-40} size={10} />
          <VStack>
            <Box justifyContent={"center"} alignItems={"center"}>
              <Image
                opacity={0.5}
                source={CardCar}
                resizeMode="stretch"
                w="100%"
                alt="big red kitty"
              />
            </Box>
            <Box p={5} justifyContent={"center"}>
              <Box mt={2} w={"50%"}>
                <Text>05/03/2023</Text>
                <Divider w={"60%"} bg={"#CCCCCC"} />
                <Text color={"#CCCCCC"} fontSize={"xs"}>
                  DATE ADDED
                </Text>
              </Box>
              <HStack w={"50%"}>
                <Box mt={2} w={40}>
                  <Text bold>MatchBox</Text>
                  <Divider w={"60%"} bg={"#CCCCCC"} />

                  <Text color={"#CCCCCC"} fontSize={"xs"}>
                    BRAND
                  </Text>
                </Box>
                <Box mt={2} ml={5} w={"50%"}>
                  <Text bold>2020</Text>
                  <Divider w={"80%"} bg={"#CCCCCC"} />
                  <Text color={"#CCCCCC"} fontSize={"xs"}>
                    YEAR
                  </Text>
                </Box>
              </HStack>
              <HStack w={"50%"}>
                <Box mt={2}>
                  <Text bold>Super Chase</Text>
                  <Divider w={"80%"} bg={"#CCCCCC"} />
                  <Text color={"#CCCCCC"} fontSize={"xs"}>
                    SERIES
                  </Text>
                </Box>
                <Box mt={2} w={20} ml={20}>
                  <HStack space={2}>
                    <Box bg={colors[0] + ".600"} style={$shadow} w={5} h={5} borderRadius={30} />
                    <Box bg={colors[1]} style={$shadow} w={5} h={5} borderRadius={30} />
                  </HStack>
                  <Text color={"#CCCCCC"} fontSize={"xs"} mt={1}>
                    COLORS
                  </Text>
                </Box>
              </HStack>
              <Box mt={2}>
                <Text bold>106</Text>
                <Divider w={"25%"} bg={"#CCCCCC"} />
                <Text color={"#CCCCCC"} fontSize={"xs"}>
                  ID NUMBER
                </Text>
              </Box>
              <Box mt={2}>
                <Text>Just some random words to see how notes would look like.</Text>
                <Divider bg={"#CCCCCC"} />
                <Text color={"#CCCCCC"} fontSize={"xs"}>
                  NOTES
                </Text>
              </Box>
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
export default ModelDetails
