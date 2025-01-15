
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: "#fff",
    },
    headingText: {
        fontSize: 20,
        marginBottom: 10,
    },
    searchContainer: {
        backgroundColor: "#F2F2F6",
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 12,
        gap: 5,
        borderRadius: 8,
        flex: 1,
    },
    searchBar: {
        flex: 1,
    },
    searchRow: {
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
        marginBottom: 16,
    },
    searchButton: {
        paddingVertical: 10,
        paddingHorizontal: 16,
        borderRadius: 10,
        backgroundColor: "#F2F2F6",
    },
    searchButtonText: {

    },
    articleList: {
    },
    articleContainer: {
        borderWidth: 1,
        borderColor: "#777777",
        borderRadius: 10,
        padding: 16,
        marginBottom: 20,
    },
    articleTitle: {
        fontSize: 15,
        marginBottom: 8,
    },
    articleDescription: {
        fontSize: 12,
        marginBottom: 8,
    },
    articleInfoRow: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    articleAuthor: {
        fontSize: 12,
        color: "#888888",
    },
    articleDate: {
        fontSize: 12,
        color: "#888888",
    }
});