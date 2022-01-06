import { createClient } from 'contentful-management';
import { v4 as uuidv4 } from 'uuid';
import dateFormat, { masks } from 'dateformat';

const client = createClient({
    accessToken: process.env.REACT_APP_CONTENTFUL_PAT
})

export async function postCommentsFn(data, context, callback){
    const { name, handle, message, ID, reply, replyID } = data;
    let postComments = [];

    await client.getSpace(process.env.REACT_APP_SPACE_ID)
    .then(space => space.getEnvironment('master'))
    .then(environment => environment.getEntry(ID))
    .then(entry => {
        entry.fields.comments["en-US"].comments.forEach(comment => {
            postComments.push(comment)
            })
    })

    if (reply) {
        postComments.forEach(comment => {
            if (comment.id === replyID) {
            comment.replies.push({
                name: name,
                handle: handle,
                message: message,
                timestamp: Math.round(+new Date() / 1000),
                id: uuidv4()
                })
            }
        })
    } else {
        console.log(+new Date()/1000);
        postComments.push({
            name: name,
            handle: handle,
            message: message,
            timestamp: Math.round(+new Date() / 1000),
            id: uuidv4(),
            replies: []
        })
    }


    await client.getSpace(process.env.REACT_APP_SPACE_ID)
    .then(space => space.getEnvironment('master'))
    .then(environment => environment.getEntry(ID))
    .then(entry => {
        // Update Comments
        entry.fields.comments = { "en-US": {comments: postComments } }

        // Update Post
        return entry.update();
    })
    .catch(console.error);

    return postComments;
}

export function formatDate(timestamp){
    const date = new Date(timestamp * 1000);
    
    // console.log(date, hours, minutes, seconds, date, month, year)
    return dateFormat(date, "mmmm dS, yyyy, h:MM:ss TT");
}