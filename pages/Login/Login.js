import {useRouter} from 'next/router'
import axios from 'axios';
export default function Login({  }) {
  const router = useRouter();
  function getDetail(e){
    e.preventDefault();
    var email_address = document.querySelector('[name="email"]').value;
    var first_name = document.querySelector('[name="first_name"]').value;
    var last_name = document.querySelector('[name="last_name"]').value;
    var dob = document.querySelector('[name="dob"]').value;
    var password = document.querySelector('[name="password"]').value;
    var signupDetails = {firstname : first_name , lastname : last_name , dob : dob, email : email_address , password : password}
    const configuration = {
      mode: 'no-cors',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
      withCredentials: true,
      credentials: 'same-origin',
      method : "POST",
      url : "http://localhost:3001/register",
      data: signupDetails,
    }
    axios(configuration)
    .then((result) => {console.log(result)})
    .catch((e) => {console.log(e)});
    
    return false;
  }
  function login(e){
    e.preventDefault();
    var email_address = document.querySelector('[name="login_email"]').value;
    var password = document.querySelector('[name="login_password"]').value;
    var loginDetails = {email : email_address , password : password}
    const configuration = {
      mode: 'no-cors',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
      withCredentials: true,
      credentials: 'same-origin',
      method : "POST",
      url : "http://localhost:3001/login",
      data: loginDetails,
    }
    axios(configuration)
    .then((result) => {
      var token = result.data.token;
      var email = result.data.email;
      if(token && email)
      {
        router.push("/Homepage/Homepage");
      }
      else{
        console.log(result.response.status);
      }
    })
    .catch((e) => {console.log(e)});
    
    return false;

   
  }
  function changeDiv(e){
    console.log(e.target.className);
    document.querySelector("."+e.target.className).parentElement.classList.add('active');
    if(e.target.className == "signup_btn"){
      document.querySelector("."+e.target.className).parentElement.nextSibling.classList.remove('active');
      document.querySelector("#signup").style.display="block";
      document.querySelector("#login").style.display="none";
    }
    else{
      document.querySelector("."+e.target.className).parentElement.previousSibling.classList.remove('active');
      document.querySelector("#signup").style.display="none";
      document.querySelector("#login").style.display="block";
    }
  }
  return (
    <header className="pt-20 pb-12">
      <div className="form">
      <div >
      <ul className="tab-group">
        <li className="tab active"><a href="#signup" className="signup_btn"  onClick={changeDiv}>Sign Up</a></li>
        <li className="tab"><a href="#login" className="login_btn" onClick={changeDiv}>Log In</a></li>
      </ul>
      </div>
      <div className="tab-content">
        <div id="signup">   
          <h1 className="heading-h">Sign Up for Free</h1>
          
          <form action="/" method="GET" onSubmit={getDetail}>
          
          <div className="top-row">
            <div className="field-wrap">
              <label className="label_div">
                First Name<span className="req">*</span>
              </label>
              <input className="input_tag" name="first_name" type="text" required  />
            </div>
        
            <div className="field-wrap">
              <label className="label_div">
                Last Name<span className="req">*</span>
              </label>
              <input className="input_tag" name="last_name" type="text"required autoComplete="off"/>
            </div>
          </div>

          <div className="field-wrap">
              <label className="label_div">
                DOB<span className="req">*</span>
              </label>
              <input className="input_tag" name="dob" type="text"required autoComplete="off"/>
            </div>
          <div className="field-wrap">
            <label className="label_div">
              Email Address<span className="req">*</span>
            </label>
            <input className="input_tag" name="email" type="email"required autoComplete="off"/>
          </div>
          
          <div className="field-wrap">
            <label className="label_div">
              Set A Password<span className="req">*</span>
            </label>
            <input className="input_tag" name="password" type="password"required autoComplete="off"/>
          </div>
          
          <button type="" className="button button-block">Get Started</button>
          
          </form>

        </div>
        
        <div id="login">   
          <h1 className="heading-h">Welcome Back!</h1>
          
          <form action="/" method="GET" onSubmit={login}>
          
            <div className="field-wrap">
            <label className="label_div">
              Email Address<span className="req">*</span>
            </label>
            <input className="input_tag" name="login_email" type="email"required autoComplete="off"/>
          </div>
          
          <div className="field-wrap">
            <label className="label_div">
              Password<span className="req">*</span>
            </label>
            <input className="input_tag" name="login_password" type="password"required autoComplete="off"/>
          </div>
          
          <p className="forgot"><a href="#">Forgot Password?</a></p>
          
          <button className="button button-block">Log In</button>
          
          </form>

        </div>
        
      </div>
      </div>
    </header>
  );
}
