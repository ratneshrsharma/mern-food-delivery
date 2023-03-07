import React from 'react'

export default function Footer() {
  return (
    <>
      <footer className="py-3 mt-4 bg-dark">
        <ul className="nav justify-content-center border-bottom  border-1 border-secondary pb-3 mb-3">
          <li className="nav-item"><a href="#" className="nav-link px-2 text-white">Home</a></li>
          <li className="nav-item"><a href="#" className="nav-link px-2 text-secondary">Features</a></li>
          <li className="nav-item"><a href="#" className="nav-link px-2 text-secondary">Pricing</a></li>
          <li className="nav-item"><a href="#" className="nav-link px-2 text-secondary">FAQs</a></li>
          <li className="nav-item"><a href="#" className="nav-link px-2 text-secondary">About</a></li>
        </ul>
        <p className="text-center text-white">© 2023 Quick FOOD</p>
      </footer>
    </>
  )
}
