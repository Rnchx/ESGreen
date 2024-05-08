import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container2: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    flex: 1,
    width: '100%',
  },
  text: {
    marginTop: 200,
    marginBottom: 15,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
    color: "white"
  },
  viewButton: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  button: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2C6D0C",
    width: 150,
    padding: 5,
    borderRadius: 5,
  },
  textButton: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 17
  },
  card: {
    backgroundColor: 'white',
    opacity: 0.8,
    width: 300,
    height: 350,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
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
    height: 80,
    marginBottom: 20,
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
    color: "white",
    fontWeight: "bold"
  },
  form: {
    display: "flex",
    justifyContent: "center",
  },
  input: {
    display: "flex",
    flexDirection: "row",
    color: "black",
    gap: 20,
    padding: 5,
  },
  donation: {
    marginTop: 10
  },
  donationInput: {
    borderBottomWidth: 1,
    width: 200
  },
  donationText: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 15,
    color: "white",
    marginBottom: 5
  },
  donationText2: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 35,
    color: "white",
    marginBottom: 10
  }
});

export default styles;
