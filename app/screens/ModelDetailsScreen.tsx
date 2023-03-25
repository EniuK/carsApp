import { ViewStyle, Dimensions } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import React from "react"
import { Text, Box, VStack, Image, HStack, Divider } from "native-base"
import BackHeader from "../components/BackHeader"
import LinearGradient from "react-native-linear-gradient"
import car3 from "../../assets/images/car3.jpeg"

const ModelDetails = ({ route }) => {
  const { items } = route.params
  const windowWidth = Dimensions.get("window").width

  const colors = ["red", "white"]

  const image = items?.src ?? car3

  return (
    <Box>
      <LinearGradient
        style={$container}
        start={{ x: 0, y: 1 }}
        end={{ x: 2, y: 0 }}
        colors={["#06153C", "#2917FC", "#192f6a"]}
      >
        <SafeAreaView>
          <BackHeader title="ModelDetails" />
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
                  {items.name}
                </Text>
              </Box>
              <Box pl={7} pr={7} justifyContent={"center"}>
                <Box mt={4} w={"50%"}>
                  <Text>{items.year}</Text>
                  <Divider w={"80%"} thickness={2} bg={"#B7B7B7"} />
                  <Text color={"#B7B7B7"} bold fontSize={"10"}>
                    DATE ADDED
                  </Text>
                </Box>
                <HStack justifyContent={"space-between"}>
                  <Box mt={4} w={40}>
                    <Text bold>{items.name}</Text>
                    <Divider w={"60%"} thickness={2} bg={"#B7B7B7"} />

                    <Text color={"#B7B7B7"} bold fontSize={"10"}>
                      BRAND
                    </Text>
                  </Box>
                  <Box mt={4} ml={5} w={"50%"} justifyContent={"center"} alignItems={"center"}>
                    <Text bold>{items.year}</Text>
                    <Divider w={"30%"} thickness={2} bg={"#B7B7B7"} />
                    <Text color={"#B7B7B7"} bold fontSize={"10"}>
                      YEAR
                    </Text>
                  </Box>
                </HStack>
                <HStack justifyContent={"space-between"}>
                  <Box mt={4}>
                    <Text bold>{items.name}</Text>
                    <Divider w={"80%"} thickness={2} bg={"#B7B7B7"} />
                    <Text color={"#B7B7B7"} bold fontSize={"10"}>
                      SERIES
                    </Text>
                  </Box>
                  <Box mt={4} ml={24} w={"50%"} justifyContent={"center"} alignItems={"center"}>
                    <HStack space={2} justifyContent={"flex-start"} alignItems={"flex-start"}>
                      <Box bg={colors[0] + ".600"} style={$shadow} w={5} h={5} borderRadius={30} />
                      <Box bg={colors[1]} style={$shadow} w={5} h={5} borderRadius={30} />
                    </HStack>
                    <Text color={"#B7B7B7"} bold fontSize={"10"} mt={1}>
                      COLORS
                    </Text>
                  </Box>
                </HStack>
                <Box mt={4}>
                  <Text bold>{items.id}</Text>
                  <Divider w={"25%"} thickness={2} bg={"#B7B7B7"} />
                  <Text color={"#B7B7B7"} fontSize={"10"} bold>
                    ID NUMBER
                  </Text>
                </Box>
                <Box mt={4}>
                  <Text>{items.name}</Text>
                  <Divider bg={"#B7B7B7"} thickness={2} />
                  <Text color={"#B7B7B7"} fontSize={"10"} bold>
                    NOTES
                  </Text>
                </Box>
                <Box mt={5} pb={20}>
                  {/* added pb just to fill the screen */}
                  <Text color={"black"} bold>
                    Delete
                  </Text>
                </Box>
              </Box>
            </VStack>
          </Box>
        </VStack>
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

export default ModelDetails
