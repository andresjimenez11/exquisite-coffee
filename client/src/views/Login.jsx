import { createRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth';
import Alert from '../components/Alert';
import Spinner from "../components/Spinner";

export default function Login() {

  const emailRef = createRef();
  const passwordRef = createRef();

  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(false); // State to display the spinner 
  const { login } = useAuth({
    middleware: 'guest',
    url: '/'
  })

  const handleSubmit = async e => {
    e.preventDefault();

    const dataLogin = {
      email:emailRef.current.value,
      password:passwordRef.current.value,
    } 
    
    setLoading(true); //.. Actualizamos el state

    login( dataLogin, setErrors, setLoading )
    
  }

  return (
    <>
      <h1 className="text-4xl font-black">Log in</h1>
      <p>To create an order you must log in</p>

      <div className="bg-white shadow-md rounded-md px-5 py-10">
          <form
            onSubmit={handleSubmit}
            noValidate
          >
            {errors ? errors.map(error => <Alert key={error}>{error}</Alert>) : null}
            <div className="mb-4">
                <label
                  className="text-slate-800"
                  htmlFor="email"
                >Email</label>
                <input 
                  type="email"
                  id="email"
                  className="mt-2 w-full p-3 bg-gray-50"
                  name="email"
                  placeholder="Your name"
                  ref={emailRef}
                />
              </div>
              <div className="mb-4">
                <label
                  className="text-slate-800"
                  htmlFor="password"
                >Password</label>
                <input 
                  type="password"
                  id="password"
                  className="mt-2 w-full p-3 bg-gray-50"
                  name="password"
                  placeholder="Your password"
                  ref={passwordRef}
                />
              </div>
              <input
              type="submit"
              value="Login"
              className="main-button"
            ></input>
            {loading ? <Spinner /> : null}
          </form>
        </div>

        <nav className="mt-5 text-secondary hover:text-secondary-light">
          <Link to="/auth/register">
            You do not have an account? Register to enter
          </Link>
        </nav>
    </>

  )
}
