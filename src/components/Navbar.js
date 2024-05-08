import React, { useEffect } from 'react'
import{Link,useLocation, useNavigate} from 'react-router-dom'
const Navbar = () => {
    const nav=useNavigate(null)
    let location = useLocation()
    const logout=()=>{
      localStorage.removeItem('token')
      nav('/login')
    }
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
        <Link className="navbar-brand" to="/">Navbar</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
            <Link className={`nav-link ${location.pathname==='/'?'active':''}`} aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
            <Link className={`nav-link ${location.pathname==='/about'?'active':''}`} to="about">About</Link>
            </li>
        </ul>
        {!localStorage.getItem('token')&&<div>
        <Link type="button" className="btn btn-success" to="/login">Login</Link>
        <Link type="button" className="btn btn-success mx-2" to='/signup'>Signup</Link>
        </div>}
        {localStorage.getItem('token')&&<button type="button" className="btn btn-success" onClick={logout}>Logout</button>
        }
        </div>
    </div>
    </nav>
  )
}

export default Navbar