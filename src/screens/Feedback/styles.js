import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    flex: 1,
    width: '100%',
  },
  containerNameCompany: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "25%"
  },
  nameCompany: {
    color: "#545454",
    fontSize: 20,
    fontWeight: "bold"
  },
  nameCompany2: {
    color: "#1CB714",
    fontSize: 20,
    fontWeight: "bold"
  },
  texto: {
    marginTop: 150,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "400",
    color: "#202020"
  },
  input: {
    backgroundColor: "#FFFF",
    opacity: 0.8,
    padding: 22,
    marginLeft: 45,
    marginRight: 45,
    marginTop: 10,
    borderWidth: 0.8,
    borderColor: "black"
  },
  containerButton: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 40
  },
  button: {
    marginTop: 10,
    width: 150,
    padding: 5,
    backgroundColor: "#2C6D0C",
    borderRadius: 2,
  },
  textButton: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 17
  }
});

export default styles;