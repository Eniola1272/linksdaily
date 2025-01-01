import React from "react";
import { View, Text, TextInput } from "react-native";
// import Text from "@kaloraat/react-native-text"

const UserInput = ({
  label,
  value,
  setValue,
  autoCorrect,
  autoCapitalize = "none",
  autoCompleteType,
  keyboardType = "default",
  secureTextEntry = false,
}) => {
  return (
    <View style={{ marginHorizontal: 24 }}>
      <Text
        style={{
          fontWeight: 300,
        }}
      >
        {label}
      </Text>
      <TextInput
      autoCorrect={false}
      autoCapitalize={autoCapitalize}
      keyboardType={keyboardType}
      secureTextEntry={secureTextEntry}
        style={{
          height: 40,
          borderColor: "gray",
          marginVertical: 24,
          boxShadow: "0px 2px 3px 1px #ccc",
          outline: "none",
          padding: 8,
        }}
        value={value}
        onChangeText={(text) => setValue(text)}
        //   placeholder="Enter your name"
      />
    </View>
  );
};

export default UserInput;
