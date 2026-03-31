import TopRowLibrary from "../Features/TopRowLibrary"
import LibraryMainContainer from "../Features/LibraryMainContainer"
import { booksContext } from "../context/context"
import { useContext, useEffect } from "react"
import FetchApiPost from "../Hooks/FetchApiPost"
import FetchApiGet from "../Hooks/FetchApiGet"
import { useQuery } from "@tanstack/react-query"
import Loader from "../components/Loader"

function MyLibrary()
{
    const {books,setbook}=useContext(booksContext)
    async function getUserBooks() {
      let userbooks=FetchApiGet('http://localhost:4002/api/v1/file/getpdf')
      return userbooks
    }

  let {data,isLoading,error} = useQuery(
    {
        queryKey:['book'],
        queryFn:getUserBooks,
        staleTime:1000*60
    }
  )

  useEffect(
    () => {
        if(data)
        {
            setbook(data["data"]["data"])
        }
        console.log("data is now",data)
        console.log(data)

    },[data]
  )


   console.log("book is now",books)
    return (
        <div className="bg-orange-950 h-full">
            <TopRowLibrary/>
            {
                isLoading ? <Loader />:<LibraryMainContainer/>
            }
        </div>
    )
}

export default MyLibrary