import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 400,
    height: 400,
    justifyContent: "center",
    marginTop: -400,
  },
  titulo: {
    color: 'white',
    fontSize: 25,
    fontWeight: "bold",
    marginTop: -80,
    marginLeft: 15,
  },
  subtitulo: {
    color: 'white',
    fontSize: 22,
    marginLeft: 30
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
  },
  button: {
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    padding: 10,
    backgroundColor: "#C9D4FF",
    borderRadius: 5,
  },
});

export default styles;
