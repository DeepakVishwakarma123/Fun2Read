"use client";
import React, { useState } from "react";


export function FileUploadDemo() {
  return (
    <>  
           {/*here i used  fixed height in file upload contne   */}
        <div className="bg-teal-800 flex justify-center border border-lime-950 items-center w-[50%] h-40">
        <label htmlFor="file">
        <div className="flex justify-center items-center flex-col gap-2">
            <img src="/Icon/cloud-computing.png" width={"50px"} alt="" />
            <p className="text-lime-400 font-semibold">Upload a file</p>
        </div>
        </label>
        <input type="file" className="hidden" id="file"/>

       </div>
    </> 
  );
}

