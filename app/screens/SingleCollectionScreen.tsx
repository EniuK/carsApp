import { FlatList, Text, View, Image } from "native-base"
import React, { useEffect, useState } from "react"
import BackHeader from "../components/BackHeader"
import ScreenWrapper from "../components/ScreenWrapper"
import { api } from "../services/api"
import CardCar from "../../assets/images/card_car.png"

const SingleCollectionScreen = ({ route }) => {
  const collection = route.params.item || {}
  const initialCollectionElements = [
    {
      name: "hej",
    },
  ]
  const [collectionElements, setCollectionElements] = useState(initialCollectionElements)
  useEffect(() => {
    async function fun() {
      const data = await api.getFeaturedCollectionElements(collection.id)
      setCollectionElements(data.collectionElements)
    }

    fun()
  }, [])

  const displayElement = (item) => {
    return (
      <View>
        <Image source={CardCar} />
        <Text color={"black"}>{item.brand}</Text>
      </View>
    )
  }

  return (
    <ScreenWrapper>
      <BackHeader title="SingleCollection" />
      <View h={"100%"} bg={"#EDF0FF"}>
        <FlatList data={collectionElements ?? []} renderItem={displayElement} />
      </View>
    </ScreenWrapper>
  )
}

export default SingleCollectionScreen
