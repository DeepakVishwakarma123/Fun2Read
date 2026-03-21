function CustomValidationMessage(targetElement)
{ 
  
  if(targetElement.type!="password")
  {
    return
  }
   let inputElement=targetElement
   if(targetElement.type==="password" && targetElement.value.length!=6)
  { 
    inputElement.setCustomValidity("password must be six character")
  }else{
      inputElement.setCustomValidity("")
  }
}

export default CustomValidationMessage