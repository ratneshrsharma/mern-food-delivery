import React from 'react'

export default function ProductCard() {
  return (
    <div className="card h-100">
      <img src="https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&h=750&q=80" className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Tag, tag text</p>
        <div className='d-flex'>
          <select className='w-100 m-2 bg-secondary rounded'>
            {Array.from(Array(6), (e, i) => {
              return <option key={i + 1} value={i + 1}>{i + 1}</option>
            })}
          </select>
          <select className='w-100 m-2 bg-secondary rounded'>
            <option value={'6inch'}>6 inch</option>
            <option value={'12inch'}>12 inch</option>
          </select>
        </div>
      </div>
    </div>
  )
}
