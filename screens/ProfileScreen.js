import { useNavigation } from "@react-navigation/native";
import { signOut } from "firebase/auth";
import React from "react";
import { Pressable, SafeAreaView, StyleSheet, Text } from "react-native";
import { auth } from "../firebase";

const ProfileScreen = () => {
  const user = auth.currentUser;

  const navigation = useNavigation();
  const signOutUser = () => {
    signOut(auth)
      .then(() => {
        navigation.replace("Login");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      <Pressable style={{ marginVertical: 10 }}>
        <Text>WelCome {user.email}</Text>
      </Pressable>

      <Pressable onPress={signOut}>
        <Text>Sign Out</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});
