import React from 'react'
import { Grid, Stack, Typography } from '@mui/material'

import useStyles from './styles'

const movies = ['Dune', 'C\'mon C\'mon', 'Spider-Man: No Way Home', 'The Lost Daughter'];
const books = ['The Mars Trilogy', 'Ham on Rye', '1491/1493', 'The Three Body Problem']
const shows = ['Mare of Eastown', 'Hawkeye', 'It\'s Always Sunny', 'Devs']

const ReadingList = () => {
    
    const classes = useStyles();
    
    return (
        <div>
            <Typography gutterBottom variant='h4' align='center'>Recommendations</Typography>
            <Typography variant='body1' align='center'>Here are a few things I thought you'd like.</Typography>
            <Grid container
                    display='flex'
                    spacing={6}
                    sx={{pt: 5, pb: 5}}
                >
                <Grid item xs={12} sm={12} md={6} lg={4}>
                    <Typography gutterBottom variant='h4' align='center'>MOVIES</Typography>
                    <ul>
                        {movies.map((movie) => (
                            <li>
                                <Typography variant='h6' align='center' >{movie}</Typography>
                            </li>
                        ))}
                    </ul>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={4}>
                    <Typography gutterBottom variant='h4' align='center'>BOOKS</Typography>
                    <ul>
                        {books.map((book) => (
                            <li>
                                <Typography variant='h6' align='center' >{book}</Typography>
                            </li>
                        ))}
                    </ul>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={4}>
                    <Typography gutterBottom variant='h4' align='center'>TV SHOWS</Typography>
                    <ul>
                        {shows.map((show) => (
                            <li>
                                <Typography variant='h6' align='center' >{show}</Typography>
                            </li>
                        ))}
                    </ul>
                </Grid>
        </Grid>
        </div>
    )
}

export default ReadingList
