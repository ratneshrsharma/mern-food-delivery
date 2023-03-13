import { Link, useNavigate } from 'react-router-dom';

export const Header: React.FC<any> = () => {
  const navigate = useNavigate();

  const handleLogout = (e:any) => {
    e.preventDefault()
    localStorage.removeItem('authToken');
    navigate("/login");
  }
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
                <ul className="navbar-nav ms-auto">
                  <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                  </li>
                  {localStorage.getItem("authToken")
                    ? <>
                      <li className="nav-item">
                        <Link className="nav-link" aria-current="page" to="/my-orders">My Orders</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" aria-current="page" to="/my-cart">My Cart</Link>
                      </li>
                      <li className="nav-item">
                        <span className="nav-link btn btn-danger text-white p-2 px-4 fs-4 mt-1" onClick={handleLogout}>Logout</span>
                      </li>
                    </>
                    : <>
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

export default Header;