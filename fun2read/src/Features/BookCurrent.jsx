function BookCurrent(
    {
        BookTobeselected="Deep Work"
    }
)
{
    return (
        <div className="flex p-2 bg-blue-800 text-white">
            <select id="" className="text-xl font-semibold">
                <option selected>
                    {
                        BookTobeselected
                    }
                </option>
                <option>
                    Atomic Habit
                </option>
            </select>
        </div>
    )
}

export default BookCurrent