import Label from '../components/Label'
import Button from '../components/Button'
import Input from '../components/Input'
import { use, useEffect, useState } from 'react'
import FetchApiPost from '../Hooks/FetchApiPost'
import Loader from '../components/Loader'
import Error from '../components/Error'

function SignUpRightSide()
{  
    
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [response,setResponse]=useState(" ")
    const [error,setError]=useState()



    useEffect(
      () => {
        if(response["status"]>400)
        {
          let message=response["data"]["message"]
          setError(message)
        }
      },[response]
    )


    let Register=() => {
      if(name==="" ||  email==="" || password==="" || password.length!=6)
        {
          console.error("please fill all fields")
          return
        }
        //setting state to null its mean that data is not available at 
        // setResponse(null)
  FetchApiPost('http://localhost:4002/api/v1/register',{username:name,email:email,password:password}).then( 
  (data) => {
      console.log(data)
      setResponse(data)         
  }
  ).catch(
  (err) => console.log(err) 
  )       
    }


    return (
         <section className="col-span-6 bg-[#0F172A] grid items-center">
        <form autoComplete='on' className="flex flex-col gap-5 p-5 md:p-20">
          <div className="flex flex-col gap-3.5">
          <Label LabelText={"Full name"} inputId={"name"}/>
          <Input id={"name"}  setValue={setName} type={"text"} placholder={"Deepak Vishwakarma"}/>
          </div>
              
          <div className="flex flex-col gap-3.5">
          <Label LabelText={"Email"} inputId={"email"}/>
          <Input id={"email"} setValue={setEmail}  type={"email"} placholder={"alice@gmai.com"}/>
          </div>    
  
          <div className="flex flex-col gap-3.5">
          <Label LabelText={"Password"} inputId="password"/>
          <Input id={"password"} setValue={setPassword} placholder={"deepak@123#"} type={"password"}/>
          </div>
          {
            response?<Button handler={Register} type={"button"} buttonText={"Create Account"}/>:<Button handler={Register} type={"button"} buttonText={<Loader/>}/>
          }
          {
            error && <Error errorText={error}/>
          }
        </form>
      </section>
    )
}

export default SignUpRightSide