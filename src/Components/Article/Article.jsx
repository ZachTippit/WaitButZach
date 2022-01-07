import React, { useState, useEffect, Suspense } from 'react'
import { Typography, Divider, Grid } from '@mui/material';
import Comments from './Comments';
import CommentInput from './CommentInput'
import useStyles from '../styles';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { getArticle } from '../../lib/article'
import { getCommentsFn, postCommentsFn } from '../../lib/comments'
import axios from 'axios'


const Article = ({article, articles, findArticle, fetchAndFindArticle}) => {
    const params = useParams();
    const location = useLocation();
    const navigate = useNavigate();

    const [articleData, setArticle] = useState(article);
    const [comments, setComments] = useState()
    const [sorting, setSorting] = useState();
    const [replyBool, setReplyBool] = useState(false);
    const [replyName, setReplyName] = useState();
    const [replyID, setReplyID] = useState();
    const [loading, setLoading] = useState();
    const [timestamp, setTimestamp] = useState();
    const [msg, setMsg] = useState();

    useEffect(() => {
      // console.log(article, location.pathname, params.slug)
        async function fetchArticle(slug){
            if(!articles){
                setArticle(await fetchAndFindArticle(slug));
            } else{
                setArticle(await findArticle(slug));
            }    
        }

        fetchArticle(params.slug);
        
    }, [,article, location.pathname, params.slug])
    
    useEffect(() => {
      async function fetchComments(article){
        const id = article.sys.id
        // console.log(id);
        const commentsData = await getCommentsFn(id);
        setComments(commentsData)
            // setComments(article.fields.comments.comments)
      }    
      fetchComments(article);
      // console.log(comments);
    }, [,article])

  // Reply  
  const reply = (id, name) => {
    window.scrollTo(50, document.body.scrollHeight)
    setReplyBool(true);
    setReplyName(`Replying to ${name}`)
    setReplyID(id)
    console.log(replyBool, replyName, replyID);
  }

  // Cancel Reply
  const cancelReply = evt => {
    evt.preventDefault()
    setReplyBool(false);
    setReplyName('');
    setReplyID(null);
  }

    // Add comment
  const addComment = evt => {

    evt.preventDefault()
    const form = evt.target
    const axiosConfig = {
      header: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      }
    }

    // Check if a comment has been made by the current user.
    const localTimestamp = localStorage.getItem("timestamp")
    if (localTimestamp) {
      // Check if comment was made less than 60 seconds ago.
      const date1 = new Date(localTimestamp * 1000)
      const date2 = new Date(Math.round(new Date().getTime() / 1000) * 1000)
      const res = Math.abs(date1 - date2) / 1000
      var minutes = Math.floor(res / 60) % 60
      var seconds = res % 60
      // If not, go ahead and comment.
      if (minutes >= 1) {
        setLoading(true);
        setTimestamp(Math.round(new Date().getTime() / 1000))
        postCommentsFn(
          {
            name: form[0].value,
            handle: form[1].value,
            message: form[2].value,
            ID: article.sys.id,
            reply: replyBool,
            replyID: replyID
          }
        ).then(response => {
          if(response !== ''){
            setComments(response);
            form.reset()
            setReplyID(false)
            setReplyName('');
            setReplyID(null);
            setMsg('');
            setLoading(false);
            setTimestamp('');
          }
          else {
            setMsg('Oops, something went wrong. Please try again!')
          }
        })

        // Update the timestamp to reflect new comment
        const timestamp = Math.round(new Date().getTime() / 1000)
        localStorage.setItem("timestamp", timestamp)
        // If the last comment is under 60 seconds, notify user.
      } else if (minutes < 1) {
        setMsg(`You're commenting too fast! Please try again in ${60 - seconds} seconds`);
      }

    // If there was no stored timestamp from the current user, set the timestamp and make the comment
  } else {
    const timestamp = Math.round(new Date().getTime() / 1000)
    localStorage.setItem("timestamp", timestamp)
    postCommentsFn(
          {
            name: form[0].value,
            handle: form[1].value,
            message: form[2].value,
            ID: article.sys.id,
            reply: replyBool,
            replyID: replyID
          }
        ).then(response => {
          if(response !== ''){
            setComments(response);
            form.reset()
            setReplyID(false)
            setReplyName('');
            setReplyID(null);
            setMsg('');
            setLoading(false);
            setTimestamp('');
          }
          else {
            setMsg('Oops, something went wrong. Please try again!')
          }
        })
    }

    setTimeout(() => { 
      setMsg('');
    }, 5000)
  }

    // Sort comments
    const sortComments = () => {
        const commentsList = comments;
        if (!sorting) {
            const sorted = commentsList.sort((a, b) => (a.timestamp < b.timestamp ? -1 : 1))
            setComments(sorted);
            setSorting(true);
        } else {
            const sorted = commentsList.sort((a, b) => (a.timestamp > b.timestamp ? -1 : 1))
            setComments(sorted);
            setSorting(false);
        }
    }

    const classes = useStyles();

    return (
      <Grid container direction='row' sx={{mt: 2, mb: 12}}>
          <Grid item xs sm md lg></Grid>
          <Grid item xs={10} sm={10} md={8} lg={6}>
              <div className={classes.articleContainer}>
                {!article ? 
                  <h3>It's loading, bucko.</h3> 
                  : 
                  <>
                    <img src={article.fields.headerImage.fields.file.url} alt={article.fields.headerImage.fields.title} className={classes.articleHeaderPic}/>
                    <Typography sx={{mt: 2, color: '#333'}} variant='h4'><b>{article.fields.title}</b></Typography>
                    <Typography variant='body2' sx={{color: '#111', pl: 2, mt: 1}}>{article.fields.subtitle}</Typography>
                    <Typography gutterBottom variant='body2' sx={{mt: 1, pb: 2, fontSize: '0.625rem', pl: 2}}><i>First published: {article.fields.datePublished}<span style={{paddingRight: '2rem'}} />By Zach Tippit</i></Typography>
                    <Divider variant="middle" sx={{mb: 4}}/>
                    {documentToReactComponents(article.fields.articleBody)}
                    <Divider variant="middle" sx={{mt: 4, mb: 4}}/>
                  </>
                }
              </div>
              <CommentInput cancelReply={cancelReply} addComment={addComment} replyBool={replyBool} replyName={replyName} msg={msg} loading={loading}/>
              {comments !== undefined ?
                <Comments comments={comments} reply={reply} sortComments={sortComments} order={sorting}/>
                :
                <h3>Comments Loading....</h3>
              }
          </Grid>
          <Grid item xs sm md lg></Grid>
      </Grid>
    )
}

export default Article