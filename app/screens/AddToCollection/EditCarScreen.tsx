import { ViewStyle, Dimensions } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import React, { useContext, useState } from "react"
import { Text, Box, VStack, Image, HStack, Divider, Input } from "native-base"
import BackHeader from "../../components/BackHeader"
import LinearGradient from "react-native-linear-gradient"
import car3 from "../../../assets/images/car3.jpeg"
import Touchable from "../../components/Touchable"
import { api } from "../../services/api"
import { useNavigation } from "@react-navigation/native"

const EditCar = ({ route }) => {
  const navigation = useNavigation()

  const item = route.params.params
  const windowWidth = Dimensions.get("window").width
  const colors = item?.colors
  const colorsToCheck = [
    "red.400",
    "white",
    "blue.400",
    "green.400",
    "black",
    "yellow.400",
    "violet.400",
    "orange.400",
    "gray.400",
    "#FFD700", // gold
  ]

  const image = item?.src ?? car3

  return (
    <Box bg={"black"}>
      <Box>
        <LinearGradient
          style={$container}
          start={{ x: 0, y: 1 }}
          end={{ x: 2, y: 0 }}
          colors={["#06153C", "#2917FC", "#192f6a"]}
        >
          <SafeAreaView>
            <BackHeader title="EditModel" shortHeader={true} />
          </SafeAreaView>
        </LinearGradient>

        <Box
          bg={"#FFFFFF"}
          width={windowWidth}
          pb={5}
          borderRadius={5}
          justifyContent="center"
          alignItems={"center"}
        >
          <VStack>
            <Box justifyContent={"center"} alignItems={"center"} h={250}>
              <Image w={windowWidth} h={250} source={image} alt="big red kitty" />
            </Box>
            <Box justifyContent={"space-between"} mr={10} ml={10}>
              <VStack>
                <Box mt={3} justifyContent={"center"} alignItems={"center"}>
                  <Text bold fontSize={22}>
                    {item.brand}
                  </Text>
                </Box>
                <Box pl={7} pr={7} justifyContent={"center"}>
                  <Box mt={4} w={"50%"}>
                    <Input
                      borderWidth={0}
                      color={"black"}
                      padding={0}
                      paddingTop={1.5}
                      paddingBottom={1.5}
                      type="text"
                      placeholder={item?.year}
                    />

                    <Divider w={"80%"} thickness={2} bg={"#B7B7B7"} />
                    <Text color={"#B7B7B7"} bold fontSize={"10"}>
                      DATE ADDED
                    </Text>
                  </Box>
                  <HStack justifyContent={"space-between"}>
                    <Box mt={4} w={40}>
                      <Input
                        borderWidth={0}
                        color={"black"}
                        padding={0}
                        paddingTop={1.5}
                        paddingBottom={1.5}
                        type="text"
                        placeholder={item?.brand}
                      />

                      <Divider w={"60%"} thickness={2} bg={"#B7B7B7"} />

                      <Text color={"#B7B7B7"} bold fontSize={"10"}>
                        BRAND
                      </Text>
                    </Box>
                    <Box
                      mt={4}
                      ml={5}
                      w={"50%"}
                      justifyContent={"flex-start"}
                      alignItems={"flex-start"}
                    >
                      <Input
                        borderWidth={0}
                        color={"black"}
                        padding={0}
                        paddingTop={1.5}
                        paddingBottom={1.5}
                        type="text"
                        placeholder={item?.year}
                      />

                      <Divider w={"30%"} thickness={2} bg={"#B7B7B7"} />
                      <Text color={"#B7B7B7"} bold fontSize={"10"}>
                        YEAR
                      </Text>
                    </Box>
                  </HStack>
                  <HStack w={"100%"} justifyContent={"space-between"}>
                    <Box mt={4} w={"50%"}>
                      <Input
                        borderWidth={0}
                        color={"black"}
                        padding={0}
                        paddingTop={1.5}
                        paddingBottom={1.5}
                        type="text"
                        placeholder={item?.series}
                        w={"100%"}
                      />

                      <Divider w={"80%"} thickness={2} bg={"#B7B7B7"} />
                      <Text color={"#B7B7B7"} bold fontSize={"10"}>
                        SERIES
                      </Text>
                    </Box>
                    <Box
                      mt={4}
                      w={"50%"}
                      justifyContent={"flex-start"}
                      alignItems={"flex-start"}
                      ml={23}
                    >
                      <HStack
                        space={2}
                        w={"100%"}
                        justifyContent={"flex-start"}
                        alignItems={"flex-start"}
                      >
                        {colors?.map((col, idx) => {
                          return (
                            <Box key={idx}>
                              {colorsToCheck.map((c) => {
                                if (c === col) {
                                  return (
                                    <Box
                                      key={idx}
                                      bg={col}
                                      style={$shadow}
                                      w={5}
                                      h={5}
                                      borderRadius={30}
                                    />
                                  )
                                } else return null
                              })}
                            </Box>
                          )
                        })}
                      </HStack>
                      <Text color={"#B7B7B7"} bold fontSize={"10"} mt={1}>
                        COLORS
                      </Text>
                    </Box>
                  </HStack>
                  <Box mt={4}>
                    <Input
                      borderWidth={0}
                      color={"black"}
                      padding={0}
                      paddingTop={1.5}
                      paddingBottom={1.5}
                      type="text"
                      placeholder={item?.idNumber}
                      w={"100%"}
                    />
                    <Divider w={"25%"} thickness={2} bg={"#B7B7B7"} />
                    <Text color={"#B7B7B7"} fontSize={"10"} bold>
                      ID NUMBER
                    </Text>
                  </Box>
                  <Box mt={4}>
                    <Input
                      borderWidth={0}
                      color={"black"}
                      padding={0}
                      paddingTop={1.5}
                      paddingBottom={1.5}
                      type="text"
                      placeholder={item?.description}
                      w={"100%"}
                    />

                    <Divider bg={"#B7B7B7"} thickness={2} />
                    <Text color={"#B7B7B7"} fontSize={"10"} bold>
                      NOTES
                    </Text>
                  </Box>

                  <Box mt={5} pb={20}></Box>
                </Box>
              </VStack>
            </Box>
          </VStack>
        </Box>
      </Box>
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

const $container: ViewStyle = {
  paddingBottom: -10,
}

export default EditCar
