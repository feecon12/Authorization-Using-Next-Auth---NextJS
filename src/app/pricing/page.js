'use client'
import React, { useState } from 'react'

const Pricing = () => {
  let A = [2, 6, 3, 8, 2, 8, 2, 5, 1, 2, 8, 7];
  const [freq, setFreq] = useState(new Map());

  function printFreq() {
    const map = new Map();

    for (const element of A) {
      if (map.has(element)) {
        map.set(element, map.get(element) + 1);
      } else {
        map.set(element, 1);
      }
    }
    setFreq(map);

  }
  return (
    <div className='flex flex-col mb-4 items-center justify-center min-h-screen'>

      <button onClick={printFreq} className='px-6 bg-light text-dark py-2'>Frequency</button>
      <div className='mt-4'>
        {
          Array.from(freq).map(([element, freq]) => (<p key={element}>Element {element} appears {freq} times!</p>))
        }
      </div>
    </div>
  )
}

export default Pricing