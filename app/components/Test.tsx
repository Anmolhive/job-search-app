'use client';
import React from 'react'

type Prop = {
    onApply: ()=>void;
}

const Test = ({onApply}: Prop) => {
  return (
    <button onClick={onApply} className='btn mx-auto'>Text</button>
  )
}

export default Test