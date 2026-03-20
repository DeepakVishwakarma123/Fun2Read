function Input(
    {
        placholder,
        type,
        id,
        setValue
    }
)
{
    return (
        <input  onChange={(e) => {setValue(e.target.value)}} required  id={id} type={type} placeholder={placholder} className="bg-[#060E20] text-white w-full p-2.5 placeholder-[#5A6271]  rounded-sm outline-1 focus:outline-[#5A6261] outline-[#5A6261]"/> 
     )
}

export default Input