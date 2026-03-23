async function FetchApiGet(url) {
  let response=await fetch(`${url}`,{
        method:"get",
        credentials:"include"
    })
    let data=await response.json()
    return  { data, response}
}

export default FetchApiGet