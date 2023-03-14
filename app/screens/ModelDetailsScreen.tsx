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

      <Box bg={"#FFFFFF"} pb={5} borderRadius={5}>
        <VStack>
          <Box justifyContent={"center"} alignItems={"center"}>
            <Image source={CardCar} resizeMode="stretch" w="100%" alt="big red kitty" />
          </Box>
          <Box mt={3} justifyContent={"center"} alignItems={"center"}>
            <Text bold fontSize={22}>
              Citroen
            </Text>
          </Box>
          <Box pl={10} pr={10} justifyContent={"center"}>
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
