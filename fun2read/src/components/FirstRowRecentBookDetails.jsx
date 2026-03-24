function FirstRow()
{
    return (
        <div className="bg-orange-700">
        {/* firs row for bookt title and  status */}
        <div className="flex justify-between">
            <p className="text-2xl">Deep Work</p>
            <span className="text-blue-800">Now Reading</span>
        </div>
        {/* first row for book title ends here */}

        {/* second row for author name only */}
        <div className="text-lime-300">
            <p>Cal New Port</p>
        </div>
        {/* second row for authonr only ends here */}

     </div>
    )
}

export default FirstRow