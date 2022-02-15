import { createClient } from 'contentful'
import { paramCase } from 'change-case'

const client = createClient({
    space: process.env.REACT_APP_SPACE_ID,
    accessToken: process.env.REACT_APP_CONTENTFUL_API_KEY
})

export async function getPost(slug){
    const Response = client.getEntries({
        "fields.slug": slug,
        content_type: "blogPost",
        include: 10
    }).then(response => response.json())

    return Response;
}

export async function getPosts(page=1){
    const articles = client.getEntries({
        limit: 10,
        skip: (page-1)*10,
        content_type: 'article',
        order: '-fields.published'
    })
    .then(response => response.items);

    (await articles).map(article => {
        article.fields.URLtitle = paramCase(article.fields.title)
    })

    // console.log(articles);
        
    return articles;
}