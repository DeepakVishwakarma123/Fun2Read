import Logo from "../components/Logo"
import FirstHeading from "../components/FirstHeading"
import EndHeading from "../components/EndHeading"
import SpanHeading from "../components/SpanHeading"
import TagLine from "../components/TagLine"
import Copyright from "../components/Copyright"


function SignInLeftSide()
{
    return (
 <div className="col-span-6 bg-[#010d21] p-8 flex md:justify-center md:h-screen lg:h-screen">
        <div className="flex flex-col md:justify-between gap-9 p-2">
          <Logo/>
          <div className="flex flex-col gap-10">
            <div>
          <FirstHeading startText={"Back In"}/>
          <SpanHeading spanText={"Future"}/>
          <EndHeading endText={"of Reading"}/>
            </div>
          <TagLine/>
          </div>
          <Copyright/>
        </div>
      </div>
    )
}

export default SignInLeftSide