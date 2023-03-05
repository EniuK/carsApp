import React from "react"
import { Text, Box, VStack, Image, FlatList, HStack } from "native-base"
import CardCar from "../../../assets/images/card_car.png"

const FavoritesFragment = () => {
  return (
    <Box h={350} mb={10}>
      <Text bold fontSize="2xl" color={"white"} marginBottom={3}>
        Favorites
      </Text>
      <FlatList scrollEnabled horizontal data={favorites} renderItem={Item} />
    </Box>
  )
}

const favorites = [
  {
    id: 1,
    title: "Matchbox",
    shortDesc: "Super Chase",
    isLast: false,
    category: "cat",
  },
  {
    id: 2,
    title: "bla bla",
    shortDesc: "blablabla",
    isLast: false,
    category: "dog",
  },
  {
    id: 3,
    title: "bla bla",
    shortDesc: "blablabla",
    isLast: true,
    category: "woof",
  },
]

function Item({ item: { title, shortDesc, isLast, category } }) {
  return (
    <VStack
      paddingBottom="3"
      mb={5}
      borderRadius={10}
      bg="coolGray.300"
      width={260}
      h={260}
      style={{ marginRight: isLast ? 0 : 20 }}
    >
      <Box position={"relative"} borderRadius={10}>
        <Image source={CardCar} borderRadius={10} w={300} h={150} alt="big red kitty" />
      </Box>
      <Text bold marginTop={5} marginLeft={5} fontSize="2xl">
        {title}
      </Text>
      <Text marginLeft={5} bold paddingRight={5} numberOfLines={3} fontSize="2xl" fontFamily="body">
        {shortDesc}
      </Text>
    </VStack>
  )
}

export default FavoritesFragment
