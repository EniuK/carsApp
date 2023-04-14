import { ViewStyle, Dimensions, Animated } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import React, { useContext, useEffect, useState } from "react"
import { Text, Box, VStack, Image, HStack, Divider, Input, FormControl } from "native-base"
import BackHeader from "../../components/BackHeader"
import LinearGradient from "react-native-linear-gradient"
import car3 from "../../../assets/images/car3.jpeg"
import Touchable from "../../components/Touchable"
import { api } from "../../services/api"
import { useNavigation } from "@react-navigation/native"
import ButtonWithGradient from "../../components/ButtonWithGradient"
import { array, date, number, object, string } from "yup"
import { AppContext } from "../context/userContext"

const EditCar = ({ route }) => {
  const item = route.params.params
  const [changedElement, setChangedElement] = useState(item)
  const windowWidth = Dimensions.get("window").width
  const [isOpen, setIsOpen] = useState(false)
  const heightOfcolors = isOpen ? new Animated.Value(150) : new Animated.Value(0)
  const [selectedColors, setSelectedColors] = useState(item.colors)
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
  const navigation = useNavigation()
  const { users } = useContext(AppContext)

  const ElementSchema = object({
    carLink: string().url().nullable(),
    model: string().required(),
    brand: string().required(),
    year: number().required().positive().integer(),
    idNumber: string().required(),
    series: string().required(),
    id: string().required(),
    description: string().required(),
    collectionId: string(),
    collectionsId: array(),
  })
  function formatDate(dateAd) {
    const dateAdded = parseInt(dateAd)
    const date = new Date(dateAdded)
    const day = date.getDate().toString().padStart(2, "0")
    const month = (date.getMonth() + 1).toString().padStart(2, "0")
    const year = date.getFullYear().toString()

    return `${day}-${month}-${year}`
  }
  const shortDate = formatDate(item.id)
  useEffect(() => {
    // console.log(changedElement)
  }, [changedElement])

  const image = item?.src ?? car3
  const handleChange = (key, value) => {
    setChangedElement((prevState) => ({ ...prevState, [key]: value }))
    if (value === "") {
      const initialElementValue = item[key]
      setChangedElement((prevState) => ({ ...prevState, [key]: initialElementValue }))
    }
  }

  const handleColorPress = (color) => {
    let newColors = []
    // console.log(...item.colors)
    // console.log(item.colors === changedElement.colors)
    if (selectedColors.includes(color)) {
      newColors = selectedColors.filter((c) => {
        return c !== color
      })
    } else if (selectedColors === item.colors) {
      newColors = [...item.colors, color]
    } else {
      newColors = [...selectedColors, color]
    }

    if (newColors[0] === undefined) {
      setChangedElement({ ...changedElement, colors: item.colors })
      setSelectedColors(item.colors)
    } else {
      setChangedElement({ ...changedElement, colors: newColors })
      setSelectedColors(newColors)
    }
  }
  const toggleOpen = () => {
    setIsOpen(!isOpen)
    Animated.timing(heightOfcolors, {
      toValue: isOpen ? 0 : 150,
      duration: 500,
      useNativeDriver: false,
    }).start()
  }

  const handleSubmit = async () => {
    try {
      const walidacja = await ElementSchema.validate(changedElement)

      const elementsToCheck = await api.getAllUserElements(users.id)
      elementsToCheck.userElements.filter((e) => {
        return e.owneruserid === users.id
      })
      if (elementsToCheck.userElements.length > 50) {
        navigation.navigate("ElementsReached")
      } else {
        await api.changeElement(changedElement, users.id)

        navigation.navigate("ModelDetailsScreen", { items: changedElement })
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <Box bg={"black"}>
      <Box>
        <LinearGradient
          style={$container}
          start={{ x: 0, y: 1 }}
          end={{ x: 2, y: 0 }}
          colors={["#06153C", "#2917FC", "#192f6a"]}
        >
          <SafeAreaView>
            <BackHeader title="EditModel" shortHeader={true} />
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
            <Box justifyContent={"flex-start"} alignItems={"center"} h={200}>
              <Image w={windowWidth} h={200} source={image} alt="big red kitty" />
            </Box>
            <Box justifyContent={"space-between"} mr={10} ml={10}>
              <VStack>
                <Box mt={3} justifyContent={"center"} alignItems={"center"}>
                  <Text bold fontSize={22}>
                    {item.brand}
                  </Text>
                </Box>
                <Box pl={7} pr={7} justifyContent={"center"}>
                  <Box mt={4} w={"50%"}>
                    <Text>{shortDate}</Text>

                    <Divider w={"80%"} thickness={2} bg={"#B7B7B7"} />
                    <Text color={"#B7B7B7"} bold fontSize={"10"}>
                      DATE ADDED
                    </Text>
                  </Box>
                  <HStack justifyContent={"space-between"}>
                    <Box mt={4} w={40}>
                      <FormControl>
                        <Input
                          borderWidth={0}
                          color={"black"}
                          padding={0}
                          paddingTop={1.5}
                          paddingBottom={1.5}
                          type="text"
                          placeholder={item?.brand}
                          onChangeText={(text) => handleChange("brand", text)}
                        />
                      </FormControl>
                      <Divider w={"60%"} thickness={2} bg={"#B7B7B7"} />

                      <Text color={"#B7B7B7"} bold fontSize={"10"}>
                        BRAND
                      </Text>
                    </Box>
                    <Box
                      mt={4}
                      ml={5}
                      w={"50%"}
                      justifyContent={"flex-start"}
                      alignItems={"flex-start"}
                    >
                      <FormControl>
                        <Input
                          borderWidth={0}
                          color={"black"}
                          padding={0}
                          paddingTop={1.5}
                          paddingBottom={1.5}
                          type="text"
                          placeholder={item?.year}
                          onChangeText={(text) => handleChange("year", text)}
                        />
                      </FormControl>
                      <Divider w={"30%"} thickness={2} bg={"#B7B7B7"} />
                      <Text color={"#B7B7B7"} bold fontSize={"10"}>
                        YEAR
                      </Text>
                    </Box>
                  </HStack>
                  <HStack w={"100%"} justifyContent={"space-between"}>
                    <Box mt={4} w={"50%"}>
                      <FormControl>
                        <Input
                          borderWidth={0}
                          color={"black"}
                          padding={0}
                          paddingTop={1.5}
                          paddingBottom={1.5}
                          type="text"
                          placeholder={item?.series}
                          w={"100%"}
                          onChangeText={(text) => handleChange("series", text)}
                        />
                      </FormControl>

                      <Divider w={"80%"} thickness={2} bg={"#B7B7B7"} />
                      <Text color={"#B7B7B7"} bold fontSize={"10"}>
                        SERIES
                      </Text>
                    </Box>
                    <Box
                      mt={4}
                      w={"50%"}
                      justifyContent={"flex-start"}
                      alignItems={"flex-start"}
                      ml={23}
                    >
                      <Touchable onPress={toggleOpen}>
                        <Text textAlign={"center"} bg={"amber.300"}>
                          Choose colors
                        </Text>
                      </Touchable>
                      <HStack
                        space={2}
                        w={"100%"}
                        justifyContent={"flex-start"}
                        alignItems={"flex-start"}
                      >
                        {isOpen && (
                          <Box ml={5} flexDirection="row" flexWrap="wrap">
                            {colorsToCheck.map((col, idx) => {
                              return (
                                <Box
                                  key={idx}
                                  flexBasis={"20%"}
                                  mt={3}
                                  justifyContent={"center"}
                                  alignItems={"center"}
                                >
                                  <Touchable onPress={() => handleColorPress(col)}>
                                    <Box
                                      borderRadius={15}
                                      borderWidth={1}
                                      borderColor={"black"}
                                      mr={5}
                                      h={15}
                                      w={15}
                                      bg={col}
                                    ></Box>
                                  </Touchable>
                                </Box>
                              )
                            })}
                          </Box>
                        )}
                      </HStack>
                      <Text color={"#B7B7B7"} bold fontSize={"10"} mt={1}>
                        COLORS
                      </Text>
                      <HStack>
                        {changedElement.colors.map((col, idx) => {
                          return (
                            <Box
                              key={idx}
                              borderRadius={15}
                              borderWidth={1}
                              borderColor={"black"}
                              mr={3}
                              h={15}
                              w={15}
                              bg={col}
                            />
                          )
                        })}
                      </HStack>
                    </Box>
                  </HStack>
                  <Box mt={4}>
                    <FormControl>
                      <Input
                        borderWidth={0}
                        color={"black"}
                        padding={0}
                        paddingTop={1.5}
                        paddingBottom={1.5}
                        type="text"
                        placeholder={item?.idNumber}
                        w={"100%"}
                        onChangeText={(text) => handleChange("idNumber", text)}
                      />
                    </FormControl>
                    <Divider w={"25%"} thickness={2} bg={"#B7B7B7"} />
                    <Text color={"#B7B7B7"} fontSize={"10"} bold>
                      ID NUMBER
                    </Text>
                  </Box>
                  <Box mt={4}>
                    <FormControl>
                      <Input
                        borderWidth={0}
                        color={"black"}
                        padding={0}
                        paddingTop={1.5}
                        paddingBottom={1.5}
                        type="text"
                        placeholder={item?.description}
                        w={"100%"}
                        onChangeText={(text) => handleChange("description", text)}
                      />
                    </FormControl>

                    <Divider bg={"#B7B7B7"} thickness={2} />
                    <Text color={"#B7B7B7"} fontSize={"10"} bold>
                      NOTES
                    </Text>
                  </Box>

                  <Box mt={5} pb={20}>
                    <ButtonWithGradient onPress={handleSubmit}>
                      <Text>SAVE CHANGES</Text>
                    </ButtonWithGradient>
                  </Box>
                </Box>
              </VStack>
            </Box>
          </VStack>
        </Box>
      </Box>
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

export default EditCar
