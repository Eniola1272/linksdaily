import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import UserInput from "../Components/auth/UserInput";
import SubmitButton from "../Components/auth/SubmitButton";
// import Text from "@kaloraat/react-native-text"

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        paddingHorizontal: 24,
      }}
    >
      {/* Title */}
      <Text
        style={{
          textAlign: "center",
          fontSize: 24,
          fontWeight: "bold",
          marginBottom: 24,
        }}
      >
        Sign Up
      </Text>

      {/* User Input */}
      <UserInput
        label="NAME"
        value={name}
        setValue={setName}
        autoCapitalize="words"
        autoCorrect={false}
      />

      <UserInput
        label="EMAIL"
        value={email}
        setValue={setEmail}
        autoCompleteType="email"
        keyboardType="email-address"
      />

      <UserInput
        label="PASSWORD"
        value={password}
        setValue={setPassword}
        secureTextEntry={true}
        autoCompleteType="password"
      />

      <SubmitButton />

      <Text>{JSON.stringify({ name, email, password }, null, 4)}</Text>
    </View>
  );
};

export default Signup;
