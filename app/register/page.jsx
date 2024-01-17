"use client";
import "@Styles/Register.scss"
// import "@Styles/variable.module.scss"
import {FcGoogel, FcGoogle} from 'react-icons/fc'
const Register = () => {
  return (
  
    <div className="register">


        <img src="/assets/register.jpg" className="register_decor"></img>
        <div className="register_content">
        <form className="register_content_form">

         <input placeholder="username"  name="username"  required /> 
         

         <input placeholder="email"  name="email"  required /> 

         <input placeholder="password"  name="password"  required /> 

         <input placeholder="confirm password"  name="confirmpassword"  required /> 

         <input type="file"  name="profileImage" required   />
         <label htmlFor="image">
          <img src="/assets/addImage.png"></img>
          <p>Upload Profile Photo</p>
         </label>
         <button type="submit">Register</button>


        </form>

        <button type="button" onClick={() => {} } className="google" >
          <p>Log In With Google </p>  {FcGoogle} </button>

            <a href="/login">Already Have an Account ? Login on Here  </a>
            
        </div>


      </div>



  )
}

export default Register