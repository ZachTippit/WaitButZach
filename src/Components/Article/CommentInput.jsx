import React, {useState} from 'react'
import { Typography, Grid, Divider, Button, Box } from '@material-ui/core'
import { useForm } from 'react-hook-form';
import useStyles from '../styles'


const initialValues = {
    name: '',
    handle: '',
    message: ''
}

const CommentInput = ({addComment, cancelReply, replyBool, replyName, msg, loading}) => {
    const classes = useStyles();

    const [values, setValues] = useState(initialValues);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setValues({
          ...values,
          [name]: value,
        });
      };


    return (
        <div>
            <Typography gutterBottom variant='h5'><b>Leave a comment</b></Typography>
            <Divider variant="middle" sx={{mb: 2, mt: 1}}/>
            <form onSubmit={addComment}>
                <Grid container spacing={1} style={{marginTop: '1rem'}}>
                    <Grid item xs={12}>
                        <Typography gutterBottom variant='body1'>
                            <b>Name</b>
                        </Typography>
                        <input
                            style={{width: '100%', height: '1.75em'}}
                            type="text"
                            id="name"
                            name="name"
                            value={values.name}
                            onChange={handleInputChange}
                            placeholder='Name'
                            required
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Typography gutterBottom variant='body1' sx={{pl:2}}>
                            <b>Handle</b>
                        </Typography>
                        <input
                            style={{width: '100%', height: '1.75em'}}
                            type="text"
                            id="handle"
                            name="handle"
                            value={values.handle}
                            onChange={handleInputChange}
                            placeholder="Will be linked in your name (optional)"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Typography gutterBottom variant='body1'>
                            <b>Message</b>
                        </Typography>
                        <textarea
                            style={{width: '100%', height: '4rem', resize: 'none'}}
                            name="message"
                            id="message"
                            value={values.message}
                            onChange={handleInputChange}
                            placeholder={replyBool ? replyName : "Hey you, what'd you think?"}
                            required
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Box sx={{pb:1}}>
                            <Button fullWidth type="submit" variant="contained" sx={{pb: 2}}>{loading? 'Adding...' : 'Add Comment'}</Button>
                        </Box>
                        {replyBool && 
                            <Box sx={{pb:1}}>
                                <Button fullWidth onClick={cancelReply} variant='contained'>Cancel Reply</Button>
                            </Box>
                        }
                    </Grid>
                    <Grid item xs={12}>
                        <span>{msg}</span>
                    </Grid>
                </Grid>
            </form>
        </div>
    )
}

export default CommentInput
