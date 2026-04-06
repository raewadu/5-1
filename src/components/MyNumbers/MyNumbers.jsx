import React from 'react'

const MyNumbers = () => {
    function log_nums_fn(nums) {
        console.log(nums);
        
    }
  return (
    <div>
      <button onClick={()=>log_nums_fn(1)}>1</button>
      <button onClick={()=>log_nums_fn(2)}>2</button>
      <button onClick={()=>log_nums_fn(3)}>3</button>
      <button onClick={()=>log_nums_fn(4)}>4</button>
      <button onClick={()=>log_nums_fn(5)}>5</button>
      <button onClick={()=>log_nums_fn(6)}>6</button>
      <button onClick={()=>log_nums_fn(7)}>7</button>
      <button onClick={()=>log_nums_fn(8)}>8</button>
      <button onClick={()=>log_nums_fn(9)}>9</button>
      <button onClick={()=>log_nums_fn(10)}>10</button>
    </div>
  )
}

export default MyNumbers
