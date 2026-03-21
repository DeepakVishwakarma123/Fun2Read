import Label from '../components/Label'
import Button from '../components/Button'
import Input from '../components/Input'
import { use, useEffect, useState } from 'react'
import FetchApiPost from '../Hooks/FetchApiPost'
import Loader from '../components/Loader'
import Error from '../components/Error'
import {useNavigate} from "react-router-dom"

function SignUpRightSide()
{  
    const navigate=useNavigate()
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [response,setResponse]=useState(" ")
    const [loading,setLoading]=useState(null)
    const [error,setError]=useState()



    useEffect(
      () => {
        if(response["status"]>400)
        {
          let message=response["data"]["message"]
          setError(message)
        }
        if(response["status"]===201)
        {
          navigate("/fun2read/login")
        }
      },[response]
    )

    useEffect(
      () => {
        setError(null)
      },[email,name,password]
    )


    let Register=() => {
      if(name==="" ||  email==="" || password==="" || password.length!=6)
        {
          console.error("please fill all fields")
          return
        }
        setLoading(true)
  FetchApiPost('http://localhost:4002/api/v1/register',{username:name,email:email,password:password}).then( 
  (data) => {
      console.log(data)
      setResponse(data)
      setLoading(null)         
  }
  ).catch(
  (err) => console.log(err) 
  )       
    }


    return (
         <section className="col-span-6 bg-[#0F172A] grid items-center">
        <form  className="flex flex-col gap-5 p-5 md:p-20">
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
            loading?<Button handler={Register} type={"button"} buttonText={<Loader/>}/>:
            <Button handler={Register} type={"submit"} buttonText={"Create Account"}/>
          }
          {
            error && <Error errorText={error}/>
          }
        </form>
      </section>
    )
}

export default SignUpRightSide