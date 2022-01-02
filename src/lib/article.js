
// Need to change this to opening up article link.
export const getArticle = async (articleID) => {

    const Response = await fetch(`https://zdt-portfolio-backend.herokuapp.com/article/${articleID}`).then(response => response.json())

    return Response;
}

export const getAllArticles = async () => {

    const Response = await fetch(`https://zdt-portfolio-backend.herokuapp.com/articles`).then(response => response.json())
    
    return Response.items;
}

// Load all articles

// Leave a comment