import React, { useEffect, useState } from "react"
import { Text, Box, Divider, VStack, Image, FlatList } from "native-base"
import CardCar from "../../../assets/images/card_car.png"
import Buttonv2 from "../../components/ButtonWithGradient"
import { useNavigation } from "@react-navigation/native"
import { api } from "../../services/api"

const RecentNewsFragment = () => {
  const [bigArticles, setBigArticles] = useState([])
  useEffect(() => {
    async function getArticles() {
      const art = await api.getArticles()
      const bigArt = art.articles.filter((e) => {
        return e.type === "big"
      })

      setBigArticles(bigArt)
    }
    getArticles()
  }, [])
  const navigation = useNavigation()

  function Article({ item }) {
    return (
      <VStack pb={3} pl={3} pr={3} bg="#EDF0FF" width={"100%"}>
        <Box alignItems={"center"} justifyContent={"center"}>
          <Image source={CardCar} borderRadius={8} alt="big red kitty" />
        </Box>
        <Text bold marginTop={0} marginBottom={3} ml={2} fontSize={18}>
          {item.title}
        </Text>
        <Text numberOfLines={3} ml={2} fontSize={14} pr={2}>
          {item.description}
        </Text>
        <Box mt={3} alignSelf={"flex-end"} justifyContent={"center"}>
          <Buttonv2
            padding={false}
            width={false}
            fontsize={13}
            onPress={() => {
              navigation.navigate("NewsScreen", { items: item })
            }}
          >
            Read more
          </Buttonv2>
        </Box>

        {/* {fakeArticles.length + 1 === item.id ? null : <Divider mt={4} bg={"gray.400"} />} */}
      </VStack>
    )
  }

  return (
    <VStack bg="#EDF0FF" borderTopRadius={10} space="4">
      <Text pl={6} pt={3} bold fontSize={20} color={"black"}>
        Articles
      </Text>
      <FlatList scrollEnabled borderRadius={20} data={bigArticles} renderItem={Article} />
    </VStack>
  )
}

export default RecentNewsFragment
