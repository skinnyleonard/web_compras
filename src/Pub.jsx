import React from 'react'
import { createPortal } from 'react-dom'

function Pub() {
  return createPortal (
    <div className='pub'>
        <h1>Bienvenido a: <br /> <big>katalogo.com</big><br /> 
        <h6>El mejor lugar para comprar tecnologia</h6></h1>
        <img src="https://elpapamarket.com.ar/wp-content/uploads/2024/09/Imagen.png"/>
    </div>, document.getElementById("newPub")
  )
}

export default Pub