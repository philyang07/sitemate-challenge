import { View, Text, FlatList, TouchableOpacity, TextInput, Image, Pressable } from "react-native"
import { styles } from "./HomePage.styles"
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useState } from "react";
import { Article, fetchNews } from "./news";
import { formatDate } from "../utils";
import { useNavigation } from "@react-navigation/native";

const ArticleUnit = ({article}: {article: Article}) => {

    const navigation = useNavigation();

    return (
        <Pressable
        onPress={() => {
            // @ts-ignore
            navigation.navigate("ArticlePage", {article: article});
        }}
        >
            <View style={styles.articleContainer}>
                <Text style={styles.articleTitle}>{article.title}</Text>
                {article.urlToImage ?
                    <Image 
                        source={{uri: article.urlToImage}}
                    /> : null}
                <Text style={styles.articleDescription}>{article.description}</Text>
                <View style={styles.articleInfoRow}>
                    <Text style={styles.articleAuthor}>{article.author}</Text>
                    <Text style={styles.articleDate}>{formatDate(article.publishedAt)}</Text>
                </View>
            </View>
        </Pressable>
    );
}

const HomePage = () => {

    const [results, setResults] = useState<Article[]>([]);

    const [searchQuery, setSearchQuery] = useState<string>("");

    const search = async () => {
        if (!searchQuery) return;
        const newsResults = await fetchNews(searchQuery);
        setResults(newsResults);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.headingText}>Welcome to the news app!</Text>
            <View style={styles.searchRow}>
                <View style={styles.searchContainer}>
                    <MaterialCommunityIcons 
                        name="magnify"
                        size={15}
                    />
                    <TextInput 
                        placeholder="Search"
                        inlineImageLeft=""
                        style={styles.searchBar}
                        onSubmitEditing={async () => await search()}
                        onChange={(e) => {
                            setSearchQuery(e.nativeEvent.text);
                        }}
                    />
                </View>
                <TouchableOpacity style={styles.searchButton}
                        onPress={search}
                >
                    <Text style={styles.searchButtonText}>Search!</Text>
                </TouchableOpacity>
            </View>
            {results.length ?
            <FlatList
                style={styles.articleList}
                data={results}
                renderItem={({ item }) => {
                    return (
                        <ArticleUnit article={item}/>
                    );
                }}
            /> :
            <Text>No articles were found for that query!</Text>}
        </View>
    )
}

export default HomePage;