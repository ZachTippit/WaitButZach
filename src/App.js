import * as React from 'react';
import {TopLogo, Layout, Navbar, Main, ArticleIndex, Projects, Footer, NoMatch} from './Components';
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
    <Route path='/projects' element={<Projects />} />
  </Routes>
    <Footer />
</div>
</Router>
  );
}

export default App;
