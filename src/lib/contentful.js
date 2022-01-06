import { createClient } from 'contentful'
import { paramCase } from 'change-case'

const client = createClient({
    space: process.env.REACT_APP_SPACE_ID,
    accessToken: process.env.REACT_APP_CONTENTFUL_API_KEY
})

export async function getPost(slug){
    const Response = client.getEntries({
        "fields.slug": slug,
        content_type: "blogPost"
    }).then(response => response.json())

    return Response;
}

export async function getPosts(){
    const articles = client.getEntries().then(response => response.items);

    (await articles).map(article => {
        article.fields.URLtitle = paramCase(article.fields.title)
    })
        
    return articles;
}