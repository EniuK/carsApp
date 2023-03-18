import { ViewStyle } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import Touchable from "../components/Touchable"
import React, { useCallback } from "react"
import { Text, Box, VStack, Image, HStack, Divider } from "native-base"
import BackHeader from "../components/BackHeader"
import { AntDesign } from "@expo/vector-icons"
import CardCar from "../../assets/images/card_car.png"
import LinearGradient from "react-native-linear-gradient"
import { useNavigation } from "@react-navigation/native"

const ModelDetails = () => {
  const navigation = useNavigation()
  const colors = ["red", "white"]
  const iconSize = 28
  const onBack = useCallback(() => {
    navigation.goBack()
  }, [])

  console.log(colors[0])
  return (
    <Box>
      <LinearGradient
        style={$container}
        start={{ x: 0, y: 1 }}
        end={{ x: 2, y: 0 }}
        colors={["#06153C", "#2917FC", "#192f6a"]}
      >
        <SafeAreaView>
          <BackHeader title="ModelDetails" hideHeader />
          <HStack mb={-4}>
            <Box ml={4} width={"30%"} justifyContent={"flex-start"} alignItems={"flex-start"}>
              <Box style={$iconContainer}>
                <Touchable onPress={onBack}>
                  <AntDesign name="arrowleft" size={iconSize} color="white" />
                </Touchable>
              </Box>
            </Box>
            <Box w={"70%"} justifyContent={"center"} alignItems={"flex-end"} pr={4}>
              <HStack>
                <Box style={$iconContainer}>
                  <AntDesign name="edit" size={iconSize} color="white" />
                </Box>
                <Box style={$iconContainer}>
                  <AntDesign name="staro" size={iconSize} color="white" />
                </Box>
              </HStack>
            </Box>
          </HStack>
        </SafeAreaView>
      </LinearGradient>

      <Box bg={"#FFFFFF"} pb={5} borderRadius={5} justifyContent="center" alignItems={"center"}>
        <VStack>
          <Box justifyContent={"center"} alignItems={"center"}>
            <Image source={CardCar} resizeMode="stretch" w="100%" alt="big red kitty" />
          </Box>
          <Box justifyContent={"space-between"} mr={10} ml={10}>
            <VStack>
              <Box mt={3} justifyContent={"center"} alignItems={"center"}>
                <Text bold fontSize={22}>
                  Citroen
                </Text>
              </Box>
              <Box pl={7} pr={7} justifyContent={"center"}>
                <Box mt={4} w={"50%"}>
                  <Text>05/03/2023</Text>
                  <Divider w={"80%"} thickness={2} bg={"#B7B7B7"} />
                  <Text color={"#B7B7B7"} bold fontSize={"10"}>
                    DATE ADDED
                  </Text>
                </Box>
                <HStack justifyContent={"space-between"}>
                  <Box mt={4} w={40}>
                    <Text bold>MatchBox</Text>
                    <Divider w={"60%"} thickness={2} bg={"#B7B7B7"} />

                    <Text color={"#B7B7B7"} bold fontSize={"10"}>
                      BRAND
                    </Text>
                  </Box>
                  <Box mt={4} ml={5} w={"50%"} justifyContent={"center"} alignItems={"center"}>
                    <Text bold>2020</Text>
                    <Divider w={"30%"} thickness={2} bg={"#B7B7B7"} />
                    <Text color={"#B7B7B7"} bold fontSize={"10"}>
                      YEAR
                    </Text>
                  </Box>
                </HStack>
                <HStack justifyContent={"space-between"}>
                  <Box mt={4}>
                    <Text bold>Super Chase</Text>
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
                  <Text bold>106</Text>
                  <Divider w={"25%"} thickness={2} bg={"#B7B7B7"} />
                  <Text color={"#B7B7B7"} fontSize={"10"} bold>
                    ID NUMBER
                  </Text>
                </Box>
                <Box mt={4}>
                  <Text>Just some random words to see how notes would look like.</Text>
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
const $iconContainer: ViewStyle = {
  padding: 5,
  marginBottom: 2,
  marginRight: 2,
  borderRadius: 20,
  backgroundColor: "#09154d",
}
export default ModelDetails
