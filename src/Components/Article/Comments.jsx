import React from "react"
// import { useEffect } from 'react';
import { formatDate } from "../../lib/comments"
import { Typography, Box, Button, Divider } from '@mui/material'
import useStyles from '../styles'

const Comments = ({comments, reply, sortComments, order}) => {
    const orderComments = order === true ? "Oldest First" : "Most Recent"

    // useEffect(() => {
    //     console.log(comments);
    // }, [comments])


    return (
        <>
            <Box sx={{ paddingTop: '2rem'}}>
                {comments && <Typography variant='h5'><b>Comments ({comments.length})</b></Typography>}
                <Divider variant="middle" sx={{mb: 2, mt: 1}}/>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end'}}>
                    <Button variant='outlined' onClick={sortComments}>{orderComments}</Button>
                </Box>
            </Box>
            {comments.map(comment => (
                <div key={comment.id}>
                    <Box sx={{mb: 2, mt: 4}}>
                        <Typography variant='body1'><b>{comment.name}</b></Typography>
                        <Typography gutterBottom variant='subtitle' style={{fontSize: '.75rem'}}><i>{formatDate(comment.timestamp).toString()}</i></Typography>
                        <Box sx={{pt:1}}>
                            <Typography variant='body1'>{comment.message}</Typography>
                        </Box>
                        <Box sx={{mt: 2}}>
                            <Button size='small' variant='contained' onClick={() => reply(comment.id, comment.name)}>Reply</Button>
                        </Box>
                    </Box>
                    {comment.replies !== undefined && 
                        <Box sx={{ml:4, pb: 8}}>
                            {comment.replies.map((comment, index, replies) => (
                                <div style={{borderLeft: '1px solid lightgray'}}>
                                    <Box sx={{pl: 4, pb: 4, pt: 2}} key={index} >
                                        <Typography variant='body1'><b>{comment.name}</b></Typography>
                                        <Typography gutterBottom variant='subtitle' style={{fontSize: '.75rem'}}><i>{formatDate(comment.timestamp).toString()}</i></Typography>
                                        <Box sx={{pt:2}}>
                                            <Typography variant='body1'>{comment.message}</Typography>
                                        </Box>
                                    </Box>
                                    {(index !== replies.length-1) && <Divider variant="middle" sx={{width: '50%'}} style={{marginTop: '0.5rem'}}/>}
                                </div>
                            ))}
                        </Box>
                    }
                    <Divider variant="middle" sx={{mb: 2, mt: 4, width: '80%', margin: 'auto'}}/>
                </div>
            ))}
        </>    
    )
}

export default Comments