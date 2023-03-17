import React, { useEffect, useRef, useState } from 'react'
import { useDispatchCart, useCart } from "./ContextReducer";

export const ProductCard: React.FC<any> = (props) => {
  const { item } = props;


  const [qty, setQty] = useState<any | null>(1);
  const [size, setSize] = useState('');

  let dispatch = useDispatchCart();

  let data = useCart();

  const priceRef = useRef<any>()
  let options = props.options;
  let optionDD = Object.keys(options);

  const handleAddToCart = async () => {
    await dispatch({ type: "ADD", id: item._id, name: item.name, qty: qty, size: size, price: finalPrice, img: item.img })
  }

  let finalPrice = qty * parseInt(options[size]);

  useEffect(() => {
    setSize(priceRef.current.value)
  }, [])


  return (
    <div className="card ProductCard h-100">
      <figure className="figure">
        <img src={item.img} className="figure-img img-fluid" alt={item.name} />
        <figcaption className="figure-caption">
          <button className='btn btn-accent addToCart' onClick={handleAddToCart}>ADD +</button>
        </figcaption>
      </figure>
      <div className="card-body">
        <h2 className="card-title">{item.name}</h2>
        <p className="card-text">{
          item?.description
            && (item?.description.length > 50)
            ? (item?.description.slice(0, 50) + '...')
            : item?.description
        }
        </p>
        <div className='d-flex justify-content-between gap-3'>
          <select className='w-50 form-control form-select rounded' onChange={(e) => setQty(e.target.value)}>
            {Array.from(Array(6), (e, i) => {
              return <option key={i + 1} value={i + 1}>{i + 1}</option>
            })}
          </select>
          <select className='w-100 form-control form-select rounded' ref={priceRef} onChange={(e) => setSize(e.target.value)}>
            {optionDD && optionDD.map((item) => {
              return <option key={item} value={item}>{item[0].toUpperCase() + item.slice(1)}</option>
            })}
          </select>
        </div>
        <h5 className='card-price'><i className="bi bi-currency-rupee"></i> {finalPrice}/- </h5>
      </div>
    </div>
  )
}
export default ProductCard;