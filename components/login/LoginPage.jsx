import React, { useEffect } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import * as Google from "expo-auth-session/providers/google";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { ICONS } from "../../constants";
import styles from "./loginpage.style";

const LoginPage = ({ setUser }) => {
  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId:
      "840400456942-hit48d2o65cua9ueacc8hvf668501f17.apps.googleusercontent.com",
  });

  const getUserInfo = async (token) => {
    if (!token) return;
    try {
      const response = await fetch(
        "https://www.googleapis.com/userinfo/v2/me",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      const user = await response.json();
      await AsyncStorage.setItem("@user", JSON.stringify(user));
      setUser(user);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSignIn = async () => {
    const user = await AsyncStorage.getItem("@user");

    if (!user) {
      if (response?.type === "success") {
        await getUserInfo(response.authentication.accessToken);
      }
    } else {
      setUser(JSON.parse(user));
    }
  };

  useEffect(() => {
    handleSignIn();
  }, [response]);

  return (
    <View style={styles.pageContainer}>
      <View style={styles.mainContainer}>
        <View style={styles.logoContainer}>
          <Image
            source={ICONS.logo}
            resizeMode="contain"
            style={styles.logoImage}
          />
          <Text style={styles.logoText}>GoExplore</Text>
        </View>
        <TouchableOpacity style={styles.btn} onPress={() => promptAsync()}>
          <Text style={styles.btnText}>Sign In With Google</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginPage;
