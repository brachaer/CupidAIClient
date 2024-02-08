import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    alignItems: "center",
  },
  input: {
    height: 40,
    width: 300,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
  textArea: {
    height: 150,
    verticalAlign: "top",
  },
  errorText: {
    color: "red",
    marginBottom: 10,
  },
  button: {
    backgroundColor: "blue",
    width: 300,
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
  welcomeText: {
    fontSize: 25,
    lineHeight: 30,
    fontWeight: "bold",
    marginBottom: 10,
    alignItems: "center",
  },
  emailText: {
    fontSize: 18,
    lineHeight: 24,
    marginBottom: 10,
  },
  depictionText: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 10,
    width: 350,
  },
  buttonMatch: {
    backgroundColor: "hotpink",
    width: 200,
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  matchText: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
    lineHeight: 24,
  },
  locationsText: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 5,
    lineHeight: 24,
  },
  locationItem: {
    fontSize: 14,
    marginBottom: 5,
  },
});

export default styles;
