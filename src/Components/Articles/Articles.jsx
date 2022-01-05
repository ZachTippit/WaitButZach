import React, {useEffect, useState} from 'react'
import { Grid, Typography } from '@material-ui/core'
import Sidebar from '../Sidebar/Sidebar'
import FeaturedContent from '../Main/FeaturedContent'
import ArticleCard from '../Article/ArticleCard';
import Article2 from '../Article/Article';
import useStyles from '../styles'
import { Route, Link, Outlet } from 'react-router-dom'
import { getAllArticles } from '../../lib/article.js'


const Articles = () => {
    return(
        <>
            <Outlet />
        </>
    )
}

export default Articles