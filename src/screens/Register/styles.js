import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
  },
  image: {
    flex: 1,
    width: '100%',
  },
  title: {
    fontSize: 25,
    fontWeight: "700",
    color: "white",
    textAlign: "center"
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  userInput: {
    padding: 8,
    width: 300,
    borderBottomColor: "white",
    borderBottomWidth: 1,
    color: "white",
  },
  containerButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 15
  },
  button: {
    padding: 2,
    backgroundColor: "#2C6D0C",
    width: 150,
    borderRadius: 2,
    margin: 5
  },
  buttonCancel: {
    padding: 2,
    backgroundColor: "#DC143C",
    width: 150,
    borderRadius: 2,
    margin: 5
  },
  text: {
    color: "white",
    fontWeight: "700",
    fontSize: 15,
    textAlign: "center"
  }
});

export default styles;
