import { Button, VStack, HStack, Text, Box, View } from "native-base"
import React, { useCallback } from "react"
import { useNavigation } from "@react-navigation/native"
import ScreenWrapper from "../../components/ScreenWrapper"
import { observer } from "mobx-react-lite"
import BackHeader from "../../components/BackHeader"
const ElementsReached = observer(() => {
  const navigation = useNavigation()

  const onElementsReachedPress = useCallback(() => {
    navigation.navigate("SubscriptionScreen")
  }, [])

  return (
    <ScreenWrapper>
      <Box>
        <BackHeader title="Home" hideHeader />
      </Box>
      <View h={"100%"} mt={"40%"} alignItems={"center"}>
        <Box justifyContent={"center"} alignItems={"center"}>
          <Box alignContent={"flex-end"} justifyContent={"center"}>
            <Text bold color={"white"} mb={5} fontSize={18}>
              Hey! You’ve reached
            </Text>
          </Box>
          <Box
            w={160}
            h={160}
            bg={"#010031"}
            justifyContent="center"
            alignItems={"center"}
            borderRadius={160}
          >
            <Text fontSize={90} fontFamily={"body"} fontWeight={900} color={"white"}>
              50
            </Text>
          </Box>
          <Text color={"white"} fontSize={18}>
            model cars
          </Text>
          <Text mb={70} color={"white"} fontSize={18}>
            in your collection!
          </Text>
          <Text fontSize={18} mt={10} color={"white"}>
            It’s time to upgrade!
          </Text>

          <Box justifyContent={"center"} alignItems={"center"}>
            <Button
              mt={2}
              w={280}
              h="60"
              variant={"ghost"}
              borderWidth={2}
              borderColor={"white"}
              onPress={onElementsReachedPress}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Text color={"white"} bold fontWeight={"extrabold"} fontSize={22}>
                See the subscription plan
              </Text>
            </Button>
          </Box>
        </Box>
      </View>
    </ScreenWrapper>
  )
})

export default ElementsReached
