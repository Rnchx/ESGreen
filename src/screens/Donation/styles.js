import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "#2C6D0C",
    fontWeight: "bold",
    fontSize: 20
  },
  button: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "#C9D4FF",
    borderRadius: 5,
  },
  viewIcons2: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  viewIcons: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#323232",
    width: 180,
    height: 80
  },
  icons: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    padding: 15,
    gap: 10,
  },
  textViewIcons: {
    marginTop: 5,
    color: "white"
  },
  form: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    display: "flex",
    flexDirection: "row"
  }
});

export default styles;
