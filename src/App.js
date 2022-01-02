import * as React from 'react';
import {TopLogo, Navbar, Main, About, ArticleContainer, ReadingList, Projects, Contact, Footer} from './Components';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
    <Route path='/about' element={<About />} />
    <Route path='/articles' element={<ArticleContainer />} />
    <Route path='/projects' element={<Projects />} />
    <Route path='/reading' element={<ReadingList />} />
    <Route path='/contact' element={<Contact />} />
  </Routes>
    <Footer />
</div>
</Router>
  );
}

export default App;
