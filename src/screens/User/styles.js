import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    },
    image: {
        flex: 1,
        width: '100%',
    },
    containerInfos: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    user: {
        alignItems: "center",
        width: 270,
        height: 243,
        marginTop: 100,
        backgroundColor: "#f0f8ff",
        borderRadius: 5,
        borderColor: "black",
        opacity: 0.8
    },
    subtitleDetalhes: {
        fontWeight: "bold",
        fontSize: 16
    },
    userActions: {
        alignItems: "center",
        marginTop: 40,
        borderColor: "black",
        flexDirection: "row",
        gap: 10,
    },
    text: {
        marginTop: 15,

    },
    info: {
        marginTop: 100,
        textAlign: "center",
        color: "white",
        fontWeight: "700",
    },
    editButton: {
        padding: 5,
        borderRadius: 5,
        backgroundColor: "#4CAF50",
        marginRight: 5,
        minWidth: 70,
        alignItems: "center",
    },
    deleteButton: {
        padding: 5,
        borderRadius: 5,
        backgroundColor: "#ff0000",
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
