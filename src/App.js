import React, {useState, useEffect} from 'react';
import { TopLogo, Navbar, Footer } from './Components';
import { Outlet } from 'react-router-dom'
import useStyles from './Components/styles';
import {  Main, About, Article, Articles, Layout, ArticlesIndex, ReadingList, Projects, Contact } from './Components';
import Article2 from './Components/Article/Article'
import { BrowserRouter, Routes, Route, useParams, useNavigate } from 'react-router-dom'

import { getPost, getPosts } from './lib/contentful'

const articles2 = getPosts();

function App() {
  const classes = useStyles();


  const [articles, setArticles] = useState();
  const [article, setArticle] = useState();

  const fetchArticles = async () => {
    const articlesData = await getPosts();
    setArticles(articlesData);
  }

  useEffect(() => {
    fetchArticles();
  }, [, articles])

  useEffect(() => {
    console.log(article);
  }, [,article])


  const findArticle = (slug) => {
    let ARTICLE = articles.find(article => article.fields.URLtitle === slug);
    setArticle(ARTICLE);
  }

  const fetchAndFindArticle = async (slug) => {
    const articlesData = await getPosts();
    let ARTICLE = articlesData.find(article => article.fields.URLtitle === slug);
    setArticle(ARTICLE);
  }

  // const fetchArticle = async(id) => {
  //   const ARTICLE = await getPost(id);
  //   setArticle(ARTICLE);
  //   console.log(article);
  // }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Main articles={articles} articleSelect={getPost} fetchArticle={findArticle}/>} />
          <Route path='about' element={<About />} />
          <Route path='articles' element={<ArticlesIndex articles={articles} findArticle={findArticle}/>} />
          <Route path='article/:slug' element={<Article articles={articles} article={article} findArticle={findArticle} fetchAndFindArticle={fetchAndFindArticle} />} />
          <Route path='projects' element={<Projects />} />
          <Route path='reading' element={<ReadingList />} />
          <Route path='contact' element={<Contact />} />
          <Route path="*" element={<Main />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// <Navbar />
// <Outlet />
// <Footer />
