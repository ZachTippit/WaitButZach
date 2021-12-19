import * as React from 'react';
import {TopLogo, Layout, Navbar, Main, ArticleIndex, Footer, NoMatch} from './Components';
import { BrowserRouter as Router, Routes, Route, Link, useRouteMatch, useParams } from "react-router-dom";
import useStyles from './Components/styles';

function App() {
  const classes = useStyles();

  return (
  <Router>
  <div className={classes.app}>
    <TopLogo />
    <Navbar />
  <Routes>
    <Route path='/' element={<Main />} />
    <Route path='/articles' element={<ArticleIndex />} />
  </Routes>
    <Footer />
</div>
</Router>
  );
}

export default App;
