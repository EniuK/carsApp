import React, { useContext, useEffect, useState } from "react"
import { Text, Box, VStack, Image, HStack, FlatList } from "native-base"
import { useNavigation, useFocusEffect } from "@react-navigation/native"
import Touchable from "../../components/Touchable"
import { api } from "../../services/api"
import { CollectionWithElements } from "../../types/types"
import car3 from "../../../assets/images/car3.jpeg"
import { AppContext } from "../context/userContext"
import { Dimensions } from "react-native"
const screenHeight = Dimensions.get("screen").height

function getSectionListDataFromUserElements(userElements: CollectionWithElements[]) {
  return userElements.map((element) => ({
    title: element.name,
    data: element.elements,
  }))
}

const CollectionFragment = () => {
  const navigation = useNavigation()
  const [collection, setCollection] = useState(null)
  const { users } = useContext(AppContext)

  useFocusEffect(
    React.useCallback(() => {
      async function fetchData() {
        const data = await api.getUserElements(users.id)
        setCollection(getSectionListDataFromUserElements(data.userElements))
      }
      fetchData()
    }, []),
  )
  const CollectionItem = ({ item }) => {
    const elements = item.data
    return (
      <Box
        borderRadius={10}
        alignItems={"center"}
        mr={4}
        mb={2}
        key={item.index}
        width={"100%"}
        flexDirection="row"
        justifyContent="space-between"
      >
        <VStack>
          <Text bold fontSize={24}>
            {item.title + ` (${item.data.length})`}
          </Text>
          <FlatList data={elements ?? []} renderItem={CollectionElements} numColumns={2} />
        </VStack>
      </Box>
    )
  }

  const CollectionElements = (elements) => {
    return (
      <Touchable
        onPress={() => {
          navigation.navigate("ModelDetailsScreen", { items: elements.item })
        }}
        key={elements.index}
      >
        <Box mr={5}>
          <Image
            source={car3}
            borderRadius={5}
            width={160}
            h={160}
            alt="car"
            bg="black"
            pr={0}
            ml={0}
          />
          <Text bold>{elements.item.brand || elements.item.name}</Text>
        </Box>
      </Touchable>
    )
  }
  return (
    <VStack space="4" borderTopRadius={5}>
      <Box bg={"#EDF0FF"} pl={6} pb={20} borderTopRadius={5} minH={screenHeight - 200}>
        <HStack bg={"#EDF0FF"}>
          <FlatList
            data={collection}
            renderItem={CollectionItem}
            keyExtractor={(item) => item.id}
          />
        </HStack>
      </Box>
    </VStack>
  )
}

export default CollectionFragment
