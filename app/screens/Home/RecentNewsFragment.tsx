import React from "react"
import { Text, Box, VStack, Image, FlatList } from "native-base"
import CardCar from "../../../assets/images/card_car.png"

const RecentNewsFragment = () => {
  return (
    <VStack space="4">
      <Text bold fontSize="2xl">
        Recent News
      </Text>
      <FlatList scrollEnabled data={fakeArticles} renderItem={Article} />
    </VStack>
  )
}
const fakeArticles = [
  {
    id: 1,
    title: "New collection arrived!",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum laudantium fugiat tenetur minima in reprehenderit suscipit eveniet! Fugiat, beatae, voluptates atque harum praesentium deleniti modi similique eligendi ut, odit iusto.",
    category: "cat",
  },
  {
    id: 2,
    title: "Matchboxes on the way",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum laudantium fugiat tenetur minima in reprehenderit suscipit eveniet! Fugiat, beatae, voluptates atque harum praesentium deleniti modi similique eligendi ut, odit iusto.",
    category: "cat",
  },
  {
    id: 3,
    title: "Diecasters are on high",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum laudantium fugiat tenetur minima in reprehenderit suscipit eveniet! Fugiat, beatae, voluptates atque harum praesentium deleniti modi similique eligendi ut, odit iusto.",
    category: "cat",
  },
  {
    id: 4,
    title: "KONDOMINIUM",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum laudantium fugiat tenetur minima in reprehenderit suscipit eveniet! Fugiat, beatae, voluptates atque harum praesentium deleniti modi similique eligendi ut, odit iusto.",
    category: "cat",
  },
]

function Article({ item: { title, desc, category } }) {
  return (
    <VStack p={3} mb={5} borderRadius={20} bg="coolGray.300" width={"100%"}>
      <Box position={"relative"} flex={1}>
        <Image source={CardCar} borderRadius={8} alt="big red kitty" />
      </Box>
      <Text bold marginTop={0} marginBottom={3} fontSize="2xl">
        {title}
      </Text>
      <Text numberOfLines={3} fontSize={"lg"} pr={2}>
        {desc}
      </Text>
      <Text bg={"gray.400"} mt={3} w={20} alignSelf={"flex-end"} mr={3} mb={1}>
        Read more
      </Text>
    </VStack>
  )
}

export default RecentNewsFragment
