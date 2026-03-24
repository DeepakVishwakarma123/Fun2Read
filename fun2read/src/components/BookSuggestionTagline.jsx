function BookSuggestionTagline(
    {
        bookNameToFocus="Deep Work"
    }
)
{
    return (
    <div>
    <p className="flex gap-2 font-semibold"> 
    <img src="/public/Icon/thunderbolt.png" alt="simple static thunderbot" width={"20px"}/>
     Your Ai suggest focusing on <span className="text-blue-700">{bookNameToFocus}</span> by  Cal Newport Today
    </p>
    </div>
    )
}

export default BookSuggestionTagline