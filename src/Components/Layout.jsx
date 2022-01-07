import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar, TopLogo, Footer } from './';
import useStyles from './styles'

const Layout = () => {
    const classes = useStyles();

    return (
        <div style={{width: '100%'}}>
            <TopLogo />
            <Navbar />
            <div className={classes.mainView}>
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default Layout
