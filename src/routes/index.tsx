import { useTheme } from "native-base";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import * as Linking from "expo-linking";

import { AppRoutes } from "./app.routes";

const linking = {
  prefixes: [
    "com.rocketseat.igniteshoes://",
    "igniteshoesapp://",
    "exp+igniteshoesapp://",
  ],
  config: {
    screens: {
      details: {
        path: "details/:productId",
        parse: {
          productId: (productId: string) => productId,
        },
      },
    },
  },
};

export function Routes() {
  const { colors } = useTheme();

  const theme = DefaultTheme;
  theme.colors.background = colors.gray[700];

  const deepLinking = Linking.createURL("details", {
    queryParams: {
      productId: "7",
    },
  });

  console.log(deepLinking);

  return (
    <NavigationContainer theme={theme} linking={linking}>
      <AppRoutes />
    </NavigationContainer>
  );
}
