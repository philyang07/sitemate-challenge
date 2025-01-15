
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        flex: 1,
        padding: 20,
    },
    articleContainer: {
        backgroundColor: "#FFFFC5", 
        borderRadius: 10,
        padding: 16,
        marginBottom: 20,
    },
    articleTitle: {
        fontSize: 24,
        marginBottom: 8,
    },
    articleDescription: {
        fontSize: 12,
        marginBottom: 8,
    },
    articleInfoRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 20,
    },
    articleImage: {
        borderRadius: 20,
    },
    articleAuthor: {
        fontSize: 12,
        color: "#888888",
    },
    articleDate: {
        fontSize: 12,
        color: "#888888",
    },
    articleContent: {
        marginTop: 20,
        fontSize: 15,
    }
});