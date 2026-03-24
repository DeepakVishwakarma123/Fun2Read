function TopRowDashboard()
{
    return (
          <div className="bg-orange-800 flex justify-end gap-4 p-2">
           {/* this container hold name and tagline of user */}
            <div className="flex flex-col">
                <p>
                Alex Revera
                </p>
                <p>
                    Pro Reader
                </p>
            </div>
            {/* this container acts as user avatar */}
            <div className="size-14 rounded-[50%] flex  justify-center items-center bg-purple-900">
                <img src="/public/Icon/laugh.png" alt="simple avatar" width={"43px"} />
            </div>
        </div>
    )
}

export default TopRowDashboard