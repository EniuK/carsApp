import React from "react"
import {
  Text,
  Box,
  VStack,
  Image,
  FlatList,
  Input,
  HStack,
  ArrowBackIcon,
  Divider,
} from "native-base"
import CardCar from "../../../assets/images/card_car.png"

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
      <FlatList scrollEnabled data={fakeCarCollection} renderItem={CollectionItem} />
    </VStack>
  )
}
const fakeCarCollection = [
  {
    id: 1,
    modelName: "Car",
    brand: "big red",
    dateAdded: "today",
  },
  {
    id: 2,
    modelName: "Car",
    brand: "big red",
    dateAdded: "today",
  },
  {
    id: 3,
    modelName: "Car",
    brand: "big red",
    dateAdded: "today",
  },
  {
    id: 4,
    modelName: "Car",
    brand: "big red",
    dateAdded: "today",
  },
]

function CollectionItem({ item: { modelName, brand, dateAdded } }) {
  return (
    <>
      <HStack
        paddingBottom="3"
        mb={5}
        width={"100%"}
        alignItems={"flex-start"}
        justifyContent={"flex-start"}
      >
        <Box position={"relative"} h={150} w={150} mr={0} bg="blue.600" pr={0} ml={0}>
          <Image
            source={CardCar}
            width={150}
            h={150}
            alt="big red kitty"
            bg="black"
            pr={0}
            ml={0}
          />
        </Box>
        <Box ml={5} w={20}>
          <Text bold marginBottom={4} ml={0} bg="coolGray.300">
            {modelName}
          </Text>
          <Text bold ml={0} marginBottom={4} bg="coolGray.300">
            {brand}
          </Text>
          <Text bold ml={0} bg="coolGray.300">
            {dateAdded}
          </Text>
        </Box>
      </HStack>
      <Divider thickness={2} bg="black" mb={3} />
    </>
  )
}

export default CollectionFragment
