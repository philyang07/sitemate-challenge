import { View, Text, Image } from "react-native";
import { Article } from "./news";
import { styles } from "./ArticlePage.styles";
import { formatDate } from "../utils";

export const ArticlePage = ({route}: {route: any}) => {

    const article = route.params.article as Article;
    return (
        <View style={styles.container}>
            <Text style={styles.articleTitle}>{article.title}</Text>
            <View style={styles.articleInfoRow}>
                <Text style={styles.articleAuthor}>{article.author}</Text>
                <Text style={styles.articleDate}>{formatDate(article.publishedAt)}</Text>
            </View>
            {article.urlToImage ?
                <Image 
                    style={styles.articleImage}
                    source={{uri: article.urlToImage}}
                    height={300}
                /> : null}
            <Text style={styles.articleContent}>{article.content}</Text>
        </View>
    );
}