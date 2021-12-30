export const handleAddSubscriber = async ({firstName, lastName, email, comment, subscribe=true}) => {

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            contactFormData: { firstName, lastName, email, comment },
            isSubscribing: subscribe
        })
    };

    const Response = await fetch('https://zdt-portfolio-backend.herokuapp.com/contact', requestOptions)
    console.log(Response);
    
    return Response.ok;
}

export const addSubscriber = async ({firstName, lastName, email, comment}) => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
            api_key: process.env.REACT_APP_CK_API_KEY, 
            email: email
            })
    };
    const Response = await fetch('https://api.convertkit.com/v3/forms/2858441/subscribe', requestOptions);
    
    return Response.ok;
}

export const subscriberCount = async() => {

        const Response = await fetch(`https://api.convertkit.com/v3/subscribers?api_secret=${process.env.REACT_APP_CK_API_SECRET}`)
            .then(response => response.json())
            .then(data => {return data.total_subscribers})
        return Response;
}