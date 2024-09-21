// styles.js

import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: "#f7f7f7",
    },
    title: {
        fontSize: 28,
        fontWeight: "bold",
        marginBottom: 20,
        color: "#282828",
        textAlign: "center",
    },
    taskList: {
        flex: 1,
    },
    taskItem: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "left",
        backgroundColor: "#fff",
        marginBottom: 10,
        padding: 15,
        borderRadius: 5,
    },
    taskTextContainer: {
        flex: 1,
    },
    taskText: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#333",
    },
    completedTaskText: {
        textDecorationLine: "line-through",
        color: "#282828",
    },
    taskDescription: {
        fontSize: 16,
        color: "#666",
    },
    taskTime: {
        fontSize: 14,
        color: "#666",
    },
    taskStatus: {
        fontSize: 16,
        color: "#666",
    },
    buttonContainer: {
        // Or 'row' depending on your layout
        flexDirection: "column", 
        // Adjust the value as needed for the 
        // desired spacing
        marginVertical: 2, 
    },

    editButton: {
        backgroundColor: "#4C4C4C",
        borderRadius: 8,
        padding: 12,
        marginRight: 20,
        width: 130,
    },
    button: {
        marginBottom: 18,
    },
    completeButton: {

        backgroundColor: "#4C4C4C",
        borderRadius: 8,
        padding: 12,
        marginRight: 20,
        width: 130,
    },
    completedButton: {
        backgroundColor: "#282828",
    },
    buttonText: {
        color: "#fff",
        fontSize: 16
    },
    deleteButton: {
        backgroundColor: "#C13636",
        borderRadius: 8,
        padding: 12,
        width: 130,
    },
    addButton: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#282828",
        paddingVertical: 15,
        borderRadius: 10,
        marginTop: 20,
    },
    addButtonText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
    },
    modalContainer: {
        flex: 1,
        padding: 20,
        backgroundColor: "#fff",
    },
    input: {
        borderWidth: 1,
        borderColor: "#282828",
        padding: 10,
        marginBottom: 20,
        borderRadius: 5,
        fontSize: 16,
    },
    inputLabel: {
        fontSize: 16,
        fontWeight: "bold",
    },
    errorText: {
        color: "#C13636",
        fontSize: 16,
        marginBottom: 10,
    },
    taskDeadline: {
        color: "#C13636",
    },
    taskCreatedAt: {
        color: "#5497FF",
    },
});

export default styles;