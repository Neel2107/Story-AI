import axios from "axios";
import { useRef, useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
// import "../Login/login.css";
const Login = () => {
    const navigate = useNavigate();
    // const [role, setRole] = useState("");
    const email = useRef("");
    const password = useRef("");
    const [isChecked, setIsChecked] = useState(false);

    const emailValid =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const passwordValid = /^(?=.*\d)(?=.*[A-Z])(.{6,50})$/;

    const handleSubmitLogin = async () => {
        event.preventDefault();
        const data = {
          
            email: email.current?.value,
            password: password.current?.value,
        };

         if (!emailValid.test(data.email)) {
            alert("Please enter valid email address!");
        } else if (!passwordValid.test(data.password)) {
            alert("Please enter strong password!");
        }  else {
            const response = await axios.post(
                "http://localhost:5000/api/login",
                data
            );
            const reply = await response.status;

            if (reply === 401) {
                alert("Invalid Credentials!");
            } else if (reply === 200 ) {
                navigate("/dashboard");
            } 
        }
    };

    return (
        <>
  
        <section className="bg-gray-50 dark:bg-gray-900">
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
  
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Login to your account
              </h1>
              <form className="space-y-4 md:space-y-6" action="#">
                  <div>
                      <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                      <input ref={email} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required=""/>
                  </div>
                  <div>
                      <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input  ref={password} type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                  </div>
                  <div className="flex items-center justify-between">
                      <div className="flex items-start">
                          <div className="flex items-center h-5">
                            <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required=""  checked={isChecked}
                        onChange={() => setIsChecked(!isChecked)}/>
                          </div>
                          <div className="ml-3 text-sm">
                            <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                          </div>
                      </div>
                      <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                  </div>
                  <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"  onClick={() => handleSubmitLogin()}>Log in</button>
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                    Don&apos;t have an account yet? <Link to="/signup" className="font-medium text-primary-600 hover:underline dark:text-primary-500"> Sign up</Link>
                </p>
              </form>
          </div>
      </div>
  </div>
</section>
        </>
    );
};

export default Login;