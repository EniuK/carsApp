import { ViewStyle, Dimensions } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import React, { useContext, useEffect, useState } from "react"
import { Text, Box, VStack, Image, HStack, Divider } from "native-base"
import BackHeader from "../../components/BackHeader"
import LinearGradient from "react-native-linear-gradient"
import car3 from "../../../assets/images/car3.jpeg"
import Touchable from "../../components/Touchable"
import { api } from "../../services/api"
import { useNavigation } from "@react-navigation/native"
import { AppContext } from "../context/userContext"

const ModelDetails = ({ route }) => {
  const navigation = useNavigation()
  const { items } = route.params
  const { users } = useContext(AppContext)
  const [del, setDel] = useState(false)
  const [fav, setFav] = useState(items.isFavourite)
  const windowWidth = Dimensions.get("window").width
  const colors = items.colors
  const colorsToCheck = [
    "red.400",
    "white",
    "blue.400",
    "green.400",
    "black",
    "yellow.400",
    "violet.400",
    "orange.400",
    "gray.400",
    "#FFD700", // gold
  ]
  useEffect(() => {
    setFav(items.isFavourite)
  }, [])
  console.log(fav)
  // console.log(items.isFavourite)

  const containerStyle = {
    opacity: del ? 0.2 : 1,
  }
  const touchableStyle = {
    width: "100%",
    height: "100%",
  }

  const image = items?.src ?? car3
  const onDeletePress = async () => {
    await api.deleteElement(items.id)
    navigation.navigate("CollectionScreen")
  }

  const fun = async () => {
    const bol = !fav
    setFav(bol)
    await api.changeFavourite(items, bol, users.id)
  }

  return (
    <Box bg={"black"}>
      <Box style={containerStyle}>
        <LinearGradient
          style={$container}
          start={{ x: 0, y: 1 }}
          end={{ x: 2, y: 0 }}
          colors={["#06153C", "#2917FC", "#192f6a"]}
        >
          <SafeAreaView>
            <BackHeader title="ModelDetails" params={items} favourite={fav} setFavourite={fun} />
          </SafeAreaView>
        </LinearGradient>

        <Box
          bg={"#FFFFFF"}
          width={windowWidth}
          pb={5}
          borderRadius={5}
          justifyContent="center"
          alignItems={"center"}
        >
          <VStack>
            <Box justifyContent={"center"} alignItems={"center"} h={250}>
              <Image w={windowWidth} h={250} source={image} alt="big red kitty" />
            </Box>
            <Box justifyContent={"space-between"} mr={10} ml={10}>
              <VStack>
                <Box mt={3} justifyContent={"center"} alignItems={"center"}>
                  <Text bold fontSize={22}>
                    {items.brand}
                  </Text>
                </Box>
                <Box pl={7} pr={7} justifyContent={"center"}>
                  <Box mt={4} w={"50%"}>
                    <Text>{items.year}</Text>
                    <Divider w={"80%"} thickness={2} bg={"#B7B7B7"} />
                    <Text color={"#B7B7B7"} bold fontSize={"10"}>
                      DATE ADDED
                    </Text>
                  </Box>
                  <HStack justifyContent={"space-between"}>
                    <Box mt={4} w={40}>
                      <Text bold>{items.brand}</Text>
                      <Divider w={"60%"} thickness={2} bg={"#B7B7B7"} />

                      <Text color={"#B7B7B7"} bold fontSize={"10"}>
                        BRAND
                      </Text>
                    </Box>
                    <Box mt={4} ml={5} w={"50%"} justifyContent={"center"} alignItems={"center"}>
                      <Text bold>{items.year}</Text>
                      <Divider w={"30%"} thickness={2} bg={"#B7B7B7"} />
                      <Text color={"#B7B7B7"} bold fontSize={"10"}>
                        YEAR
                      </Text>
                    </Box>
                  </HStack>
                  <HStack justifyContent={"space-between"}>
                    <Box mt={4}>
                      <Text bold>{items.series}</Text>
                      <Divider w={"80%"} thickness={2} bg={"#B7B7B7"} />
                      <Text color={"#B7B7B7"} bold fontSize={"10"}>
                        SERIES
                      </Text>
                    </Box>
                    <Box mt={4} ml={24} w={"50%"} justifyContent={"center"} alignItems={"center"}>
                      <HStack space={2} justifyContent={"flex-start"} alignItems={"flex-start"}>
                        {colors.map((col, idx) => {
                          return (
                            <Box key={idx}>
                              {colorsToCheck.map((c) => {
                                if (c === col) {
                                  return (
                                    <Box
                                      key={idx}
                                      bg={col}
                                      style={$shadow}
                                      w={5}
                                      h={5}
                                      borderRadius={30}
                                    />
                                  )
                                } else return null
                              })}
                            </Box>
                          )
                        })}
                      </HStack>
                      <Text color={"#B7B7B7"} bold fontSize={"10"} mt={1}>
                        COLORS
                      </Text>
                    </Box>
                  </HStack>
                  <Box mt={4}>
                    <Text bold>{items.idNumber}</Text>
                    <Divider w={"25%"} thickness={2} bg={"#B7B7B7"} />
                    <Text color={"#B7B7B7"} fontSize={"10"} bold>
                      ID NUMBER
                    </Text>
                  </Box>
                  <Box mt={4}>
                    <Text>{items.description}</Text>
                    <Divider bg={"#B7B7B7"} thickness={2} />
                    <Text color={"#B7B7B7"} fontSize={"10"} bold>
                      NOTES
                    </Text>
                  </Box>

                  <Box mt={5} pb={20}>
                    {users.id === items.owneruserid ? (
                      <Touchable onPress={() => setDel(true)}>
                        <Text color={"black"} bold>
                          Delete
                        </Text>
                      </Touchable>
                    ) : null}
                  </Box>
                </Box>
              </VStack>
            </Box>
          </VStack>
        </Box>
      </Box>
      {del ? (
        <Box
          position={"absolute"}
          bg={"white"}
          alignItems={"center"}
          mt={"80%"}
          alignSelf={"center"}
          w={"50%"}
          h={"20%"}
        >
          <VStack w={"100%"} h={"100%"} justifyContent={"center"} alignItems={"center"}>
            <Box h={"70%"} pt={"50%"}>
              <Text fontSize={32}>Are you sure?</Text>
            </Box>
            <HStack justifyContent={"space-between"} w={"100%"} h={"30%"} alignItems={"center"}>
              <Box h={"100%"} justifyContent={"center"} alignItems={"center"} w={"50%"}>
                <Touchable style={touchableStyle} onPress={onDeletePress}>
                  <Box
                    justifyContent={"center"}
                    alignItems={"center"}
                    borderWidth={1}
                    w={"100%"}
                    h={"100%"}
                  >
                    <Text>yes</Text>
                  </Box>
                </Touchable>
              </Box>
              <Box justifyContent={"center"} h={"100%"} alignItems={"center"} w={"50%"}>
                <Touchable style={touchableStyle} onPress={() => setDel(false)}>
                  <Box
                    justifyContent={"center"}
                    alignItems={"center"}
                    w={"100%"}
                    h={"100%"}
                    borderWidth={1}
                    borderLeftWidth={0}
                  >
                    <Text>no</Text>
                  </Box>
                </Touchable>
              </Box>
            </HStack>
          </VStack>
        </Box>
      ) : null}
    </Box>
  )
}

const $shadow: ViewStyle = {
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,

  elevation: 5,
}

const $container: ViewStyle = {
  paddingBottom: -10,
}

export default ModelDetails
