"use client";
import FetchApiPost from "../Hooks/FetchApiPost";
import React, { useState } from "react";
import FetchApiForm from "../Hooks/FormPost";
import Error from "../components/Error";

"use strict"




export function FileUploadDemo() {
  const [userBooks,setUserBooks]=useState("Test")
  const [fileError,setError]=useState(null)
  const [filestatus,setfilestatus]=useState(null)
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
        <div className="bg-teal-800 flex justify-center border border-lime-950 items-center w-[50%] h-40">
          <form onSubmit={submitfile}  encType="multipart/form-data">
        <label htmlFor="file">
        <div className="flex justify-center items-center flex-col gap-2">
            <img src="/Icon/cloud-computing.png" width={"50px"} alt="" />
            <p className="text-lime-400 font-semibold">Upload a file</p>
        </div>
        </label>
        <input type="file" className="hidden" id="file" name="bookpdf"/>
        <input className="bg-amber-300 p-2 w-[80%] rounded-2xl"  type="submit" value={"submit"} />
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

