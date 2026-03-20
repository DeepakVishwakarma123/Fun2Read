function Button(
    {
        buttonText,
        handler,
        type
    }
)
{
return (
    <button type={type}  onClick={handler} className="bg-[#8083FF]  text-white  font-semibold  flex justify-center items-center w-full p-2">
        {buttonText}
    </button>
)
}

export default Button