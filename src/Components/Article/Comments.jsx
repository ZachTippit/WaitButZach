import React, {useState, useEffect} from "react"
import { formatDate } from "../../lib/comments"
import { Grid, Typography, Box, Button, Divider } from '@mui/material'
import useStyles from '../styles'

const Comments = ({comments, reply, sortComments, order}) => {
    const classes = useStyles();
    const orderComments = order === true ? "Oldest First" : "Most Recent"
    const [commentsData, setCommentsData] = useState(comments);

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
                    <Box sx={{mb: 2}}>
                        <Typography variant='body1'><b>{comment.name}</b></Typography>
                        <Typography gutterBottom variant='subtitle' style={{fontSize: '.75rem'}}><i>{formatDate(comment.timestamp).toString()}</i></Typography>
                        <Box sx={{pt:1}}>

                        </Box>
                        <Typography variant='body1'>{comment.message}</Typography>
                        <Box sx={{mt: 2}}>
                            <Button size='small' variant='contained' onClick={() => reply(comment.id, comment.name)}>Reply</Button>
                        </Box>
                    </Box>
                    {comments.replies !== undefined && 
                        <Box sx={{ml:4, pb: 8}}>
                            {comment.replies.map((comment, index) => (
                                <Box sx={{pl: 4}} key={index} style={{borderLeft: '1px solid lightgray'}}>
                                    <Typography variant='body1'><b>{comment.name}</b></Typography>
                                    <Typography gutterBottom variant='subtitle' style={{fontSize: '.75rem'}}><i>{formatDate(comment.timestamp).toString()}</i></Typography>
                                    <Typography variant='body1'>{comment.message}</Typography>
                                </Box>
                            ))}
                        </Box>
                    }
                    <Divider variant="middle" sx={{mb: 2, mt: 4, width: '50%', margin: 'auto'}}/>
                </div>
            ))}
        </>    
    )
}

export default Comments