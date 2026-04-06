import React from 'react'

const MyDress = () => {
    const log_size_fn=(size)=>{
        console.log(size);
        
    }
    const list_sizes=["xs","s","m","l","xl"]
  return (
    <div>
      {list_sizes.map((item)=>{
        return (
            <button onClick={()=>log_size_fn(item)} key={item}>{item}</button>
        );
      })}
    </div>
  )
}

export default MyDress
