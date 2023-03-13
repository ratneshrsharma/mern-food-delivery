import React, { useEffect, useState } from 'react'
import Banner from '../../component/Banner'
import ProductCard from '../../component/ProductCard'


export const Home: React.FC<any> = () => {
  const [searchItems, setSearchItems] = useState<any | null>('');
  const [foodItems, setFoodItems] = useState<any | null>([]);
  const [foodCat, setFoodCat] = useState<any | null>([]);

  const getFoodItems = async () => {
    let resFoodItems = await fetch("http://localhost:5000/api/food-items", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }
    })
    resFoodItems = await resFoodItems.json()
    setFoodItems(resFoodItems);

    console.log("foodItems", resFoodItems);
  }
  const getFoodCats = async () => {
    let resFoodCats = await fetch("http://localhost:5000/api/food-categories", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }
    })
    resFoodCats = await resFoodCats.json()
    setFoodCat(resFoodCats);
  }

  useEffect(() => {
    getFoodItems();
    getFoodCats();

  }, [])


  return (
    <>
      <Banner searchItems={searchItems} setSearchItems={setSearchItems} />
      <div className='container my-5'>
        {foodCat && foodCat.map((cat: any, index: number) => {
          return (<>
            <div key={index} className="categoryName">{cat.CategoryName}</div>
            <hr className='mb-4' />
            <div className="row row-cols-2 row-cols-md-3 row-cols-xl-5 g-5 mb-5">
              {(foodItems?.length > 0)
                ? foodItems.filter(
                  (item: any) => (item.CategoryName === cat.CategoryName)
                    && (item.name.toLowerCase().includes(searchItems.toLocaleLowerCase()))
                )
                  .map((item: any, index: number) => {
                    return (<div className="col">
                      <ProductCard item={item} key={index} />
                    </div>);
                  })
                : "No Food Items"
              }
            </div>
          </>
          );
        })}
      </div>
    </>
  )
}

export default Home;