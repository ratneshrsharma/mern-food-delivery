import React, { useState } from 'react'
import { Table } from 'react-bootstrap';
import { useCart, useDispatchCart } from '../../component/ContextReducer';

export const Cart: React.FC<any> = () => {
  const [searchItems, setSearchItems] = useState<any | null>('');
  let data = useCart();
  let dispatch = useDispatchCart();

  if (data?.length === 0) {
    return (<><div className='fs-1 text-center m-5'><br />The Cart is Empty!</div></>)
  }

  let totalPrice = data && data.reduce((total: number, food: any) => total + food.price, 0)
  return (
    <>
      <div className='container'>
        <Table className='cartTable' responsive striped hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Qty.</th>
              <th>Option</th> 
              <th>Amount</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data && data.map((item: any, index: number) => {
              return (
                <tr key={index + 1}>
                  <td>{index + 1}</td>
                  <td>{item?.name}</td>
                  <td>{item?.qty}</td>
                  <td>{item?.size}</td>
                  <td>{item?.price}</td>
                  <td><button className='btn btn-secondary'><i className="bi bi-trash3"></i></button></td>
                </tr>
              )
            })
            }
            <tr>
              <td colSpan={4}></td>
              <td colSpan={2}>{totalPrice}</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </>
  )
}

export default Cart;