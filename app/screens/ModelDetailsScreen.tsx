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
} from "native-base"
import BackHeader from "../components/BackHeader"
import { spacing } from "../theme"
import CardCar from "../../assets/images/card_car.png"
import ScreenWrapper from "../components/ScreenWrapper"

const ModelDetails = () => {
  return (
    // <Screen preset="scroll" safeAreaEdges={["top"]} style={$container}>
    <ScreenWrapper>
      <BackHeader title="ModelDetails" />

      <ScrollView>
        <Box bg={"gray.300"} pl={10} pr={10} pt={5} pb={5}>
          <ChevronRightIcon position={"absolute"} mt={"30%"} right={0} size={10} />
          <ChevronLeftIcon position={"absolute"} mt={"30%"} size={10} />
          <VStack>
            <Box justifyContent={"center"} alignItems={"center"}>
              <Image source={CardCar} alt="big red kitty"></Image>
            </Box>
            <Box justifyContent={"center"}>
              <Box mt={2} w={"50%"}>
                <Text>Date added</Text>
                <Text w={"40%"} bg={"gray.400"} h={7}></Text>
              </Box>
              <HStack w={"50%"}>
                <Box mt={2} w={40}>
                  <Text>Brand</Text>
                  <Text bg={"gray.400"} h={7}></Text>
                </Box>
                <Box mt={2} ml={5} w={"50%"}>
                  <Text>Year</Text>
                  <Text bg={"gray.400"} h={7}></Text>
                </Box>
              </HStack>
              <HStack w={"50%"}>
                <Box mt={2}>
                  <Text>Series Nanme</Text>
                  <Text bg={"gray.400"} w={"80%"} h={7}></Text>
                </Box>
                <Box mt={2} w={20} ml={5}>
                  <Text>Color</Text>
                  <Text bg={"gray.400"} w={"120%"} h={7}></Text>
                </Box>
              </HStack>
              <Box mt={2}>
                <Text>ID</Text>
                <Text bg={"gray.400"} h={7}></Text>
              </Box>
              <Box mt={2}>
                <Text>Notes</Text>
                <Text bg={"gray.400"} h={100}></Text>
              </Box>
            </Box>
          </VStack>
        </Box>
      </ScrollView>
    </ScreenWrapper>

    // </Screen>
  )
}

export default ModelDetails

// type CarModel = {
//   photo: any
//   dateAdded: any
//   brand: any
//   year: any
//   seriesName: any
//   color: any
//   Id: any
//   notes: any
// }
