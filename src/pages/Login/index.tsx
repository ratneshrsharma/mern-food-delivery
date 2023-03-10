import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Login() {
  const [userDetails, setUserDetails] = useState({ email: "", password: "" })
  const [errorMsg, setErrorMsg] = useState<any>();
  const [invalidMsg, setInvalidMsg] = useState<string>();
  const [successMsg, setSuccessMsg] = useState<any>();
  let navigate = useNavigate();

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: userDetails.email,
          password: userDetails.password,
        })
      })

      let json = await response.json();
      if (!json.success) {
        setSuccessMsg(null)

        if (json?.errors) {
          setInvalidMsg('');
          setSuccessMsg(null)
          setErrorMsg(json?.errors);
        } else {
          setErrorMsg(null);
          setSuccessMsg(null)
          setInvalidMsg(json?.msg);
        }

      }
      else {
        setInvalidMsg('');
        setErrorMsg(null)
        setSuccessMsg(json?.msg)
        setUserDetails({ email: "", password: "" })
        localStorage.setItem("authToken",json?.authToken)
        navigate('/')
      }

    } catch (error) {
      console.log('Error:', error)
    }

  }

  const onChange = (e: any) => {
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value })
  }

  return (
    <>
      <div className='withoutLoginContainer'
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1581873372796-635b67ca2008?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')` }}
      >
        <div className='middleFormBox'>
          <h2 className='title mb-5'>Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="container">
              <div className="row">
                <div className="col-12">
                  {(errorMsg?.length > 0)
                    ? errorMsg.map((item: any, index: number) => {
                      return (
                        <div className="alert alert-danger d-flex justify-content-between align-items-center" role="alert" key={index}>
                          <span>{item.msg}</span>
                        </div>)
                    })
                    : invalidMsg && <div className="alert alert-danger d-flex justify-content-between align-items-center" role="alert">
                      <span>{invalidMsg}</span>
                    </div>
                  }

                  {successMsg &&
                    <div className="alert alert-success d-flex justify-content-between align-items-center" role="alert">
                      <span>{successMsg}</span>
                    </div>
                  }
                </div>
                <div className="col-6">
                  <input type="email" className="form-control mb-4" name='email' value={userDetails.email} onChange={onChange} placeholder='Email' />
                </div>
                <div className="col-6">
                  <input type="password" className="form-control mb-4" name='password' value={userDetails.password} onChange={onChange} placeholder='Password' />
                </div>
                <div className="col-12">
                  <button type="submit" className="btn btn-primary my-3">Login</button><br />
                  <Link to='/signup' className='btn btn-link'>Don't have an Account? Signup.</Link>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
