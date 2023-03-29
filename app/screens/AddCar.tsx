import { SafeAreaView, ViewStyle, KeyboardAvoidingView, Platform } from "react-native"
import React, { useCallback, useState } from "react"
import {
  Text,
  Box,
  VStack,
  Image,
  HStack,
  ScrollView,
  Divider,
  Input,
  FormControl,
} from "native-base"
import BackHeader from "../components/BackHeader"
import CardCar from "../../assets/images/card_car.png"
import Buttonv2 from "../components/Buttonv2"
import LinearGradient from "react-native-linear-gradient"
import { useNavigation } from "@react-navigation/native"
import { string, number, date, object, array } from "yup"
import { api } from "../services/api"

const AddCar = () => {
  const colors = ["red", "white", "blue"]
  const navigation = useNavigation()
  const initialElement = {
    carLink:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fallegro.pl%2Foferta%2Fhot-wheels-toyota-supra-12374715136&psig=AOvVaw2r-YHEEhx7XjGZR4PT63r6&ust=1680097627987000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCODUpsTh_v0CFQAAAAAdAAAAABAF",
    model: "",
    brand: "",
    year: "",
    idNumber: "123",
    series: "",
    id: new Date(),
    description: "",
    owneruserid: "1679306069692",
    colors: ["red.100"],
    collectionId: "1679392893809",
    collectionsId: ["1679392893809"],
  }
  const [element, setElement] = useState<typeof ElementSchema>(initialElement)

  const ElementSchema = object({
    carLink: string().url().nullable(),
    model: string().required(),
    brand: string().required(),
    year: number().required().positive().integer(),
    idNumber: string().required(),
    series: string().required(),
    id: date().default(() => new Date()),
    description: string().required(),
    collectionId: string().required(),
    collectionsId: array().required(),
    dateAdded: date().default(() => new Date()),
  })

  const onBack = useCallback(() => {
    navigation.goBack()
  }, [])

  const handleChange = (key, value) => {
    setElement((prevState) => ({ ...prevState, [key]: value }))
  }

  const handleSubmit = async () => {
    try {
      await ElementSchema.validate(element)

      await api.addElement(element, "1679306069692")

      setElement(initialElement)
    } catch (error) {
      console.log(error)
    }
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
                  {/* do zrobienia paleta kolorow */}
                  <Box mt={8}>
                    <HStack space={2}>
                      <Box bg={colors[0] + ".600"} style={$shadow} w={5} h={5} borderRadius={30} />
                      <Box bg={colors[1]} style={$shadow} w={5} h={5} borderRadius={30} />
                      <Box bg={colors[2] + ".600"} style={$shadow} w={5} h={5} borderRadius={30} />
                    </HStack>
                    <Text color={"#B7B7B7"} fontSize={"xs"} mt={1}>
                      COLORS
                    </Text>
                  </Box>
                </FormControl>
                <FormControl>
                  <Box mt={2}>
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
                <FormControl>
                  {/* dodac dateadded do typow itp */}
                  <Box mt={2} mb={5}>
                    <Input type="text" borderWidth={0} pl={0}></Input>
                    <Divider bg={"#B7B7B7"} />
                    <Text color={"#B7B7B7"} fontSize={"xs"} mb={7}>
                      DATE ADDED
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
