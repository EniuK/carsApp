import React, { useCallback } from "react"
import { Text, Box, VStack, Image, FlatList } from "native-base"
import CardCar from "../../../assets/images/card_car.png"
import LinearGradient from "react-native-linear-gradient"
import { useNavigation } from "@react-navigation/native"
import Touchable from "../../components/Touchable"

const FeaturedCollections = (items: any) => {
  const navigation = useNavigation()

  const featuredColl = items.items

  return (
    <VStack mb={2}>
      <Box>
        <Text ml={3} bold fontSize={"xl"} color={"white"}>
          Featured Collections
        </Text>
        <FlatList scrollEnabled horizontal data={featuredColl} renderItem={ftCollection} />
      </Box>
    </VStack>
  )

  function ftCollection({ item }) {
    return (
      <Touchable
        onPress={() => {
          navigation.navigate("SingleCollectionScreen", (route = { item }))
        }}
      >
        <VStack>
          <Box h={200} m={2} mr={1} justifyContent={"flex-end"} alignItems={"flex-start"}>
            <LinearGradient
              colors={["rgba(0, 0, 0, 0.2)", "rgba(0, 0, 0, 0.2)"]}
              style={{ flex: 1 }}
            >
              <Image
                borderRadius={5}
                w={100}
                h={200}
                source={CardCar}
                alt={item.id}
                opacity={0.9}
              />
            </LinearGradient>

            <Box ml={2} position={"absolute"} mb={5}>
              <Text bold color={"white"}>
                {item.name}
              </Text>
              <Text bold color={"white"}>
                {item.name + "we need to add this xd"}
              </Text>
            </Box>
          </Box>
        </VStack>
      </Touchable>
    )
  }
}
export default FeaturedCollections
