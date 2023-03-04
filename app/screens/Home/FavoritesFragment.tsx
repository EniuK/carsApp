import React from "react"
import { Text, Box, VStack, Image, FlatList, HStack } from "native-base"
import CardCar from "../../../assets/images/card_car.png"

const FavoritesFragment = () => {
  return (
    <Box h={410}>
      <Text bold fontSize="xs" marginBottom={5}>
        Favorites
      </Text>
      <FlatList scrollEnabled horizontal data={favorites} renderItem={Item} />
    </Box>
  )
}

const favorites = [
  {
    id: 1,
    title: "bla bla",
    shortDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, tempore. Voluptatum voluptas distinctio, veniam quae magnam assumenda voluptate quasi cum? Recusandae reiciendis illum voluptate nam iste veritatis laboriosam asperiores vel.    ",
    isLast: false,
    category: "cat",
  },
  {
    id: 2,
    title: "bla bla",
    shortDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, tempore. Voluptatum voluptas distinctio, veniam quae magnam assumenda voluptate quasi cum? Recusandae reiciendis illum voluptate nam iste veritatis laboriosam asperiores vel.    ",
    isLast: false,
    category: "dog",
  },
  {
    id: 3,
    title: "bla bla",
    shortDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, tempore. Voluptatum voluptas distinctio, veniam quae magnam assumenda voluptate quasi cum? Recusandae reiciendis illum voluptate nam iste veritatis laboriosam asperiores vel.    ",
    isLast: true,
    category: "woof",
  },
]

function Item({ item: { title, shortDesc, isLast, category } }) {
  return (
    <VStack
      paddingBottom="3"
      mb={5}
      borderTopLeftRadius={20}
      borderTopRightRadius={20}
      bg="coolGray.300"
      width={300}
      style={{ marginRight: isLast ? 0 : 20 }}
    >
      <Box position={"relative"}>
        <Image
          source={CardCar}
          borderTopLeftRadius={20}
          borderTopRightRadius={20}
          alt="big red kitty"
        />
        <Text
          position={"absolute"}
          bottom={0}
          bold
          fontSize="xl"
          color={"white"}
          bg={"black"}
          padding={2}
        >
          {category}
        </Text>
      </Box>
      <Text bold marginTop={0} marginBottom={5} marginLeft={5} fontSize="2xl">
        {title}
      </Text>
      <Text marginLeft={5} paddingRight={5} numberOfLines={3} fontFamily="body" fontWeight="100">
        {shortDesc}
      </Text>
    </VStack>
  )
}

export default FavoritesFragment
