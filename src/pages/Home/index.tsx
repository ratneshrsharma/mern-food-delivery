import React, { useState } from 'react'
import Banner from '../../component/Banner'
import ProductList from '../../component/ProductList'

export const Home: React.FC<any> = () => {
  const [searchItems, setSearchItems] = useState<any | null>('');
  return (
    <>
      <Banner searchItems={searchItems} setSearchItems={setSearchItems} />
      <ProductList searchItems={searchItems} key={0} />
    </>
  )
}

export default Home;