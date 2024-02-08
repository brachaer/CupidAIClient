import React, { useState } from "react";
import { View, Text, TouchableOpacity, Platform } from "react-native";
import axios from "axios";
import styles from "./styles";

const UserScreen: React.FC = ({ route }: any) => {
  const user = route.params?.user;
  const [trySearch, setTrySearch] = useState(false);
  const [idealMatch, setIdealMatch] = useState<any | null>(null);

  const handleFindMatch = async () => {
    try {
      let apiEndpoint: string;

      if (Platform.OS === "android") {
        apiEndpoint = "http://10.0.2.2:8080/api/v1/users";
      } else {
        apiEndpoint = "http://localhost:8080/api/v1/users";
      }
      const response = await axios.get(`${apiEndpoint}/${user._id}`);
      if (response.data.match !== null) {
        setIdealMatch(response.data.match);
      }
      setTrySearch(true);
    } catch (error) {
      console.error("Error finding match:", error);
    }
  };

  return (
    <View style={styles.container}>
      {user && (
        <View>
          <Text style={styles.welcomeText}>Welcome ValiDate </Text>
          <Text style={styles.emailText}>Email: {user.email}</Text>

          <Text style={styles.depictionText}>
            Self Depiction: {user.depiction}
          </Text>
          {user.partnerLocations.length > 0 && (
            <View>
              <Text style={styles.locationsText}>
                Find your partner in these locations:
              </Text>
              {user.partnerLocations.map((location: string, index: any) => (
                <Text key={index} style={styles.locationItem}>
                  {location}
                </Text>
              ))}
            </View>
          )}
          <TouchableOpacity
            style={styles.buttonMatch}
            onPress={handleFindMatch}
          >
            <Text style={styles.buttonText}>Find Your Match</Text>
          </TouchableOpacity>
          {trySearch && (
            <View>
              {idealMatch !== null ? (
                <View>
                  <Text style={styles.matchText}>
                    Your Match Depiction: {idealMatch.depiction}
                  </Text>
                  <Text style={styles.matchText}>
                    Contact your match by Email: {idealMatch.email}
                  </Text>
                </View>
              ) : (
                <Text style={styles.matchText}>No match found.</Text>
              )}
            </View>
          )}
        </View>
      )}
    </View>
  );
};

export default UserScreen;
