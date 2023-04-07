import "./i18n"
import "./utils/ignoreWarnings"
import {
  useFonts,
  Lexend_400Regular,
  Lexend_900Black,
  Lexend_700Bold,
  Lexend_600SemiBold,
  Lexend_500Medium,
} from "../node_modules/@expo-google-fonts/lexend"
import React, { useEffect, useState } from "react"
import { initialWindowMetrics, SafeAreaProvider } from "react-native-safe-area-context"
import * as Linking from "expo-linking"
import { NativeBaseProvider, extendTheme } from "native-base"
import { useInitialRootStore } from "./models"
import { AppNavigator, useNavigationPersistence } from "./navigators"
import { ErrorBoundary } from "./screens/ErrorScreen/ErrorBoundary"
import * as storage from "./utils/storage"
import { setupReactotron } from "./services/reactotron"
import Config from "./config"
import Splash from "./screens/Home/SplashScreen"
import { AppProvider } from "./screens/context/userContext"
import { AddCarProvider } from "./screens/context/addCarContext"
// Set up Reactotron, which is a free desktop app for inspecting and debugging
// React Native apps. Learn more here: https://github.com/infinitered/reactotron
setupReactotron({
  // clear the Reactotron window when the app loads/reloads
  clearOnLoad: true,
  // generally going to be localhost
  host: "localhost",
  // Reactotron can monitor AsyncStorage for you
  useAsyncStorage: true,
  // log the initial restored state from AsyncStorage
  logInitialState: true,
  // log out any snapshots as they happen (this is useful for debugging but slow)
  logSnapshots: false,
})

export const NAVIGATION_PERSISTENCE_KEY = "NAVIGATION_STATE"

// Web linking configuration
const prefix = Linking.createURL("/")
const config = {
  screens: {
    Login: {
      path: "",
    },
    Welcome: "welcome",
    Demo: {
      screens: {
        DemoShowroom: {
          path: "showroom/:queryIndex?/:itemIndex?",
        },
        DemoDebug: "debug",
        DemoPodcastList: "podcast",
        DemoCommunity: "community",
      },
    },
  },
}

interface AppProps {
  hideSplashScreen: () => Promise<void>
}
/**
 * This is the root component of our app.
 */
function App(props: AppProps) {
  const [fontsLoaded] = useFonts({
    lexend400Regular: Lexend_400Regular,
    lexend900Black: Lexend_900Black,
    lexend700Bold: Lexend_700Bold,
    lexend600SemiBold: Lexend_600SemiBold,
    lexend500Medium: Lexend_500Medium,
  })

  const { hideSplashScreen } = props
  const {
    initialNavigationState,
    onNavigationStateChange,
    isRestored: isNavigationStateRestored,
  } = useNavigationPersistence(storage, NAVIGATION_PERSISTENCE_KEY)
  const theme = extendTheme({
    fontConfig: {
      Lexend: {
        100: {
          normal: "lexend400Regular",
        },
        500: {
          normal: "lexend500Medium",
        },
        600: {
          normal: "lexend600SemiBold",
        },
        700: {
          normal: "lexend700Bold",
        },
        900: {
          normal: "lexend900Black",
        },
      },
    },
    fonts: {
      body: "Lexend",
    },
    colors: {
      background: "#4D30FF",
    },
  })

  const { rehydrated } = useInitialRootStore(() => {
    //   // This runs after the root store has been initialized and rehydrated.

    //   // If your initialization scripts run very fast, it's good to show the splash screen for just a bit longer to prevent flicker.
    //   // Slightly delaying splash screen hiding for better UX; can be customized or removed as needed,
    //   // Note: (vanilla Android) The splash-screen will not appear if you launch your app via the terminal or Android Studio. Kill the app and launch it normally by tapping on the launcher icon. https://stackoverflow.com/a/69831106
    //   // Note: (vanilla iOS) You might notice the splash-screen logo change size. This happens in debug/development mode. Try building the app for release.
    setTimeout(hideSplashScreen, 3000)
  })
  // Before we show the app, we have to wait for our state to be ready.
  // In the meantime, don't render anything. This will be the background
  // color set in native by rootView's background color.
  // In iOS: application:didFinishLaunchingWithOptions:
  // In Android: https://stackoverflow.com/a/45838109/204044
  // You can replace with your own loading component if you wish.

  useEffect(() => {
    if (fontsLoaded) {
      hideSplashScreen()
    }
  }, [fontsLoaded])

  if (!rehydrated || !isNavigationStateRestored || !fontsLoaded) return null

  const linking = {
    prefixes: [prefix],
    config,
  }

  if (!fontsLoaded) {
    return <Splash />
  }
  return (
    <AppProvider>
      <AddCarProvider>
        <NativeBaseProvider theme={theme}>
          <SafeAreaProvider initialMetrics={initialWindowMetrics}>
            <ErrorBoundary catchErrors={Config.catchErrors}>
              <AppNavigator
                linking={linking}
                initialState={initialNavigationState}
                onStateChange={onNavigationStateChange}
              >
                {/* <View onLayout={onLayoutRootView}></View> */}
              </AppNavigator>
            </ErrorBoundary>
          </SafeAreaProvider>
        </NativeBaseProvider>
      </AddCarProvider>
    </AppProvider>
  )
}

export default App
