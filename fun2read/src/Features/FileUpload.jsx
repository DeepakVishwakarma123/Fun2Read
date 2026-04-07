"use client";
import FetchApiPost from "../Hooks/FetchApiPost";
import React, { useState } from "react";
import FetchApiForm from "../Hooks/FormPost";
import Error from "../components/Error";
import { useQueryClient } from "@tanstack/react-query";



"use strict"




export function FileUploadDemo() {
  const [userBooks,setUserBooks]=useState("Test")
  const [fileError,setError]=useState(null)
  const [filestatus,setfilestatus]=useState(null)
const queryClient = useQueryClient();

  console.log(userBooks)

   async function submitfile(e) {
  
  e.preventDefault()
  
  const form=e.target
  console.log("form is here",form)
  const formdata=new FormData(form)
  console.log("form data is here",formdata)
  const fileInput = form.querySelector('input[type="file"]');
console.log(fileInput.files);
  FetchApiForm('http://localhost:4002/api/v1/file/uploadpdf',formdata).then(
    (res) => {
      console.log(res)
      if(res["status"]>400)
      {
        setError(res["data"]["message"])
      }
      if(res["status"]==200 || res["status"]==201)
      {
        setfilestatus(res["data"]["message"])

         queryClient.invalidateQueries(['book'])
      }
    }
  ).catch(
    (err) => {
      console.error(err)
    }
  )
}



  return (
    <>  
           {/*here i used  fixed height in file upload contne   */}
        <div className="bg-[#0F172A] flex justify-center border  border-transparent items-center w-[50%] h-40">
          <form onSubmit={submitfile}  encType="multipart/form-data">
        <label htmlFor="file">
        <div className="flex justify-center items-center flex-col gap-2">
            <img src="/Icon/backup-file.png" width={"50px"} alt="" />
            <p className="text-white  font-semibold">Upload a file</p>
        </div>
        </label>
        <input type="file" className="hidden" id="file" name="bookpdf"/>
        <input className="bg-[#131C2F] p-2 w-[80%] text-white border border-gray-400 rounded-2xl"  type="submit" value={"submit"} />
          </form>
       </div>
          {
            fileError &&
          <Error errorText={fileError}/>
          }
          {
           filestatus && 
           <p className="text-green-400 font-semibold text-2xl">
            {
              filestatus
            }
           </p>  
          }
    </> 
  );
}

