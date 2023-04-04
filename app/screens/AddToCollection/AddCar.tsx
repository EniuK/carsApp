import { SafeAreaView, ViewStyle, KeyboardAvoidingView, Platform, Animated } from "react-native"
import React, { useCallback, useEffect, useState } from "react"
import {
  Text,
  Box,
  VStack,
  Image,
  ScrollView,
  Divider,
  Input,
  FormControl,
  Button,
  View,
  HStack,
} from "native-base"
import BackHeader from "../../components/BackHeader"
import CardCar from "../../../assets/images/card_car.png"
import Buttonv2 from "../../components/ButtonWithGradient"
import LinearGradient from "react-native-linear-gradient"
import { useNavigation } from "@react-navigation/native"
import yup, { string, number, date, object, array } from "yup"
import { api } from "../../services/api"
import { ElementToAdd } from "../../types/types"
import Touchable from "../../components/Touchable"
import { color } from "react-native-reanimated"

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
  dateAdded: date().default(() => new Date()),
})

const AddCar = () => {
  const colors = [
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

  const initialElement = {
    carLink:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fallegro.pl%2Foferta%2Fhot-wheels-toyota-supra-12374715136&psig=AOvVaw2r-YHEEhx7XjGZR4PT63r6&ust=1680097627987000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCODUpsTh_v0CFQAAAAAdAAAAABAF",
    model: "",
    brand: "",
    year: "",
    idNumber: "123",
    series: "",
    id: Date.now().toString(),
    description: "",
    owneruserid: "1679306069692",
    colors: [""],
    collectionId: "test",
    collectionsId: [],
  }
  const [element, setElement] = useState<ElementToAdd>(initialElement)

  const handleChange = (key, value) => {
    setElement((prevState) => ({ ...prevState, [key]: value }))
  }
  const handleSubmit = async () => {
    try {
      setElement({ ...element, ["colors"]: selectedColors }) // tylko tak dziala xd
      const walidacja = await ElementSchema.validate(element)

      const elementsToCheck = await api.getAllUserElements("1679306069692")
      elementsToCheck.userElements.filter((e) => {
        return e.owneruserid === "1679306069692"
      })
      if (elementsToCheck.userElements.length > 50) {
        navigation.navigate("ElementsReached")
      } else {
        await api.addElement(element, "1679306069692")

        navigation.navigate("ModelDetailsScreen", { items: element })
      }
    } catch (error) {
      console.log(error)
    }
  }
  const [isOpen, setIsOpen] = useState(false)
  const [selectedColors, setSelectedColors] = useState([])
  const heightValue = isOpen ? new Animated.Value(150) : new Animated.Value(0)
  const handleColorPress = (color) => {
    if (selectedColors.includes(color)) {
      setSelectedColors(
        selectedColors.filter((c) => {
          return c !== color
        }),
      )
    } else {
      setSelectedColors([...selectedColors, color])
    }
  }

  const toggleOpen = () => {
    setIsOpen(!isOpen)
    Animated.timing(heightValue, {
      toValue: isOpen ? 0 : 150,
      duration: 500,
      useNativeDriver: false,
    }).start()
  }
  return (
    <Box>
      <LinearGradient
        start={{ x: 0, y: 1 }}
        end={{ x: 2, y: 0 }}
        colors={["#06153C", "#2917FC", "#192f6a"]}
      >
        <SafeAreaView>
          <BackHeader title="Add new" />
        </SafeAreaView>
      </LinearGradient>

      <ScrollView>
        <Box pb={270} flex={1} borderRadius={5} bg={"#FFFFFF"}>
          <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "position" : "height"}>
            {/* padding to fix */}
            <VStack bg={"#FFFFFF"}>
              <Box justifyContent={"center"} alignItems={"center"}>
                <Image
                  opacity={0.4}
                  source={CardCar}
                  resizeMode="stretch"
                  w="100%"
                  alt="big red kitty"
                />
                <Box
                  position={"absolute"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  w={"70%"}
                >
                  <Text
                    bold
                    fontSize={"xl"}
                    pt={2}
                    pb={2}
                    pr={20}
                    pl={20}
                    style={{ borderWidth: 1, borderColor: "blue" }}
                  >
                    Add photo
                  </Text>
                </Box>
              </Box>
              <Box pl={16} pr={16} pt={4} justifyContent={"center"}>
                <FormControl>
                  <Box mt={2} w={"100%"}>
                    <Input
                      type="text"
                      value={element.model}
                      borderWidth={0}
                      pl={0}
                      onChangeText={(text) => handleChange("model", text)}
                    />
                    <Divider w={"100%"} bg={"#B7B7B7"} />
                    <Text color={"#B7B7B7"} fontSize={"xs"}>
                      MODEL
                    </Text>
                  </Box>
                </FormControl>
                <FormControl>
                  <Box mt={2} w={"100%"}>
                    <Input
                      type="text"
                      value={element.brand}
                      borderWidth={0}
                      pl={0}
                      onChangeText={(text) => handleChange("brand", text)}
                    />
                    <Divider w={"100%"} bg={"#B7B7B7"} />

                    <Text color={"#B7B7B7"} fontSize={"xs"}>
                      BRAND
                    </Text>
                  </Box>
                </FormControl>

                <FormControl>
                  <Box mt={2} w={"100%"}>
                    <Input
                      type="text"
                      value={element.series}
                      borderWidth={0}
                      pl={0}
                      onChangeText={(text) => handleChange("series", text)}
                    />
                    <Divider w={"100%"} bg={"#B7B7B7"} />
                    <Text color={"#B7B7B7"} fontSize={"xs"}>
                      SERIES
                    </Text>
                  </Box>
                </FormControl>
                <FormControl>
                  <Box mt={2}>
                    <Input
                      type="text"
                      borderWidth={0}
                      value={element.year}
                      pl={0}
                      onChangeText={(text) => handleChange("year", text)}
                    />
                    <Divider w={"100%"} bg={"#B7B7B7"} />
                    <Text color={"#B7B7B7"} fontSize={"xs"}>
                      YEAR
                    </Text>
                  </Box>
                </FormControl>
                <FormControl>
                  <Box mt={2}>
                    <Input type="text" borderWidth={0} pl={0}></Input>
                    <Divider w={"100%"} bg={"#B7B7B7"} />
                    <Text color={"#B7B7B7"} fontSize={"xs"}>
                      ID NUMBER
                    </Text>
                  </Box>
                </FormControl>
                <FormControl>
                  <View>
                    <Touchable onPress={toggleOpen}>
                      <Text textAlign={"center"} bg={"amber.300"}>
                        Choose colors
                      </Text>
                    </Touchable>
                    {isOpen && (
                      <Box ml={5} flexDirection="row" flexWrap="wrap">
                        {colors.map((col, idx) => {
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

                    <Text>Chosen colors: {selectedColors.join(", ")}</Text>
                  </View>
                </FormControl>
                <FormControl>
                  <Box mt={2} mb={5}>
                    <Input
                      type="text"
                      value={element.description}
                      borderWidth={0}
                      pl={0}
                      onChangeText={(text) => handleChange("description", text)}
                    />
                    <Divider bg={"#B7B7B7"} />
                    <Text color={"#B7B7B7"} fontSize={"xs"}>
                      NOTES
                    </Text>
                  </Box>
                </FormControl>

                <Buttonv2 padding={false} onPress={handleSubmit}>
                  ADD TO MY COLLECTION
                </Buttonv2>
              </Box>
            </VStack>
          </KeyboardAvoidingView>
        </Box>
      </ScrollView>
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
const $iconContainer: ViewStyle = {
  padding: 5,
  marginBottom: 2,
  marginRight: 2,
  borderRadius: 20,
  backgroundColor: "#09154d",
}
export default AddCar
