import React from 'react'
export const ProductCard: React.FC<any> = (props) => {

  const { item } = props;
  let optionDD = Object.keys(item.options[0]);
  return (
    <div className="card ProductCard h-100">
      <figure className="figure">
        <img src={item.img} className="figure-img img-fluid" alt={item.name} />
        {/* <figcaption className="figure-caption">{item.CategoryName}</figcaption> */}
      </figure>
      <div className="card-body">
        <h5 className="card-title">{item.name}</h5>
        <p className="card-text">{item.description}</p>
        <div className='d-flex'>
          <select className='w-100 m-2 bg-secondary rounded'>
            {Array.from(Array(6), (e, i) => {
              return <option key={i + 1} value={i + 1}>{i + 1}</option>
            })}
          </select>
          <select className='w-100 m-2 bg-secondary rounded'>
            {optionDD && optionDD.map((item:string)=>{
              return <option key={item} value={item}>{item}</option>
            })}
          </select>
        </div>
      </div>
    </div>
  )
}
export default ProductCard;