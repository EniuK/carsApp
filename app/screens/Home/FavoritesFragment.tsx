import React from "react"
import { Text, Box, VStack, Image, FlatList, HStack } from "native-base"
import car1 from "../../../assets/images/car1.jpeg"
import car3 from "../../../assets/images/car3.jpeg"
const FavoritesFragment = () => {
  return (
    <Box pl={5} mb={7}>
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
    brand: "Hot Wheels",
    name: "Citroen 2CV",
    src: car1,
    isFavourite: false,
  },
  {
    id: 4,
    brand: "Hot Wheels",
    name: "Green truck",
    src: car3,
    isFavourite: false,
  },
  {
    id: 10,
    brand: "Hot Wheels",
    name: "Green truck",
    src: car3,
    isFavourite: false,
  },
]

function Item({ item: { brand, name, src } }) {
  return (
    <VStack mr={3} borderRadius={10} bg="#EDF0FF" width={160} height={170}>
      <Box position={"relative"} borderRadius={10}>
        <Image source={src} borderRadius={10} width={160} height={105} alt="big red kitty" />
      </Box>
      <Text fontWeight={700} marginTop={1} marginLeft={3} fontSize="xl">
        {brand}
      </Text>
      <Text
        marginLeft={3}
        fontWeight={700}
        paddingRight={5}
        numberOfLines={3}
        fontSize="14"
        mb={2}
        fontFamily="body"
      >
        {name}
      </Text>
    </VStack>
  )
}

export default FavoritesFragment
