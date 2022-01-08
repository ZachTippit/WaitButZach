import React, {useState, useEffect} from 'react';
import { Layout, Main, About, Article, Articles, Projects, ReadingList, Contact } from './Components';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { getPost, getPosts } from './lib/contentful'

function App() {

  const [articles, setArticles] = useState();
  const [article, setArticle] = useState();


  const fetchArticles = async () => {
    const articlesData = await getPosts(1);
    setArticles(articlesData);
  }

  useEffect(() => {
    fetchArticles();
    // console.log(articles);
  }, [])

  // useEffect(() => {
  //   console.log(article);
  // }, [,article])

  // const handlePageSet = (pageNum) => {

  //   setPage(pageNum);
  // }


  const findArticle = (slug) => {
    let ARTICLE = articles.find(article => article.fields.URLtitle === slug);
    setArticle(ARTICLE);
  }

  const fetchAndFindArticle = async (slug) => {
    const articlesData = await getPosts();
    let ARTICLE = articlesData.find(article => article.fields.URLtitle === slug);
    setArticle(ARTICLE);
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Main articles={articles} articleSelect={getPost} fetchArticle={findArticle} />} />
          <Route path='about' element={<About />} />
          <Route path='articles' element={<Articles articles={articles} findArticle={findArticle}/>} />
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
