import React from 'react'
import Banner from '../../component/Banner'
import ProductCard from '../../component/ProductCard'


export default function Home() {
  return (
    <>
      <Banner />
      <div className='container-fluid my-5'>
        <div className="row row-cols-2 row-cols-md-3 row-cols-xl-5 g-4">
          <div className="col">
            <ProductCard />
          </div>
        </div>
      </div>
    </>
  )
}
