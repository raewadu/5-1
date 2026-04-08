import React, { useState } from 'react'
import './Products.css'

const Products = () => {
    const product_list = [
        { id: 1, name: "Sandvich", img: "https://data.vb.kg/image/big/2024-07-18_15-15-09_981027.jpg" },
        { id: 2, name: "Coca-cola", img: "https://data.vb.kg/image/big/2024-07-18_15-15-09_981027.jpg" },
        { id: 3, name: "Chips", img: "https://data.vb.kg/image/big/2024-07-18_15-15-09_981027.jpg" },
        { id: 4, name: "Pasta", img: "https://data.vb.kg/image/big/2024-07-18_15-15-09_981027.jpg" },
        { id: 5, name: "Banana", img: "https://data.vb.kg/image/big/2024-07-18_15-15-09_981027.jpg" },
        { id: 6, name: "Water", img: "https://data.vb.kg/image/big/2024-07-18_15-15-09_981027.jpg" }
];
    const [cart, setCart]=useState([])
    const add_product_fn=((item)=>{
        setCart([...cart, item])
    })
  return (
    <div>
        <h2>Продуткы</h2>
        <div className='items'>{product_list.map((item)=>{
        return (
                <div key={item.id}>
                    <button onClick={() => add_product_fn(item)} >{item.name}</button>
                    <img src={item.img} alt={item.name}/>
                </div>
        );
      })}</div>
      
      <h2>Корзина</h2>
      <div className='cart'>
        {cart.map((item) => (
            <div  key={item.id}>
            <p>{item.name}</p>
            <img src={item.img} alt={item.name} />
        </div>
    ))}</div>
      
    </div>
  )
}

export default Products
