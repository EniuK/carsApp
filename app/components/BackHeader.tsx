import React, { useCallback, useEffect, useRef, useState } from "react"
import { ViewStyle, Animated, Dimensions, Keyboard } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { Text, Box, Image, HStack, VStack, View, Input } from "native-base"
import Touchable from "./Touchable"
import { AntDesign, MaterialIcons, Feather } from "@expo/vector-icons"
import { api } from "../services/api"
import { User } from "../types/types"

type BackHeaderProps = {
  title: string
  rightAccessory?: React.ReactNode
  hideHeader?: boolean
}
const windowHeight = Dimensions.get("window").height

const BackHeader = ({ title, rightAccessory, hideHeader }: BackHeaderProps) => {
  const navigation = useNavigation()
  const [isVisible, setVisible] = useState(false)
  const [inputWidth] = useState(new Animated.Value(0))
  const opacityAnim = useRef(new Animated.Value(1)).current
  const handleBlur = () => {
    Keyboard.dismiss()
  }

  function getUserById(user: User) {
    return user
  }
  const [user, setUser] = useState(null)

  useEffect(() => {
    async function fun() {
      const data = await api.getUser("1679306069692")

      setUser(getUserById(data.user))
    }

    fun()
  }, [])

  useEffect(() => {
    Animated.timing(opacityAnim, {
      toValue: isVisible ? 0 : 1,
      duration: 200,
      useNativeDriver: true,
    }).start()
  }, [isVisible])
  // add new function to handle search icon press
  const onSearchPress = useCallback(() => {
    setVisible(true)
  }, [])
  const onBack = useCallback(() => {
    navigation.goBack()
  }, [])
  const onProfilePress = useCallback(() => {
    navigation.navigate("ProfileScreen")
  }, [])

  return (
    <VStack style={hideHeader ? $heightOfContainer2 : $heightOfContainer}>
      <HStack style={$header}>
        <Box pt={0} ml={4}>
          <Text fontSize="18" fontWeight={"extrabold"} color="white" letterSpacing="xs">
            DiecastMe
          </Text>
        </Box>
        {title === "profile" ? null : (
          <Touchable onPress={onProfilePress}>
            <Box alignItems="center" bg={"rgba(18, 20, 73, 0.5)"} borderRadius={20} p={2} mr={2}>
              <Text color={"white"} fontSize={12}>
                {/* {user[0]?.firstName || "ja :D"} */} ja
              </Text>
            </Box>
          </Touchable>
        )}
      </HStack>
      {hideHeader ? null : (
        <VStack style={$navigationBar}>
          {navigation.canGoBack() ? (
            <View style={[$navigationBarChild, { alignItems: "flex-start" }]}>
              <Touchable onPress={onBack} hitSlop={$hitSlop}>
                <AntDesign name="arrowleft" size={24} color="white" />
              </Touchable>
            </View>
          ) : (
            <Box p={15} style={$navigationBarChild} />
          )}
          <Box style={[$navigationBarChild, $headerTitle]}>
            <HStack>
              <Animated.Text style={{ paddingTop: 6, opacity: opacityAnim }}>
                <Text fontWeight={"extrabold"} fontSize={18} color={"white"}>
                  {title}
                </Text>
              </Animated.Text>
              {title === "Add new" ? null : (
                <Box alignItems={"flex-end"} pr={2} flex={1}>
                  <HStack>
                    <HStack bg={"rgba(29, 29, 29, 0.5)"} borderRadius={40}>
                      <HStack>
                        {title === "ModelDetails" ? (
                          <Box
                            p={2}
                            style={
                              isVisible
                                ? { backgroundColor: "rgba(18, 20, 73, 0.5)" }
                                : { borderRadius: 20, backgroundColor: "rgba(29, 29, 29, 0.5)" }
                            }
                          >
                            <AntDesign name="edit" size={24} color="white" />
                          </Box>
                        ) : (
                          <Touchable
                            onPress={() => {
                              setVisible(!isVisible)
                              Animated.timing(inputWidth, {
                                toValue: isVisible ? 0 : 300, // change the width of the input field
                                duration: 300, // set the animation duration
                                useNativeDriver: false,
                              }).start()
                            }}
                          >
                            <Box
                              p={2}
                              bg={"rgba(18, 20, 73, 0.5)"}
                              style={isVisible ? null : { borderRadius: 20 }}
                            >
                              {title === "ModelDetails" ? (
                                <AntDesign name="edit" size={24} color="white" />
                              ) : (
                                <MaterialIcons name="search" size={24} color="white" />
                              )}
                            </Box>
                          </Touchable>
                        )}
                      </HStack>
                      {title === "ModelDetails" ? null : (
                        <Animated.View style={{ width: inputWidth }}>
                          {isVisible && (
                            <Input
                              marginTop={1.5}
                              height={8}
                              color={"white"}
                              variant="unstyled"
                              onBlur={handleBlur}
                              style={{
                                backgroundColor: "rgba(29, 29, 29, 0.5)",
                                borderRadius: 40,
                              }}
                            />
                          )}
                        </Animated.View>
                      )}
                    </HStack>

                    <Box p={2} bg={"rgba(18, 20, 73, 0.5)"} rounded={20}>
                      {title === "ModelDetails" ? (
                        <Feather name="star" size={24} color="white" />
                      ) : (
                        <Feather name="plus" size={24} color="white" />
                      )}
                    </Box>
                  </HStack>
                </Box>
              )}
            </HStack>
          </Box>
          {/* {rightAccessory || <Box p={15} style={$navigationBarChild} />} */}
        </VStack>
      )}
    </VStack>
  )
}

export default BackHeader

const $heightOfContainer: ViewStyle = {
  height: windowHeight * 0.14,
}
const $heightOfContainer2: ViewStyle = {
  height: windowHeight * 0.06,
}

const $header: ViewStyle = {
  justifyContent: "space-between",
}
const $navigationBar: ViewStyle = {
  paddingLeft: 18,
  flex: 1,
}
const $navigationBarChild: ViewStyle = {}

const $headerTitle: ViewStyle = {
  marginBottom: -50,
  marginTop: 10,
  alignItems: "flex-start",
}

const $hitSlop: ViewStyle = {
  top: 10,
  bottom: 10,
  left: 10,
  right: 10,
}
