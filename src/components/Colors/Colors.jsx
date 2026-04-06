import React from 'react'

const Colors = () => {
    function log_red_fn(){
        console.log('red');
        
    }
  return (
    <div>
      <button onClick={log_red_fn}>red</button>
      <button onClick={log_red_fn}>yellow</button>
      <button onClick={log_red_fn}>green</button>
    </div>
  )
}

export default Colors
