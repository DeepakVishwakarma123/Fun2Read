import SignInLeftSide from "../Features/SingInLeftSide";
import SignInRightSide from "../Features/SignInRightSide";

function SignIn()
{
    return (
    <section className="grid md:grid-cols-12">
        <SignInLeftSide/>
        <SignInRightSide/>
    </section>
    )
}

export default SignIn