import React, { useState } from 'react'
import Navbar from './Navbar'

function Cart({ newProd, setNewProd }) {

    
    console.log(newProd)

  return (
    <>
    <Navbar />
    <div>Cart</div>
    </>
  )
}

export default Cart