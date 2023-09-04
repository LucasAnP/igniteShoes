import { StatusBar } from "react-native";
import { NativeBaseProvider } from "native-base";
import OneSignal from "react-native-onesignal";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";

import { Routes } from "./src/routes";

import { THEME } from "./src/theme";
import { Loading } from "./src/components/Loading";

import { CartContextProvider } from "./src/contexts/CartContext";
import { TagUserEmailCreate } from "./src/notifications/notificationsTags";

OneSignal.setAppId("f0f31828-df5a-4c02-834a-4779c0713787");

OneSignal.promptForPushNotificationsWithUserResponse((response) => {
  console.log(response);
});

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  TagUserEmailCreate("lucas.antonio199@outlook.com");

  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <CartContextProvider>
        {fontsLoaded ? <Routes /> : <Loading />}
      </CartContextProvider>
    </NativeBaseProvider>
  );
}
