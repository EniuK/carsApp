import React from "react"
import { Text, Box, VStack, Image, FlatList } from "native-base"
import CardCar from "../../../assets/images/card_car.png"

const RecentNewsFragment = () => {
  return (
    <VStack space="4">
      <Text bold fontSize="xs">
        Recent News
      </Text>
      <FlatList scrollEnabled  data={fakeArticles} renderItem={Article} />
    </VStack>
  )
}
const fakeArticles = [
  {
    id: 1,
    title: "React Native",
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
    <VStack paddingBottom="3"  mb={5} borderTopLeftRadius={20} borderTopRightRadius={20} bg="coolGray.300" width={"100%"} >
      
      <Box position={"relative"} flex={1}>
        <Image source={CardCar} borderTopLeftRadius={20} borderTopRightRadius={20}  alt="big red kitty" />
        <Text position={"absolute"} bottom={0} bold fontSize="xl" color={"white"} bg={"black"} padding={2}>{category}</Text>

      </Box>
      <Text bold marginTop={0} marginBottom={5} paddingLeft={5}  fontSize="2xl">
        {title}
      </Text>
      <Text paddingLeft={5} bg="red.600" numberOfLines={5}>{desc}</Text>
    </VStack>
  )
}

export default RecentNewsFragment
