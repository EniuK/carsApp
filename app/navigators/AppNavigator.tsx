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
  // NavigatorScreenParams, // @demo remove-current-line
} from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { StackScreenProps } from "@react-navigation/stack"
import { observer } from "mobx-react-lite"
import React, { useEffect } from "react"
import { useColorScheme } from "react-native"
import Config from "../config"
// import { useStores } from "../models" // @demo remove-current-line
// import {
//   LoginScreen, // @demo remove-current-line
// } from "../screens"
import WelcomeScreen from "../screens/Profile/WelcomeScreen"
import CameraScreen from "../screens/AddToCollection/CameraScreen"
import CollectionScreen from "../screens/Collection/CollectionScreen"
import HomeScreen from "../screens/Home/HomeScreen"
import ProfileScreen from "../screens/Profile/ProfileScreen"
import SearchScreen from "../screens/SearchScreen"
import ModelDetailsScreen from "../screens/Collection/ModelDetailsScreen"
import AddCar from "../screens/AddToCollection/AddCar"
// import { DemoNavigator, DemoTabParamList } from "./DemoNavigator" // @demo remove-current-line
import { navigationRef, useBackButtonHandler } from "./navigationUtilities"
// import User from "../screens/context/User"
import NewsScreen from "../screens/Home/NewsScreen"
import SingleCollectionScreen from "../screens/Collection/SingleCollectionScreen"
import LoginScreen from "../screens/Profile/LoginScreen"
import CreateUser from "../screens/Profile/CreateUserScreen"
import ElementsReached from "../screens/PayScreens/ReachedLimitScreen"
import SubscriptionScreen from "../screens/PayScreens/SubscriptionScreen"
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
  AddCar: undefined
  NewsScreen: undefined
  SingleCollectionScreen: undefined
  LoginScreen: undefined
  CreateUser: undefined
  ElementsReached: undefined
  SubscriptionScreen: undefined
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
          <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="CameraScreen" component={CameraScreen} />
          <Stack.Screen name="CollectionScreen" component={CollectionScreen} />
          <Stack.Screen name="SearchScreen" component={SearchScreen} />
          <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
          <Stack.Screen name="ModelDetailsScreen" component={ModelDetailsScreen} />
          <Stack.Screen name="AddCar" component={AddCar} />
          <Stack.Screen name="NewsScreen" component={NewsScreen} />
          <Stack.Screen name="SingleCollectionScreen" component={SingleCollectionScreen} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="CreateUser" component={CreateUser} />
          <Stack.Screen name="ElementsReached" component={ElementsReached} />
          <Stack.Screen name="SubscriptionScreen" component={SubscriptionScreen} />
        </Stack.Group>
      ) : (
        <Stack.Group>
          <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="CameraScreen" component={CameraScreen} />
          <Stack.Screen name="CollectionScreen" component={CollectionScreen} />
          <Stack.Screen name="SearchScreen" component={SearchScreen} />
          <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
          <Stack.Screen name="ModelDetailsScreen" component={ModelDetailsScreen} />
          <Stack.Screen name="AddCar" component={AddCar} />
          <Stack.Screen name="NewsScreen" component={NewsScreen} />
          <Stack.Screen name="SingleCollectionScreen" component={SingleCollectionScreen} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="CreateUser" component={CreateUser} />
          <Stack.Screen name="ElementsReached" component={ElementsReached} />
          <Stack.Screen name="SubscriptionScreen" component={SubscriptionScreen} />
        </Stack.Group>
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
