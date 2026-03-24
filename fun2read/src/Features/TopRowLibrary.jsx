function TopRowLibrary()
{
    return (
          <div className="bg-orange-800 flex  gap-4 p-2">
           {/* this container hold name and tagline of user */}
            <div className="flex flex-col">
                <p className="text-2xl font-semibold text-white">
                 My Library
                </p>
                <p className="text-lime-500 tracking-widest">
                    Organize and mange your digital Collection
                </p>
            </div>
        </div>
    )
}

export default TopRowLibrary