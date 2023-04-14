import React, { useContext, useEffect, useState } from "react"
import { Text, Box, VStack, Image, FlatList } from "native-base"
import car1 from "../../../assets/images/car1.jpeg"
import { AppContext } from "../context/userContext"
import { api } from "../../services/api"
import { useFocusEffect } from "@react-navigation/native"

const FavoritesFragment = () => {
  const [favourites, setFavourites] = useState([])
  const { users } = useContext(AppContext)

  useFocusEffect(
    React.useCallback(() => {
      async function fetchData() {
        const favElements = await api.getFavouriteElements(users.id)
        setFavourites(favElements.userFavourites)
      }
      fetchData()
    }, []),
  )
  return (
    <Box pl={5} mb={7}>
      <Text bold fontSize="2xl" color={"white"} marginBottom={3}>
        Favorites
      </Text>
      <FlatList scrollEnabled horizontal data={favourites} renderItem={Item} />
    </Box>
  )
}

function Item({ item }) {
  return (
    <VStack mr={3} borderRadius={10} bg="#EDF0FF" width={160} height={170}>
      <Box position={"relative"} borderRadius={10}>
        <Image source={car1} borderRadius={10} width={160} height={105} alt="big red kitty" />
      </Box>
      <Text fontWeight={700} marginTop={1} marginLeft={3} fontSize="xl">
        {item.brand}
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
        {item.model}
      </Text>
    </VStack>
  )
}

export default FavoritesFragment
