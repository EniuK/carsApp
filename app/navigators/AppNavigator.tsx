/**
 * The app navigator (formerly "AppNavigator" and "MainNavigator") is used for the primary
 * navigation flows of your app.
 * Generally speaking, it will contain an auth flow (registration, login, forgot password)
 * and a "main" flow which the user will use once logged in.
 */
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
  NavigatorScreenParams, // @demo remove-current-line
} from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { StackScreenProps } from "@react-navigation/stack"
import { observer } from "mobx-react-lite"
import React, { useState } from "react"
import { useColorScheme } from "react-native"
import Config from "../config"
import { useStores } from "../models" // @demo remove-current-line
import {
  LoginScreen, // @demo remove-current-line
} from "../screens"
import WelcomeScreen from "../screens/WelcomeScreen"
import CameraScreen from "../screens/CameraScreen"
import CollectionScreen from "../screens/CollectionScreen"
import HomeScreen from "../screens/Home/HomeScreen"
import ProfileScreen from "../screens/ProfileScreen"
import SearchScreen from "../screens/SearchScreen"
import ModelDetailsScreen from "../screens/ModelDetailsScreen"
import { DemoNavigator, DemoTabParamList } from "./DemoNavigator" // @demo remove-current-line
import { navigationRef, useBackButtonHandler } from "./navigationUtilities"
import User from "../screens/context/User"

/**
 * This type allows TypeScript to know what routes are defined in this navigator
 * as well as what properties (if any) they might take when navigating to them.
 *
 * If no params are allowed, pass through `undefined`. Generally speaking, we
 * recommend using your MobX-State-Tree store(s) to keep application state
 * rather than passing state through navigation params.
 *
 * For more information, see this documentation:
 *   https://reactnavigation.org/docs/params/
 *   https://reactnavigation.org/docs/typescript#type-checking-the-navigator
 *   https://reactnavigation.org/docs/typescript/#organizing-types
 */
export type AppStackParamList = {
  HomeScreen: undefined
  WelcomeScreen: undefined
  CameraScreen: undefined
  CollectionScreen: undefined
  SearchScreen: undefined
  ProfileScreen: undefined
  ModelDetailsScreen: undefined
}

/**
 * This is a list of all the route names that will exit the app if the back button
 * is pressed while in that screen. Only affects Android.
 */
const exitRoutes = Config.exitRoutes

export type AppStackScreenProps<T extends keyof AppStackParamList> = StackScreenProps<
  AppStackParamList,
  T
>

// Documentation: https://reactnavigation.org/docs/stack-navigator/
const Stack = createNativeStackNavigator<AppStackParamList>()

const AppStack = observer(function AppStack() {
  // @demo remove-block-start
  // const {
  //   authenticationStore: { isAuthenticated },
  // } = useStores()

  // {logged ? "WelcomeScreen" : }

  const authorized = true
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {authorized ? (
        <Stack.Group>
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="CameraScreen" component={CameraScreen} />
          <Stack.Screen name="CollectionScreen" component={CollectionScreen} />
          <Stack.Screen name="SearchScreen" component={SearchScreen} />
          <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
          <Stack.Screen name="ModelDetailsScreen" component={ModelDetailsScreen} />
        </Stack.Group>
      ) : (
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
      )}
    </Stack.Navigator>
  )
})

interface NavigationProps extends Partial<React.ComponentProps<typeof NavigationContainer>> {}

export const AppNavigator = observer(function AppNavigator(props: NavigationProps) {
  const colorScheme = useColorScheme()

  useBackButtonHandler((routeName) => exitRoutes.includes(routeName))

  return (
    <NavigationContainer
      ref={navigationRef}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
      {...props}
    >
      <AppStack />
    </NavigationContainer>
  )
})
