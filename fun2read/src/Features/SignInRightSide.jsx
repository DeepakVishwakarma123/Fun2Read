import Label from '../components/Label'
import Button from '../components/Button'
import Input from '../components/Input'
import Loader from '../components/Loader'
import FetchApiPost from '../Hooks/FetchApiPost'
import Error from '../components/Error'
import { useNavigate } from 'react-router-dom'
import { useState,useEffect } from 'react'


function SignInRightSide()
{   

    const navigate=useNavigate()
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
          navigate("/section/b")
        }
      },[response]
    )

    useEffect(
      () => {
        setError(null)
      },[email,password]
    )



      let login=() => {
      if(email==="" || password==="" || password.length!=6)
        {
          console.error("please fill all fields")
          return
        }
        setLoading(true)
        FetchApiPost('http://localhost:4002/api/v1/auth/login',{email:email,password:password}).then( 
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
        <form autoComplete='on' className="flex flex-col gap-5 p-5 md:p-20">
          {/* <div className="flex flex-col gap-3.5">
          <Label LabelText={"Full name"} inputId={"name"}/>
          <Input id={"name"} type={"text"} placholder={"Deepak Vishwakarma"}/>
          </div> */}
              
          <div className="flex flex-col gap-3.5">
          <Label LabelText={"Email"} inputId={"email"}/>
          <Input setValue={setEmail} id={"email"} type={"email"} placholder={"alice@gmail.com"}/>
          </div>    
  
          <div className="flex flex-col gap-3.5">
          <Label LabelText={"Password"} inputId="password"/>
          <Input setValue={setPassword} id={"password"} placholder={"deepak@123#"} type={"password"}/>
          </div>

           {
            loading?<Button handler={login} type={"button"} buttonText={<Loader/>}/>:
            <Button handler={login} type={"submit"} buttonText={"Login Now"}/>
          }
          {
            error && <Error errorText={error}/>
          }
        </form>
      </section>
    )
}

export default SignInRightSide
