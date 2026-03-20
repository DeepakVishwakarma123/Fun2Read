function Error(
    {
     errorText
    }
)
{
    return (
        <p className="font-semibold text-red-800 text-2xl">
            {
                errorText
            }
        </p>
    )
}

export default Error