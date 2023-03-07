import React from "react"
import { Text, Box, VStack, Image, FlatList, Input, HStack, ArrowBackIcon } from "native-base"
import CardCar from "../../../assets/images/card_car.png"
import car1 from "../../../assets/images/car1.jpeg"
import car2 from "../../../assets/images/car2.jpeg"
import car3 from "../../../assets/images/car3.jpeg"

const CollectionFragment = () => {
  return (
    <VStack space="4">
      <HStack w="100%">
        <ArrowBackIcon size="5" mt={2} mr={2} color="emerald.500" />
        <Input size="lg" placeholder="search car" w="80%" />
      </HStack>
      <Text borderStyle="solid" borderColor={"black"} borderWidth={1} w={100} ml={203}>
        Sorting icon
      </Text>
      <HStack>
        <FlatList
          scrollEnabled
          numColumns={2}
          data={fakeCarCollection}
          renderItem={CollectionItem}
        />
      </HStack>
    </VStack>
  )
}
const fakeCarCollection = [
  {
    id: 1,
    src: CardCar,
  },
  {
    id: 2,

    src: car1,
  },
  {
    id: 3,

    src: car2,
  },
  {
    id: 4,

    src: car3,
  },
]

function CollectionItem({ item: { src } }) {
  return (
    <Box borderRadius={10} w={"50%"} mr={5} mb={5} ml={0}>
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
    </Box>
  )
}

export default CollectionFragment
