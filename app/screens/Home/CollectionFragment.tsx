import React, { useEffect, useState } from "react"
import { Text, Box, VStack, Image, HStack, SectionList } from "native-base"
import { useNavigation } from "@react-navigation/native"
import Touchable from "../../components/Touchable"
import { api } from "../../services/api"
import { CollectionWithElements } from "../../types/types"
import car3 from "../../../assets/images/car3.jpeg"

function getSectionListDataFromUserElements(userElements: CollectionWithElements[]) {
  return userElements.map((element) => ({
    title: element.name,
    data: element.elements,
  }))
}

const CollectionFragment = () => {
  const navigation = useNavigation()

  const [collection, setCollection] = useState(null)

  useEffect(() => {
    // pobierz wszystkie elementy usera
    async function fun() {
      const data = await api.getUserElements("1679306069692")

      setCollection(getSectionListDataFromUserElements(data.userElements))
    }

    fun()
  }, [])

  const CollectionItem = ({ item }) => {
    return (
      <Box
        borderRadius={10}
        justifyContent={"center"}
        alignItems={"center"}
        mr={4}
        mb={2}
        key={item.id}
      >
        <VStack>
          <Touchable
            onPress={() => {
              navigation.navigate("ModelDetailsScreen", { items: item })
            }}
          >
            <Image
              source={car3}
              borderRadius={5}
              width={160}
              h={160}
              alt="big red kitty"
              bg="black"
              pr={0}
              ml={0}
            />
          </Touchable>
          <Text bold>{item.name}</Text>
        </VStack>
      </Box>
    )
  }
  return (
    <VStack space="4" borderTopRadius={5}>
      <Box bg={"#EDF0FF"} pl={6} pb={20} borderTopRadius={5}>
        <HStack bg={"#EDF0FF"} justifyContent={"center"} alignItems={"center"}>
          <SectionList
            scrollEnabled
            sections={collection ?? []}
            renderItem={CollectionItem}
            renderSectionHeader={({ section: { title, data } }) => (
              <Text bold fontSize={16} mt={3} mb={3}>
                {title} ({data.length})
              </Text>
            )}
          />
        </HStack>
      </Box>
    </VStack>
  )
}

export default CollectionFragment
