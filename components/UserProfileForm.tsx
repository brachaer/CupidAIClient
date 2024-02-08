import React, { useState } from "react";
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  Platform,
} from "react-native";
import axios from "axios";
import styles from "./styles";

const UserProfileForm = ({ navigation }) => {
  const [email, setEmail] = useState<string>("");
  const [selfDepiction, setSelfDepiction] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  const [depictionError, setDepictionError] = useState<string>("");

  const handleFormSubmit = async () => {
    setEmailError("");
    setDepictionError("");

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError("Invalid email format");
      return;
    }

    if (!selfDepiction || selfDepiction.length < 40) {
      setDepictionError("Depiction must be at least 40 characters long");
      return;
    }

    try {
      let apiEndpoint: string;

      if (Platform.OS === "android") {
        apiEndpoint = "http://10.0.2.2:8080/api/v1/users";
      } else {
        apiEndpoint = "http://localhost:8080/api/v1/users";
      }
      const response = await axios.post(
        apiEndpoint,
        JSON.stringify({
          email: email,
          depiction: selfDepiction,
        }),
        {
          headers: {
            "content-type": "application/json",
          },
        }
      );
      navigation.navigate("UserScreen", {
        user: response.data.user,
      });
    } catch (error) {
      console.error("Error adding user:", error);

      if (error.response) {
        console.log("Server response status:", error.response.status);
        console.log("Server response data:", error.response.data);
      }
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        inputMode="email"
        autoCapitalize="none"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}

      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Describe yourself"
        multiline
        numberOfLines={4}
        value={selfDepiction}
        onChangeText={(text) => setSelfDepiction(text)}
      />
      {depictionError ? (
        <Text style={styles.errorText}>{depictionError}</Text>
      ) : null}

      <TouchableOpacity style={styles.button} onPress={handleFormSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default UserProfileForm;
