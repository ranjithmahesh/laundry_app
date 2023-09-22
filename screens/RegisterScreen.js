import {
  KeyboardAvoidingView,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import React, { useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const RegisterScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const navigation = useNavigation();

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "white",
        padding: 10,
        alignItems: "center",
      }}
    >
      <KeyboardAvoidingView>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: 100,
          }}
        >
          <Text style={{ fontSize: 20, color: "#662d91", fontWeight: "bold" }}>
            Sign Up
          </Text>
          <Text style={{ fontSize: 18, marginTop: 8, fontWeight: "600" }}>
            Create a new Account
          </Text>
        </View>

        <View style={{ marginTop: 50 }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <MaterialCommunityIcons
              name="email-check-outline"
              size={24}
              color="black"
            />
            <TextInput
              value={email}
              onChange={(text) => setEmail(text)}
              placeholder="Email"
              placeholderTextColor="black"
              style={{
                fontSize: email ? 18 : 18,

                marginLeft: 13,
                borderBottomWidth: 1,
                borderBottomColor: "gray",
                width: 300,
                marginVertical: 10,
              }}
            />
          </View>
        </View>

        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Ionicons name="key-outline" size={24} color="black" />
          <TextInput
            value={password}
            secureTextEntry={true}
            placeholder="password"
            placeholderTextColor="black"
            onChange={(text) => setPassword(text)}
            style={{
              fontSize: password ? 18 : 18,
              marginLeft: 13,
              borderBottomWidth: 1,
              borderBottomColor: "gray",
              width: 300,
              marginVertical: 20,
            }}
          />
        </View>

        <View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Feather name="phone" size={24} color="black" />
            <TextInput
              value={phone}
              onChange={(text) => setPhone(text)}
              placeholder="Phone No"
              placeholderTextColor="black"
              style={{
                fontSize: email ? 18 : 18,

                marginLeft: 13,
                borderBottomWidth: 1,
                borderBottomColor: "gray",
                width: 300,
                marginVertical: 10,
              }}
            />
          </View>
        </View>

        <Pressable
          style={{
            width: 200,
            backgroundColor: "#318CE7",
            padding: 15,
            borderRadius: 7,
            marginTop: 50,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <Text style={{ fontSize: 18, textAlign: "center", color: "white" }}>
            Register
          </Text>
        </Pressable>

        <Pressable
          style={{ marginTop: 20 }}
          onPress={() => navigation.navigate("Login")}
        >
          <Text
            style={{
              textAlign: "center",
              fontSize: 17,
              color: "gray",
              fontWeight: "500",
            }}
          >
            Already have a account? Sign in
          </Text>
        </Pressable>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({});
