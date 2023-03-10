import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  const [auth, setAuth] = useState<String>('')
  let authData: string | null = localStorage.getItem("authToken")
  useEffect(() => {
    if (authData) {
      setAuth(authData)
    } else {
      setAuth('')
    }
  }, [authData])
  return (
    <>
      <header className='header'>
        <div className='container'>
          <nav className="navbar sticky-top navbar-expand-lg navbar-dark">
            <div className="container-fluid">
              <Link className="navbar-brand fs-1 fst-italic" to="/">Quick FOOD</Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                  </li>
                  {auth && <>
                    <li className="nav-item">
                      <Link className="nav-link" to="#logout" onClick={() => { localStorage.removeItem('authToken'); setAuth('') }}>Logout</Link>
                    </li>
                  </>}
                  {auth === '' && <>
                    <li className="nav-item">
                      <Link className="nav-link" to="/login">Login</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/signup">Signup</Link>
                    </li>
                  </>
                  }
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  )
}
