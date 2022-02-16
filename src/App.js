import React, {useState, useEffect} from 'react';
import { Layout, Main, About, Article, Articles, Projects, ReadingList, Contact } from './Components';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ReactGA from 'react-ga'
import { getPost, getPosts } from './lib/contentful'

ReactGA.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS_ID)

function App() {

  const [articles, setArticles] = useState();
  const [article, setArticle] = useState();
  const [articleSlug, setArticleSlug] = useState();


  const fetchArticles = async () => {
    const articlesData = await getPosts();
    setArticles(articlesData);
  }

  const fetchArticle = async (slug) => {
    // console.log(slug, articles);
    if(typeof articles != "undefined"){
      let ARTICLE = articles.find(article => article.fields.URLtitle === slug);
      setArticle(ARTICLE);
    }
  }

  useEffect(() => {
    ReactGA.set({ page: window.location.pathname });
    ReactGA.pageview(window.location.pathname);
  }, [])

  useEffect(() => {
    fetchArticles();
    ReactGA.set({ page: window.location.pathname });
    ReactGA.pageview(window.location.pathname);
  }, [,articleSlug])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Main articles={articles} articleSelect={getPost} fetchArticle={fetchArticle} />} />
          <Route path='about' element={<About />} />
          <Route path='articles' element={<Articles articles={articles} fetchArticle={fetchArticle}/>} />
          <Route path='article/:slug' element={<Article article={article} articles={articles} fetchArticle={fetchArticle} fetchArticles={fetchArticles} />} />
          <Route path='projects' element={<Projects />} />
          {/* <Route path='reading' element={<ReadingList />} /> */}
          <Route path='contact' element={<Contact />} />
          <Route path="*" element={<Main />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
