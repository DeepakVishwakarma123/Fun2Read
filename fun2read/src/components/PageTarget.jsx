function PageTarget(
    {
        startPage=42,
        endPage=50
    }
)
{
    return (
        <div className="flex justify-center items-center gap-4">
            <div className="flex text-xl font-semibold">
                <p className="text-lime-400">Target</p>
            </div>
            <div className="text-white font-extrabold">
                {startPage} to {endPage}
            </div>
        </div>
    )
}

export default PageTarget