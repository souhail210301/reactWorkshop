import React, { useState } from 'react';

export default function Counter(props) {
    const [count, setCount] = useState(0);

    return (<>
        <div>
      <h2>Compteur : {count}</h2>
      <button onClick={() => setCount(count + props.step)}>+{props.step}</button>
      <button onClick={() => setCount(count - props.step)}>-{props.step}</button>
    </div></>
)}