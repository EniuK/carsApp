import React from "react"
import { Text, Box, VStack, Image, FlatList, HStack } from "native-base"
import fakeCarCollection from "../fakeCollection"

const CollectionFragment = () => {
  // const [filter, setFilter] = useState("")

  // const filteredCars = fakeCarCollection.filter((car) => {
  //   return car.name.toLowerCase().includes(filter.toLowerCase())
  // })
  // eslint-disable-next-line no-lone-blocks
  {
    /* <HStack w="100%">
        <ArrowBackIcon size="5" mt={2} mr={2} color="emerald.500" /> */
  }
  // eslint-disable-next-line no-lone-blocks
  {
    /* <Input
          onChangeText={(text) => setFilter(text)}
          size="lg"
          placeholder="search car"
          w="80%"
        /> */
  }
  // eslint-disable-next-line no-lone-blocks
  {
    /* </HStack> */
  }
  return (
    <VStack space="4" borderTopRadius={5}>
      <Box bg={"#EDF0FF"} pl={6} pb={20} borderTopRadius={5}>
        <Text bold fontSize={16} w={100} mt={3} mb={3}>
          All ({fakeCarCollection.length})
        </Text>
        <HStack bg={"#EDF0FF"} justifyContent={"center"} alignItems={"center"}>
          <FlatList
            scrollEnabled
            numColumns={2}
            data={fakeCarCollection}
            renderItem={CollectionItem}
          />
        </HStack>
      </Box>
    </VStack>
  )
}

function CollectionItem({ item: { src, name } }) {
  return (
    <Box borderRadius={10} justifyContent={"center"} alignItems={"center"} mr={5} mb={2}>
      <VStack>
        <Image
          source={src}
          borderRadius={5}
          width={160}
          h={160}
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
