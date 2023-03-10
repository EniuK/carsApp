import React from "react"
import { Text, Box, VStack, Image, FlatList, HStack } from "native-base"
import CardCar from "../../../assets/images/card_car.png"
import car1 from "../../../assets/images/car1.jpeg"
import car2 from "../../../assets/images/car2.jpeg"
import car3 from "../../../assets/images/car3.jpeg"
const FeaturedCollections = () => {
  return (
    <VStack mb={2}>
      <Box>
        <Text ml={3} bold fontSize={"xl"} color={"white"}>
          Featured Collections
        </Text>
        <FlatList scrollEnabled horizontal data={fakeCollection} renderItem={ftCollection} />
      </Box>
    </VStack>
  )
}

const fakeCollection = [
  {
    name: "Hot Wheels",
    category: "Super Color",
    id: 1,
    src: car1,
  },
  {
    name: "Hot Wheels",
    category: "Super Color",
    id: 2,
    src: car2,
  },
  {
    name: "Hot Wheels",
    category: "Super Color",
    id: 3,
    src: car3,
  },
  {
    name: "Hot Wheels",
    category: "Super Color",
    id: 4,
    src: CardCar,
  },
]

function ftCollection({ item: { src, name, category } }) {
  return (
    <VStack>
      <Box h={200} m={2} justifyContent={"flex-end"} alignItems={"flex-start"}>
        <Image borderRadius={10} w={100} h={200} source={src} alt={name} />
        <Box ml={2} position={"absolute"} mb={5}>
          <Text bold color={"white"}>
            {name}
          </Text>
          <Text bold color={"white"}>
            {category}
          </Text>
        </Box>
      </Box>
    </VStack>
  )
}

export default FeaturedCollections
