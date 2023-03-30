import { VStack, Image, Text, Box } from "native-base"
import React from "react"
import { ViewStyle } from "react-native"
import BackHeader from "../../components/BackHeader"
import ScreenWrapper from "../../components/ScreenWrapper"
import CardCar from "../../assets/images/card_car.png"

const NewsScreen = ({ route }) => {
  const { items } = route.params
  console.log(items)
  return (
    <ScreenWrapper>
      <BackHeader title="NewsScreen" />

      <VStack pb={3} pl={3} pr={3} bg="#EDF0FF" width={"100%"}>
        <Box alignItems={"center"} justifyContent={"center"}>
          <Image source={CardCar} borderRadius={8} alt="big red kitty" />
        </Box>
        <Text bold marginTop={0} marginBottom={3} ml={2} fontSize={18}>
          {items.title}
        </Text>
        <Text numberOfLines={3} ml={2} fontSize={14} pr={2}>
          {items.desc}
        </Text>
      </VStack>
    </ScreenWrapper>
  )
}
const $articlesContainer: ViewStyle = {
  marginBottom: 30,
}
export default NewsScreen
