import React from 'react'
import useStyles from '../styles';
import logo from '../../img/logo.png'
import '../animations.css'
import clsx from 'clsx'

const TopLogo = () => {
    const classes = useStyles();

    return (
        <div className={clsx(classes.topLogoContainer, 'slide-in-fwd-center')}>
            <img className={classes.topLogoIMG} src={logo} alt='Zach of All Trades' />
        </div>
    )
}

export default TopLogo
