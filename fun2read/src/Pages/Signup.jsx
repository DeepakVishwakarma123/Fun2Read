import SignUpLeftSide from "../Features/SignupLeftSide"
import SignUpRightSide from "../Features/SignUpRightSide"

function SignUp()
{
    return (
    <section className="grid md:grid-cols-12">
     <SignUpLeftSide/>
     <SignUpRightSide/>
    </section>
    )
}

export default SignUp