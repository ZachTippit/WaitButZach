import React from 'react'
import useStyles from '../styles';
import logo from '../../img/logo.png'

const TopLogo = () => {
    const classes = useStyles();

    return (
        <div className={classes.topLogoContainer}>
            <img className={classes.topLogoIMG} src={logo} alt='Zach of All Trades' />
        </div>
    )
}

export default TopLogo
