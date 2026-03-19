function Label(
    {
        LabelText,
        inputId
    }
)
{
    return (
        <label htmlFor={inputId} className="text-white uppercase font-semibold">
            {LabelText}
        </label>
    )
}

export default Label