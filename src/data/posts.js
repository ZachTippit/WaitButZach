import { getAllArticles } from "../lib/article";

const articles = async() => {
    return getAllArticles();
}

console.log(articles)