import { VStack, HStack, Text, Box, View } from "native-base"
import React, { useCallback } from "react"
import { useNavigation } from "@react-navigation/native"
import ScreenWrapper from "../../components/ScreenWrapper"
import { observer } from "mobx-react-lite"
import LinearGradient from "react-native-linear-gradient"
import { AntDesign } from "@expo/vector-icons"
import ButtonWithGradient from "../../components/ButtonWithGradient"
import Touchable from "../../components/Touchable"
const SubscriptionScreen = observer(() => {
  const navigation = useNavigation()

  const onHomeScreenPress = useCallback(() => {
    navigation.navigate("HomeScreen")
  }, [])

  return (
    <ScreenWrapper>
      <View h={"100%"} w={"100%"} justifyContent={"center"} alignItems={"center"}>
        <Box
          h={"90%"}
          w={"90%"}
          mt={10}
          ml={5}
          mr={5}
          borderRadius={5}
          bg={"white"}
          justifyContent={"flex-start"}
          alignItems={"center"}
        >
          <VStack w={"100%"} alignItems={"center"} justifyContent={"flex-start"}>
            <Box w={"100%"}>
              <LinearGradient
                colors={["#E2E7FF", "rgba(226, 231, 255, 0)"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
              >
                <Box h={60} w={"100%"} alignItems={"center"} justifyContent={"center"}>
                  <Text fontSize={18} fontFamily={"body"} fontWeight={900} color={"#09154D"}>
                    Time to go premium!
                  </Text>
                </Box>
              </LinearGradient>
            </Box>
            {/* box to justify content.  */}
            <Box h={"35%"} />

            <Text fontFamily="body" fontWeight="600" mb={-3}>
              ONLY
            </Text>
            {/* add new font to font theme in app.tsx */}
            <Text fontSize={70} color={"#09154D"} fontFamily={"body"} fontWeight={700}>
              9,99$
            </Text>
            <Text fontSize={12} fontFamily="body" fontWeight="600" mb={7}>
              ONE-TIME PAYMENT
            </Text>
            <Box justifyContent={"flex-start"} alignItems={"flex-start"} w={"70%"} mb={10}>
              <VStack>
                <HStack>
                  <Box
                    w={5}
                    h={5}
                    justifyContent={"center"}
                    alignItems={"center"}
                    bg={"#EDF0FF"}
                    borderRadius={20}
                    mr={2}
                  >
                    <AntDesign name="check" size={24} color="#09154D" />
                  </Box>
                  <Text fontFamily="body" fontWeight="600">
                    unlimited collection
                  </Text>
                </HStack>
                <HStack mt={4}>
                  <Box
                    w={5}
                    h={5}
                    justifyContent={"center"}
                    alignItems={"center"}
                    bg={"#EDF0FF"}
                    borderRadius={20}
                    mr={2}
                  >
                    <AntDesign name="check" size={24} color="#09154D" />
                  </Box>
                  <Text fontFamily="body" fontWeight="600">
                    free of ads
                  </Text>
                </HStack>
              </VStack>
            </Box>
            <ButtonWithGradient width={true} padding={true}>
              Upgrade
            </ButtonWithGradient>
            <Touchable onPress={onHomeScreenPress}>
              <Text mt={3} fontFamily="body" fontWeight="600">
                Skip
              </Text>
            </Touchable>
          </VStack>
        </Box>
      </View>
    </ScreenWrapper>
  )
})

export default SubscriptionScreen
