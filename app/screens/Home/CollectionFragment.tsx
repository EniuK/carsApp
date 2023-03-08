import React, { useState } from "react"
import { Text, Box, VStack, Image, FlatList, Input, HStack, ArrowBackIcon } from "native-base"
import CardCar from "../../../assets/images/card_car.png"
import car1 from "../../../assets/images/car1.jpeg"
import car2 from "../../../assets/images/car2.jpeg"
import car3 from "../../../assets/images/car3.jpeg"

const CollectionFragment = () => {
  const [filter, setFilter] = useState("")

  const filteredCars = fakeCarCollection.filter((car) => {
    return car.name.toLowerCase().includes(filter.toLowerCase())
  })

  return (
    <VStack space="4">
      <HStack w="100%">
        <ArrowBackIcon size="5" mt={2} mr={2} color="emerald.500" />
        <Input
          onChangeText={(text) => setFilter(text)}
          size="lg"
          placeholder="search car"
          w="80%"
        />
      </HStack>
      <Text bold w={100}>
        All ({filteredCars.length})
      </Text>
      <HStack>
        <FlatList scrollEnabled numColumns={2} data={filteredCars} renderItem={CollectionItem} />
      </HStack>
    </VStack>
  )
}
const fakeCarCollection = [
  {
    id: 1,
    src: CardCar,
    name: "Citroen",
  },
  {
    id: 2,

    src: car1,
    name: "dodge",
  },
  {
    id: 3,

    src: car2,
    name: "red something",
  },
  {
    id: 4,

    src: car3,
    name: "green truck",
  },
]

function CollectionItem({ item: { src, name } }) {
  return (
    <Box borderRadius={10} justifyContent={"space-between"} w={"50%"} mb={5}>
      <VStack>
        <Image
          source={src}
          borderRadius={10}
          width={150}
          h={150}
          alt="big red kitty"
          bg="black"
          pr={0}
          ml={0}
        />
        <Text bold>{name}</Text>
      </VStack>
    </Box>
  )
}

export default CollectionFragment
