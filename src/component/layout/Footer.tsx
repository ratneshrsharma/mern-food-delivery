import React from 'react'

export default function Footer() {
  return (
    <>
      <footer className="py-3 footer">
        <div className='container'>
          <ul className="nav justify-content-center pb-3 mt-3">
            <li className="nav-item"><a href="#" className="nav-link active">Home</a></li>
            <li className="nav-item"><a href="#" className="nav-link">Features</a></li>
            <li className="nav-item"><a href="#" className="nav-link">Pricing</a></li>
            <li className="nav-item"><a href="#" className="nav-link">FAQs</a></li>
            <li className="nav-item"><a href="#" className="nav-link">About</a></li>
          </ul>
          <p className="copyright">© 2023 Quick FOOD</p>
        </div>
      </footer>
    </>
  )
}
