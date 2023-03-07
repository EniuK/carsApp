import React from "react"
import { Text, Box, VStack, Image, FlatList, HStack } from "native-base"
import car1 from "../../../assets/images/car1.jpeg"
import car3 from "../../../assets/images/car3.jpeg"
const FavoritesFragment = () => {
  return (
    <Box mb={10}>
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
]

function Item({ item: { brand, name, src } }) {
  return (
    <VStack mr={10} borderRadius={10} bg="coolGray.300" width={200}>
      <Box position={"relative"} borderRadius={10}>
        <Image source={src} borderRadius={10} w={300} h={150} alt="big red kitty" />
      </Box>
      <Text bold marginTop={2} marginLeft={5} fontSize="xl">
        {brand}
      </Text>
      <Text
        marginLeft={5}
        bold
        paddingRight={5}
        numberOfLines={3}
        fontSize="xl"
        mb={2}
        fontFamily="body"
      >
        {name}
      </Text>
    </VStack>
  )
}

export default FavoritesFragment
