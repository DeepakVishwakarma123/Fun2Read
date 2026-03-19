import Label from '../components/Label'
import Button from '../components/Button'
import Input from '../components/Input'

function SignInRightSide()
{
    return (
         <section className="col-span-6 bg-[#0F172A] grid items-center">
        <form autoComplete='on' className="flex flex-col gap-5 p-5 md:p-20">
          {/* <div className="flex flex-col gap-3.5">
          <Label LabelText={"Full name"} inputId={"name"}/>
          <Input id={"name"} type={"text"} placholder={"Deepak Vishwakarma"}/>
          </div> */}
              
          <div className="flex flex-col gap-3.5">
          <Label LabelText={"Email"} inputId={"email"}/>
          <Input id={"email"} type={"email"} placholder={"alice@gmail.com"}/>
          </div>    
  
          <div className="flex flex-col gap-3.5">
          <Label LabelText={"Password"} inputId="password"/>
          <Input id={"password"} placholder={"deepak@123#"} type={"password"}/>
          </div>
         
          <Button buttonText={"Login Now"}/>
        </form>
      </section>
    )
}

export default SignInRightSide