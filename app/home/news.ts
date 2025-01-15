export interface Article {
source: {
    id: string | null;  
    name: string;
};         
author: string | null;  
title: string;   
description: string | null;
url: string;
urlToImage: string | null;
publishedAt: string;
content: string | null;
}

const QUERY_SIZE = 100;
const DISPLAY_SIZE = 10;

export const fetchNews = async (query: string): Promise<Article[]> => {
    const api_key = process.env.EXPO_PUBLIC_NEWS_API_KEY;
    try {
      const url = `https://newsapi.org/v2/everything?q=${query}&pageSize=${QUERY_SIZE}&sortBy=popularity&apiKey=${api_key}`;
      const response = await fetch(url);
        

      const data = await response.json();

      const filteredArticles = data.articles.filter(
        (e: Article) => !e.title.toLowerCase().includes('[removed]')
      ).slice(0, );

      return filteredArticles.slice(0, DISPLAY_SIZE);
    } catch (e) {
      console.error(e);
    }
    return [];
};