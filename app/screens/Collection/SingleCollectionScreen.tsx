import { FlatList, Text, View, Image, ScrollView, Box } from "native-base"
import React, { useEffect, useState } from "react"
import BackHeader from "../../components/BackHeader"
import ScreenWrapper from "../../components/ScreenWrapper"
import { api } from "../../services/api"
import CardCar from "../../../assets/images/card_car.png"
import { Dimensions } from "react-native"
import Touchable from "../../components/Touchable"
import { useNavigation } from "@react-navigation/native"

const SingleCollectionScreen = ({ route }) => {
  const windowWidth = Dimensions.get("window").width
  const navigation = useNavigation()

  const collection = route.params.item || {}

  const [collectionElements, setCollectionElements] = useState([])
  console.log(collectionElements)
  useEffect(() => {
    async function fun() {
      const data = await api.getFeaturedCollectionElements(collection.id)
      setCollectionElements(data.collectionElements)
    }

    fun()
  }, [])

  const displayElement = (item) => {
    return (
      <View key={item.index} h={300}>
        <Touchable
          onPress={() => {
            navigation.navigate("ModelDetailsScreen", { items: item.item })
          }}
        >
          <Image source={CardCar} w={windowWidth} h={200} alt="car" />
        </Touchable>
        <Box justifyContent={"center"} alignItems={"center"}>
          <Text color={"black"} fontSize={24}>
            {item.item.brand || item.item.name}
          </Text>
        </Box>
      </View>
    )
  }

  return (
    <ScreenWrapper>
      <BackHeader title="SingleCollection" />
      <ScrollView h={"100%"} bg={"#EDF0FF"}>
        <FlatList data={collectionElements ?? []} renderItem={displayElement} />
      </ScrollView>
    </ScreenWrapper>
  )
}

export default SingleCollectionScreen
