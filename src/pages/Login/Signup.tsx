import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Signup() {
  const [userDetails, setUserDetails] = useState({ name: "", phone: "", email: "", password: "", geolocation: "" })
  const [errorMsg, setErrorMsg] = useState<any>();
  const [successMsg, setSuccessMsg] = useState<any>();

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/user/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: userDetails.name,
          email: userDetails.email,
          password: userDetails.password,
          phone: userDetails.phone,
          location: userDetails.geolocation,
        })
      })

      let json = await response.json();
      if (!json.success) {
        setSuccessMsg(null)
        setErrorMsg(json?.errors)
      }
      else {
        setErrorMsg(null)
        setSuccessMsg(json?.msg)
        setUserDetails({ name: "", phone: "", email: "", password: "", geolocation: "" })
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
          <h2 className='title mb-5'>Sign up</h2>
          <form onSubmit={handleSubmit}>
            <div className="container">
              <div className="row">
                <div className="col-12">
                  {errorMsg && errorMsg.map((item: any, index: number) => {
                    return (
                      <div className="alert alert-danger d-flex justify-content-between align-items-center" role="alert" key={index}>
                        <span>{item.msg}</span>
                      </div>)
                  })}
                  {successMsg &&
                    <div className="alert alert-success d-flex justify-content-between align-items-center" role="alert">
                      <span>{successMsg}</span>
                    </div>
                  }
                </div>
                <div className="col-6">
                  <input type="text" className="form-control mb-4" name='name' value={userDetails.name} onChange={onChange} placeholder='Name' />
                </div>
                <div className="col-6">
                  <input type="tel" className="form-control mb-4" name='phone' value={userDetails.phone} onChange={onChange} placeholder='Phone' />
                </div>
                <div className="col-6">
                  <input type="text" className="form-control mb-4" name='email' value={userDetails.email} onChange={onChange} placeholder='Email' />
                </div>
                <div className="col-6">
                  <input type="password" className="form-control mb-4" name='password' value={userDetails.password} onChange={onChange} placeholder='Password' />
                </div>
                <div className="col-6">
                  <input type="text" className="form-control mb-4" name='geolocation' value={userDetails.geolocation} onChange={onChange} placeholder='Location' />
                </div>
                <div className="col-12">
                  <button type="submit" className="btn btn-primary my-3">Submit</button><br />
                  <Link to='/login' className='btn btn-link'>Already a user, login.</Link>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
