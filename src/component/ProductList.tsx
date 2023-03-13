import { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

export const ProductList: React.FC<any> = (props) => {
  const { searchItems } = props;
  const [foodItems, setFoodItems] = useState<any | null>([]);
  const [foodCat, setFoodCat] = useState<any | null>([]);

  // To get Food Items
  const getFoodItems = async () => {
    let resFoodItems = await fetch("http://localhost:5000/api/food-items", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }
    })
    resFoodItems = await resFoodItems.json()
    setFoodItems(resFoodItems);
  }

  // To get Food Categories
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


  return (<>
    <div className='container my-5'>
      {foodCat && foodCat.map((cat: any, index: number) => {
        return (<>
          <div key={cat.CategoryName + index} className="categoryName">{cat.CategoryName}</div>
          <hr className='mb-4' />
          <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-5 mb-5">
            {(foodItems?.length > 0)
              ? foodItems.filter(
                (item: any) => (item.CategoryName === cat.CategoryName)
                  && (item.name.toLowerCase().includes(searchItems.toLocaleLowerCase()))
              )
                .map((item: any, index: number) => {
                  return (
                    <div className="col" key={"col-" + cat.CategoryName + "-" + index}>
                      <ProductCard item={item} options={item.options[0]} />
                    </div>
                  );
                })
              : "No Food Items"
            }
          </div>
        </>
        );
      })}
    </div>
  </>)
}
export default ProductList;