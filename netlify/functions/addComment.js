"use strict"
const contentful = require("contentful-management") 
exports.handler = function(event, context, callback) {
  async function main() {
    // Setup variables
    const data = JSON.parse(event.body)
    const { name, handle, message, ID, reply, replyID } = data
    let postComments = []
    // Connect to contentful
    const client = contentful.createClient({
      accessToken: process.env.REACT_APP_CONTENTFUL_API_KEY
    })

    // Get the entry based on post ID.
    await client
      .getSpace(process.env.REACT_APP_SPACE_ID)
      .then(space => space.getEnvironment("master"))
      .then(environment => environment.getEntry(ID))
      .then(entry => {
          
        // Get current comments
        entry.fields.comments["en-US"].comments.forEach(comment => {
          postComments.push(comment)
        })
        if (reply) {
          postComments.forEach(comment => {
            if (comment.id === replyID) {
              comment.replies.push({
                name: name,
                handle: handle,
                message: message,
                timestamp: Math.round(new Date().getTime() / 1000),
                id: util.uuidv4()
              })
            }
          })
        } else {
          postComments.push({
            name: name,
            handle: handle,
            message: message,
            timestamp: Math.round(new Date().getTime() / 1000),
            id: util.uuidv4(),
            replies: []
          })
        }
      })

    await client
      .getSpace(process.env.REACT_APP_SPACE_ID)
      .then(space => space.getEnvironment("master"))
      .then(environment => environment.getEntry(ID))
      .then(entry => {
        // Update comments
        entry.fields.comments = { "en-US": { comments: postComments } }
        // Update post
        entry.publish();
      })
      .then((entry) => console.log(`Entry ${entry.sys.id} published.`))
      .catch(console.error)
      
    // Callback with updated comments to update state
    callback(null, {
      statusCode: 200,
      body: JSON.stringify({
        comments: postComments
      })
    })
  }
  main().catch(console.error)
}
