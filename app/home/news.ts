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

const QUERY_SIZE = 20;

export const fetchNews = async (query: string, page: number = 1): Promise<Article[]> => {
    const api_key = process.env.EXPO_PUBLIC_NEWS_API_KEY;
    try {
      const url = `https://newsapi.org/v2/everything?q=${query}&pageSize=${QUERY_SIZE}&page=${page}&sortBy=popularity&apiKey=${api_key}`;
      const response = await fetch(url);
      const data = await response.json();
  
      // Filter out articles with "[Removed]" in the title
      const filteredArticles = data.articles.filter(
        (e: Article) => !e.title.toLowerCase().includes('[removed]')
      );
      console.log(filteredArticles.length)
      return filteredArticles;
    } catch (e) {
      console.error(e);
    }
    return [];
  };