import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  title: {
    fontSize: 25,
    fontWeight: "700",
    color: "white",
    textAlign: "center",
    marginTop: "35%"
  },
  containerForm: {
    marginTop: "5%",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  formInputIcons: {
    display: "flex",
    flexDirection: "row"
  },
  containerIcon: {
    marginTop: 9,
    margin: 2
  },
  userInput: {
    padding: 8,
    width: 300,
    borderBottomColor: "white",
    borderBottomWidth: 1,
    color: "white",
  },
  containerMessageAlert: {
    borderRadius: 2,
    margin: 10,
    borderWidth: 0.8,
    borderColor: "red",
    padding: 2,
    backgroundColor: "white",
    opacity: 0.8
  },
  messageError: {
    color: "#202020"
  },
  containerButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 15
  },
  button: {
    padding: 3,
    backgroundColor: "#2C6D0C",
    width: 150,
    borderRadius: 5,
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
