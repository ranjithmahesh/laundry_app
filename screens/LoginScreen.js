import {
  KeyboardAvoidingView,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
            Sign In
          </Text>
          <Text style={{ fontSize: 18, marginTop: 8, fontWeight: "600" }}>
            Sign in to your account
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
            Login
          </Text>
        </Pressable>

        <Pressable
          style={{ marginTop: 20 }}
          onPress={() => navigation.navigate("Register")}
        >
          <Text
            style={{
              textAlign: "center",
              fontSize: 17,
              color: "gray",
              fontWeight: "500",
            }}
          >
            Don't have a account? SignUp
          </Text>
        </Pressable>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
