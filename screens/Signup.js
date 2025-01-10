import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import UserInput from "../Components/auth/UserInput";
import SubmitButton from "../Components/auth/SubmitButton";
import axios from "axios";
import CircleLogo from "../Components/auth/CircleLogo";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';



// import Text from "@kaloraat/react-native-text"

const Signup = ({navigation}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  console.log("NAVIGATION => ", navigation);
  

  const handleSubmit = async () => {
    setLoading(true);
    if (!name || !email || !password) {
      alert("All fields are required");
      setLoading(false);
      return;
    }
    // console.log("SIGNUP REQUEST => ", name, email, password);

    try {
      const { data } = await axios.post("http://localhost:8000/api/signup", {
        name,
        email,
        password,
      });

      setLoading(false);
      console.log("SIGN IN SUCCESS => ", data);
      alert("Sign up successful");

    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={{
        flex: 1,
        justifyContent: "center",
        paddingHorizontal: 24,
      }}
    >
      <View>

        <CircleLogo />
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

        <SubmitButton
          title="Sign Up"
          handleSubmit={handleSubmit}
          loading={loading}
        /> 

        <Text style={{textAlign:"center", fontSize: 14, marginTop: 24}}>Already have an account? <Text style={{color:"#2222ff"}} onPress={() => navigation.navigate('Signin')}>Sign In</Text></Text>

        <Text>{JSON.stringify({ name, email, password }, null, 4)}</Text>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default Signup;
