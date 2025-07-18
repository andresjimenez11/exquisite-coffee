import { createRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Alert from '../components/Alert';
import { useAuth } from '../hooks/useAuth';
import Spinner from "../components/Spinner";

export default function Register() {
  
  const nameRef = createRef();
  const emailRef = createRef();
  const passwordRef = createRef();
  const passwordConfirmationRef = createRef();

  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(false);
  const {register} = useAuth({middleware: 'guest', url: '/'})

  const handleSubmit = async e => {
    e.preventDefault();

    const dataRegister = {
      name:nameRef.current.value,
      email:emailRef.current.value,
      password:passwordRef.current.value,
      password_confirmation: passwordConfirmationRef.current.value
    } 

    setLoading(true);
    register(dataRegister, setErrors, setLoading)
    //console.log(data);
  }
 
  return (
    <>
      <h1 className="text-4xl font-black">Create your account</h1>
      <p>Create your account by filling out the form</p>

      <div className="bg-white shadow-md rounded-md px-5 py-10">
        <form
          onSubmit={handleSubmit}
          noValidate
        >
          {errors ? errors.map(error => <Alert key={error}>{error}</Alert>) : null}
          <div className="mb-4">
            <label
              className="text-slate-800"
              htmlFor="name"
            >Name</label>
            <input 
              type="text"
              id="name"
              className="mt-2 w-full p-3 bg-gray-50"
              name="name"
              placeholder="Your name"
              ref={nameRef}
            />
          </div>
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
          <div className="mb-4">
            <label
              className="text-slate-800"
              htmlFor="password_confirmation"
            >Repeat your password</label>
            <input 
              type="password"
              id="password_confirmation"
              className="mt-2 w-full p-3 bg-gray-50"
              name="password_confirmation"
              placeholder="Repeat your password"
              ref={passwordConfirmationRef}
            />
          </div>

        <input
          type="submit"
          value="Create Account"
          className="main-button"
        ></input>
        {loading ? <Spinner /> : null}
        </form>
      </div>

      <nav className="mt-5 text-secondary hover:text-secondary-light">
          <Link to="/auth/login">
            Do you already have an account? Log in
          </Link>
        </nav>
    </>
  )
}
