async function FetchApiForm(url,bodyObject)
{     

    try {
        let response=await fetch(`${url}`,{
        method:"POST",
        body:bodyObject,
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

export default FetchApiForm


/*

*/