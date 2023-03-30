import React from "react"
import { Text, Box, Divider, VStack, HStack, Image, FlatList } from "native-base"
import car2 from "../../../assets/images/car2.jpeg"
import Buttonv2 from "../../components/ButtonWithGradient"

const SmallArticle = () => {
  return (
    <VStack bg="#EDF0FF">
      <FlatList borderRadius={20} data={fakeArticles} renderItem={Article} />
    </VStack>
  )
}
const fakeArticles = [
  {
    id: 1,
    title: "New collection arrived!",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum laudantium fugiat tenetur minima in reprehenderit suscipit eveniet! Fugiat, beatae, voluptates atque harum praesentium deleniti modi similique eligendi ut, odit iusto.",
  },
  {
    id: 2,
    title: "Matchboxes on the way",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum laudantium fugiat tenetur minima in reprehenderit suscipit eveniet! Fugiat, beatae, voluptates atque harum praesentium deleniti modi similique eligendi ut, odit iusto.",
  },
  {
    id: 3,
    title: "Diecasters are on high",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum laudantium fugiat tenetur minima in reprehenderit suscipit eveniet! Fugiat, beatae, voluptates atque harum praesentium deleniti modi similique eligendi ut, odit iusto.",
  },
  {
    id: 4,
    title: "KONDOMINIUM",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum laudantium fugiat tenetur minima in reprehenderit suscipit eveniet! Fugiat, beatae, voluptates atque harum praesentium deleniti modi similique eligendi ut, odit iusto.",
  },
]

function Article({ item: { title, desc, id } }) {
  return (
    <Box alignItems={"center"} justifyContent={"space-between"} pr={5}>
      <HStack bg="#EDF0FF" mb={10}>
        <Box justifyContent={"center"} pt={20} alignItems={"center"} w={"50%"} h={100} p={2}>
          <Image source={car2} borderRadius={20} w={150} h={100} alt="big red kitty" />
        </Box>
        <VStack w={170} h={115} pt={7}>
          <Text bold marginTop={0} marginBottom={1} fontSize={18}>
            {title}
          </Text>
          <Text numberOfLines={3} fontSize={"14"}>
            {desc}
          </Text>
        </VStack>
      </HStack>
      <Box alignSelf={"flex-end"} justifyContent={"center"} mt={1}>
        <Buttonv2 padding={false}>Read more</Buttonv2>
      </Box>
      {fakeArticles.length + 1 === id ? null : <Divider mt={3} ml={10} bg={"gray.400"} />}
    </Box>
  )
}

export default SmallArticle
