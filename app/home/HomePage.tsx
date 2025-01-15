import { View, Text, FlatList, TouchableOpacity, TextInput, Image, Pressable, ActivityIndicator } from "react-native"
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
                        style={styles.articleImage}
                        source={{uri: article.urlToImage}}
                        height={200}
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
    const [page, setPage] = useState<number>(1);
    const [loading, setLoading] = useState<boolean>(false);
    
    const search = async () => {
        if (!searchQuery) return;
        setPage(1);
        setLoading(true);
        const newsResults = await fetchNews(searchQuery, 1);
        setResults(newsResults);
        setLoading(false);
      };
    
      const loadMore = async () => {
        if (!searchQuery) return;
        setLoading(true);
        const nextPage = page + 1;
        const moreResults = await fetchNews(searchQuery, nextPage);
        setResults((prevResults) => [...prevResults, ...moreResults]);
        setPage(nextPage);
        setLoading(false);
      };

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
                keyExtractor={(item, index) => index.toString()}
                onEndReached={loadMore}
                onEndReachedThreshold={0.5}
                ListFooterComponent={loading ? <ActivityIndicator size="large" color="#0000ff" /> : null}
            /> :
            <Text>No articles were found for that query!</Text>}
        </View>
    )
}

export default HomePage;