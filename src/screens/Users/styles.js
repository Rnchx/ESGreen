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
  title1: {
    fontSize: 25,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 40
  },
  titlePage: {
    margin: 10,
  },
  title: {
    color: "#2C6D0C",
    fontWeight: "800",
    textAlign: "center",
  },
  userItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#202020",
    width: 300
  },
  containerUserItemPai: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  containerUserItem: {
    backgroundColor: "white",
    opacity: 0.8,
    margin: 3
  },
  userActions: {
    flexDirection: "row",
    gap: 10,
  },
  userName: {
    fontSize: 16,
    color: "#202020",
    fontWeight: "bold",
  },
  editButton: {
    padding: 5,
    borderRadius: 5,
    backgroundColor: "#4CAF50",
    marginRight: 5,
    minWidth: 70,
    alignItems: "center",
  },
  detailsButton: {
    padding: 5,
    borderRadius: 5,
    backgroundColor: "#2C6D0C",
    minWidth: 70,
    alignItems: "center",
  },
  textButton: {
    color: "white",
    fontWeight: "700"
  },
});

export default styles;
