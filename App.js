// This is the entry point if you run `yarn expo:start`
// If you run `yarn ios` or `yarn android`, it'll use ./index.js instead.
import App from "./app/app.tsx"
import React, { useEffect } from "react"
import { registerRootComponent } from "expo"
import * as SplashScreen from "expo-splash-screen"
useEffect(() => {
  SplashScreen.preventAutoHideAsync()
}, [])

function IgniteApp() {
  return <App hideSplashScreen={SplashScreen.hideAsync} />
}
// czemu zwracany jest komponent przyciągnięty tutaj a nie igniteapp?
registerRootComponent(IgniteApp)
export default IgniteApp
