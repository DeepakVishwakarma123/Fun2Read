function Icon(
    {
        Iconsrc,
        altText="this is icon"
    }
)
{
    return (
        <div>
            <img src={Iconsrc} alt={altText} width={"20px"} />
        </div>
    )
}

export default Icon