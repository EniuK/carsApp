import React from "react"
import { Text, Box, Divider, VStack, Image, FlatList } from "native-base"
import CardCar from "../../../assets/images/card_car.png"
import ScreenWrapper from "../../components/ScreenWrapper"
import LinearGradient from "react-native-linear-gradient"

const RecentNewsFragment = () => {
  return (
    <VStack bg="#EDF0FF" space="4">
      <Text bold fontSize="2xl" color={"black"}>
        Articles
      </Text>
      <FlatList scrollEnabled borderRadius={20} data={fakeArticles} renderItem={Article} />
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
    <VStack p={3} bg="#EDF0FF" width={"100%"}>
      <Box alignItems={"center"} justifyContent={"center"}>
        <Image source={CardCar} borderRadius={8} alt="big red kitty" />
      </Box>
      <Text bold marginTop={0} marginBottom={3} fontSize="2xl">
        {title}
      </Text>
      <Text numberOfLines={3} fontSize={"lg"} pr={2}>
        {desc}
      </Text>
      <Box mt={3} alignSelf={"flex-end"} justifyContent={"center"}>
        <LinearGradient
          start={{ x: 0, y: 1 }}
          end={{ x: 2, y: 0 }}
          colors={["#06153C", "#2917FC", "#192f6a"]}
        >
          <Text pl={6} pr={6} pt={0.5} pb={0.5} color={"white"}>
            Read more
          </Text>
        </LinearGradient>
      </Box>

      {fakeArticles.length + 1 === id ? null : <Divider mt={4} bg={"gray.400"} />}
    </VStack>
  )
}

export default RecentNewsFragment
