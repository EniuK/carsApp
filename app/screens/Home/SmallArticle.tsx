import React, { useCallback, useEffect, useState } from "react"
import { Text, Box, Divider, VStack, HStack, Image, FlatList } from "native-base"
import car2 from "../../../assets/images/car2.jpeg"
import Buttonv2 from "../../components/ButtonWithGradient"
import { api } from "../../services/api"
import { useNavigation } from "@react-navigation/native"

const SmallArticle = () => {
  const [smallArticles, setSmallArticles] = useState([])
  const navigation = useNavigation()

  useEffect(() => {
    async function getArticles() {
      const art = await api.getArticles()

      const smallArt = art.articles.filter((e) => {
        return e.type === "small"
      })

      setSmallArticles(smallArt)
    }
    getArticles()
  })

  function Article({ item }) {
    return (
      <Box justifyContent={"flex-start"} pr={5}>
        <HStack bg="#EDF0FF" mb={10}>
          <Box justifyContent={"flex-start"} pt={8} alignItems={"flex-start"} w={"40%"} p={1}>
            <Image source={car2} borderRadius={20} w={150} h={100} alt="big red kitty" />
          </Box>
          <VStack h={115} w={"80%"} pr={70} pt={7}>
            <Text bold marginTop={0} marginBottom={1} fontSize={18}>
              {item.title}
            </Text>
            <Text numberOfLines={3} fontSize={"14"}>
              {item.description}
            </Text>
          </VStack>
        </HStack>
        <Box alignSelf={"flex-end"} justifyContent={"center"} mt={1}>
          <Buttonv2
            padding={false}
            onPress={() => {
              navigation.navigate("NewsScreen", { items: item })
            }}
            fontsize={13}
          >
            Read more
          </Buttonv2>
        </Box>
        <Divider mt={3} ml={10} bg={"gray.400"} />
        {/* {fakeArticles.length + 1 === id ? null : <Divider mt={3} ml={10} bg={"gray.400"} />} */}
      </Box>
    )
  }
  return (
    <VStack bg="#EDF0FF">
      <FlatList borderRadius={20} data={smallArticles} renderItem={Article} />
    </VStack>
  )
}

export default SmallArticle
