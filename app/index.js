import { useState } from "react";
import { View, ScrollView, SafeAreaView } from "react-native";
import { Stack } from "expo-router";
import * as WebBrowser from "expo-web-browser";

import { HomePage, LoginPage, HeaderButton } from "../components";
import { COLORS, ICONS, SIZES } from "../constants";

WebBrowser.maybeCompleteAuthSession();

const Home = () => {
  const [user, setUser] = useState(null);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFF" }}>
      {user ? (
        <>
          <Stack.Screen
            options={{
              headerShown: true,
              headerStyle: { backgroundColor: COLORS.primary },
              headerShadowVisible: false,
              headerTitle: "GoExplore",
              headerTitleAlign: "center",
              headerTitleStyle: { fontSize: SIZES.xLarge },
              headerTintColor: COLORS.secondary,
              headerLeft: () => (
                <HeaderButton
                  iconUrl={ICONS.logoutOutlined}
                  dimension="80%"
                  handlePress={() => setUser(null)}
                />
              ),
            }}
          />
          <HomePage />
        </>
      ) : (
        <>
          <Stack.Screen
            options={{
              headerShown: false,
            }}
          />
          <LoginPage setUser={setUser} />
        </>
      )}
    </SafeAreaView>
  );
};

export default Home;
