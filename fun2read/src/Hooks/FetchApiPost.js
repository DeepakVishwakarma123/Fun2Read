async function FetchApiPost(url,bodyObject)
{     

    try {
        let response=await fetch(`${url}`,{
        method:"POST",
        headers:{
            'Content-Type':"application/json"
        },
        body:JSON.stringify(bodyObject),
        credentials:"include"
    })
    let data=await response.json()
    let finalDataObject={
        data,
        status:response.status
    }
    return finalDataObject
    } catch (error) {
        return Promise.reject(error)
    }
}

export default FetchApiPost


/*

*/