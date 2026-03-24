function ThirdRow()
{
    return (
       <div>
        {/* use two rows concept here  
           one rows use for title and second wil use for  prgress */}
           <div className="bg-lime-700 flex justify-between">
            <p className="text-orange-600">Progress</p>
            <p className="text-amber-500">68%</p>
           </div>

           <div className="bg-black">
           {/* this setion is progress bar  */}
            <div className="bg-blue-800 h-4 w-[68%]">
            </div>
           </div>
    </div>
    )
}

export default ThirdRow

// note down the third row acts as a progress bar here in this case