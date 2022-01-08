import React, {useState, useEffect} from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { Navbar, TopLogo, Footer } from './';
import ShareBar from './Article/Subcomponents/ShareBar'
import useStyles from './styles'

const Layout = () => {
    const classes = useStyles();

    const location = useLocation();
    const [articleURL, setArticleURL] = useState();

    useEffect(() => {
        setArticleURL(location.pathname)
    }, [location.pathname])

    return (
        <div style={{width: '100%'}}>
            <TopLogo />
            <Navbar />
            <Outlet />
            {/* <ShareBar articleURL={articleURL}/> */}
            <Footer />
        </div>
    )
}

export default Layout
